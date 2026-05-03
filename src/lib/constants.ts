export const SITE = {
  name: "Agendas H37",
  domain: "agendas.grupoh37.tech",
  url: "https://agendas.grupoh37.tech",
  email: "admon@grupoh37.tech",
  whatsapp: "+524420000000",
  whatsappDisplay: "+52 442 000 0000",
  whatsappUrl:
    "https://wa.me/524420000000?text=Hola%20Orlando%2C%20me%20interesa%20Agendas%20H37",
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
  { href: "#como-funciona", label: "Cómo funciona" },
  { href: "#demo", label: "Demo" },
  { href: "#precio", label: "Precio" },
  { href: "#preguntas", label: "Preguntas" },
] as const;
