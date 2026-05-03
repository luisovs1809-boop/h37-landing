"use client";

import { motion } from "framer-motion";
import {
  CalendarDays,
  Wallet,
  Users,
  BarChart3,
  type LucideIcon,
} from "lucide-react";

type Feature = {
  icon: LucideIcon;
  title: string;
  description: string;
  highlight: string;
  accent: string;
};

const features: Feature[] = [
  {
    icon: CalendarDays,
    title: "Agenda inteligente",
    description:
      "Vista por barbero. Drag & drop. Citas online y manuales en un solo lugar, sin duplicaciones.",
    highlight: "Cero choques de horario",
    accent: "blue",
  },
  {
    icon: Wallet,
    title: "Pagos, propinas y comisiones",
    description:
      "Cobro al final con propinas mexicanas (10/15/20%). Comisiones automáticas por barbero al cierre del día.",
    highlight: "Cierre en 30 segundos",
    accent: "success",
  },
  {
    icon: Users,
    title: "2,000+ clientes en segundos",
    description:
      "Importa tu base de Fresha, Square o Excel. Sin perder historial, cumpleaños ni notas.",
    highlight: "Migración sin dolor",
    accent: "blue",
  },
  {
    icon: BarChart3,
    title: "Reportes para decidir",
    description:
      "Ingresos por barbero, horarios flojos con semáforo, métodos de pago, exportable a PDF.",
    highlight: "Decisiones con datos",
    accent: "success",
  },
];

const accentMap = {
  blue: {
    bg: "bg-blue-soft",
    text: "text-blue",
    chip: "bg-blue/8 text-blue",
    iconBg: "bg-blue text-white",
  },
  success: {
    bg: "bg-success/10",
    text: "text-success",
    chip: "bg-success/10 text-success",
    iconBg: "bg-success text-white",
  },
};

export function Features() {
  return (
    <section id="funciones" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-[13px] font-semibold uppercase tracking-wider text-blue"
          >
            Funciones
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.06 }}
            className="mt-3 text-[34px] md:text-[48px] font-semibold tracking-[-0.022em] leading-[1.05] text-ink"
          >
            Todo lo que necesitas para correr tu negocio.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.12 }}
            className="mt-4 text-[17px] text-ink-soft"
          >
            Sin complicaciones. Sin curva de aprendizaje. Pensado para barberos y dueños de salón, no para programadores.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
          {features.map((f, i) => {
            const a = accentMap[f.accent as keyof typeof accentMap];
            const Icon = f.icon;
            return (
              <motion.article
                key={f.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="group relative bg-white rounded-3xl border border-line p-7 md:p-8 hover:shadow-card-lg hover:border-line transition-all duration-300 overflow-hidden"
              >
                {/* Hover gradient */}
                <div className={`absolute inset-0 ${a.bg} opacity-0 group-hover:opacity-40 transition-opacity duration-500 -z-10`} />

                <div className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl ${a.iconBg} shadow-sm`}>
                  <Icon size={22} strokeWidth={2} />
                </div>

                <h3 className="mt-5 text-[20px] md:text-[22px] font-semibold tracking-tight text-ink leading-tight">
                  {f.title}
                </h3>
                <p className="mt-2 text-[15px] text-ink-soft leading-relaxed">
                  {f.description}
                </p>

                <div className={`mt-5 inline-flex items-center gap-1.5 rounded-full ${a.chip} px-2.5 py-1 text-[12px] font-semibold`}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  {f.highlight}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
