import type { InsertService, Service } from "./schema";

export const defaultServices: InsertService[] = [
  {
    title: "Reifenwechsel (Sommer / Winter / Allwetter)",
    description: "Professioneller Radwechsel für maximale Sicherheit zu jeder Jahreszeit. Auch für Kunden mit kleinerem Budget bieten wir passende und zuverlässige Lösungen an.",
    icon: "RefreshCw",
    category: "tire",
    image: "/img/reifenwechsel.webp",
    slug: "reifenwechsel",
  },
  {
    title: "Reifenmontage & Demontage",
    description: "Fachgerechte Montage und Demontage Ihrer Reifen auf Stahl- oder Alufelgen.",
    icon: "Wrench",
    category: "tire",
    image: "/img/reifenmontage.webp",
    slug: "reifenmontage",
  },
  {
    title: "Reifen auswuchten",
    description: "Präzises Auswuchten für ein ruhiges Fahrverhalten und geringeren Verschleiß.",
    icon: "Gauge",
    category: "tire",
    image: "/img/auswuchten.webp",
    slug: "auswuchten",
  },
  {
    title: "Optische Aufbereitung von Bremssätteln",
    description: "Individuelle optische Aufbereitung und farbliche Veredelung Ihrer Bremssättel – Bearbeitung am selben Tag möglich.",
    icon: "Paintbrush",
    category: "custom",
    image: "/img/bremssattel.webp",
    slug: "bremssattel-lackierung",
  },
  {
    title: "Alufelgen Smart Repair",
    description: "Professionelle Reparatur und optische Aufbereitung Ihrer Felgen – von Bordsteinschäden bis zur farblichen Veredelung.",
    icon: "Disc",
    category: "rim",
    image: "/img/felgen-smart-repair.webp",
    slug: "felgen-instandsetzung",
  },
  {
    title: "Reifen kaufen & verkaufen",
    description: "Ankauf & Verkauf von Neu- und Gebrauchtreifen – fair bewertet, geprüft und passend zu Ihrem Fahrzeug.",
    icon: "ShoppingCart",
    category: "sales",
    image: "/img/reifen-an-verkauf.webp",
    slug: "reifen-an-verkauf",
  },
  {
    title: "24/7 Pannendienst",
    description: "Schnelle Hilfe bei Panne oder Notfall – direkt telefonisch erreichbar.",
    icon: "PhoneCall",
    category: "emergency",
    image: null,
    slug: "pannendienst-24-7",
  },
];

export const defaultServiceCards: Service[] = defaultServices.map((service, index) => ({
  id: index + 1,
  ...service,
}));
