"use client";

import { motion } from "framer-motion";

const steps = [
  {
    n: "01",
    title: "Crea tu negocio",
    duration: "3 minutos",
    description:
      "Datos básicos, logo y horario. Te entregamos tu negocio listo para operar el mismo día.",
  },
  {
    n: "02",
    title: "Sube servicios y barberos",
    duration: "10 minutos",
    description:
      "Define precios, duraciones y horarios individuales. Cada barbero tiene su propia agenda y comisión.",
  },
  {
    n: "03",
    title: "Comparte tu link público",
    duration: "Instantáneo",
    description:
      "Tus clientes reservan en 30 segundos desde su celular. Sin descargar nada, sin crear cuenta.",
  },
];

export function HowItWorks() {
  return (
    <section
      id="como-funciona"
      className="relative py-20 md:py-28 bg-platinum-2/60 border-y border-line-soft"
    >
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-[13px] font-semibold uppercase tracking-wider text-blue"
          >
            Cómo funciona
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.06 }}
            className="mt-3 text-[34px] md:text-[48px] font-semibold tracking-[-0.022em] leading-[1.05] text-ink"
          >
            De cero a recibir reservas <span className="text-blue">en menos de 15 minutos</span>.
          </motion.h2>
        </div>

        {/* Steps */}
        <div className="mt-16 relative">
          {/* Connector line */}
          <div className="hidden md:block absolute top-[60px] left-[12%] right-[12%] h-px bg-gradient-to-r from-transparent via-line to-transparent -z-0" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 relative">
            {steps.map((step, i) => (
              <motion.div
                key={step.n}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="relative text-center md:text-left"
              >
                <div className="flex md:block items-center gap-4">
                  <div className="flex-shrink-0 mx-auto md:mx-0 inline-flex h-[120px] w-[120px] items-center justify-center rounded-full bg-white border border-line shadow-card relative">
                    <span className="text-[42px] font-semibold tracking-tight text-blue">
                      {step.n}
                    </span>
                    {/* Outer subtle ring */}
                    <div className="absolute inset-[-6px] rounded-full border border-blue/10" />
                  </div>
                </div>

                <div className="mt-5">
                  <div className="text-[12px] font-semibold uppercase tracking-wider text-success">
                    {step.duration}
                  </div>
                  <h3 className="mt-1.5 text-[22px] font-semibold tracking-tight text-ink leading-tight">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-[15px] text-ink-soft leading-relaxed max-w-xs mx-auto md:mx-0">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
