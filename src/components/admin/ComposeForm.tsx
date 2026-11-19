"use client";

import { useMemo, useRef, useState } from "react";
import { Paperclip, Send, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { mailSenders } from "@/config/mail-senders";
import { renderCorporateEmail } from "@/lib/corporate-email";
import {
  ALLOWED_ATTACHMENT_EXTENSIONS,
  hasAllowedExtension,
  MAX_ATTACHMENTS,
  MAX_ATTACHMENTS_BYTES,
} from "@/lib/admin-mail";

interface ComposeFormProps {
  initialTo: string;
  initialSubject: string;
  initialBody: string;
}

type Status = { type: "success" | "error"; message: string } | null;

function formatSize(bytes: number): string {
  return bytes < 1024 * 1024 ? `${Math.ceil(bytes / 1024)} KB` : `${(bytes / 1024 / 1024).toFixed(1)} MB`;
}

export function ComposeForm({ initialTo, initialSubject, initialBody }: ComposeFormProps) {
  const [senderId, setSenderId] = useState(mailSenders[0]?.id ?? "");
  const [to, setTo] = useState(initialTo);
  const [subject, setSubject] = useState(initialSubject);
  const [body, setBody] = useState(initialBody);
  const [sendCopy, setSendCopy] = useState(true);
  const [files, setFiles] = useState<File[]>([]);
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState<Status>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const sender = mailSenders.find((item) => item.id === senderId) ?? mailSenders[0];
  const totalBytes = files.reduce((sum, file) => sum + file.size, 0);

  // Vista previa con la misma plantilla que usa el servidor. El logo se pide con ruta relativa:
  // el iframe con srcDoc la resuelve contra esta web, así se ve también en desarrollo.
  const previewHtml = useMemo(
    () =>
      sender
        ? renderCorporateEmail({ sender, subject: subject || "(sin asunto)", body, logoUrl: "/logo-email.png" }).html
        : "",
    [sender, subject, body]
  );

  function addFiles(list: FileList | null) {
    if (!list) return;
    const selected = Array.from(list);
    const invalid = selected.find((file) => !hasAllowedExtension(file.name));
    if (invalid) {
      setStatus({ type: "error", message: `Tipo de archivo no permitido: ${invalid.name}` });
      return;
    }
    const next = [...files, ...selected];
    if (next.length > MAX_ATTACHMENTS) {
      setStatus({ type: "error", message: `Máximo ${MAX_ATTACHMENTS} adjuntos` });
      return;
    }
    if (next.reduce((sum, file) => sum + file.size, 0) > MAX_ATTACHMENTS_BYTES) {
      setStatus({ type: "error", message: "Los adjuntos no pueden superar los 4 MB en total" });
      return;
    }
    setStatus(null);
    setFiles(next);
  }

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    if (!sender) return;
    if (!window.confirm(`¿Enviar el correo a ${to} desde ${sender.address}?`)) return;

    setSending(true);
    setStatus(null);

    const formData = new FormData();
    formData.append("senderId", senderId);
    formData.append("to", to);
    formData.append("subject", subject);
    formData.append("body", body);
    formData.append("sendCopy", String(sendCopy));
    files.forEach((file) => formData.append("attachments", file));

    try {
      const response = await fetch("/api/admin/send", { method: "POST", body: formData });
      const data = await response.json().catch(() => ({}));

      if (response.status === 401) {
        setStatus({ type: "error", message: "La sesión ha caducado. Vuelve a entrar (copia antes el texto)." });
        return;
      }
      if (!response.ok) {
        setStatus({ type: "error", message: data.error ?? "No se ha podido enviar el correo" });
        return;
      }

      setStatus({
        type: "success",
        message: `Correo aceptado por Resend para ${to}. Id: ${data.id ?? "desconocido"} (búscalo en resend.com → Emails para ver si se ha entregado).`,
      });
      setTo("");
      setSubject("");
      setBody("");
      setFiles([]);
    } catch {
      setStatus({ type: "error", message: "Error de conexión. El correo no se ha enviado." });
    } finally {
      setSending(false);
    }
  }

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <form onSubmit={handleSubmit} className="space-y-4 rounded-lg border bg-white p-6 shadow-sm">
        <div className="space-y-2">
          <Label htmlFor="sender">Desde</Label>
          <select
            id="sender"
            value={senderId}
            onChange={(event) => setSenderId(event.target.value)}
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            {mailSenders.map((item) => (
              <option key={item.id} value={item.id}>
                {item.displayName} &lt;{item.address}&gt;
              </option>
            ))}
          </select>
          {sender && <p className="text-xs text-muted-foreground">Las respuestas llegarán a {sender.replyTo}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="to">Para</Label>
          <Input
            id="to"
            type="text"
            inputMode="email"
            placeholder="cliente@ejemplo.com (varios separados por comas)"
            required
            value={to}
            onChange={(event) => setTo(event.target.value)}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="subject">Asunto</Label>
          <Input id="subject" required maxLength={200} value={subject} onChange={(event) => setSubject(event.target.value)} />
        </div>

        <div className="space-y-2">
          <Label htmlFor="body">Mensaje</Label>
          <Textarea
            id="body"
            required
            rows={14}
            value={body}
            onChange={(event) => setBody(event.target.value)}
            className="font-mono text-sm"
          />
          <p className="text-xs text-muted-foreground">
            Deja una línea en blanco entre párrafos. <code>**texto**</code> para negrita, líneas que empiezan por{" "}
            <code>- </code> para listas. Los enlaces se activan solos. La firma y el logo se añaden automáticamente.
          </p>
        </div>

        <div className="space-y-2">
          <input
            ref={fileInputRef}
            type="file"
            multiple
            accept={ALLOWED_ATTACHMENT_EXTENSIONS.map((ext) => `.${ext}`).join(",")}
            className="hidden"
            onChange={(event) => {
              addFiles(event.target.files);
              event.target.value = "";
            }}
          />
          <Button type="button" variant="outline" size="sm" onClick={() => fileInputRef.current?.click()}>
            <Paperclip className="mr-2 h-4 w-4" />
            Adjuntar archivos
          </Button>
          {files.length > 0 && (
            <ul className="space-y-1 text-sm">
              {files.map((file, index) => (
                <li key={`${file.name}-${index}`} className="flex items-center justify-between rounded bg-gray-50 px-2 py-1">
                  <span className="truncate">
                    {file.name} <span className="text-muted-foreground">({formatSize(file.size)})</span>
                  </span>
                  <button
                    type="button"
                    aria-label={`Quitar ${file.name}`}
                    onClick={() => setFiles(files.filter((_, i) => i !== index))}
                    className="ml-2 text-muted-foreground hover:text-red-600"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </li>
              ))}
              <li className="text-xs text-muted-foreground">Total: {formatSize(totalBytes)} de 4 MB</li>
            </ul>
          )}
        </div>

        <label className="flex items-center gap-2 text-sm">
          <input type="checkbox" checked={sendCopy} onChange={(event) => setSendCopy(event.target.checked)} />
          Enviarme una copia oculta a {sender?.replyTo}
        </label>

        {status && (
          <p
            role="status"
            className={`rounded-md px-3 py-2 text-sm ${
              status.type === "success" ? "bg-green-50 text-green-800" : "bg-red-50 text-red-700"
            }`}
          >
            {status.message}
          </p>
        )}

        <Button type="submit" disabled={sending} className="w-full">
          <Send className="mr-2 h-4 w-4" />
          {sending ? "Enviando…" : "Enviar correo"}
        </Button>
      </form>

      <section className="rounded-lg border bg-white p-4 shadow-sm">
        <h2 className="mb-3 text-sm font-semibold text-secondary">Vista previa</h2>
        {/* sandbox vacío: el HTML de la vista previa no puede ejecutar nada */}
        <iframe title="Vista previa del correo" sandbox="" srcDoc={previewHtml} className="h-[720px] w-full rounded border" />
      </section>
    </div>
  );
}
