import { ServiceDetailLayout } from "@/components/ServiceDetailLayout";
import { SEO } from "@/components/SEO";

export default function Auswuchten() {
  return (
    <>
      <SEO
        title="Reifen auswuchten in Wuppertal | ReifenDrive – Taha Taleb"
        description="Reifen präzise auswuchten in Wuppertal für ein ruhiges Fahrverhalten und geringeren Verschleiß. ReifenDrive – Taha Taleb."
      />
      <ServiceDetailLayout
        title="Reifen auswuchten"
        seoTitle="Reifen auswuchten in Wuppertal"
        seoDescription="Reifen auswuchten in Wuppertal"
        intro="Präzises Auswuchten für maximalen Fahrkomfort – weniger Vibrationen, weniger Verschleiß."
        heroImage="https://i.imgur.com/fiwh1Hk.jpeg"
        description="Unwucht an den Reifen führt zu unangenehmen Vibrationen im Lenkrad, erhöhtem Reifenverschleiß und Belastung der Radaufhängung. Bei ReifenDrive setzen wir auf computergestützte Wuchtmaschinen, die selbst minimale Unwuchten erkennen und millimetergenau ausgleichen. Das Ergebnis: ein spürbar ruhigeres und sichereres Fahrgefühl."
        benefits={[
          "Spürbar weniger Vibrationen beim Fahren",
          "Gleichmäßiger Reifenverschleiß und längere Lebensdauer",
          "Schonung von Radlagern und Fahrwerk",
          "Computergestützte Präzision auf modernstem Equipment",
          "Inklusive bei jeder Reifenmontage"
        ]}
        process={[
          "Rad wird auf die Wuchtmaschine gespannt",
          "Computergestützte Messung der Unwucht",
          "Anbringen von Ausgleichsgewichten an der optimalen Position",
          "Kontrollmessung zur Bestätigung der Wuchtqualität",
          "Montage am Fahrzeug und Drehmomentprüfung"
        ]}
        faq={[
          {
            question: "Wie erkenne ich, dass meine Reifen ausgewuchtet werden müssen?",
            answer: "Typische Anzeichen sind Vibrationen im Lenkrad ab einer bestimmten Geschwindigkeit (meist ab 80–100 km/h) oder ein ungleichmäßiges Reifenbild."
          },
          {
            question: "Wie oft sollte man Reifen auswuchten?",
            answer: "Wir empfehlen das Auswuchten bei jedem Reifenwechsel oder wenn Sie Vibrationen bemerken. Auch nach dem Überfahren einer Bordsteinkante kann eine Prüfung sinnvoll sein."
          },
          {
            question: "Dauert das Auswuchten lange?",
            answer: "Das Auswuchten aller vier Räder dauert in der Regel nur 15–20 Minuten."
          }
        ]}
      />
    </>
  );
}
