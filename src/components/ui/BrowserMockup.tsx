"use client";

import { motion } from "framer-motion";

const barbers = [
  { name: "Jonathan", color: "#0071e3", initials: "JS" },
  { name: "Aldo", color: "#34c759", initials: "AR" },
  { name: "Carlos", color: "#ff9500", initials: "CM" },
];

type Cita = {
  barber: number;
  start: number;
  duration: number;
  service: string;
  client: string;
};

const citas: Cita[] = [
  { barber: 0, start: 0, duration: 2, service: "Corte + Barba", client: "Luis V." },
  { barber: 1, start: 1, duration: 1, service: "Corte clásico", client: "Mario T." },
  { barber: 2, start: 0, duration: 1, service: "Diseño cejas", client: "Daniel R." },
  { barber: 0, start: 3, duration: 2, service: "Tinte + corte", client: "Pablo G." },
  { barber: 1, start: 3, duration: 1, service: "Corte fade", client: "Iván M." },
  { barber: 2, start: 2, duration: 2, service: "Servicio premium", client: "Roberto S." },
  { barber: 0, start: 6, duration: 1, service: "Corte niño", client: "Andrés L." },
  { barber: 1, start: 5, duration: 2, service: "Barba completa", client: "José F." },
];

const timeSlots = ["10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00"];

export function BrowserMockup({ className = "" }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <div className="rounded-2xl bg-white border border-line shadow-card-lg overflow-hidden">
        {/* Browser top bar */}
        <div className="flex items-center gap-2 px-4 py-3 bg-platinum border-b border-line">
          <div className="flex gap-1.5">
            <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
            <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
            <span className="h-3 w-3 rounded-full bg-[#28c840]" />
          </div>
          <div className="flex-1 mx-4">
            <div className="mx-auto max-w-xs h-6 rounded-md bg-white border border-line flex items-center justify-center gap-1.5 px-3">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#86868b" strokeWidth="2.5" strokeLinecap="round">
                <rect x="3" y="11" width="18" height="11" rx="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
              <span className="text-[11px] font-medium text-muted truncate">
                app.grupoh37.tech/agenda
              </span>
            </div>
          </div>
          <div className="w-12" />
        </div>

        {/* Inner panel */}
        <div className="bg-platinum-2">
          {/* Sub header */}
          <div className="flex items-center justify-between px-5 py-3 bg-white border-b border-line">
            <div className="flex items-center gap-3">
              <h3 className="text-[15px] font-semibold tracking-tight text-ink">
                Agenda · Hoy
              </h3>
              <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-medium text-success bg-success/10 rounded-full px-2 py-0.5">
                <span className="h-1.5 w-1.5 rounded-full bg-success animate-pulse" />
                En vivo
              </span>
            </div>
            <div className="flex items-center gap-1.5">
              <button className="h-7 w-7 rounded-md hover:bg-platinum text-muted">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="mx-auto">
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>
              <span className="text-[12px] font-medium text-ink-soft px-2">
                3 may
              </span>
              <button className="h-7 w-7 rounded-md hover:bg-platinum text-muted">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="mx-auto">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            </div>
          </div>

          {/* Calendar grid */}
          <div className="grid grid-cols-[44px_repeat(3,1fr)] text-[10px] sm:text-[11px]">
            {/* Header row */}
            <div className="bg-platinum-2 border-b border-r border-line h-9" />
            {barbers.map((b) => (
              <div
                key={b.name}
                className="bg-platinum-2 border-b border-r border-line h-9 flex items-center justify-center gap-1.5 px-2"
              >
                <span
                  className="inline-flex h-5 w-5 items-center justify-center rounded-full text-white text-[9px] font-semibold"
                  style={{ backgroundColor: b.color }}
                >
                  {b.initials}
                </span>
                <span className="font-medium text-ink truncate">{b.name}</span>
              </div>
            ))}

            {/* Time slots */}
            {timeSlots.map((time, rowIdx) => (
              <div key={time} className="contents">
                <div className="bg-white border-b border-r border-line-soft h-10 flex items-start justify-end pr-1.5 pt-0.5 text-[9px] text-muted font-medium">
                  {time}
                </div>
                {barbers.map((_, colIdx) => (
                  <div
                    key={colIdx}
                    className="bg-white border-b border-r border-line-soft h-10 relative"
                  >
                    {citas
                      .filter((c) => c.barber === colIdx && c.start === rowIdx)
                      .map((c, i) => (
                        <motion.div
                          key={`${rowIdx}-${colIdx}-${i}`}
                          initial={{ opacity: 0, x: -4 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.1 + rowIdx * 0.05, duration: 0.4 }}
                          className="absolute inset-x-0.5 rounded-md p-1.5 text-left overflow-hidden"
                          style={{
                            top: 2,
                            height: `calc(${c.duration * 40}px - 4px)`,
                            backgroundColor: `${barbers[colIdx].color}18`,
                            borderLeft: `2px solid ${barbers[colIdx].color}`,
                          }}
                        >
                          <div
                            className="font-semibold truncate text-[10px] leading-tight"
                            style={{ color: barbers[colIdx].color }}
                          >
                            {c.service}
                          </div>
                          <div className="text-[9px] text-ink-soft truncate leading-tight">
                            {c.client}
                          </div>
                        </motion.div>
                      ))}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating stat card */}
      <motion.div
        initial={{ opacity: 0, y: 12, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="absolute -left-4 sm:-left-8 bottom-8 sm:bottom-16 hidden sm:block"
      >
        <div className="bg-white rounded-2xl shadow-card-lg border border-line/50 p-4 w-52">
          <div className="flex items-center gap-2.5">
            <div className="h-9 w-9 rounded-full bg-success/10 flex items-center justify-center">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#34c759" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-[11px] font-medium text-muted">Hoy</div>
              <div className="text-[15px] font-semibold text-ink leading-tight">
                $4,820 MXN
              </div>
            </div>
          </div>
          <div className="mt-3 flex items-center gap-1 text-[11px] text-success font-medium">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <polyline points="18 15 12 9 6 15" />
            </svg>
            +18% vs ayer
          </div>
        </div>
      </motion.div>
    </div>
  );
}
