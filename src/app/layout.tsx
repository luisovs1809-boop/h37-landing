import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://agendas.grupoh37.tech"),
  title: {
    default: "Agendas H37 — Software de citas para barberías y salones en México",
    template: "%s · Agendas H37",
  },
  description:
    "El sistema de citas que tus clientes van a amar. Reserva online 24/7, comisiones automáticas y reportes claros. Hecho en México. Pago único, sin mensualidades.",
  keywords: [
    "software para barberías",
    "agenda de citas barbería",
    "sistema de citas salón",
    "reservas online México",
    "Fresha alternativa México",
    "agenda barber shop",
  ],
  authors: [{ name: "Grupo H37" }],
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: "https://agendas.grupoh37.tech",
    title: "Agendas H37 — El sistema de citas que tus clientes van a amar",
    description:
      "Reserva online 24/7, comisiones automáticas y reportes claros. Pago único de $5,999 MXN.",
    siteName: "Agendas H37",
  },
  twitter: {
    card: "summary_large_image",
    title: "Agendas H37 — Software de citas para barberías",
    description:
      "Reserva online 24/7, comisiones automáticas y reportes claros. Pago único.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es-MX"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-ink">
        {children}
      </body>
    </html>
  );
}
