"use client";

import { motion } from "framer-motion";
import { ArrowRight, FileSpreadsheet, Upload, Database, ShieldCheck, Clock } from "lucide-react";

const sources = [
  { name: "Fresha", letters: "Fr", color: "#7c3aed" },
  { name: "Square", letters: "Sq", color: "#3b82f6" },
  { name: "Booksy", letters: "Bk", color: "#ec4899" },
  { name: "Excel / CSV", letters: "XL", color: "#16a34a", icon: "spreadsheet" as const },
  { name: "Google Sheets", letters: "GS", color: "#f59e0b", icon: "spreadsheet" as const },
  { name: "Otra app", letters: "?", color: "#86868b" },
];

const steps = [
  {
    icon: Upload,
    title: "Sube tu archivo",
    description: "Exporta tus clientes en CSV desde donde estés ahora y arrástralo al panel.",
  },
  {
    icon: ShieldCheck,
    title: "Validamos los datos",
    description: "Detectamos duplicados, formatos raros y celulares mal capturados antes de importar.",
  },
  {
    icon: Database,
    title: "Quedan en tu sistema",
    description: "Nombre, celular, correo, cumpleaños, historial y notas. Listos para reservar.",
  },
];

export function Migration() {
  return (
    <section className="relative py-20 md:py-28 bg-platinum-2/60 border-y border-line-soft overflow-hidden">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-[13px] font-semibold uppercase tracking-wider text-blue"
          >
            Migración sin dolor
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.06 }}
            className="mt-3 text-[34px] md:text-[48px] font-semibold tracking-[-0.022em] leading-[1.05] text-ink"
          >
            Trae tus clientes de donde sea, en <span className="text-blue">5 minutos</span>.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.12 }}
            className="mt-4 text-[17px] text-ink-soft"
          >
            No empieces de cero. Tu base de clientes vale oro y queremos que la traigas tal cual está.
          </motion.p>
        </div>

        {/* Visual flow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.18 }}
          className="mt-14 max-w-4xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-6 md:gap-8 items-center">
            {/* Origen */}
            <div className="bg-white rounded-3xl border border-line p-6">
              <div className="text-[11px] font-semibold uppercase tracking-wider text-muted mb-4">
                Vienes de
              </div>
              <div className="grid grid-cols-3 gap-2">
                {sources.map((src, i) => (
                  <motion.div
                    key={src.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.05 * i, duration: 0.3 }}
                    className="flex flex-col items-center gap-1.5 p-2 rounded-xl hover:bg-platinum-2 transition-colors"
                  >
                    <div
                      className="h-10 w-10 rounded-xl text-white flex items-center justify-center font-bold text-[12px]"
                      style={{ backgroundColor: src.color }}
                    >
                      {src.icon === "spreadsheet" ? (
                        <FileSpreadsheet size={16} />
                      ) : (
                        src.letters
                      )}
                    </div>
                    <span className="text-[10px] font-medium text-ink-soft text-center leading-tight">
                      {src.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Flecha */}
            <div className="flex md:flex-col items-center justify-center">
              <motion.div
                initial={{ opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.4 }}
                className="inline-flex items-center justify-center"
              >
                <span className="hidden md:inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue text-white shadow-blue">
                  <ArrowRight size={20} />
                </span>
                <span className="md:hidden inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue text-white rotate-90 shadow-blue">
                  <ArrowRight size={20} />
                </span>
              </motion.div>
            </div>

            {/* Destino */}
            <div className="bg-white rounded-3xl border-2 border-blue/30 ring-4 ring-blue/5 p-6 relative">
              <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 rounded-full bg-blue text-white text-[10px] font-bold uppercase tracking-wide px-2.5 py-0.5 shadow-blue">
                Tu nuevo sistema
              </div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-10 w-10 rounded-xl bg-blue text-white flex items-center justify-center font-bold text-[12px]">
                  37
                </div>
                <div>
                  <div className="text-[14px] font-bold text-ink leading-tight">Agendas H37</div>
                  <div className="text-[11px] text-muted">Listo en minutos</div>
                </div>
              </div>
              <ul className="space-y-2 text-[13px]">
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-success flex-shrink-0" />
                  <span className="text-ink-soft">Clientes con historial intacto</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-success flex-shrink-0" />
                  <span className="text-ink-soft">Cumpleaños y notas conservadas</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-success flex-shrink-0" />
                  <span className="text-ink-soft">Sin duplicados ni datos rotos</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Steps */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-4">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="bg-white rounded-2xl border border-line p-5 flex items-start gap-4"
              >
                <div className="flex-shrink-0 h-10 w-10 rounded-xl bg-blue-soft text-blue inline-flex items-center justify-center">
                  <Icon size={18} strokeWidth={2} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-[10px] font-semibold uppercase tracking-wider text-muted">
                    Paso {i + 1}
                  </div>
                  <h3 className="mt-0.5 text-[15px] font-semibold text-ink leading-tight">
                    {step.title}
                  </h3>
                  <p className="mt-1.5 text-[13px] text-ink-soft leading-snug">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Trust line */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[13px] text-ink-soft"
        >
          <div className="inline-flex items-center gap-1.5">
            <Clock size={14} className="text-success" />
            <span className="font-medium">Tarda menos que un café</span>
          </div>
          <div className="inline-flex items-center gap-1.5">
            <ShieldCheck size={14} className="text-success" />
            <span className="font-medium">Yo mismo te ayudo si quieres</span>
          </div>
          <div className="inline-flex items-center gap-1.5">
            <Database size={14} className="text-success" />
            <span className="font-medium">Sin perder un solo cliente</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
