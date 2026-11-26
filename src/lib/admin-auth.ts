// Sesión del panel de administración: cookie firmada con HMAC-SHA256.
// Usa solo Web Crypto para que funcione igual en el middleware (edge) y en las rutas (node).

export const ADMIN_COOKIE = "admin_session";
// Duración de la sesión: 7 días
export const ADMIN_SESSION_SECONDS = 60 * 60 * 24 * 7;
// Longitud mínima de ADMIN_PASSWORD y ADMIN_SESSION_SECRET: con menos, el panel no se activa
const MIN_SECRET_LENGTH = 12;

const encoder = new TextEncoder();

function getSecret(): string | null {
  const secret = process.env.ADMIN_SESSION_SECRET;
  return secret && secret.length >= MIN_SECRET_LENGTH ? secret : null;
}

function getPassword(): string | null {
  const password = process.env.ADMIN_PASSWORD;
  return password && password.length >= MIN_SECRET_LENGTH ? password : null;
}

// El panel solo funciona si las dos variables están definidas y son largas
export function isAdminConfigured(): boolean {
  return Boolean(getSecret() && getPassword());
}

// Explica qué variable falla (sin mostrar su valor), para el log del servidor
export function describeAdminConfigProblems(): string[] {
  const problems: string[] = [];
  for (const name of ["ADMIN_PASSWORD", "ADMIN_SESSION_SECRET"]) {
    const value = process.env[name];
    if (!value) problems.push(`${name} no está definida`);
    else if (value.length < MIN_SECRET_LENGTH) problems.push(`${name} tiene ${value.length} caracteres (mínimo ${MIN_SECRET_LENGTH})`);
  }
  return problems;
}

function toHex(buffer: ArrayBuffer): string {
  return Array.from(new Uint8Array(buffer), (byte) => byte.toString(16).padStart(2, "0")).join("");
}

// Comparación en tiempo constante (para cadenas de la misma longitud)
function safeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) {
    diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  }
  return diff === 0;
}

async function hmac(secret: string, value: string): Promise<string> {
  const key = await crypto.subtle.importKey(
    "raw",
    encoder.encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  );
  return toHex(await crypto.subtle.sign("HMAC", key, encoder.encode(value)));
}

async function sha256(value: string): Promise<string> {
  return toHex(await crypto.subtle.digest("SHA-256", encoder.encode(value)));
}

// Comprueba la contraseña del login. Se comparan los hashes para no filtrar la longitud.
export async function checkAdminPassword(candidate: string): Promise<boolean> {
  const password = getPassword();
  if (!password) return false;
  return safeEqual(await sha256(candidate), await sha256(password));
}

// Crea el valor de la cookie: "<caducidad>.<firma>"
export async function createSessionToken(): Promise<string> {
  const secret = getSecret();
  if (!secret) throw new Error("ADMIN_SESSION_SECRET no configurado");
  const expires = Math.floor(Date.now() / 1000) + ADMIN_SESSION_SECONDS;
  return `${expires}.${await hmac(secret, `admin:${expires}`)}`;
}

export async function verifySessionToken(token: string | undefined): Promise<boolean> {
  const secret = getSecret();
  if (!secret || !token) return false;

  const [expires, signature] = token.split(".");
  if (!expires || !signature || !/^\d+$/.test(expires)) return false;
  if (Number(expires) < Math.floor(Date.now() / 1000)) return false;

  return safeEqual(signature, await hmac(secret, `admin:${expires}`));
}

// Protección CSRF de las peticiones POST: deben venir de esta misma web.
// (La cookie ya es SameSite=Strict; esto es una segunda barrera.)
export function isSameOrigin(request: Request): boolean {
  const origin = request.headers.get("origin");
  const host = request.headers.get("x-forwarded-host") ?? request.headers.get("host");
  if (!origin || !host) return false;
  try {
    return new URL(origin).host === host;
  } catch {
    return false;
  }
}
