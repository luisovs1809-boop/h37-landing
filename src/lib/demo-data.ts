// Datos 100% ficticios para el demo interactivo de la landing.
// NO usar nombres reales de Hangar 37, Jonathan, Aldo ni clientes reales.
// Negocio ficticio: "Barbería Aurora"

export const DEMO_BUSINESS = {
  name: "Barbería Aurora",
  tagline: "Estética masculina · Demo",
  initials: "BA",
  rating: 4.8,
  reviewCount: 184,
  city: "Tu ciudad",
  // Logo cuadrado gris/grafito (NO azul para diferenciar del logo Agendas H37)
  logoColor: "#3a3a3c",
} as const;

export type DemoBarber = {
  id: string;
  name: string;
  shortName: string;
  initials: string;
  color: string;
  specialty: string;
};

export const DEMO_BARBERS: DemoBarber[] = [
  { id: "b1", name: "Carlos Méndez", shortName: "Carlos", initials: "CM", color: "#0071e3", specialty: "Cortes clásicos" },
  { id: "b2", name: "Martín Robles", shortName: "Martín", initials: "MR", color: "#34c759", specialty: "Barba y diseño" },
  { id: "b3", name: "Diego Salinas", shortName: "Diego", initials: "DS", color: "#ff9500", specialty: "Tintes y color" },
];

export type DemoService = {
  id: string;
  name: string;
  duration: number; // minutes
  price: number;
  description: string;
  icon: "scissors" | "razor" | "combo" | "palette";
};

export const DEMO_SERVICES: DemoService[] = [
  { id: "s1", name: "Corte clásico", duration: 30, price: 250, description: "Corte de tijera o máquina, lavado y peinado", icon: "scissors" },
  { id: "s2", name: "Barba completa", duration: 25, price: 180, description: "Perfilado, navaja caliente y aceite hidratante", icon: "razor" },
  { id: "s3", name: "Combo Corte + Barba", duration: 50, price: 380, description: "Servicio completo de corte y barba en una sola cita", icon: "combo" },
  { id: "s4", name: "Tinte completo", duration: 60, price: 550, description: "Aplicación de color profesional", icon: "palette" },
];

export type DemoAppointment = {
  barberId: string;
  startSlot: number; // 0..N hour slot from openHour
  duration: number; // in slots (1 slot = 1 hour for simplicity)
  serviceId: string;
  clientName: string;
  status?: "confirmed" | "in_progress" | "completed";
};

export const DEMO_TIME_SLOTS = [
  "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00",
];

export const DEMO_APPOINTMENTS: DemoAppointment[] = [
  { barberId: "b1", startSlot: 0, duration: 2, serviceId: "s3", clientName: "Luis P.", status: "completed" },
  { barberId: "b2", startSlot: 1, duration: 1, serviceId: "s1", clientName: "Mario T.", status: "completed" },
  { barberId: "b3", startSlot: 0, duration: 1, serviceId: "s2", clientName: "Daniel R.", status: "completed" },
  { barberId: "b1", startSlot: 3, duration: 2, serviceId: "s4", clientName: "Pablo G.", status: "in_progress" },
  { barberId: "b2", startSlot: 3, duration: 1, serviceId: "s1", clientName: "Iván M.", status: "confirmed" },
  { barberId: "b3", startSlot: 2, duration: 2, serviceId: "s3", clientName: "Roberto S.", status: "confirmed" },
  { barberId: "b1", startSlot: 6, duration: 1, serviceId: "s1", clientName: "Andrés L.", status: "confirmed" },
  { barberId: "b2", startSlot: 5, duration: 2, serviceId: "s2", clientName: "José F.", status: "confirmed" },
  { barberId: "b3", startSlot: 5, duration: 1, serviceId: "s1", clientName: "Eduardo H.", status: "confirmed" },
];

// Disponibilidad ficticia para el flujo de reserva (matriz: día × hora)
// "free", "busy", "selected"
export const DEMO_AVAILABLE_DAYS = [
  { date: "2026-05-04", weekday: "Lun", day: "4", hasSlots: true },
  { date: "2026-05-05", weekday: "Mar", day: "5", hasSlots: true },
  { date: "2026-05-06", weekday: "Mié", day: "6", hasSlots: true },
  { date: "2026-05-07", weekday: "Jue", day: "7", hasSlots: false },
  { date: "2026-05-08", weekday: "Vie", day: "8", hasSlots: true },
  { date: "2026-05-09", weekday: "Sáb", day: "9", hasSlots: true },
];

export const DEMO_AVAILABLE_HOURS = [
  "10:00", "10:30", "11:00", "11:30", "12:00",
  "13:00", "13:30", "14:00", "15:30",
  "16:00", "16:30", "17:00", "17:30",
];

export const DEMO_BUSY_HOURS = new Set(["12:30", "14:30", "15:00", "18:00"]);
