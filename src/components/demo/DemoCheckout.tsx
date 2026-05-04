"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Banknote, Check, CreditCard, Smartphone, Wallet } from "lucide-react";
import { DEMO_BUSINESS, DEMO_BARBERS, DEMO_SERVICES } from "@/lib/demo-data";

const tipOptions = [
  { label: "10%", percent: 10 },
  { label: "15%", percent: 15, recommended: true },
  { label: "20%", percent: 20 },
];

const methods = [
  { id: "efectivo", label: "Efectivo", icon: Banknote },
  { id: "tarjeta", label: "Tarjeta", icon: CreditCard },
  { id: "transferencia", label: "Transferencia", icon: Smartphone },
];

// Cita simulada para el cobro
const cita = {
  client: "Pablo G.",
  barberId: "b1",
  serviceIds: ["s3"], // Combo Corte + Barba
};

export function DemoCheckout() {
  const [tipPercent, setTipPercent] = useState<number>(15);
  const [method, setMethod] = useState<string>("tarjeta");
  const [done, setDone] = useState(false);

  const barber = DEMO_BARBERS.find((b) => b.id === cita.barberId)!;
  const services = cita.serviceIds.map((id) => DEMO_SERVICES.find((s) => s.id === id)!);
  const subtotal = services.reduce((sum, s) => sum + s.price, 0);
  const tip = Math.round(subtotal * (tipPercent / 100));
  const total = subtotal + tip;
  const commission = Math.round(subtotal * 0.6); // 60% al barbero

  if (done) {
    return (
      <div className="rounded-2xl bg-white border border-line shadow-card-lg overflow-hidden">
        <BrowserBar />
        <div className="bg-gradient-to-br from-success/5 via-white to-blue/5 px-6 py-12 text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", bounce: 0.5, duration: 0.5 }}
            className="mx-auto h-20 w-20 rounded-full bg-success flex items-center justify-center"
          >
            <Check size={40} strokeWidth={3} className="text-white" />
          </motion.div>
          <motion.h4
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="mt-4 text-[22px] font-semibold tracking-tight text-ink"
          >
            Pago registrado
          </motion.h4>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-2 text-[13px] text-ink-soft"
          >
            ${total.toLocaleString("es-MX")} MXN cobrados a <strong>{cita.client}</strong>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-6 max-w-xs mx-auto bg-white rounded-2xl border border-line p-4 text-left space-y-2"
          >
            <Row label="Cita" value="Marcada como completada" success />
            <Row
              label={`Comisión a ${barber.shortName}`}
              value={`$${(commission + tip).toLocaleString("es-MX")} MXN`}
              success
            />
            <Row label="Para el negocio" value={`$${(subtotal - commission).toLocaleString("es-MX")} MXN`} success />
            <Row label="Recibo enviado" value={`A ${cita.client}`} success />
          </motion.div>

          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45 }}
            onClick={() => {
              setDone(false);
              setTipPercent(15);
              setMethod("tarjeta");
            }}
            className="mt-8 rounded-full bg-platinum text-ink-soft text-[12px] font-semibold px-5 py-2.5"
          >
            Cobrar otra cita
          </motion.button>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-2xl bg-white border border-line shadow-card-lg overflow-hidden">
      <BrowserBar />

      {/* Title bar */}
      <div className="px-5 py-3 bg-white border-b border-line flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div
            className="h-9 w-9 rounded-xl text-white text-[12px] font-bold flex items-center justify-center"
            style={{ backgroundColor: DEMO_BUSINESS.logoColor }}
          >
            {DEMO_BUSINESS.initials}
          </div>
          <div>
            <div className="text-[13px] font-semibold tracking-tight text-ink leading-tight">
              Cobro de cita
            </div>
            <div className="text-[11px] text-muted leading-tight">
              {cita.client} · con {barber.name}
            </div>
          </div>
        </div>
        <span className="text-[10px] font-semibold text-muted">DEMO</span>
      </div>

      <div className="p-5 bg-platinum-2 grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Lado izquierdo: configuración */}
        <div className="space-y-4">
          {/* Servicios */}
          <div className="bg-white rounded-2xl border border-line p-4">
            <div className="text-[10px] font-semibold uppercase tracking-wider text-muted mb-2">
              Servicios
            </div>
            {services.map((s) => (
              <div key={s.id} className="flex items-center justify-between py-1.5">
                <div className="text-[13px] font-semibold text-ink">{s.name}</div>
                <div className="text-[13px] font-semibold text-ink">${s.price}</div>
              </div>
            ))}
          </div>

          {/* Propina */}
          <div className="bg-white rounded-2xl border border-line p-4">
            <div className="flex items-center justify-between mb-2.5">
              <div className="text-[10px] font-semibold uppercase tracking-wider text-muted">
                Propina
              </div>
              <button
                onClick={() => setTipPercent(0)}
                className="text-[10px] font-medium text-muted hover:text-ink underline"
              >
                Sin propina
              </button>
            </div>
            <div className="grid grid-cols-3 gap-2">
              {tipOptions.map((opt) => (
                <button
                  key={opt.percent}
                  onClick={() => setTipPercent(opt.percent)}
                  className={`relative rounded-xl border-2 py-2.5 transition-all ${
                    tipPercent === opt.percent
                      ? "border-blue bg-blue text-white"
                      : "border-line bg-white text-ink hover:border-blue/40"
                  }`}
                >
                  <div className="text-[14px] font-bold leading-tight">{opt.label}</div>
                  <div
                    className={`text-[10px] font-medium leading-tight ${
                      tipPercent === opt.percent ? "text-white/80" : "text-muted"
                    }`}
                  >
                    +${Math.round(subtotal * (opt.percent / 100))}
                  </div>
                  {opt.recommended && tipPercent !== opt.percent && (
                    <span className="absolute -top-2 left-1/2 -translate-x-1/2 inline-flex bg-success text-white text-[8px] font-bold uppercase tracking-wide px-1.5 py-0.5 rounded-full">
                      Sugerida
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Método de pago */}
          <div className="bg-white rounded-2xl border border-line p-4">
            <div className="text-[10px] font-semibold uppercase tracking-wider text-muted mb-2.5">
              Método de pago
            </div>
            <div className="grid grid-cols-3 gap-2">
              {methods.map((m) => {
                const Icon = m.icon;
                const selected = method === m.id;
                return (
                  <button
                    key={m.id}
                    onClick={() => setMethod(m.id)}
                    className={`flex flex-col items-center gap-1 rounded-xl border-2 py-3 transition-all ${
                      selected
                        ? "border-blue bg-blue text-white"
                        : "border-line bg-white text-ink-soft hover:border-blue/40"
                    }`}
                  >
                    <Icon size={18} strokeWidth={2} />
                    <span className="text-[11px] font-semibold leading-tight">{m.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Lado derecho: resumen + botón */}
        <div className="space-y-4">
          <div className="bg-ink rounded-2xl p-5 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-blue/20 blur-3xl" />
            <div className="relative space-y-2.5">
              <Row label="Subtotal" value={`$${subtotal.toLocaleString("es-MX")} MXN`} dark />
              <Row
                label={`Propina (${tipPercent}%)`}
                value={`$${tip.toLocaleString("es-MX")} MXN`}
                dark
              />
              <div className="border-t border-white/10 pt-3 flex items-center justify-between">
                <span className="text-[13px] text-white/70">Total a cobrar</span>
                <span className="text-[28px] font-bold tracking-tight">
                  ${total.toLocaleString("es-MX")}
                </span>
              </div>
            </div>
          </div>

          {/* Vista previa de comisión */}
          <AnimatePresence>
            <motion.div
              key={`${tipPercent}-${method}`}
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
              className="bg-white rounded-2xl border border-line p-4 space-y-2"
            >
              <div className="text-[10px] font-semibold uppercase tracking-wider text-muted">
                Reparto automático al cierre
              </div>
              <Row
                label={`Para ${barber.shortName}`}
                value={`$${(commission + tip).toLocaleString("es-MX")} MXN`}
                accent={barber.color}
              />
              <Row
                label="Para el negocio"
                value={`$${(subtotal - commission).toLocaleString("es-MX")} MXN`}
              />
            </motion.div>
          </AnimatePresence>

          <button
            onClick={() => setDone(true)}
            className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-blue text-white text-[14px] font-semibold py-3.5 shadow-blue hover:bg-blue-hover transition-colors"
          >
            <Wallet size={16} />
            Confirmar cobro · ${total.toLocaleString("es-MX")} MXN
          </button>

          <div className="text-center text-[10px] text-muted italic">
            Demo · ningún cobro real se procesa
          </div>
        </div>
      </div>
    </div>
  );
}

function BrowserBar() {
  return (
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
            tunegocio.agendash37.com/cobrar
          </span>
        </div>
      </div>
      <span className="text-[10px] font-semibold text-muted">DEMO</span>
    </div>
  );
}

function Row({
  label,
  value,
  dark,
  success,
  accent,
}: {
  label: string;
  value: string;
  dark?: boolean;
  success?: boolean;
  accent?: string;
}) {
  return (
    <div className="flex items-center justify-between text-[12px]">
      <span className={dark ? "text-white/70" : "text-muted"}>{label}</span>
      <span
        className="font-semibold"
        style={{
          color: accent ?? (success ? "#34c759" : dark ? "#fff" : "#1d1d1f"),
        }}
      >
        {value}
      </span>
    </div>
  );
}
