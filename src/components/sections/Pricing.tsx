"use client";

import { motion } from "framer-motion";
import { ArrowRight, Check, Shield } from "lucide-react";
import { PRICING, SITE } from "@/lib/constants";

export function Pricing() {
  return (
    <section id="precio" className="relative py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 gradient-radial -z-10" />

      <div className="mx-auto max-w-5xl px-5 md:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-[13px] font-semibold uppercase tracking-wider text-blue"
          >
            Precio
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.06 }}
            className="mt-3 text-[34px] md:text-[48px] font-semibold tracking-[-0.022em] leading-[1.05] text-ink"
          >
            Una sola compra. <span className="text-blue">Tuyo para siempre</span>.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.12 }}
            className="mt-4 text-[17px] text-ink-soft"
          >
            Sin mensualidades. Sin renovaciones. Sin sorpresas.
          </motion.p>
        </div>

        {/* Pricing card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
          className="mt-14 relative max-w-2xl mx-auto"
        >
          {/* Glow */}
          <div className="absolute -inset-1 rounded-[2rem] bg-gradient-to-br from-blue/30 via-blue/10 to-success/20 blur-xl opacity-60" />

          <div className="relative bg-white rounded-[2rem] border border-line shadow-card-lg overflow-hidden">
            {/* Top ribbon */}
            <div className="bg-gradient-to-r from-ink to-ink-soft text-white px-6 py-2.5 text-center text-[12px] font-semibold tracking-wide uppercase">
              Plan Profesional · Lanzamiento 2026
            </div>

            <div className="p-8 md:p-12">
              {/* Price */}
              <div className="text-center">
                <div className="inline-flex items-baseline gap-2">
                  <span className="text-[15px] font-medium text-muted line-through">$8,999</span>
                  <span className="rounded-full bg-success/10 text-success text-[11px] font-bold uppercase tracking-wider px-2 py-0.5">
                    Ahorra $3,000
                  </span>
                </div>
                <div className="mt-3 flex items-baseline justify-center gap-2">
                  <span className="text-[64px] md:text-[88px] font-semibold tracking-[-0.04em] leading-none text-ink">
                    {PRICING.display}
                  </span>
                  <span className="text-[20px] font-medium text-muted">{PRICING.currency}</span>
                </div>
                <div className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-blue-soft text-blue text-[13px] font-semibold px-3 py-1">
                  <Shield size={13} strokeWidth={2.5} />
                  {PRICING.type} · Licencia de por vida
                </div>
              </div>

              {/* Divider */}
              <div className="my-8 h-px bg-line" />

              {/* Includes */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                {PRICING.includes.map((item, i) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.05 * i }}
                    className="flex items-start gap-2.5"
                  >
                    <div className="flex-shrink-0 mt-0.5 h-5 w-5 rounded-full bg-success/10 flex items-center justify-center">
                      <Check size={12} strokeWidth={3} className="text-success" />
                    </div>
                    <span className="text-[14px] text-ink-soft leading-snug">{item}</span>
                  </motion.div>
                ))}
              </div>

              {/* CTA */}
              <div className="mt-10 flex flex-col gap-3">
                <a
                  href={SITE.contactUrl}
                  target={SITE.hasWhatsApp ? "_blank" : undefined}
                  rel={SITE.hasWhatsApp ? "noopener noreferrer" : undefined}
                  className="group w-full inline-flex items-center justify-center gap-2 rounded-full bg-blue hover:bg-blue-hover active:bg-blue-active text-white text-[16px] font-semibold py-4 shadow-blue transition-all duration-200"
                >
                  {SITE.contactCtaLabel}
                  <ArrowRight size={18} className="transition-transform group-hover:translate-x-0.5" />
                </a>
                <a
                  href="#demo"
                  className="w-full text-center text-[14px] font-medium text-ink-soft hover:text-ink py-2 transition-colors"
                >
                  Antes de comprar, prueba el demo en vivo →
                </a>
              </div>


              {/* Trust line */}
              <div className="mt-8 pt-6 border-t border-line-soft flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[12px] text-muted">
                <div className="inline-flex items-center gap-1.5">
                  <Shield size={12} />
                  Pago seguro
                </div>
                <span className="text-line">·</span>
                <div className="inline-flex items-center gap-1.5">
                  <Check size={12} strokeWidth={2.5} />
                  Factura disponible
                </div>
                <span className="text-line">·</span>
                <div className="inline-flex items-center gap-1.5">
                  <Check size={12} strokeWidth={2.5} />
                  Garantía de instalación
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Empresa note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 text-center text-[14px] text-muted"
        >
          ¿Más de 5 sucursales o cadena?{" "}
          <a
            href={SITE.contactUrl}
            target={SITE.hasWhatsApp ? "_blank" : undefined}
            rel={SITE.hasWhatsApp ? "noopener noreferrer" : undefined}
            className="text-blue font-semibold hover:underline"
          >
            Contacta para plan empresa →
          </a>
        </motion.p>
      </div>
    </section>
  );
}
