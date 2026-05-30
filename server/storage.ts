import { db } from "./db";
import {
  services,
  inquiries,
  type Service,
  type InsertService,
  type InsertInquiry,
  type Inquiry
} from "@shared/schema";
import { defaultServices } from "@shared/services";
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
    await db.insert(services).values(defaultServices);
  }
}

export const storage = new DatabaseStorage();
