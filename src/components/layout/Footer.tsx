import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { SITE } from "@/lib/constants";

const cols = [
  {
    title: "Producto",
    links: [
      { label: "Funciones", href: "/#funciones" },
      { label: "Cómo funciona", href: "/#como-funciona" },
      { label: "Demo", href: "/#demo" },
      { label: "Precio", href: "/#precio" },
      { label: "Preguntas frecuentes", href: "/#preguntas" },
    ],
  },
  {
    title: "Empresa",
    links: [
      { label: "Acerca de Grupo H37", href: "https://grupoh37.tech", external: true },
      { label: "Contacto", href: `mailto:${SITE.email}` },
      { label: "WhatsApp", href: SITE.whatsappUrl, external: true },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Términos y condiciones", href: "/terminos" },
      { label: "Aviso de privacidad", href: "/privacidad" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-line bg-platinum-2/40">
      <div className="mx-auto max-w-6xl px-5 md:px-8 py-14 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {/* Brand col */}
          <div className="col-span-2 md:col-span-1">
            <Logo size="md" />
            <p className="mt-4 text-[14px] text-ink-soft leading-relaxed max-w-xs">
              Software de citas para barberías y salones, hecho en México.
            </p>
            <p className="mt-4 text-[12px] text-muted">
              Querétaro, México · 2026
            </p>
          </div>

          {/* Link cols */}
          {cols.map((col) => (
            <div key={col.title}>
              <h4 className="text-[12px] font-semibold uppercase tracking-wider text-muted">
                {col.title}
              </h4>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => {
                  const external = "external" in link && link.external;
                  return (
                    <li key={link.label}>
                      {external ? (
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[14px] text-ink-soft hover:text-ink transition-colors"
                        >
                          {link.label}
                        </a>
                      ) : (
                        <Link
                          href={link.href}
                          className="text-[14px] text-ink-soft hover:text-ink transition-colors"
                        >
                          {link.label}
                        </Link>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-14 pt-8 border-t border-line-soft flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-[12px] text-muted">
          <div>
            © 2026 <span className="font-semibold text-ink-soft">Agendas H37</span>. Una marca de Grupo H37. Todos los derechos reservados.
          </div>
          <div className="flex items-center gap-4">
            <a
              href={`mailto:${SITE.email}`}
              className="hover:text-ink transition-colors"
            >
              {SITE.email}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
