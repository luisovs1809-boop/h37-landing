"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Calendar, ChevronLeft, ChevronRight, Plus, X, Clock, User, Wallet } from "lucide-react";
import {
  DEMO_BARBERS,
  DEMO_SERVICES,
  DEMO_APPOINTMENTS,
  DEMO_TIME_SLOTS,
  DEMO_BUSINESS,
  type DemoAppointment,
} from "@/lib/demo-data";

const statusConfig = {
  completed: { label: "Cobrada", color: "#34c759", bg: "#34c75918" },
  in_progress: { label: "En curso", color: "#ff9500", bg: "#ff950018" },
  confirmed: { label: "Confirmada", color: "#0071e3", bg: "#0071e318" },
};

export function DemoPanel() {
  const [selectedAppt, setSelectedAppt] = useState<DemoAppointment | null>(null);
  const [newApptSlot, setNewApptSlot] = useState<{ barberId: string; slot: number } | null>(null);
  const [hoveredApptKey, setHoveredApptKey] = useState<string | null>(null);

  const totalCobradoHoy = DEMO_APPOINTMENTS.filter((a) => a.status === "completed").reduce(
    (sum, a) => sum + (DEMO_SERVICES.find((s) => s.id === a.serviceId)?.price ?? 0),
    0,
  );
  const totalCitas = DEMO_APPOINTMENTS.length;

  return (
    <div className="relative">
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
                tunegocio.agendash37.com/agenda
              </span>
            </div>
          </div>
          <span className="text-[10px] font-semibold text-muted">DEMO</span>
        </div>

        {/* Top bar with business identity */}
        <div className="flex items-center justify-between px-5 py-3 bg-white border-b border-line">
          <div className="flex items-center gap-3">
            <div
              className="h-9 w-9 rounded-xl text-white text-[12px] font-bold flex items-center justify-center"
              style={{ backgroundColor: DEMO_BUSINESS.logoColor }}
            >
              {DEMO_BUSINESS.initials}
            </div>
            <div>
              <div className="text-[14px] font-semibold tracking-tight text-ink leading-tight">
                {DEMO_BUSINESS.name}
              </div>
              <div className="text-[11px] text-muted leading-tight">{DEMO_BUSINESS.tagline}</div>
            </div>
          </div>
          <div className="hidden sm:flex items-center gap-4 text-right">
            <div>
              <div className="text-[10px] text-muted uppercase font-semibold tracking-wide">Hoy</div>
              <div className="text-[14px] font-bold text-success leading-tight">
                ${totalCobradoHoy.toLocaleString("es-MX")} MXN
              </div>
            </div>
            <div>
              <div className="text-[10px] text-muted uppercase font-semibold tracking-wide">Citas</div>
              <div className="text-[14px] font-bold text-ink leading-tight">{totalCitas}</div>
            </div>
          </div>
        </div>

        {/* Sub header */}
        <div className="flex items-center justify-between px-5 py-2.5 bg-platinum-2 border-b border-line">
          <div className="flex items-center gap-2">
            <Calendar size={14} className="text-muted" />
            <h3 className="text-[13px] font-semibold tracking-tight text-ink">Agenda · Hoy</h3>
            <span className="hidden sm:inline-flex items-center gap-1 text-[10px] font-medium text-success bg-success/10 rounded-full px-2 py-0.5">
              <span className="h-1.5 w-1.5 rounded-full bg-success animate-pulse" />
              En vivo
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <button className="h-7 w-7 rounded-md hover:bg-platinum text-muted inline-flex items-center justify-center">
              <ChevronLeft size={14} />
            </button>
            <span className="text-[12px] font-medium text-ink-soft px-2">Lun 4 may</span>
            <button className="h-7 w-7 rounded-md hover:bg-platinum text-muted inline-flex items-center justify-center">
              <ChevronRight size={14} />
            </button>
          </div>
        </div>

        {/* Calendar grid */}
        <div className="grid grid-cols-[44px_repeat(3,1fr)] text-[10px] sm:text-[11px] bg-white">
          {/* Header row: barbers */}
          <div className="bg-platinum-2 border-b border-r border-line h-10" />
          {DEMO_BARBERS.map((b) => (
            <div
              key={b.id}
              className="bg-platinum-2 border-b border-r border-line h-10 flex items-center justify-center gap-1.5 px-2"
            >
              <span
                className="inline-flex h-5 w-5 items-center justify-center rounded-full text-white text-[9px] font-semibold"
                style={{ backgroundColor: b.color }}
              >
                {b.initials}
              </span>
              <span className="font-medium text-ink truncate">{b.shortName}</span>
            </div>
          ))}

          {/* Time slot rows */}
          {DEMO_TIME_SLOTS.map((time, rowIdx) => (
            <div key={time} className="contents">
              <div className="bg-white border-b border-r border-line-soft h-10 flex items-start justify-end pr-1.5 pt-0.5 text-[9px] text-muted font-medium">
                {time}
              </div>
              {DEMO_BARBERS.map((barber) => {
                const apptHere = DEMO_APPOINTMENTS.find(
                  (a) => a.barberId === barber.id && a.startSlot === rowIdx,
                );
                const apptCovering = DEMO_APPOINTMENTS.find(
                  (a) =>
                    a.barberId === barber.id &&
                    a.startSlot < rowIdx &&
                    a.startSlot + a.duration > rowIdx,
                );
                const isCovered = !!apptCovering;
                const isClickable = !apptHere && !isCovered;

                return (
                  <div
                    key={`${rowIdx}-${barber.id}`}
                    className="bg-white border-b border-r border-line-soft h-10 relative group"
                  >
                    {isClickable && (
                      <button
                        onClick={() => setNewApptSlot({ barberId: barber.id, slot: rowIdx })}
                        className="absolute inset-0 hover:bg-blue-soft/40 transition-colors flex items-center justify-center opacity-0 hover:opacity-100"
                        aria-label="Crear cita aquí"
                      >
                        <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-blue text-white shadow-blue">
                          <Plus size={12} strokeWidth={3} />
                        </span>
                      </button>
                    )}
                    {apptHere && (
                      <motion.button
                        key={`appt-${rowIdx}-${barber.id}`}
                        initial={{ opacity: 0, x: -4 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.05 + rowIdx * 0.04, duration: 0.3 }}
                        onClick={() => setSelectedAppt(apptHere)}
                        onMouseEnter={() => setHoveredApptKey(`${rowIdx}-${barber.id}`)}
                        onMouseLeave={() => setHoveredApptKey(null)}
                        className="absolute inset-x-0.5 rounded-md p-1.5 text-left overflow-hidden cursor-pointer hover:scale-[1.02] hover:shadow-md transition-all"
                        style={{
                          top: 2,
                          height: `calc(${apptHere.duration * 40}px - 4px)`,
                          backgroundColor: `${barber.color}18`,
                          borderLeft: `2px solid ${barber.color}`,
                        }}
                      >
                        <div className="flex items-start justify-between gap-1">
                          <div
                            className="font-semibold truncate text-[10px] leading-tight flex-1"
                            style={{ color: barber.color }}
                          >
                            {DEMO_SERVICES.find((s) => s.id === apptHere.serviceId)?.name}
                          </div>
                          {apptHere.status && (
                            <span
                              className="inline-block h-1.5 w-1.5 rounded-full flex-shrink-0 mt-0.5"
                              style={{ backgroundColor: statusConfig[apptHere.status].color }}
                            />
                          )}
                        </div>
                        <div className="text-[9px] text-ink-soft truncate leading-tight">
                          {apptHere.clientName}
                        </div>
                      </motion.button>
                    )}
                  </div>
                );
              })}
            </div>
          ))}
        </div>

        {/* Bottom hint */}
        <div className="px-5 py-2.5 bg-platinum-2 border-t border-line text-center">
          <div className="text-[11px] text-muted">
            <span className="hidden sm:inline">💡 </span>
            <span className="font-semibold text-ink-soft">Toca una cita</span> para ver detalles, o
            un <span className="font-semibold text-ink-soft">slot vacío</span> para crear una nueva
          </div>
        </div>
      </div>

      {/* Modal: Detalle de cita */}
      <AnimatePresence>
        {selectedAppt && (
          <DemoModal onClose={() => setSelectedAppt(null)} title="Detalle de cita">
            <ApptDetail appt={selectedAppt} />
          </DemoModal>
        )}
      </AnimatePresence>

      {/* Modal: Nueva cita */}
      <AnimatePresence>
        {newApptSlot && (
          <DemoModal onClose={() => setNewApptSlot(null)} title="Nueva cita">
            <NewApptForm
              barberName={DEMO_BARBERS.find((b) => b.id === newApptSlot.barberId)?.name ?? ""}
              time={DEMO_TIME_SLOTS[newApptSlot.slot]}
              onCancel={() => setNewApptSlot(null)}
            />
          </DemoModal>
        )}
      </AnimatePresence>
    </div>
  );
}

