/**
 * Titel und Beschreibung je Route.
 *
 * Diese Tabelle wird an zwei Stellen gelesen: Das Prerender-Skript schreibt die
 * Werte beim Build fest in den `<title>`- und `<meta name="description">`-Tag
 * jeder erzeugten HTML-Datei, und die `SEO`-Komponente aktualisiert sie beim
 * Wechsel der Seite im Browser. Ein Blick in den Quelltext zeigt also immer
 * schon den richtigen Titel — auch für Suchmaschinen und Link-Vorschauen.
 */
export interface PageMeta {
  title: string;
  description: string;
  /**
   * Das große Bild, das diese Seite ganz oben zeigt. Das Prerender-Skript
   * schreibt daraus den `<link rel="preload">` im Kopf der jeweiligen Seite,
   * damit das größte sichtbare Element sofort angefordert wird.
   */
  preload?: { href: string; srcset?: string };
}

const HERO_PRELOAD = {
  href: "/img/hero-werkstatt-768.webp",
  srcset: "/img/hero-werkstatt-768.webp 768w, /img/hero-werkstatt-1280.webp 1280w",
};

export const DEFAULT_META: PageMeta = {
  title: "Reifenservice Wuppertal-Vohwinkel – auch ohne Termin | ReifenDrive",
  description:
    "Reifenservice in Wuppertal-Vohwinkel: Reifenwechsel ab 14,99 €, Reifenmontage, Reifen kaufen, Alufelgen und 24/7 Pannendienst. Auch ohne Termin – jetzt anrufen: 0163 794 70 79.",
  preload: HERO_PRELOAD,
};

export const pageMeta: Record<string, PageMeta> = {
  "/": DEFAULT_META,
  "/leistungen/reifenwechsel": {
    title: "Reifenwechsel Wuppertal ab 14,99 € – ohne Termin | ReifenDrive",
    description:
      "Reifenwechsel in Wuppertal-Vohwinkel ab 14,99 €: Sommer-, Winter- und Allwetterreifen. Fachgerecht, schnell und auch ohne Termin. Jetzt anrufen.",
    preload: { href: "/img/reifenwechsel.webp" },
  },
  "/leistungen/reifenmontage": {
    title: "Reifenmontage Wuppertal – schonend für Alufelgen | ReifenDrive",
    description:
      "Professionelle Reifenmontage und Demontage in Wuppertal-Vohwinkel. Schonend für Stahl- und Alufelgen, auch ohne Termin. ReifenDrive – Taha Taleb.",
    preload: { href: "/img/reifenmontage.webp" },
  },
  "/leistungen/auswuchten": {
    title: "Reifen auswuchten in Wuppertal | ReifenDrive – Taha Taleb",
    description:
      "Reifen präzise auswuchten in Wuppertal-Vohwinkel für ruhiges Fahrverhalten und geringeren Verschleiß. Reifenservice in der Nähe – auch ohne Termin.",
    preload: { href: "/img/auswuchten.webp" },
  },
  "/leistungen/bremssattel-lackierung": {
    title: "Bremssättel lackieren in Wuppertal | ReifenDrive – Taha Taleb",
    description:
      "Optische Aufbereitung und farbliche Veredelung Ihrer Bremssättel in Wuppertal-Vohwinkel. Bearbeitung am selben Tag möglich. ReifenDrive – Taha Taleb.",
    preload: { href: "/img/bremssattel.webp" },
  },
  "/leistungen/felgen-instandsetzung": {
    title: "Alufelgen Smart Repair Wuppertal – Felgen reparieren | ReifenDrive",
    description:
      "Alufelgen Smart Repair in Wuppertal-Vohwinkel: Bordsteinschäden reparieren, Felgen aufbereiten und farblich veredeln. ReifenDrive – Taha Taleb.",
    preload: { href: "/img/felgen-smart-repair.webp" },
  },
  "/leistungen/reifen-an-verkauf": {
    title: "Reifen kaufen in Wuppertal – Neu & Gebraucht | ReifenDrive",
    description:
      "Reifen kaufen und verkaufen in Wuppertal-Vohwinkel. Neu- und Gebrauchtreifen, fair bewertet und geprüft. Reifenservice in der Nähe – auch ohne Termin.",
    preload: { href: "/img/reifen-an-verkauf.webp" },
  },
  "/leistungen/pannendienst-24-7": {
    title: "24/7 Pannendienst Wuppertal – Reifenpanne Soforthilfe | ReifenDrive",
    description:
      "Reifenpanne in Wuppertal? 24/7 Pannendienst von ReifenDrive: schnelle Hilfe bei platten Reifen, Reifenschäden und Felgenproblemen. Jetzt anrufen: 0163 794 70 79.",
  },
  "/impressum": {
    title: "Impressum | ReifenDrive – Taha Taleb, Wuppertal",
    description:
      "Impressum von ReifenDrive – Taha Taleb. Angaben gemäß § 5 TMG. Ludwig-Richter-Str. 13A, Wuppertal-Vohwinkel.",
  },
  "/datenschutz": {
    title: "Datenschutzerklärung | ReifenDrive – Taha Taleb, Wuppertal",
    description:
      "Datenschutzerklärung von ReifenDrive – Taha Taleb. Informationen zur Verarbeitung personenbezogener Daten.",
  },
  "/agb": {
    title: "Allgemeine Geschäftsbedingungen (AGB) | ReifenDrive – Taha Taleb",
    description:
      "Allgemeine Geschäftsbedingungen (AGB) der Reifenwerkstatt Taha Taleb – ReifenDrive, Wuppertal-Vohwinkel.",
  },
};

export function metaFor(path: string): PageMeta {
  return pageMeta[path] ?? DEFAULT_META;
}
