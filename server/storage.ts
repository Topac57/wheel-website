import { db } from "./db";
import {
  services,
  inquiries,
  type Service,
  type InsertService,
  type InsertInquiry,
  type Inquiry
} from "@shared/schema";
import { eq } from "drizzle-orm";

export interface IStorage {
  getServices(): Promise<Service[]>;
  createInquiry(inquiry: InsertInquiry): Promise<Inquiry>;
  seedServices(): Promise<void>;
}

export class DatabaseStorage implements IStorage {
  async getServices(): Promise<Service[]> {
    return await db.select().from(services);
  }

  async createInquiry(inquiry: InsertInquiry): Promise<Inquiry> {
    const [newInquiry] = await db.insert(inquiries).values(inquiry).returning();
    return newInquiry;
  }

  async seedServices(): Promise<void> {
    await db.delete(services);
    await db.insert(services).values([
      {
        title: "Reifenwechsel (Sommer / Winter / Allwetter)",
        description: "Professioneller Radwechsel für maximale Sicherheit zu jeder Jahreszeit.",
        icon: "RefreshCw",
        category: "tire",
        image: "https://i.imgur.com/KYSBCNi.jpeg",
        slug: "reifenwechsel"
      },
      {
        title: "Reifenmontage & Demontage",
        description: "Fachgerechte Montage und Demontage Ihrer Reifen auf Stahl- oder Alufelgen.",
        icon: "Wrench",
        category: "tire",
        image: "https://i.imgur.com/RztsjSj.jpeg",
        slug: "reifenmontage"
      },
      {
        title: "Reifen auswuchten",
        description: "Präzises Auswuchten für ein ruhiges Fahrverhalten und geringeren Verschleiß.",
        icon: "Gauge",
        category: "tire",
        image: "https://i.imgur.com/fiwh1Hk.jpeg",
        slug: "auswuchten"
      },
      {
        title: "Optische Aufbereitung von Bremssätteln",
        description: "Farbliche Veredelung Ihrer Bremssättel für einen hochwertigen, sportlichen Look – Bearbeitung am selben Tag möglich.",
        icon: "Paintbrush",
        category: "custom",
        image: "https://i.imgur.com/oQV4knw.jpeg",
        slug: "bremssattel-lackierung"
      },
      {
        title: "Felgen Smartrepair",
        description: "Professionelle Aufbereitung und Lackierung Ihrer Felgen – von Bordsteinschäden bis zur präzisen Farbtonanpassung.",
        icon: "Disc",
        category: "rim",
        image: "https://i.imgur.com/IZqqFth.jpeg",
        slug: "felgen-instandsetzung"
      },
      {
        title: "An- & Verkauf von Reifen",
        description: "Ankauf & Verkauf von Neu- und Gebrauchtreifen – fair bewertet, geprüft und passend zu Ihrem Fahrzeug.",
        icon: "ShoppingCart",
        category: "sales",
        image: "https://i.imgur.com/P54z2O0.jpeg",
        slug: "reifen-an-verkauf"
      },
      {
        title: "24/7 Pannendienst",
        description: "Schnelle Hilfe bei Panne oder Notfall – direkt telefonisch erreichbar.",
        icon: "PhoneCall",
        category: "emergency",
        image: null,
        slug: "pannendienst-24-7"
      }
    ]);
  }
}

export const storage = new DatabaseStorage();
