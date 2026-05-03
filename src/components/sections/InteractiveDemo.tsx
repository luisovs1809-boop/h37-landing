"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { LayoutDashboard, Smartphone, Sparkles } from "lucide-react";
import { DemoPanel } from "@/components/demo/DemoPanel";
import { DemoBooking } from "@/components/demo/DemoBooking";

type Tab = "panel" | "booking";

export function InteractiveDemo() {
  const [tab, setTab] = useState<Tab>("panel");

  return (
    <section
      id="demo"
      className="relative py-20 md:py-28 bg-platinum-2/60 border-y border-line-soft overflow-hidden"
    >
      <div className="absolute inset-0 gradient-mesh opacity-50 -z-10" />

      <div className="mx-auto max-w-6xl px-5 md:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 rounded-full bg-blue-soft border border-blue/15 px-3 py-1 text-[12px] font-medium text-blue"
          >
            <Sparkles size={12} className="fill-blue/30" />
            Pruébalo aquí mismo · sin registrarte
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.06 }}
            className="mt-4 text-[34px] md:text-[48px] font-semibold tracking-[-0.022em] leading-[1.05] text-ink"
          >
            Demo en vivo, no un video.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.12 }}
            className="mt-4 text-[17px] text-ink-soft"
          >
            Cambia entre las dos vistas y toca lo que quieras. Es exactamente lo que verás cuando lo compres.
          </motion.p>
        </div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.18 }}
          className="mt-10 flex justify-center"
        >
          <div className="inline-flex items-center gap-1 rounded-full bg-white border border-line p-1 shadow-card">
            <TabButton active={tab === "panel"} onClick={() => setTab("panel")}>
              <LayoutDashboard size={15} />
              Panel del barbero
            </TabButton>
            <TabButton active={tab === "booking"} onClick={() => setTab("booking")}>
              <Smartphone size={15} />
              Reserva del cliente
            </TabButton>
          </div>
        </motion.div>

        {/* Demo container */}
        <motion.div
          key={tab}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 relative"
        >
          {/* Soft glow under demo */}
          <div className="absolute -inset-x-8 -top-8 -bottom-12 -z-10 rounded-[3rem] bg-gradient-to-b from-blue/5 to-transparent blur-3xl" />

          {tab === "panel" ? (
            <div className="max-w-4xl mx-auto">
              <DemoPanel />
            </div>
          ) : (
            <div className="max-w-xl mx-auto">
              <DemoBooking />
            </div>
          )}
        </motion.div>

        {/* Bottom hint */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-10 text-center"
        >
          <p className="text-[13px] text-muted">
            Esto es un demo con datos ficticios. Cuando compres el sistema, tu negocio aparecerá con tu logo, tus barberos y tus servicios reales.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function TabButton({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className={`relative inline-flex items-center gap-1.5 rounded-full px-4 sm:px-5 py-2.5 text-[13px] font-semibold transition-colors ${
        active ? "text-white" : "text-ink-soft hover:text-ink"
      }`}
    >
      {active && (
        <motion.span
          layoutId="tab-active"
          className="absolute inset-0 rounded-full bg-blue shadow-blue"
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        />
      )}
      <span className="relative z-10 inline-flex items-center gap-1.5">{children}</span>
    </button>
  );
}
