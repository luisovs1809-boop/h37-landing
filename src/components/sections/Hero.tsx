"use client";

import { motion } from "framer-motion";
import { ArrowRight, PlayCircle, Sparkles } from "lucide-react";
import { BrowserMockup } from "@/components/ui/BrowserMockup";
import { PhoneMockup } from "@/components/ui/PhoneMockup";

export function Hero() {
  return (
    <section className="relative pt-28 md:pt-36 pb-16 md:pb-24 overflow-hidden">
      {/* Background mesh */}
      <div className="absolute inset-0 gradient-mesh -z-10" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-line to-transparent" />

      <div className="mx-auto max-w-6xl px-5 md:px-8">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center"
        >
          <div className="inline-flex items-center gap-1.5 rounded-full bg-blue-soft border border-blue/15 px-3 py-1 text-[12px] font-medium text-blue">
            <Sparkles size={12} className="fill-blue/30" />
            Software para barberías y salones en México
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="mt-6 text-center font-semibold text-ink text-[40px] sm:text-[56px] md:text-[72px] leading-[1.02] tracking-[-0.032em] max-w-4xl mx-auto"
        >
          El sistema de citas que tus clientes <span className="text-blue">van a amar</span>.
        </motion.h1>

        {/* Subhead */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.16 }}
          className="mt-6 text-center text-[18px] md:text-[21px] text-ink-soft leading-snug max-w-2xl mx-auto tracking-tight"
        >
          Reserva online 24/7, comisiones automáticas y reportes claros. Hecho en México, sin mensualidades.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.24 }}
          className="mt-8 flex flex-col sm:flex-row gap-3 justify-center items-center"
        >
          <a
            href="#precio"
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-1.5 rounded-full bg-blue hover:bg-blue-hover active:bg-blue-active text-white text-[15px] font-semibold px-6 py-3.5 shadow-blue transition-all duration-200"
          >
            Comprar ahora · $5,999 MXN
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="#demo"
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-1.5 rounded-full bg-platinum hover:bg-line text-ink text-[15px] font-semibold px-6 py-3.5 transition-all duration-200"
          >
            <PlayCircle size={18} />
            Ver demo en video
          </a>
        </motion.div>

        {/* Pequeña tira de confianza debajo de CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-5 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[12px] text-muted"
        >
          <div className="inline-flex items-center gap-1.5">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#34c759" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
            Pago único · sin mensualidades
          </div>
          <div className="inline-flex items-center gap-1.5">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#34c759" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
            Actualizaciones de por vida
          </div>
          <div className="inline-flex items-center gap-1.5">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#34c759" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
            Instalación incluida
          </div>
        </motion.div>

        {/* Mockups */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.32, ease: [0.16, 1, 0.3, 1] }}
          className="mt-14 md:mt-20 relative"
        >
          {/* Soft glow under mockups */}
          <div className="absolute -inset-x-8 -top-8 -bottom-12 -z-10 rounded-[3rem] bg-gradient-to-b from-blue/5 to-transparent blur-3xl" />

          <div className="grid grid-cols-1 lg:grid-cols-[1.6fr_1fr] gap-10 lg:gap-12 items-center">
            {/* En mobile el browser mockup queda apretado: lo ocultamos y dejamos solo el phone */}
            <BrowserMockup className="hidden md:block order-2 lg:order-1" />
            <PhoneMockup className="order-1 lg:order-2" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
