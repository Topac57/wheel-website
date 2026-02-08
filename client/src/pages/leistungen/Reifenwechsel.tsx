import { ServiceDetailLayout } from "@/components/ServiceDetailLayout";
import { SEO } from "@/components/SEO";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const tireBrands = [
  {
    name: "Continental",
    description: "Deutsche Ingenieurskunst für höchste Sicherheit und präzises Fahrverhalten.",
  },
  {
    name: "Michelin",
    description: "Premium-Reifen mit Fokus auf Langlebigkeit, Komfort und Performance.",
  },
  {
    name: "Pirelli",
    description: "Sportliche Reifenlösungen für dynamisches Fahren und starke Straßenlage.",
  },
  {
    name: "Goodyear",
    description: "Innovative Reifentechnologie für zuverlässige Performance bei jedem Wetter.",
  },
  {
    name: "Bridgestone",
    description: "Hochwertige Reifen mit ausgewogener Balance aus Komfort und Kontrolle.",
  },
  {
    name: "Dunlop",
    description: "Dynamische Reifen für präzises Handling und sportlichen Fahrstil.",
  },
];

function BrandGridSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto container-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-8" data-testid="heading-tire-brands">Bekannte Reifenhersteller</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4" data-testid="brand-grid">
            {tireBrands.map((brand) => (
              <Card key={brand.name} className="border-none shadow-sm" data-testid={`brand-card-${brand.name.toLowerCase()}`}>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-2">{brand.name}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{brand.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <p className="text-muted-foreground text-sm mt-6">
            Weitere Marken und aktuelle Verfügbarkeiten gerne auf Anfrage.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default function Reifenwechsel() {
  return (
    <>
      <SEO
        title="Reifenwechsel in Wuppertal – Sommer, Winter, Allwetter | ReifenDrive"
        description="Professioneller Reifenwechsel in Wuppertal: Sommer-, Winter- und Allwetterreifen. Fachgerecht, schnell und sicher bei ReifenDrive – Taha Taleb."
      />
      <ServiceDetailLayout
        title="Reifenwechsel (Sommer / Winter / Allwetter)"
        seoTitle="Reifenwechsel in Wuppertal"
        seoDescription="Professioneller Reifenwechsel in Wuppertal"
        intro="Saisonaler Reifenwechsel vom Profi – schnell, sicher und schonend für Ihr Fahrzeug."
        heroImage="https://i.imgur.com/KYSBCNi.jpeg"
        description="Der regelmäßige Reifenwechsel ist essenziell für Ihre Sicherheit und die Langlebigkeit Ihrer Reifen. Bei ReifenDrive sorgen wir dafür, dass Ihr Fahrzeug zu jeder Jahreszeit optimal bereift ist. Ob Sommerreifen für trockene Straßen, Winterreifen für Eis und Schnee oder Allwetterreifen für ganzjährigen Komfort – wir beraten Sie individuell und montieren fachgerecht."
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
