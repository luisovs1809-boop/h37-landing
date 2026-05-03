"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Calendar, Check, Clock, Star } from "lucide-react";
import {
  DEMO_BARBERS,
  DEMO_SERVICES,
  DEMO_BUSINESS,
  DEMO_AVAILABLE_DAYS,
  DEMO_AVAILABLE_HOURS,
  DEMO_BUSY_HOURS,
} from "@/lib/demo-data";

type Step = "service" | "barber" | "datetime" | "confirm" | "done";

function ServiceIcon({ icon }: { icon: string }) {
  const stroke = {
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    fill: "none",
  };
  if (icon === "scissors")
    return (
      <svg width="20" height="20" viewBox="0 0 24 24" {...stroke}>
        <circle cx="6" cy="6" r="3" />
        <circle cx="6" cy="18" r="3" />
        <line x1="20" y1="4" x2="8.12" y2="15.88" />
        <line x1="14.47" y1="14.48" x2="20" y2="20" />
        <line x1="8.12" y1="8.12" x2="12" y2="12" />
      </svg>
    );
  if (icon === "razor")
    return (
      <svg width="20" height="20" viewBox="0 0 24 24" {...stroke}>
        <path d="M5 3h14l-1 7H6L5 3z" />
        <path d="M9 10v8a3 3 0 0 0 6 0v-8" />
      </svg>
    );
  if (icon === "combo")
    return (
      <svg width="20" height="20" viewBox="0 0 24 24" {...stroke}>
        <circle cx="6" cy="6" r="3" />
        <line x1="20" y1="4" x2="8.12" y2="15.88" />
        <path d="M14 14l4 4M11 11l3 3" />
      </svg>
    );
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" {...stroke}>
      <circle cx="13.5" cy="6.5" r="1.5" fill="currentColor" />
      <circle cx="17.5" cy="10.5" r="1.5" fill="currentColor" />
      <circle cx="8.5" cy="7.5" r="1.5" fill="currentColor" />
      <circle cx="6.5" cy="12.5" r="1.5" fill="currentColor" />
      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125 0-.926.746-1.688 1.688-1.688H16.5c3.012 0 5.5-2.488 5.5-5.5C22 6.04 17.51 2 12 2z" />
    </svg>
  );
}

