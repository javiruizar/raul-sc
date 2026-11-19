import Image from "next/image";
import { LoginForm } from "@/components/admin/LoginForm";

export default function AdminLoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="w-full max-w-sm rounded-lg border bg-white p-8 shadow-sm">
        <Image src="/logo.webp" alt="Raúl Sánchez" width={200} height={78} className="mx-auto mb-6 h-auto w-40" />
        <h1 className="mb-6 text-center font-heading text-xl font-semibold text-secondary">Panel de administración</h1>
        <LoginForm />
      </div>
    </div>
  );
}
