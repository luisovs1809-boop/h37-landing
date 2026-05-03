"use client";

import { motion } from "framer-motion";

const services = [
  { name: "Corte clásico", duration: "30 min", price: 250, icon: "scissors" },
  { name: "Corte + Barba", duration: "45 min", price: 380, icon: "razor" },
  { name: "Diseño de cejas", duration: "15 min", price: 120, icon: "eye" },
  { name: "Tinte completo", duration: "60 min", price: 550, icon: "palette" },
];

function ServiceIcon({ name }: { name: string }) {
  const stroke = { stroke: "#0071e3", strokeWidth: 2, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, fill: "none" };
  if (name === "scissors")
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" {...stroke}>
        <circle cx="6" cy="6" r="3" />
        <circle cx="6" cy="18" r="3" />
        <line x1="20" y1="4" x2="8.12" y2="15.88" />
        <line x1="14.47" y1="14.48" x2="20" y2="20" />
        <line x1="8.12" y1="8.12" x2="12" y2="12" />
      </svg>
    );
  if (name === "razor")
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" {...stroke}>
        <path d="M5 3h14l-1 7H6L5 3z" />
        <path d="M9 10v8a3 3 0 0 0 6 0v-8" />
      </svg>
    );
  if (name === "eye")
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" {...stroke}>
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    );
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" {...stroke}>
      <circle cx="13.5" cy="6.5" r=".5" fill="#0071e3" />
      <circle cx="17.5" cy="10.5" r=".5" fill="#0071e3" />
      <circle cx="8.5" cy="7.5" r=".5" fill="#0071e3" />
      <circle cx="6.5" cy="12.5" r=".5" fill="#0071e3" />
      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125 0-.926.746-1.688 1.688-1.688H16.5c3.012 0 5.5-2.488 5.5-5.5C22 6.04 17.51 2 12 2z" />
    </svg>
  );
}

export function PhoneMockup({ className = "" }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <div className="relative mx-auto w-[260px] sm:w-[280px]">
        {/* Phone frame */}
        <div className="relative rounded-[2.5rem] bg-ink p-[3px] shadow-card-lg">
          <div className="rounded-[2.3rem] bg-white overflow-hidden">
            {/* Status bar */}
            <div className="flex items-center justify-between px-6 pt-3 pb-1.5 text-[10px] font-semibold text-ink">
              <span>9:41</span>
              <div className="flex items-center gap-1">
                <svg width="12" height="9" viewBox="0 0 16 12" fill="currentColor">
                  <rect x="0" y="8" width="3" height="4" rx="0.5" />
                  <rect x="4" y="6" width="3" height="6" rx="0.5" />
                  <rect x="8" y="3" width="3" height="9" rx="0.5" />
                  <rect x="12" y="0" width="3" height="12" rx="0.5" />
                </svg>
                <svg width="14" height="9" viewBox="0 0 18 12" fill="currentColor">
                  <rect x="0" y="2" width="16" height="8" rx="2" stroke="currentColor" strokeWidth="0.8" fill="none" />
                  <rect x="2" y="4" width="11" height="4" rx="0.5" />
                  <rect x="16.5" y="4.5" width="1" height="3" rx="0.4" />
                </svg>
              </div>
            </div>

            {/* Notch area */}
            <div className="relative h-5 flex items-center justify-center">
              <div className="h-4 w-20 rounded-full bg-ink" />
            </div>

            {/* Header */}
            <div className="px-5 pt-3 pb-3 border-b border-line-soft">
              <div className="flex items-center gap-2.5">
                <div className="h-8 w-8 rounded-xl bg-blue text-white text-[11px] font-bold flex items-center justify-center">
                  37
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-[12px] font-semibold text-ink leading-tight truncate">
                    Hangar 37 Barber
                  </div>
                  <div className="flex items-center gap-1 text-[9px] text-muted leading-tight">
                    <svg width="8" height="8" viewBox="0 0 24 24" fill="#ff9500">
                      <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
                    </svg>
                    <span className="font-medium text-ink-soft">4.9</span>
                    <span>· Querétaro</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="px-5 py-4 bg-platinum-2 min-h-[280px]">
              <div className="text-[11px] font-semibold text-muted uppercase tracking-wide mb-3">
                Elige un servicio
              </div>
              <div className="space-y-2">
                {services.map((s, i) => (
                  <motion.div
                    key={s.name}
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.08 }}
                    className={`bg-white rounded-xl p-3 border ${
                      i === 1 ? "border-blue ring-2 ring-blue/20" : "border-line"
                    } shadow-sm flex items-center gap-3`}
                  >
                    <div className={`h-9 w-9 rounded-lg flex items-center justify-center ${i === 1 ? "bg-blue-soft" : "bg-platinum"}`}>
                      <ServiceIcon name={s.icon} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-[12px] font-semibold text-ink leading-tight">
                        {s.name}
                      </div>
                      <div className="text-[10px] text-muted leading-tight mt-0.5">
                        {s.duration}
                      </div>
                    </div>
                    <div className="text-[12px] font-semibold text-ink">
                      ${s.price}
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.button
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.55 }}
                className="mt-4 w-full rounded-full bg-blue text-white text-[12px] font-semibold py-3 shadow-blue"
              >
                Continuar
              </motion.button>
            </div>
          </div>
        </div>

        {/* Floating "reserva confirmada" badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, x: 20 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="absolute -right-6 sm:-right-12 top-20 hidden sm:block"
        >
          <div className="bg-white rounded-2xl shadow-card-lg border border-line/50 p-3 w-44">
            <div className="flex items-center gap-2">
              <div className="h-7 w-7 rounded-full bg-success flex items-center justify-center flex-shrink-0">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-[10px] text-muted font-medium leading-tight">
                  Nueva reserva
                </div>
                <div className="text-[11px] font-semibold text-ink leading-tight truncate">
                  Mañana 10:30 AM
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