export function DemoBooking() {
  const [step, setStep] = useState<Step>("service");
  const [serviceId, setServiceId] = useState<string | null>(null);
  const [barberId, setBarberId] = useState<string | null>(null);
  const [day, setDay] = useState<string | null>(null);
  const [hour, setHour] = useState<string | null>(null);

  const service = DEMO_SERVICES.find((s) => s.id === serviceId);
  const barber = DEMO_BARBERS.find((b) => b.id === barberId);
  const dayObj = DEMO_AVAILABLE_DAYS.find((d) => d.date === day);

  const reset = () => {
    setStep("service");
    setServiceId(null);
    setBarberId(null);
    setDay(null);
    setHour(null);
  };

  return (
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
              tunegocio.agendash37.com/reserva
            </span>
          </div>
        </div>
        <span className="text-[10px] font-semibold text-muted">DEMO</span>
      </div>

      {/* Business header */}
      <div className="px-5 py-4 border-b border-line bg-white flex items-center gap-3">
        <div
          className="h-12 w-12 rounded-2xl text-white text-[14px] font-bold flex items-center justify-center"
          style={{ backgroundColor: DEMO_BUSINESS.logoColor }}
        >
          {DEMO_BUSINESS.initials}
        </div>
        <div className="flex-1 min-w-0">
          <div className="text-[16px] font-semibold tracking-tight text-ink leading-tight">
            {DEMO_BUSINESS.name}
          </div>
          <div className="flex items-center gap-1.5 text-[11px] text-muted leading-tight mt-0.5">
            <Star size={10} fill="#ff9500" stroke="#ff9500" />
            <span className="font-semibold text-ink-soft">{DEMO_BUSINESS.rating}</span>
            <span>({DEMO_BUSINESS.reviewCount})</span>
            <span>·</span>
            <span>{DEMO_BUSINESS.tagline}</span>
          </div>
        </div>
      </div>

      {/* Stepper */}
      <div className="px-5 py-3 border-b border-line-soft bg-platinum-2">
        <div className="flex items-center gap-2">
          {(["service", "barber", "datetime", "confirm"] as Step[]).map((s, i) => {
            const stepIndex = ["service", "barber", "datetime", "confirm"].indexOf(step);
            const isActive = i === stepIndex;
            const isDone = i < stepIndex || step === "done";
            return (
              <div key={s} className="flex items-center gap-2 flex-1">
                <div
                  className={`h-1.5 flex-1 rounded-full transition-colors ${
                    isDone ? "bg-success" : isActive ? "bg-blue" : "bg-line"
                  }`}
                />
              </div>
            );
          })}
        </div>
        <div className="mt-2 text-[11px] text-muted font-medium">
          {step === "service" && "Paso 1 de 4 · Elige un servicio"}
          {step === "barber" && "Paso 2 de 4 · Elige tu barbero"}
          {step === "datetime" && "Paso 3 de 4 · Día y hora"}
          {step === "confirm" && "Paso 4 de 4 · Confirma"}
          {step === "done" && "✓ Reserva enviada"}
        </div>
      </div>

      {/* Content */}
      <div className="bg-platinum-2 min-h-[360px] p-5">
        <AnimatePresence mode="wait">
          {step === "service" && (
            <motion.div
              key="service"
              initial={{ opacity: 0, x: 8 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -8 }}
              transition={{ duration: 0.2 }}
              className="space-y-2"
            >
              {DEMO_SERVICES.map((s) => {
                const selected = serviceId === s.id;
                return (
                  <button
                    key={s.id}
                    onClick={() => setServiceId(s.id)}
                    className={`w-full text-left bg-white rounded-xl p-3.5 border-2 transition-all flex items-center gap-3 ${
                      selected ? "border-blue ring-2 ring-blue/15 shadow-card" : "border-line hover:border-line/80"
                    }`}
                  >
                    <div
                      className={`h-10 w-10 rounded-xl flex items-center justify-center transition-colors ${
                        selected ? "bg-blue text-white" : "bg-platinum text-blue"
                      }`}
                    >
                      <ServiceIcon icon={s.icon} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-[14px] font-semibold text-ink leading-tight">{s.name}</div>
                      <div className="text-[11px] text-muted leading-tight mt-0.5 truncate">
                        {s.description}
                      </div>
                      <div className="text-[10px] text-muted mt-1">{s.duration} min</div>
                    </div>
                    <div className="text-right">
                      <div className="text-[15px] font-bold text-ink">${s.price}</div>
                      <div className="text-[10px] text-muted">MXN</div>
                    </div>
                  </button>
                );
              })}
            </motion.div>
          )}

          {step === "barber" && (
            <motion.div
              key="barber"
              initial={{ opacity: 0, x: 8 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -8 }}
              transition={{ duration: 0.2 }}
              className="space-y-2"
            >
              <button
                onClick={() => setBarberId("any")}
                className={`w-full text-left bg-white rounded-xl p-3.5 border-2 transition-all flex items-center gap-3 ${
                  barberId === "any" ? "border-blue ring-2 ring-blue/15" : "border-line"
                }`}
              >
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-blue via-success to-orange-400 text-white inline-flex items-center justify-center font-bold text-[12px]">
                  ?
                </div>
                <div className="flex-1">
                  <div className="text-[14px] font-semibold text-ink leading-tight">
                    Cualquier barbero disponible
                  </div>
                  <div className="text-[11px] text-muted leading-tight">
                    Te asignamos al que tenga el horario más cercano
                  </div>
                </div>
              </button>

              {DEMO_BARBERS.map((b) => {
                const selected = barberId === b.id;
                return (
                  <button
                    key={b.id}
                    onClick={() => setBarberId(b.id)}
                    className={`w-full text-left bg-white rounded-xl p-3.5 border-2 transition-all flex items-center gap-3 ${
                      selected ? "border-blue ring-2 ring-blue/15" : "border-line"
                    }`}
                  >
                    <div
                      className="h-10 w-10 rounded-full text-white inline-flex items-center justify-center font-bold text-[12px]"
                      style={{ backgroundColor: b.color }}
                    >
                      {b.initials}
                    </div>
                    <div className="flex-1">
                      <div className="text-[14px] font-semibold text-ink leading-tight">{b.name}</div>
                      <div className="text-[11px] text-muted leading-tight">{b.specialty}</div>
                    </div>
                    {selected && <Check size={16} className="text-blue" strokeWidth={3} />}
                  </button>
                );
              })}
            </motion.div>
          )}

          {step === "datetime" && (
            <motion.div
              key="datetime"
              initial={{ opacity: 0, x: 8 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -8 }}
              transition={{ duration: 0.2 }}
              className="space-y-4"
            >
              <div>
                <div className="text-[11px] font-semibold text-muted uppercase tracking-wide mb-2 flex items-center gap-1.5">
                  <Calendar size={11} />
                  Elige el día
                </div>
                <div className="grid grid-cols-6 gap-1.5">
                  {DEMO_AVAILABLE_DAYS.map((d) => {
                    const selected = day === d.date;
                    return (
                      <button
                        key={d.date}
                        onClick={() => d.hasSlots && setDay(d.date)}
                        disabled={!d.hasSlots}
                        className={`aspect-square rounded-xl border-2 flex flex-col items-center justify-center transition-all ${
                          selected
                            ? "border-blue bg-blue text-white"
                            : d.hasSlots
                              ? "border-line bg-white hover:border-blue/40"
                              : "border-line bg-platinum text-muted opacity-40 cursor-not-allowed"
                        }`}
                      >
                        <span className="text-[9px] font-semibold uppercase">{d.weekday}</span>
                        <span className="text-[16px] font-bold leading-none mt-0.5">{d.day}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {day && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25 }}
                >
                  <div className="text-[11px] font-semibold text-muted uppercase tracking-wide mb-2 flex items-center gap-1.5">
                    <Clock size={11} />
                    Horarios disponibles · {dayObj?.weekday} {dayObj?.day} de mayo
                  </div>
                  <div className="grid grid-cols-4 gap-1.5">
                    {DEMO_AVAILABLE_HOURS.map((h) => {
                      const isBusy = DEMO_BUSY_HOURS.has(h);
                      const selected = hour === h;
                      return (
                        <button
                          key={h}
                          onClick={() => !isBusy && setHour(h)}
                          disabled={isBusy}
                          className={`rounded-lg border py-2 text-[12px] font-semibold transition-all ${
                            selected
                              ? "border-blue bg-blue text-white"
                              : isBusy
                                ? "border-line bg-platinum text-muted line-through opacity-50 cursor-not-allowed"
                                : "border-line bg-white text-ink hover:border-blue/40"
                          }`}
                        >
                          {h}
                        </button>
                      );
                    })}
                  </div>
                </motion.div>
              )}
            </motion.div>
          )}

          {step === "confirm" && (
            <motion.div
              key="confirm"
              initial={{ opacity: 0, x: 8 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -8 }}
              transition={{ duration: 0.2 }}
              className="space-y-3"
            >
              <div className="bg-white rounded-2xl p-4 border border-line">
                <div className="text-[11px] font-semibold text-muted uppercase tracking-wide mb-3">
                  Resumen
                </div>
                <div className="space-y-2.5">
                  <Row label="Servicio" value={service?.name ?? "—"} />
                  <Row label="Barbero" value={barber?.name ?? "Cualquiera"} />
                  <Row
                    label="Día y hora"
                    value={`${dayObj?.weekday} ${dayObj?.day} may · ${hour ?? "—"}`}
                  />
                  <Row label="Duración" value={`${service?.duration} min`} />
                  <div className="border-t border-line-soft pt-2.5 flex items-center justify-between">
                    <span className="text-[13px] font-semibold text-ink">Total</span>
                    <span className="text-[18px] font-bold text-ink">${service?.price} MXN</span>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <input
                  type="text"
                  placeholder="Tu nombre"
                  disabled
                  className="w-full rounded-xl border border-line bg-white px-4 py-3 text-[13px] placeholder:text-muted cursor-not-allowed"
                />
                <input
                  type="text"
                  placeholder="Tu celular (10 dígitos)"
                  disabled
                  className="w-full rounded-xl border border-line bg-white px-4 py-3 text-[13px] placeholder:text-muted cursor-not-allowed"
                />
              </div>
            </motion.div>
          )}

          {step === "done" && (
            <motion.div
              key="done"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col items-center justify-center text-center py-8"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.1, duration: 0.4, type: "spring", bounce: 0.5 }}
                className="h-20 w-20 rounded-full bg-success flex items-center justify-center"
              >
                <Check size={40} strokeWidth={3} className="text-white" />
              </motion.div>
              <h4 className="mt-4 text-[20px] font-semibold tracking-tight text-ink">
                ¡Reserva confirmada!
              </h4>
              <p className="mt-2 text-[13px] text-ink-soft max-w-xs">
                Te llegará confirmación por correo y SMS. Cancela o reagenda con un click.
              </p>
              <button
                onClick={reset}
                className="mt-6 rounded-full bg-platinum text-ink-soft text-[12px] font-semibold px-5 py-2.5"
              >
                Probar otra reserva
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Bottom action bar */}
      {step !== "done" && (
        <div className="px-5 py-3 bg-white border-t border-line flex items-center gap-2">
          {step !== "service" && (
            <button
              onClick={() => {
                if (step === "barber") setStep("service");
                if (step === "datetime") setStep("barber");
                if (step === "confirm") setStep("datetime");
              }}
              className="h-10 w-10 rounded-full hover:bg-platinum text-ink-soft inline-flex items-center justify-center transition-colors"
              aria-label="Atrás"
            >
              <ArrowLeft size={16} />
            </button>
          )}
          <div className="flex-1 text-center text-[10px] text-muted italic">
            Demo · ningún dato se guarda
          </div>
          <button
            onClick={() => {
              if (step === "service" && serviceId) setStep("barber");
              else if (step === "barber" && barberId) setStep("datetime");
              else if (step === "datetime" && day && hour) setStep("confirm");
              else if (step === "confirm") setStep("done");
            }}
            disabled={
              (step === "service" && !serviceId) ||
              (step === "barber" && !barberId) ||
              (step === "datetime" && !(day && hour))
            }
            className="inline-flex items-center justify-center gap-1.5 rounded-full bg-blue text-white text-[13px] font-semibold px-5 py-2.5 shadow-blue disabled:opacity-40 disabled:cursor-not-allowed transition-opacity"
          >
            {step === "confirm" ? "Reservar" : "Continuar"}
            <ArrowRight size={14} />
          </button>
        </div>
      )}
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between text-[12px]">
      <span className="text-muted">{label}</span>
      <span className="font-semibold text-ink">{value}</span>
    </div>
  );
}
