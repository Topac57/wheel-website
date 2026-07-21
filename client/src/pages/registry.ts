import type { ComponentType } from "react";

/**
 * Alle Routen der Seite mit einem dynamischen Import pro Seite. Dadurch landet
 * jede Unterseite in einem eigenen Chunk und die Startseite lädt nicht den Code
 * der sieben Leistungsseiten mit.
 *
 * WICHTIG: Die Pfade hier und in `registry.server.ts` müssen identisch sein.
 * Das Prerender-Skript bricht den Build ab, falls sie auseinanderlaufen.
 */
export const pageLoaders = {
  "/": () => import("./Home"),
  "/leistungen/reifenwechsel": () => import("./leistungen/Reifenwechsel"),
  "/leistungen/reifenmontage": () => import("./leistungen/Reifenmontage"),
  "/leistungen/auswuchten": () => import("./leistungen/Auswuchten"),
  "/leistungen/bremssattel-lackierung": () => import("./leistungen/BremssattelLackierung"),
  "/leistungen/felgen-instandsetzung": () => import("./leistungen/FelgenInstandsetzung"),
  "/leistungen/reifen-an-verkauf": () => import("./leistungen/ReifenAnVerkauf"),
  "/leistungen/pannendienst-24-7": () => import("./leistungen/Pannendienst"),
  "/impressum": () => import("./Impressum"),
  "/datenschutz": () => import("./Datenschutz"),
  "/agb": () => import("./AGB"),
} satisfies Record<string, () => Promise<{ default: ComponentType }>>;

export type RoutePath = keyof typeof pageLoaders;

export const routePaths = Object.keys(pageLoaders) as RoutePath[];

/**
 * Vereinheitlicht Pfade, bevor sie mit der Routentabelle verglichen werden.
 *
 * „/impressum/“ und „/impressum“ sind dieselbe Seite. Ohne diese Normalisierung
 * liefert der Server zwar das richtige vorgerenderte HTML, der Browser findet
 * beim Hydrieren aber keine passende Route und ersetzt die fertige Seite durch
 * eine 404-Meldung — ein Fehler, der erst nach dem Laden auftritt und deshalb
 * leicht unbemerkt bleibt.
 */
export function normalizePath(path: string): string {
  const trimmed = path.replace(/\/+$/, "");
  return trimmed === "" ? "/" : trimmed;
}

/** Lädt die Komponente zu einem Pfad, mit 404-Seite als Rückfallebene. */
export async function loadPage(path: string): Promise<ComponentType> {
  const loader = pageLoaders[normalizePath(path) as RoutePath];
  const mod = loader ? await loader() : await import("./not-found");
  return mod.default;
}
