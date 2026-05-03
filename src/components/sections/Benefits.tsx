"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const benefits = [
  {
    title: "Tus clientes reservan en 30 segundos",
    description: "Desde el celular, sin descargar app ni crear cuenta.",
  },
  {
    title: "Notificaciones automáticas por correo",
    description: "Cada vez que entra una reserva, te llega aviso al instante.",
  },
  {
    title: "Reduce no-shows con recordatorios",
    description: "Aviso automático 24 horas antes para que el cliente confirme.",
  },
  {
    title: "Sin comisión por reserva",
    description: "Pagas una sola vez. Después no debes nada por cada cita.",
  },
  {
    title: "Tus datos son tuyos",
    description: "Exportas clientes, citas y reportes a CSV cuando quieras.",
  },
  {
    title: "Funciona desde cualquier dispositivo",
    description: "Celular, tablet, laptop. No instalas nada, solo abres el navegador.",
  },
];

export function Benefits() {
  return (
    <section className="relative py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20 items-start">
          {/* Left: header */}
          <div className="lg:sticky lg:top-32">
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-[13px] font-semibold uppercase tracking-wider text-blue"
            >
              Beneficios
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.06 }}
              className="mt-3 text-[34px] md:text-[44px] font-semibold tracking-[-0.022em] leading-[1.05] text-ink"
            >
              Hecho para que vendas más, no para que pierdas tiempo.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.12 }}
              className="mt-5 text-[17px] text-ink-soft leading-relaxed"
            >
              Cada función pensada con un dueño de barbería que ya está saturado de chambeo, no con un dashboard que te pone más trabajo encima.
            </motion.p>
          </div>

          {/* Right: list */}
          <ul className="space-y-3">
            {benefits.map((b, i) => (
              <motion.li
                key={b.title}
                initial={{ opacity: 0, x: 12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group flex gap-4 rounded-2xl bg-white border border-line p-5 hover:border-blue/30 hover:shadow-card transition-all duration-300"
              >
                <div className="flex-shrink-0 inline-flex h-9 w-9 items-center justify-center rounded-full bg-success/10 text-success group-hover:bg-success group-hover:text-white transition-colors">
                  <Check size={18} strokeWidth={3} />
                </div>
                <div className="flex-1 min-w-0 pt-0.5">
                  <div className="text-[16px] font-semibold text-ink leading-snug">
                    {b.title}
                  </div>
                  <div className="text-[14px] text-ink-soft leading-snug mt-1">
                    {b.description}
                  </div>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
