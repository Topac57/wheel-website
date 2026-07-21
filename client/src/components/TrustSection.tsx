import { CalendarCheck, Clock, MapPin, ShieldCheck, Tag, Wrench } from "lucide-react";
import { business } from "@/lib/business";
import { GoogleRating } from "@/components/GoogleRating";
import { LocationMap } from "@/components/LocationMap";

/**
 * Vertrauensblock direkt unter dem Hero: echte Google-Bewertung, was wir
 * fachlich können, wo wir sind und wen wir bedienen.
 *
 * Bewusst ohne Fotos — es liegen keine echten Aufnahmen der Werkstatt vor, und
 * Stockfotos hätten hier den gegenteiligen Effekt.
 */
const proofPoints = [
  {
    icon: CalendarCheck,
    title: "Auch ohne Termin",
    text: "Vorbeikommen reicht. Bei einer Panne zählt jede Minute.",
  },
  {
    icon: Tag,
    title: `Reifenwechsel ab ${business.priceFrom}`,
    text: "Faire Festpreise – Sie erfahren die Kosten, bevor wir anfangen.",
  },
  {
    icon: Wrench,
    title: "Felgenschonende Montage",
    text: "Moderne Montage- und Wuchtmaschinen, auch für empfindliche Alufelgen.",
  },
  {
    icon: ShieldCheck,
    title: "24/7 Pannendienst",
    text: "Rund um die Uhr telefonisch erreichbar, wenn Sie unterwegs liegenbleiben.",
  },
];

export function TrustSection() {
  return (
    <section id="vertrauen" className="bg-white py-12 md:py-20">
      <div className="container-padding mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <div className="mb-8 rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-500">
                Das sagen unsere Kunden
              </p>
              <GoogleRating className="mb-4" />
              <a
                href={business.reviewsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex rounded-full bg-slate-900 px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-slate-800"
                data-testid="button-google-reviews"
              >
                Bewertungen auf Google ansehen
              </a>
            </div>

            <h2 className="mb-6 font-display text-2xl font-bold text-slate-900 md:text-3xl">
              Warum {business.owner}?
            </h2>

            <ul className="space-y-5">
              {proofPoints.map(({ icon: Icon, title, text }) => (
                <li key={title} className="flex gap-4">
                  <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="font-display font-bold text-slate-900">{title}</p>
                    <p className="text-sm leading-relaxed text-slate-600">{text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="mb-6 font-display text-2xl font-bold text-slate-900 md:text-3xl">
              So finden Sie uns
            </h2>

            <div className="mb-6 space-y-5">
              <div className="flex gap-4">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <div>
                  <p className="font-display font-bold text-slate-900">Adresse</p>
                  <p className="text-slate-600">{business.street}</p>
                  <p className="text-slate-600">
                    {business.postalCode} {business.city}-{business.district}
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Clock className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <div>
                  <p className="font-display font-bold text-slate-900">Öffnungszeiten</p>
                  <dl className="text-slate-600">
                    <div className="flex gap-3">
                      <dt className="w-20">Mo – Fr</dt>
                      <dd>09:00 – 18:00 Uhr</dd>
                    </div>
                    <div className="flex gap-3">
                      <dt className="w-20">Samstag</dt>
                      <dd>09:00 – 15:00 Uhr</dd>
                    </div>
                    <div className="flex gap-3">
                      <dt className="w-20">Sonntag</dt>
                      <dd>geschlossen</dd>
                    </div>
                  </dl>
                  <p className="mt-1 text-sm text-slate-500">
                    Pannendienst rund um die Uhr telefonisch erreichbar.
                  </p>
                </div>
              </div>
            </div>

            <LocationMap />

            <p className="mt-4 rounded-xl bg-primary/5 px-4 py-3 text-sm font-medium text-slate-700">
              Wir sind für Sie da in <strong>Wuppertal-Vohwinkel &amp; Umgebung – auch Solingen</strong>,
              Haan, Hilden und Erkrath.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
