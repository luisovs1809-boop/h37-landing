"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import { SITE } from "@/lib/constants";

export function FinalCTA() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      <div className="mx-auto max-w-5xl px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-[2rem] overflow-hidden"
        >
          {/* Background */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(circle at 20% 0%, rgba(0,113,227,0.95), transparent 60%), radial-gradient(circle at 100% 100%, rgba(0,71,170,0.9), transparent 50%), #0071e3",
            }}
          />

          {/* Decorative grid */}
          <div
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage:
                "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />

          {/* Floating glows */}
          <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-success/20 blur-3xl" />

          <div className="relative px-6 md:px-16 py-16 md:py-24 text-center">
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/20 px-3 py-1 text-[12px] font-semibold text-white"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-success animate-pulse" />
              Disponible hoy en México
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.18 }}
              className="mt-5 text-[36px] md:text-[56px] font-semibold tracking-[-0.032em] leading-[1.02] text-white max-w-3xl mx-auto"
            >
              ¿Listo para profesionalizar tu negocio?
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.24 }}
              className="mt-5 text-[18px] md:text-[20px] text-white/85 max-w-2xl mx-auto"
            >
              Pago único de $5,999 MXN. Lo tienes operando hoy mismo.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.32 }}
              className="mt-9 flex flex-col sm:flex-row gap-3 justify-center items-center"
            >
              <a
                href={SITE.contactUrl}
                target={SITE.hasWhatsApp ? "_blank" : undefined}
                rel={SITE.hasWhatsApp ? "noopener noreferrer" : undefined}
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-white text-blue text-[16px] font-semibold px-7 py-4 shadow-card-lg hover:shadow-card transition-all duration-200"
              >
                {SITE.contactCtaLabel}
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href={`mailto:${SITE.email}?subject=Quiero%20agendar%20una%20llamada%20de%20Agendas%20H37`}
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-[16px] font-semibold px-7 py-4 hover:bg-white/15 transition-all duration-200"
              >
                <MessageCircle size={18} />
                Agenda una llamada con Orlando
              </a>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="mt-6 text-[13px] text-white/70"
            >
              Sin tarjeta · Pago único · Tuyo para siempre
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
