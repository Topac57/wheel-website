import { ServiceDetailLayout } from "@/components/ServiceDetailLayout";
import { Badge } from "@/components/ui/badge";

export default function ReifenAnVerkauf() {
  return (
    <>
      <ServiceDetailLayout
        title="An- & Verkauf von Reifen"
        seoTitle="Reifen An- & Verkauf in Wuppertal"
        seoDescription="Reifen kaufen und verkaufen in Wuppertal"
        intro="Hochwertige Neu- und Gebrauchtreifen kaufen oder Ihre alten Reifen fair verkaufen – alles aus einer Hand."
        heroImage="/img/reifen-an-verkauf.webp"
        description="Bei ReifenDrive finden Sie ein sorgfältig ausgewähltes Sortiment an Neu- und Gebrauchtreifen. Jeder Gebrauchtreifen wird vor dem Verkauf auf Profiltiefe, Beschädigungen und Alter geprüft. Gleichzeitig kaufen wir gut erhaltene Reifen zu fairen Preisen an. Kontaktieren Sie uns für aktuelle Verfügbarkeit und individuelle Angebote."
        benefits={[
          "Geprüfte Neu- und Gebrauchtreifen zu fairen Preisen",
          "Professionelle Zustandsbewertung jedes Reifens",
          "Ankauf Ihrer gebrauchten Reifen zu fairen Konditionen",
          "Beratung zur passenden Reifenwahl für Ihr Fahrzeug",
          "Montage direkt vor Ort möglich"
        ]}
        process={[
          "Kontaktaufnahme per Telefon oder WhatsApp mit Fahrzeugdaten",
          "Beratung zur passenden Reifengröße und -art",
          "Angebotserstellung basierend auf aktuellem Bestand",
          "Terminvereinbarung für Abholung oder Montage",
          "Bei Ankauf: Zustandsbewertung und faire Preisermittlung"
        ]}
        faq={[
          {
            question: "Welche Reifenmarken haben Sie im Sortiment?",
            answer: "Unser Sortiment variiert und umfasst Reifen verschiedener Hersteller. Kontaktieren Sie uns per WhatsApp oder Telefon für aktuelle Angebote."
          },
          {
            question: "Wie wird der Zustand der Gebrauchtreifen geprüft?",
            answer: "Jeder Gebrauchtreifen wird auf Profiltiefe (mindestens 4mm), Beschädigungen, Alterung und allgemeine Sicherheit geprüft, bevor er in den Verkauf geht."
          },
          {
            question: "Kann ich meine alten Reifen bei Ihnen verkaufen?",
            answer: "Ja, wir kaufen gut erhaltene Reifen mit ausreichend Profil an. Bringen Sie die Reifen vorbei oder senden Sie Bilder per WhatsApp für eine Vorab-Einschätzung."
          },
          {
            question: "Ist die Verfügbarkeit garantiert?",
            answer: "Die Verfügbarkeit hängt vom aktuellen Bestand und unseren Lieferanten ab. Kontaktieren Sie uns per WhatsApp oder Telefon für sofortige Auskunft zu aktuellen Angeboten."
          }
        ]}
      >
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Reifenarten zur Auswahl</h3>
            <div className="flex flex-wrap gap-3 mb-4" data-testid="tire-type-chips">
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

          <div data-testid="manufacturer-info">
            <h3 className="text-2xl font-bold mb-4">Markenreifen verfügbar</h3>
            <p className="text-muted-foreground leading-relaxed">
              Je nach Saison und Lieferantenverfügbarkeit führen wir Reifen namhafter Hersteller wie Continental, Michelin, Pirelli, Goodyear, Bridgestone und Dunlop. Unser Bestand wechselt regelmäßig – kontaktieren Sie uns per{" "}
              <a href="tel:+491637947079" className="text-primary font-medium" data-testid="link-manufacturer-phone">Telefon</a> oder{" "}
              <a href="https://wa.me/491637947079" target="_blank" rel="noopener noreferrer" className="text-primary font-medium" data-testid="link-manufacturer-whatsapp">WhatsApp</a>{" "}
              für aktuelle Angebote und Verfügbarkeiten.
            </p>
          </div>
        </div>
      </ServiceDetailLayout>
    </>
  );
}
