import { useState } from "react";
import { MapPin, Navigation } from "lucide-react";
import { business } from "@/lib/business";

const fullAddress = `${business.street}, ${business.postalCode} ${business.city}`;
const mapEmbedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(fullAddress)}&z=16&hl=de&output=embed`;
const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(fullAddress)}`;

/**
 * Karte, die erst auf Klick geladen wird.
 *
 * Zwei Gründe: Ein Google-Maps-iframe zieht mehrere hundert Kilobyte und setzt
 * Cookies, bevor der Besucher irgendetwas getan hat — das kostet Ladezeit auf
 * dem Handy und ist ohne Einwilligung datenschutzrechtlich heikel. Ohne
 * JavaScript bleibt die Adresse samt Routen-Link sichtbar, es geht also nichts
 * verloren.
 */
export function LocationMap() {
  const [mapLoaded, setMapLoaded] = useState(false);

  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-100">
      {mapLoaded ? (
        <iframe
          src={mapEmbedUrl}
          title={`Standort ${business.name}, ${fullAddress}`}
          className="h-[280px] w-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      ) : (
        <div className="flex h-[280px] flex-col items-center justify-center gap-4 p-6 text-center">
          <MapPin className="h-8 w-8 text-primary" />
          <div>
            <p className="font-display font-bold text-slate-900">{fullAddress}</p>
            <p className="text-sm text-slate-600">{business.city}-{business.district}</p>
          </div>

          <div className="flex flex-wrap justify-center gap-2">
            <button
              type="button"
              onClick={() => setMapLoaded(true)}
              className="rounded-full bg-slate-900 px-4 py-2 text-sm font-bold text-white transition-colors hover:bg-slate-800"
              data-testid="button-load-map"
            >
              Karte laden
            </button>
            <a
              href={directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-bold text-primary-foreground transition-opacity hover:opacity-90"
              data-testid="link-directions"
            >
              <Navigation className="h-4 w-4" />
              Route planen
            </a>
          </div>

          <p className="text-xs text-slate-500">
            Beim Laden der Karte werden Daten an Google übertragen.
          </p>
        </div>
      )}
    </div>
  );
}
