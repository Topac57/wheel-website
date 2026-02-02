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
    // Clear existing and reseed with updated data
    await db.delete(services);
    await db.insert(services).values([
      {
        title: "Reifenwechsel Sommer/Winter",
        description: "Professioneller Radwechsel für maximale Sicherheit zu jeder Jahreszeit.",
        icon: "RefreshCw",
        category: "tire",
        image: "https://i.imgur.com/KYSBCNi.jpeg"
      },
      {
        title: "Reifenmontage",
        description: "Fachgerechte Montage und Demontage Ihrer Reifen auf Stahl- oder Alufelgen.",
        icon: "Wrench",
        category: "tire",
        image: "https://i.imgur.com/RztsjSj.jpeg"
      },
      {
        title: "Reifen auswuchten",
        description: "Präzises Auswuchten für ein ruhiges Fahrverhalten und geringeren Verschleiß.",
        icon: "Gauge",
        category: "tire",
        image: "https://i.imgur.com/fiwh1Hk.jpeg"
      },
      {
        title: "Reifeneinlagerung",
        description: "Fachgerechte Lagerung Ihrer Saisonreifen unter optimalen Bedingungen.",
        icon: "Warehouse",
        category: "tire",
        image: "https://i.imgur.com/1WenJcY.jpeg"
      },
      {
        title: "Felgenservice",
        description: "Professionelle Reinigung und Pflege für den Werterhalt Ihrer Felgen.",
        icon: "Disc",
        category: "rim",
        image: "https://i.imgur.com/QoAtIbY.jpeg"
      },
      {
        title: "An- und Verkauf von Reifen",
        description: "Ankauf & Verkauf von Neu- und Gebrauchtreifen – fair bewertet, geprüft und passend zu Ihrem Fahrzeug.",
        icon: "ShoppingCart",
        category: "sales",
        image: "https://i.imgur.com/P54z2O0.jpeg"
      }
    ]);
  }
}

export const storage = new DatabaseStorage();
