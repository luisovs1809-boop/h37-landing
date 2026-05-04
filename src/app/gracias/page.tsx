import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Check, Clock, Mail, Sparkles } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "¡Gracias! Recibimos tu mensaje",
  description: "Orlando te contactará en menos de 24 horas para arrancar con Agendas H37.",
  robots: { index: false, follow: false },
};

export default function GraciasPage() {
  return (
    <>
      <Header />
      <main className="flex-1 pt-28 md:pt-36 pb-20">
        <div className="mx-auto max-w-2xl px-5 md:px-8 text-center">
          <div className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-success shadow-lg shadow-success/30">
            <Check size={40} strokeWidth={3} className="text-white" />
          </div>

          <h1 className="mt-6 text-[36px] md:text-[48px] font-semibold tracking-[-0.022em] leading-[1.05] text-ink">
            ¡Listo! Te escribimos hoy mismo.
          </h1>
          <p className="mt-4 text-[17px] text-ink-soft">
            Recibimos tu mensaje. Orlando te contactará en menos de 24 horas para coordinar la instalación de Agendas H37.
          </p>

          {/* Steps que vienen */}
          <div className="mt-12 text-left bg-white rounded-3xl border border-line p-6 md:p-8">
            <div className="text-[12px] font-semibold uppercase tracking-wider text-blue mb-4">
              Qué sigue
            </div>
            <ul className="space-y-5">
              <Step
                n="1"
                icon={<Mail size={16} />}
                title="Te contactamos hoy"
                description="Por correo (o WhatsApp si nos lo dejaste) para confirmar tus datos y agendar la instalación."
              />
              <Step
                n="2"
                icon={<Clock size={16} />}
                title="Instalación en 24 horas"
                description="Configuramos tu negocio: logo, horarios, servicios, barberos. Importamos tus clientes si los traes de otro sistema."
              />
              <Step
                n="3"
                icon={<Sparkles size={16} />}
                title="A vender desde el día 1"
                description="Te entregamos tu link público para compartir con tus clientes. Empieza a recibir reservas online el mismo día."
              />
            </ul>
          </div>

          {/* Mientras esperas */}
          <div className="mt-10 rounded-2xl bg-blue-soft border border-blue/15 p-6 text-left">
            <div className="text-[14px] font-semibold text-blue mb-2">
              Mientras esperas:
            </div>
            <p className="text-[14px] text-ink-soft leading-relaxed">
              Si tienes una base de clientes en Fresha, Square, Excel o Google Sheets, ten el archivo CSV listo. Ahorraremos tiempo de configuración cuando hablemos.
            </p>
          </div>

          {/* Email de soporte */}
          <p className="mt-8 text-[13px] text-muted">
            ¿Algo urgente? Escríbenos directo a{" "}
            <a
              href={`mailto:${SITE.email}`}
              className="text-blue font-semibold hover:underline"
            >
              {SITE.email}
            </a>
          </p>

          {/* Volver al inicio */}
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 mt-12 text-[14px] text-blue font-medium hover:underline"
          >
            <ArrowLeft size={14} />
            Volver al inicio
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}

function Step({
  n,
  icon,
  title,
  description,
}: {
  n: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <li className="flex gap-4">
      <div className="flex-shrink-0 relative">
        <div className="h-10 w-10 rounded-full bg-blue text-white flex items-center justify-center font-bold text-[14px]">
          {n}
        </div>
        <div className="absolute -bottom-1 -right-1 h-5 w-5 rounded-full bg-white border-2 border-line text-ink-soft flex items-center justify-center">
          {icon}
        </div>
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="text-[15px] font-semibold text-ink leading-tight">{title}</h3>
        <p className="mt-1 text-[13px] text-ink-soft leading-snug">{description}</p>
      </div>
    </li>
  );
}
