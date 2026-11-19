import { NextResponse, type NextRequest } from "next/server";
import { ADMIN_COOKIE, verifySessionToken } from "@/lib/admin-auth";

// Protege el panel de administración. Las rutas de la API además comprueban la sesión
// por su cuenta, así que esto es la primera barrera, no la única.
export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // El login tiene que ser accesible sin sesión
  if (pathname === "/admin/login" || pathname === "/api/admin/login") {
    return NextResponse.next();
  }

  const isLoggedIn = await verifySessionToken(request.cookies.get(ADMIN_COOKIE)?.value);
  if (isLoggedIn) {
    return NextResponse.next();
  }

  if (pathname.startsWith("/api/")) {
    return NextResponse.json({ error: "No autorizado" }, { status: 401 });
  }

  // Tras el login se vuelve a la página pedida (con sus parámetros de prellenado)
  const loginUrl = new URL("/admin/login", request.url);
  loginUrl.searchParams.set("next", `${pathname}${request.nextUrl.search}`);
  return NextResponse.redirect(loginUrl);
}

export const config = {
  matcher: ["/admin", "/admin/:path*", "/api/admin/:path*"],
};
