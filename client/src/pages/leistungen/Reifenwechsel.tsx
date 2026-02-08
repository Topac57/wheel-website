import { ServiceDetailLayout } from "@/components/ServiceDetailLayout";
import { SEO } from "@/components/SEO";
import { Badge } from "@/components/ui/badge";

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
