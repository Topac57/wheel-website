/**
 * Einzige Quelle der Wahrheit für alle Geschäftsdaten (NAP, Öffnungszeiten,
 * Bewertungen, Preisanker). Alles hier ist am 21.07.2026 direkt gegen das
 * Google-Unternehmensprofil abgeglichen — wer etwas ändert, ändert es dort
 * zuerst und trägt es dann hier nach. Name, Adresse und Telefonnummer müssen
 * zeichengleich mit Google sein, sonst leidet das lokale Ranking.
 */

export const business = {
  name: "ReifenDrive – Taha Taleb",
  owner: "Taha Taleb",

  /**
   * Schreibweise mit Leerzeichen ist Absicht: Google Ads tauscht genau dieses
   * Muster gegen die Weiterleitungsnummer aus. Nicht umformatieren.
   */
  phoneDisplay: "0163 794 70 79",
  /** Echter tel:-Link — daran hängt die Click-to-Call-Messung in Google Ads. */
  phoneHref: "tel:+491637947079",
  phoneE164: "+491637947079",
  whatsappUrl: "https://wa.me/491637947079",

  street: "Ludwig-Richter-Str. 13A",
  postalCode: "42329",
  city: "Wuppertal",
  district: "Vohwinkel",
  /** Koordinaten aus dem Google-Profil, nicht geschätzt. */
  geo: { lat: 51.2277789, lng: 7.0637916 },

  /** Stand 21.07.2026, aus dem Google-Unternehmensprofil abgelesen. */
  rating: 4.8,
  reviewCount: 41,
  reviewsUrl: "https://www.google.com/maps/place/Reifendrive+Taha+Taleb/@51.2277789,7.0637916,17z",

  priceFrom: "14,99 €",
} as const;

/** 0 = Sonntag … 6 = Samstag, passend zu Date#getDay(). */
type DayHours = { open: number; close: number } | null;

export const openingHours: readonly DayHours[] = [
  null, // So
  { open: 9, close: 18 }, // Mo
  { open: 9, close: 18 }, // Di
  { open: 9, close: 18 }, // Mi
  { open: 9, close: 18 }, // Do
  { open: 9, close: 18 }, // Fr
  { open: 9, close: 15 }, // Sa
];

const DAY_SHORT = ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"] as const;

/**
 * Wird ohne JavaScript ausgeliefert und ist deshalb bewusst zeitlos formuliert:
 * lieber die Zeiten nennen als eine Behauptung ("jetzt geöffnet"), die zum
 * Zeitpunkt des Abrufs falsch sein kann.
 */
export const OPENING_HOURS_FALLBACK = "Mo–Fr 9–18 Uhr · Sa 9–15 Uhr";

/**
 * Aktuelle Uhrzeit in Europe/Berlin — unabhängig davon, wie die Zeitzone des
 * Besuchergeräts eingestellt ist.
 */
function berlinNow(now: Date): { day: number; minutes: number } {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "Europe/Berlin",
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).formatToParts(now);

  const get = (type: string) => parts.find((p) => p.type === type)?.value ?? "";
  const weekdayIndex = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].indexOf(get("weekday"));
  // Intl liefert Mitternacht je nach ICU-Version als "24" — auf 0 normalisieren.
  const hour = Number(get("hour")) % 24;

  return { day: weekdayIndex, minutes: hour * 60 + Number(get("minute")) };
}

function formatHour(hour: number): string {
  return `${hour} Uhr`;
}

export type OpeningStatus = {
  isOpen: boolean;
  /** Fertiger Text für das Badge, z. B. „Jetzt geöffnet – bis 18 Uhr“. */
  label: string;
};

export function getOpeningStatus(now: Date = new Date()): OpeningStatus {
  const { day, minutes } = berlinNow(now);
  const today = openingHours[day];

  if (today && minutes >= today.open * 60 && minutes < today.close * 60) {
    return { isOpen: true, label: `Jetzt geöffnet – bis ${formatHour(today.close)}` };
  }

  if (today && minutes < today.open * 60) {
    return { isOpen: false, label: `Öffnet heute um ${formatHour(today.open)}` };
  }

  // Nächsten Öffnungstag suchen (max. 7 Tage, damit die Schleife immer endet).
  for (let offset = 1; offset <= 7; offset++) {
    const nextDay = (day + offset) % 7;
    const next = openingHours[nextDay];
    if (!next) continue;
    const when = offset === 1 ? "morgen" : DAY_SHORT[nextDay];
    return { isOpen: false, label: `Geschlossen – öffnet ${when} ${formatHour(next.open)}` };
  }

  return { isOpen: false, label: OPENING_HOURS_FALLBACK };
}