function DemoModal({
  children,
  onClose,
  title,
}: {
  children: React.ReactNode;
  onClose: () => void;
  title: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.15 }}
      className="absolute inset-0 z-10 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-ink/40 backdrop-blur-sm" />
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 8 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 8 }}
        transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-sm bg-white rounded-2xl shadow-card-lg overflow-hidden"
      >
        <div className="flex items-center justify-between px-5 py-3 border-b border-line">
          <h4 className="text-[14px] font-semibold tracking-tight text-ink">{title}</h4>
          <button
            onClick={onClose}
            className="h-7 w-7 inline-flex items-center justify-center rounded-full hover:bg-platinum text-muted"
            aria-label="Cerrar"
          >
            <X size={14} />
          </button>
        </div>
        <div className="px-5 py-4">{children}</div>
      </motion.div>
    </motion.div>
  );
}

function ApptDetail({ appt }: { appt: DemoAppointment }) {
  const barber = DEMO_BARBERS.find((b) => b.id === appt.barberId);
  const service = DEMO_SERVICES.find((s) => s.id === appt.serviceId);
  const status = appt.status ? statusConfig[appt.status] : null;

  return (
    <div className="space-y-4">
      <div>
        <div className="text-[11px] text-muted font-semibold uppercase tracking-wide mb-1">
          Cliente
        </div>
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-full bg-blue-soft text-blue inline-flex items-center justify-center font-semibold text-[13px]">
            {appt.clientName.split(" ").map((p) => p[0]).join("").slice(0, 2)}
          </div>
          <div>
            <div className="text-[14px] font-semibold text-ink leading-tight">
              {appt.clientName}
            </div>
            <div className="text-[11px] text-muted">Cliente recurrente</div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 pt-3 border-t border-line-soft">
        <div>
          <div className="text-[10px] text-muted font-semibold uppercase tracking-wide mb-1">
            Servicio
          </div>
          <div className="text-[13px] font-semibold text-ink">{service?.name}</div>
        </div>
        <div>
          <div className="text-[10px] text-muted font-semibold uppercase tracking-wide mb-1">
            Total
          </div>
          <div className="text-[13px] font-semibold text-ink">${service?.price} MXN</div>
        </div>
        <div>
          <div className="text-[10px] text-muted font-semibold uppercase tracking-wide mb-1">
            Barbero
          </div>
          <div className="flex items-center gap-1.5 text-[13px] font-semibold text-ink">
            <span
              className="inline-block h-2.5 w-2.5 rounded-full"
              style={{ backgroundColor: barber?.color }}
            />
            {barber?.shortName}
          </div>
        </div>
        <div>
          <div className="text-[10px] text-muted font-semibold uppercase tracking-wide mb-1">
            Duración
          </div>
          <div className="text-[13px] font-semibold text-ink">{service?.duration} min</div>
        </div>
      </div>

      {status && (
        <div
          className="rounded-lg px-3 py-2 flex items-center gap-2 text-[12px] font-semibold"
          style={{ backgroundColor: status.bg, color: status.color }}
        >
          <span className="h-2 w-2 rounded-full" style={{ backgroundColor: status.color }} />
          {status.label}
        </div>
      )}

      <div className="flex gap-2 pt-2">
        <button className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-full bg-blue text-white text-[12px] font-semibold py-2.5 shadow-blue">
          <Wallet size={13} />
          Cobrar
        </button>
        <button className="px-4 inline-flex items-center justify-center rounded-full bg-platinum text-ink-soft text-[12px] font-semibold py-2.5">
          Editar
        </button>
      </div>

      <div className="text-center pt-2 text-[10px] text-muted italic">
        Esto es un demo · ningún dato se guarda
      </div>
    </div>
  );
}

