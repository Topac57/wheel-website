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
    const existing = await this.getServices();
    if (existing.length === 0) {
      await db.insert(services).values([
        {
          title: "Reifenwechsel Sommer/Winter",
          description: "Professioneller Radwechsel für maximale Sicherheit zu jeder Jahreszeit.",
          icon: "RefreshCw",
          category: "tire"
        },
        {
          title: "Reifenmontage",
          description: "Fachgerechte Montage und Demontage Ihrer Reifen auf Stahl- oder Alufelgen.",
          icon: "Wrench",
          category: "tire"
        },
        {
          title: "Reifen auswuchten",
          description: "Präzises Auswuchten für ein ruhiges Fahrverhalten und geringeren Verschleiß.",
          icon: "Gauge",
          category: "tire"
        },
        {
          title: "Reifeneinlagerung",
          description: "Fachgerechte Lagerung Ihrer Saisonreifen unter optimalen Bedingungen.",
          icon: "Warehouse",
          category: "tire"
        },
        {
          title: "Felgenservice",
          description: "Professionelle Reinigung und Pflege für den Werterhalt Ihrer Felgen.",
          icon: "Disc",
          category: "rim"
        },
        {
          title: "Premium Beratung",
          description: "Individuelle Beratung für Premium- und Sportfahrzeuge.",
          icon: "ShieldCheck",
          category: "consulting"
        }
      ]);
    }
  }
}

export const storage = new DatabaseStorage();
