"use client";

import { motion } from "framer-motion";

export function SocialProof() {
  return (
    <section className="py-12 md:py-16 border-y border-line-soft bg-platinum-2/40">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center text-[12px] uppercase tracking-wider text-muted font-semibold"
        >
          Operando hoy en
        </motion.p>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
          {/* Cliente piloto */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center gap-3"
          >
            <div className="h-10 w-10 rounded-xl bg-ink text-white flex items-center justify-center font-bold text-[13px]">
              H37
            </div>
            <div className="text-left">
              <div className="text-[14px] font-semibold text-ink leading-tight">
                Hangar 37 Barber Shop
              </div>
              <div className="text-[11px] text-muted leading-tight">
                Querétaro · 3 barberos
              </div>
            </div>
          </motion.div>

          {/* Slots para futuros logos */}
          {[1, 2, 3].map((i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.06 }}
              className="hidden lg:flex items-center gap-3 opacity-30"
            >
              <div className="h-10 w-10 rounded-xl border-2 border-dashed border-line" />
              <div className="text-[12px] text-muted italic">tu negocio aquí</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