function NewApptForm({
  barberName,
  time,
  onCancel,
}: {
  barberName: string;
  time: string;
  onCancel: () => void;
}) {
  return (
    <div className="space-y-3">
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="text-[10px] text-muted font-semibold uppercase tracking-wide block mb-1">
            Barbero
          </label>
          <div className="rounded-lg bg-platinum-2 border border-line px-3 py-2 text-[13px] font-semibold text-ink flex items-center gap-1.5">
            <User size={12} className="text-muted" />
            {barberName}
          </div>
        </div>
        <div>
          <label className="text-[10px] text-muted font-semibold uppercase tracking-wide block mb-1">
            Hora
          </label>
          <div className="rounded-lg bg-platinum-2 border border-line px-3 py-2 text-[13px] font-semibold text-ink flex items-center gap-1.5">
            <Clock size={12} className="text-muted" />
            {time}
          </div>
        </div>
      </div>

      <div>
        <label className="text-[10px] text-muted font-semibold uppercase tracking-wide block mb-1">
          Cliente
        </label>
        <input
          type="text"
          placeholder="Buscar o crear nuevo..."
          disabled
          className="w-full rounded-lg bg-white border border-line px-3 py-2 text-[13px] text-ink placeholder:text-muted focus:outline-none focus:border-blue/40 cursor-not-allowed"
        />
      </div>

      <div>
        <label className="text-[10px] text-muted font-semibold uppercase tracking-wide block mb-1">
          Servicio
        </label>
        <div className="space-y-1.5">
          {DEMO_SERVICES.slice(0, 3).map((s, i) => (
            <button
              key={s.id}
              className={`w-full text-left rounded-lg border px-3 py-2 text-[12px] flex items-center justify-between ${
                i === 0 ? "border-blue bg-blue-soft" : "border-line bg-white hover:bg-platinum-2"
              }`}
            >
              <span className="font-semibold text-ink">{s.name}</span>
              <span className="text-muted">
                {s.duration}min · ${s.price}
              </span>
            </button>
          ))}
        </div>
      </div>

      <div className="flex gap-2 pt-2">
        <button
          onClick={onCancel}
          className="flex-1 rounded-full bg-platinum text-ink-soft text-[12px] font-semibold py-2.5"
        >
          Cancelar
        </button>
        <button className="flex-1 rounded-full bg-blue text-white text-[12px] font-semibold py-2.5 shadow-blue">
          Crear cita
        </button>
      </div>

      <div className="text-center pt-1 text-[10px] text-muted italic">
        Esto es un demo · ningún dato se guarda
      </div>
    </div>
  );
}
