"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { SITE } from "@/lib/constants";

export function VideoDemo() {
  const hasVideo = SITE.demoVideoUrl.length > 0;

  return (
    <section
      id="demo"
      className="relative py-20 md:py-28 bg-platinum-2/60 border-y border-line-soft overflow-hidden"
    >
      <div className="absolute inset-0 gradient-mesh opacity-50 -z-10" />

      <div className="mx-auto max-w-5xl px-5 md:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-[13px] font-semibold uppercase tracking-wider text-blue"
          >
            Demo en video
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.06 }}
            className="mt-3 text-[34px] md:text-[48px] font-semibold tracking-[-0.022em] leading-[1.05] text-ink"
          >
            Mira cómo se ve para tus clientes.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.12 }}
            className="mt-4 text-[17px] text-ink-soft"
          >
            Tour de 90 segundos: panel del barbero + reserva del cliente, de cabo a rabo.
          </motion.p>
        </div>

        {/* Video player */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 relative"
        >
          <div className="relative rounded-3xl overflow-hidden shadow-card-lg border border-line bg-ink aspect-video">
            {hasVideo ? (
              <iframe
                src={SITE.demoVideoUrl}
                title="Demo de Agendas H37"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            ) : (
              <>
                {/* Background gradient mock */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "radial-gradient(circle at 30% 30%, rgba(0,113,227,0.4), transparent 50%), radial-gradient(circle at 70% 70%, rgba(52,199,89,0.25), transparent 50%), #1d1d1f",
                  }}
                />

                {/* Decorative grid pattern */}
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
                    backgroundSize: "50px 50px",
                  }}
                />

                {/* Floating UI ghosts */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-full h-full">
                    {/* Mock browser frame ghosting */}
                    <div className="absolute top-12 left-12 right-12 bottom-12 rounded-2xl border border-white/10 backdrop-blur-sm bg-white/5">
                      <div className="flex items-center gap-1.5 p-3 border-b border-white/10">
                        <span className="h-2.5 w-2.5 rounded-full bg-white/30" />
                        <span className="h-2.5 w-2.5 rounded-full bg-white/30" />
                        <span className="h-2.5 w-2.5 rounded-full bg-white/30" />
                      </div>
                    </div>

                    {/* Play button center */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <button className="group relative" aria-label="Reproducir demo">
                        {/* Pulse ring */}
                        <span
                          className="absolute inset-0 rounded-full bg-white/20"
                          style={{ animation: "pulse-ring 2.4s ease-in-out infinite" }}
                        />
                        <span
                          className="absolute inset-0 rounded-full bg-white/10"
                          style={{ animation: "pulse-ring 2.4s ease-in-out 0.6s infinite" }}
                        />

                        <div className="relative h-20 w-20 md:h-24 md:w-24 rounded-full bg-white shadow-card-lg flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                          <Play
                            size={32}
                            className="text-blue ml-1.5"
                            fill="currentColor"
                            strokeWidth={0}
                          />
                        </div>
                      </button>
                    </div>

                    {/* Bottom caption */}
                    <div className="absolute bottom-6 left-0 right-0 text-center">
                      <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-md border border-white/15 px-4 py-2 text-[13px] font-medium text-white">
                        <span className="h-2 w-2 rounded-full bg-success" />
                        Video próximamente · 1:30 min
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Caption below */}
          <p className="mt-5 text-center text-[13px] text-muted">
            ¿Prefieres una demo en vivo personalizada?{" "}
            <a
              href={SITE.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue font-semibold hover:underline"
            >
              Agéndala por WhatsApp →
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
