// Bandera: pasar a true cuando Orlando confirme su número real de WhatsApp
const HAS_REAL_WHATSAPP = false;

const REAL_WHATSAPP = "+524420000000"; // PLACEHOLDER hasta que Orlando lo confirme
const REAL_WHATSAPP_DISPLAY = "+52 442 000 0000";

const WHATSAPP_URL = `https://wa.me/${REAL_WHATSAPP.replace(/\D/g, "")}?text=Hola%20Orlando%2C%20me%20interesa%20Agendas%20H37`;
const MAILTO_URL = "mailto:admon@grupoh37.tech?subject=Quiero%20comprar%20Agendas%20H37&body=Hola%20Orlando%2C%0A%0AMe%20interesa%20comprar%20Agendas%20H37%20(%245%2C999%20MXN%20pago%20%C3%BAnico).%0A%0AMi%20negocio%3A%20%0AMi%20WhatsApp%3A%20%0AMi%20ciudad%3A%20%0A%0ASaludos.";

export const SITE = {
  name: "Agendas H37",
  domain: "agendas.grupoh37.tech",
  url: "https://agendas.grupoh37.tech",
  email: "admon@grupoh37.tech",
  whatsapp: REAL_WHATSAPP,
  whatsappDisplay: REAL_WHATSAPP_DISPLAY,
  whatsappUrl: WHATSAPP_URL,
  // CTA principal: usa WhatsApp si está confirmado, mailto si no.
  // Cambiar HAS_REAL_WHATSAPP a true en cuanto Orlando dé luz verde.
  contactUrl: HAS_REAL_WHATSAPP ? WHATSAPP_URL : MAILTO_URL,
  contactCtaLabel: HAS_REAL_WHATSAPP ? "Comprar por WhatsApp" : "Empezar ahora · Escríbeme",
  contactCtaShort: HAS_REAL_WHATSAPP ? "WhatsApp" : "Correo",
  hasWhatsApp: HAS_REAL_WHATSAPP,
  demoVideoUrl: "", // Por llenar cuando Orlando suba el video a YouTube
  pilotPublic: "https://hangar37.grupoh37.tech",
  appUrl: "https://app.grupoh37.tech",
} as const;

export const PRICING = {
  amount: 5999,
  currency: "MXN",
  display: "$5,999",
  type: "Pago único",
  includes: [
    "Licencia de por vida",
    "Actualizaciones de por vida",
    "Barberos y empleados ilimitados",
    "Clientes y citas ilimitados",
    "Reservas online 24/7",
    "Comisiones y reportes automáticos",
    "Instalación incluida",
    "Soporte por correo",
  ],
} as const;

export const NAV_LINKS = [
  { href: "#funciones", label: "Funciones" },
  { href: "#demo", label: "Demo" },
  { href: "#comparar", label: "Comparar" },
  { href: "#precio", label: "Precio" },
  { href: "#preguntas", label: "Preguntas" },
] as const;
