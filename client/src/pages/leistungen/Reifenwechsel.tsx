import { ServiceDetailLayout } from "@/components/ServiceDetailLayout";
import { Badge } from "@/components/ui/badge";

const premiumBrands = [
  "Continental", "Michelin", "Pirelli", "Bridgestone", "Goodyear",
  "Dunlop", "Hankook", "Yokohama", "Falken", "Vredestein",
  "Nokian Tyres", "BFGoodrich", "Cooper", "Toyo", "Nexen"
];

function BrandGridSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto container-padding">
        <div>
          <h2 className="text-3xl font-bold mb-4" data-testid="heading-tire-brands">Premium-Reifenmarken</h2>
          <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
            Wir führen eine breite Auswahl an Premium-Reifen führender Hersteller – je nach Saison und Verfügbarkeit.
          </p>

          <h3 className="text-lg font-semibold mb-4 text-muted-foreground">Beispiele (Auswahl)</h3>
          <div className="flex flex-wrap gap-2" data-testid="brand-grid">
            {premiumBrands.map((brand) => (
              <Badge
                key={brand}
                variant="secondary"
                className="text-sm px-4 py-2 no-default-hover-elevate no-default-active-elevate"
                data-testid={`brand-${brand.toLowerCase().replace(/\s+/g, "-")}`}
              >
                {brand}
              </Badge>
            ))}
          </div>

          <p className="text-muted-foreground text-sm mt-6">
            Weitere Marken auf Anfrage.
          </p>
        </div>
      </div>
    </section>
  );
}

export default function Reifenwechsel() {
  return (
    <>
      <ServiceDetailLayout
        title="Reifenwechsel (Sommer / Winter / Allwetter)"
        seoTitle="Reifenwechsel in Wuppertal"
        seoDescription="Professioneller Reifenwechsel in Wuppertal"
        intro="Saisonaler Reifenwechsel vom Profi – schnell, sicher und schonend für Ihr Fahrzeug."
        heroImage="/img/reifenwechsel.webp"
        description="Der regelmäßige Reifenwechsel ist essenziell für Ihre Sicherheit und die Langlebigkeit Ihrer Reifen. Bei ReifenDrive sorgen wir dafür, dass Ihr Fahrzeug zu jeder Jahreszeit optimal bereift ist. Ob Sommerreifen für trockene Straßen, Winterreifen für Eis und Schnee oder Allwetterreifen für ganzjährigen Komfort – wir beraten Sie individuell und montieren fachgerecht. Auch für Kunden mit kleinerem Budget bieten wir passende und zuverlässige Lösungen an."
        benefits={[
          "Maximale Sicherheit zu jeder Jahreszeit",
          "Optimale Bremsleistung und Straßenhaftung",
          "Verlängerte Lebensdauer Ihrer Reifen durch rechtzeitigen Wechsel",
          "Professionelle Prüfung von Profiltiefe und Reifenzustand",
          "Express-Service ohne lange Wartezeiten"
        ]}
        process={[
          "Terminvereinbarung per Telefon oder WhatsApp",
          "Sichtprüfung der aktuellen Bereifung und Zustandsbewertung",
          "Fachgerechte Demontage der alten Reifen",
          "Montage der neuen Saisonreifen mit korrektem Drehmoment",
          "Kontrolle des Reifendrucks und finale Prüfung"
        ]}
        faq={[
          {
            question: "Wann sollte ich meine Reifen wechseln?",
            answer: "Die Faustregel lautet: Von O bis O – von Oktober bis Ostern Winterreifen, danach Sommerreifen. Wir empfehlen den Wechsel, sobald die Temperaturen dauerhaft unter 7°C fallen oder über 7°C steigen."
          },
          {
            question: "Wie lange dauert ein Reifenwechsel?",
            answer: "Bei ReifenDrive dauert ein kompletter Reifenwechsel in der Regel 20–30 Minuten. Mit Termin gibt es keine Wartezeit."
          },
          {
            question: "Sind Allwetterreifen eine gute Alternative?",
            answer: "Allwetterreifen bieten einen guten Kompromiss für Fahrer, die wenig Kilometer fahren und moderate Wetterbedingungen haben. Für optimale Sicherheit empfehlen wir dennoch den saisonalen Wechsel."
          },
          {
            question: "Brauche ich einen Termin?",
            answer: "Ein Termin ist empfehlenswert, damit wir Sie ohne Wartezeit bedienen können. Rufen Sie uns an oder schreiben Sie per WhatsApp."
          }
        ]}
        extraSections={<BrandGridSection />}
      >
        <div>
          <h3 className="text-2xl font-bold mb-4">Reifenarten zur Auswahl</h3>
          <div className="flex flex-wrap gap-3" data-testid="tire-type-chips">
            <Badge variant="secondary" className="text-base px-5 py-2.5" data-testid="chip-sommerreifen">
              Sommerreifen
            </Badge>
            <Badge variant="secondary" className="text-base px-5 py-2.5" data-testid="chip-winterreifen">
              Winterreifen
            </Badge>
            <Badge variant="secondary" className="text-base px-5 py-2.5" data-testid="chip-allwetterreifen">
              Allwetterreifen
            </Badge>
          </div>
        </div>
      </ServiceDetailLayout>
    </>
  );
}
