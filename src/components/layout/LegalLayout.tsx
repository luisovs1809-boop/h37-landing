import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export function LegalLayout({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main className="flex-1 pt-28 md:pt-36 pb-20">
        <div className="mx-auto max-w-3xl px-5 md:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-[14px] text-blue font-medium hover:underline"
          >
            <ArrowLeft size={14} />
            Volver al inicio
          </Link>

          <h1 className="mt-6 text-[40px] md:text-[56px] font-semibold tracking-[-0.022em] leading-[1.05] text-ink">
            {title}
          </h1>
          <p className="mt-3 text-[14px] text-muted">Última actualización: {updated}</p>

          <div className="mt-10 prose prose-zinc max-w-none text-ink-soft text-[16px] leading-relaxed [&_h2]:text-ink [&_h2]:text-[24px] [&_h2]:font-semibold [&_h2]:tracking-tight [&_h2]:mt-10 [&_h2]:mb-3 [&_h3]:text-ink [&_h3]:text-[18px] [&_h3]:font-semibold [&_h3]:mt-8 [&_h3]:mb-2 [&_p]:mb-4 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:my-4 [&_ul]:space-y-2 [&_li]:leading-relaxed [&_strong]:text-ink [&_strong]:font-semibold [&_a]:text-blue [&_a]:underline">
            {children}
          </div>

          <div className="mt-16 p-6 rounded-2xl bg-platinum-2 border border-line text-[13px] text-muted">
            <strong className="text-ink-soft">Aviso:</strong> este documento es una versión preliminar para la fase de lanzamiento del producto. Está pendiente revisión por asesoría legal especializada en LFPDPPP (México). Los términos definitivos serán publicados antes de la apertura comercial general.
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
