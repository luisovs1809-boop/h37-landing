"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { SITE } from "@/lib/constants";

const faqs = [
  {
    q: "¿Necesito instalar algo en mi computadora o celular?",
    a: "No. Todo funciona desde cualquier navegador, en celular o computadora. Tú y tus clientes solo abren un link. Sin descargas, sin actualizaciones manuales.",
  },
  {
    q: "¿Cuántos barberos o empleados puedo agregar?",
    a: "Ilimitados. Sin importar cuántos barberos tengas en tu negocio, todos están incluidos en el mismo precio. No pagas por usuario.",
  },
  {
    q: "¿Mis clientes necesitan crear una cuenta o descargar una app?",
    a: "No. Tus clientes solo abren tu link público, eligen servicio, barbero, día y hora, y dejan su nombre y celular. Listo. Reserva confirmada en menos de 30 segundos.",
  },
  {
    q: "¿Cómo se hace el pago del software?",
    a: "Pago único de $5,999 MXN por transferencia, depósito o terminal. Después no debes nada más. Te entregamos el sistema instalado, configurado y listo para operar el mismo día.",
  },
  {
    q: "¿Qué incluyen las actualizaciones de por vida?",
    a: "Cuando saquemos nuevas funciones (más reportes, integraciones, mejoras visuales), las recibes automáticamente sin pagar extra. Es para siempre.",
  },
  {
    q: "¿Qué pasa con mi información si decido dejar de usarlo?",
    a: "Tu información es 100% tuya. Te exportamos toda tu base de clientes, historial de citas y reportes en archivos CSV cuando quieras. Sin candado, sin trabas.",
  },
  {
    q: "¿Funciona para salones de belleza, uñas, masajes o spas?",
    a: "Sí. Configuras los servicios, duraciones y precios que quieras. Funciona igual para barbería, salón, estética, manicura, masajes, tatuajes o cualquier negocio que cobre por cita.",
  },
  {
    q: "¿Cómo es el soporte si tengo dudas?",
    a: "Soporte por correo electrónico de lunes a viernes. Te respondemos en menos de 24 horas. Para clientes empresa o cadenas, ofrecemos soporte por WhatsApp dedicado.",
  },
];

export function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section
      id="preguntas"
      className="relative py-20 md:py-28 bg-platinum-2/60 border-y border-line-soft"
    >
      <div className="mx-auto max-w-3xl px-5 md:px-8">
        {/* Header */}
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-[13px] font-semibold uppercase tracking-wider text-blue"
          >
            Preguntas frecuentes
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.06 }}
            className="mt-3 text-[34px] md:text-[44px] font-semibold tracking-[-0.022em] leading-[1.05] text-ink"
          >
            Todo lo que querías saber.
          </motion.h2>
        </div>

        {/* Accordion */}
        <div className="mt-12 space-y-2">
          {faqs.map((faq, i) => {
            const isOpen = openIdx === i;
            return (
              <motion.div
                key={faq.q}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                className="bg-white rounded-2xl border border-line overflow-hidden"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-5 md:px-6 py-5 text-left hover:bg-platinum-2/50 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="text-[16px] md:text-[17px] font-semibold text-ink leading-snug">
                    {faq.q}
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="flex-shrink-0 inline-flex h-8 w-8 items-center justify-center rounded-full bg-platinum text-ink"
                  >
                    <Plus size={16} strokeWidth={2.5} />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 md:px-6 pb-6 text-[15px] text-ink-soft leading-relaxed">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom: still have questions */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <p className="text-[15px] text-ink-soft">
            ¿Tienes otra duda?{" "}
            <a
              href={SITE.contactUrl}
              target={SITE.hasWhatsApp ? "_blank" : undefined}
              rel={SITE.hasWhatsApp ? "noopener noreferrer" : undefined}
              className="text-blue font-semibold hover:underline"
            >
              {SITE.hasWhatsApp ? "Pregúntanos por WhatsApp →" : "Escríbenos por correo →"}
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
