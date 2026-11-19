import Image from "next/image";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { ADMIN_COOKIE, verifySessionToken } from "@/lib/admin-auth";
import { ComposeForm } from "@/components/admin/ComposeForm";
import { LogoutButton } from "@/components/admin/LogoutButton";

// Siempre dinámica: depende de la cookie de sesión y de los parámetros de la URL
export const dynamic = "force-dynamic";

interface AdminPageProps {
  // Prellenado desde el email de aviso de un presupuesto: /admin?to=...&name=...&ref=...
  searchParams: Promise<{ to?: string; name?: string; ref?: string }>;
}

export default async function AdminPage({ searchParams }: AdminPageProps) {
  const cookieStore = await cookies();
  if (!(await verifySessionToken(cookieStore.get(ADMIN_COOKIE)?.value))) {
    redirect("/admin/login");
  }

  const { to = "", name = "", ref = "" } = await searchParams;
  const firstName = name.trim().split(/\s+/)[0]?.slice(0, 40) ?? "";

  return (
    <div className="mx-auto max-w-6xl px-4 py-6">
      <header className="mb-6 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Image src="/logo.webp" alt="Raúl Sánchez" width={120} height={47} className="h-auto w-24" />
          <h1 className="font-heading text-lg font-semibold text-secondary">Nuevo correo</h1>
        </div>
        <LogoutButton />
      </header>
      <ComposeForm
        initialTo={to.slice(0, 200)}
        initialSubject={ref ? "Tu solicitud de presupuesto" : ""}
        initialBody={firstName ? `Hola ${firstName}:\n\n` : ""}
      />
    </div>
  );
}
