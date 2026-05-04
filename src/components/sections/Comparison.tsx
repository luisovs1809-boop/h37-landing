"use client";

import { motion } from "framer-motion";
import { Check, X, Minus } from "lucide-react";

type Cell =
  | { type: "yes"; text?: string }
  | { type: "no"; text?: string }
  | { type: "partial"; text: string }
  | { type: "text"; text: string };

const competitors = [
  { name: "Agendas H37", short: "Agendas H37", us: true, color: "#0071e3" },
  { name: "Fresha", short: "Fresha", us: false, color: "#86868b" },
  { name: "Square Appointments", short: "Square", us: false, color: "#86868b" },
  { name: "Booksy", short: "Booksy", us: false, color: "#86868b" },
];

const rows: Array<{ label: string; cells: Cell[] }> = [
  {
    label: "Modelo de cobro",
    cells: [
      { type: "text", text: "Pago único" },
      { type: "text", text: "Mensual + comisión" },
      { type: "text", text: "Mensual" },
      { type: "text", text: "Mensual" },
    ],
  },
  {
    label: "Costo en 5 años",
    cells: [
      { type: "text", text: "$5,999 MXN" },
      { type: "text", text: "+$30,000 MXN" },
      { type: "text", text: "+$36,000 MXN" },
      { type: "text", text: "+$45,000 MXN" },
    ],
  },
  {
    label: "Comisión por reserva online",
    cells: [
      { type: "yes", text: "0%" },
      { type: "no", text: "2.19% +" },
      { type: "no", text: "2.6% + $10" },
      { type: "partial", text: "Plan Pro" },
    ],
  },
  {
    label: "Hecho para México",
    cells: [{ type: "yes" }, { type: "no" }, { type: "no" }, { type: "no" }],
  },
  {
    label: "Soporte en español mexicano",
    cells: [{ type: "yes" }, { type: "partial", text: "Inglés" }, { type: "partial", text: "Inglés" }, { type: "partial", text: "Inglés" }],
  },
  {
    label: "Tu marca, no la del proveedor",
    cells: [{ type: "yes" }, { type: "no" }, { type: "no" }, { type: "no" }],
  },
  {
    label: "Propinas mexicanas (10/15/20%)",
    cells: [{ type: "yes" }, { type: "partial", text: "Genérico" }, { type: "partial", text: "Genérico" }, { type: "partial", text: "Genérico" }],
  },
  {
    label: "Comisiones automáticas a barberos",
    cells: [{ type: "yes" }, { type: "yes" }, { type: "no" }, { type: "yes" }],
  },
  {
    label: "Exportar tus datos cuando quieras",
    cells: [{ type: "yes" }, { type: "no" }, { type: "partial", text: "Limitado" }, { type: "no" }],
  },
  {
    label: "Sin actualizaciones de pago extra",
    cells: [{ type: "yes" }, { type: "no" }, { type: "no" }, { type: "no" }],
  },
];

function CellRender({ cell, highlighted }: { cell: Cell; highlighted: boolean }) {
  if (cell.type === "yes") {
    return (
      <div className="flex items-center justify-center gap-1.5">
        <span
          className={`inline-flex items-center justify-center h-6 w-6 rounded-full ${highlighted ? "bg-success" : "bg-success/15"}`}
        >
          <Check size={13} strokeWidth={3} className={highlighted ? "text-white" : "text-success"} />
        </span>
        {cell.text && (
          <span className={`text-[12px] font-semibold ${highlighted ? "text-success" : "text-success"}`}>
            {cell.text}
          </span>
        )}
      </div>
    );
  }
  if (cell.type === "no") {
    return (
      <div className="flex items-center justify-center gap-1.5">
        <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-platinum">
          <X size={12} strokeWidth={2.5} className="text-muted" />
        </span>
        {cell.text && <span className="text-[12px] text-muted font-medium">{cell.text}</span>}
      </div>
    );
  }
  if (cell.type === "partial") {
    return (
      <div className="flex items-center justify-center gap-1.5">
        <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-platinum">
          <Minus size={12} strokeWidth={2.5} className="text-muted" />
        </span>
        <span className="text-[12px] text-muted font-medium">{cell.text}</span>
      </div>
    );
  }
  return (
    <span
      className={`text-[13px] font-semibold ${highlighted ? "text-ink" : "text-ink-soft"}`}
    >
      {cell.text}
    </span>
  );
}

export function Comparison() {
  return (
    <section id="comparar" className="relative py-20 md:py-28">
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
            Comparación
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.06 }}
            className="mt-3 text-[34px] md:text-[48px] font-semibold tracking-[-0.022em] leading-[1.05] text-ink"
          >
            ¿Por qué no Fresha, Square o Booksy?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.12 }}
            className="mt-4 text-[17px] text-ink-soft"
          >
            Son buenas opciones, pero diseñadas para gringos y europeos. Tú vives en México y mereces algo hecho para ti.
          </motion.p>
        </div>

        {/* Tabla */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 overflow-x-auto"
        >
          <div className="min-w-[680px]">
            <div className="rounded-3xl border border-line bg-white shadow-card overflow-hidden">
              {/* Header de columnas */}
              <div className="grid grid-cols-[1.6fr_1.3fr_1fr_1fr_1fr] border-b border-line">
                <div className="bg-platinum-2 p-4" />
                {competitors.map((c) => (
                  <div
                    key={c.name}
                    className={`p-4 text-center ${
                      c.us
                        ? "bg-blue/5 border-x-2 border-blue/30"
                        : "bg-platinum-2"
                    }`}
                  >
                    <div
                      className={`text-[13px] md:text-[14px] font-bold tracking-tight ${c.us ? "text-blue" : "text-ink-soft"}`}
                    >
                      {c.short}
                    </div>
                    {c.us && (
                      <div className="mt-1 text-[10px] font-semibold text-blue uppercase tracking-wide">
                        Tú aquí
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Filas de comparación */}
              {rows.map((row, i) => (
                <div
                  key={row.label}
                  className={`grid grid-cols-[1.6fr_1.3fr_1fr_1fr_1fr] ${
                    i % 2 === 0 ? "bg-white" : "bg-platinum-2/40"
                  } border-b border-line-soft last:border-b-0`}
                >
                  <div className="p-4 text-[13px] md:text-[14px] font-semibold text-ink flex items-center">
                    {row.label}
                  </div>
                  {row.cells.map((cell, idx) => (
                    <div
                      key={idx}
                      className={`p-4 text-center flex items-center justify-center ${
                        idx === 0 ? "bg-blue/5 border-x-2 border-blue/30" : ""
                      }`}
                    >
                      <CellRender cell={cell} highlighted={idx === 0} />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 text-center max-w-2xl mx-auto"
        >
          <p className="text-[13px] text-muted">
            Cifras estimadas con base en planes públicos de cada competidor al 2026 (mensualidad mínima viable + comisión promedio por reserva). Los costos varían según uso y plan elegido.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
