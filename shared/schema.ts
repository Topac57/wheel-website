/**
 * Typen für die Leistungen.
 *
 * Früher wurden diese Typen aus einem Datenbankschema (Drizzle + Zod)
 * abgeleitet und die Leistungen zur Laufzeit von `/api/services` geholt. Diese
 * API gibt es auf der statisch ausgelieferten Seite nicht — der Aufruf lief
 * immer in den Fehlerfall und fiel auf dieselbe fest hinterlegte Liste zurück,
 * die jetzt direkt verwendet wird (siehe `shared/services.ts`).
 *
 * Damit entfallen Datenbank- und Validierungsbibliotheken komplett aus dem
 * Browser-Bündel.
 */

export interface Service {
  id: number;
  title: string;
  description: string;
  /** Name eines Lucide-Icons, siehe IconMap in ServiceCard.tsx. */
  icon: string;
  /** 'tire' | 'rim' | 'custom' | 'sales' | 'emergency' */
  category: string;
  /** Pfad zum Hintergrundbild, oder null für die Notfallkarte. */
  image: string | null;
  slug: string;
}

export type InsertService = Omit<Service, "id">;
