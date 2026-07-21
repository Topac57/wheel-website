import { useEffect } from "react";
import { useLocation } from "wouter";
import { metaFor } from "@/lib/seo";
import { normalizePath } from "@/pages/registry";

/**
 * Hält Titel und Beschreibung beim Seitenwechsel im Browser aktuell.
 *
 * Für den ersten Seitenaufruf ist diese Komponente nicht zuständig — dort
 * stehen die richtigen Werte bereits im vorgerenderten HTML (siehe
 * `scripts/prerender.mjs`). Suchmaschinen und Link-Vorschauen sind damit nicht
 * darauf angewiesen, dass JavaScript läuft.
 */
export function RouteMeta() {
  const [location] = useLocation();

  useEffect(() => {
    const meta = metaFor(normalizePath(location));
    document.title = meta.title;

    const tag = document.querySelector('meta[name="description"]');
    if (tag) tag.setAttribute("content", meta.description);
  }, [location]);

  return null;
}
