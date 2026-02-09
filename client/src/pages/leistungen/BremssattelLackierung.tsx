import { ServiceDetailLayout } from "@/components/ServiceDetailLayout";
import { SEO } from "@/components/SEO";

export default function BremssattelLackierung() {
  return (
    <>
      <SEO
        title="Bremssattel-Lackierung in Wuppertal | ReifenDrive – Taha Taleb"
        description="Professionelle Bremssattel-Lackierung in Wuppertal. Individuelle Farben für einen sportlichen Look. ReifenDrive – Taha Taleb."
      />
      <ServiceDetailLayout
        title="Bremssattel-Lackierung"
        seoTitle="Bremssattel-Lackierung in Wuppertal"
        seoDescription="Bremssattel-Lackierung in Wuppertal"
        intro="Setzen Sie sportliche Akzente – professionelle Bremssattel-Lackierung in Ihrer Wunschfarbe."
        heroImage="https://i.imgur.com/oQV4knw.jpeg"
        description="Farbige Bremssättel sind das i-Tüpfelchen für jeden Fahrzeug-Enthusiasten. Bei ReifenDrive lackieren wir Ihre Bremssättel in Ihrer Wunschfarbe – ob klassisches Rot, sportliches Gelb, dezentes Schwarz oder passend zur Fahrzeugfarbe. Wir arbeiten hitzebeständig und verwenden ausschließlich hochwertige Lacke, die den thermischen Belastungen standhalten."
        benefits={[
          "Individuelle Farbgestaltung nach Ihren Wünschen",
          "Hitzebeständige Speziallacke für maximale Haltbarkeit",
          "Sportlicher, hochwertiger Look für Ihr Fahrzeug",
          "Sorgfältige Vorbereitung und Abdeckung aller Bauteile",
          "Professionelle Ausführung vom Fachmann"
        ]}
        process={[
          "Beratung zur Farbauswahl und Abstimmung mit dem Fahrzeug",
          "Demontage der Räder und Reinigung der Bremssättel",
          "Abkleben und Vorbereitung der Oberfläche",
          "Auftragen des hitzebeständigen Speziallacks in mehreren Schichten",
          "Trocknung, Montage und Endkontrolle"
        ]}
        faq={[
          {
            question: "Welche Farben stehen zur Auswahl?",
            answer: "Grundsätzlich sind alle Farben möglich – von Rot, Gelb, Blau über Schwarz bis hin zu individuellen Tönen passend zu Ihrem Fahrzeug. Kontaktieren Sie uns für eine Beratung."
          },
          {
            question: "Hält die Lackierung der Hitze stand?",
            answer: "Ja, wir verwenden ausschließlich hitzebeständige Speziallacke, die für die hohen Temperaturen an der Bremse ausgelegt sind."
          },
          {
            question: "Wie lange dauert die Bremssattel-Lackierung?",
            answer: "Je nach Aufwand und Trocknungszeit sollten Sie mit 1–2 Tagen rechnen. Wir informieren Sie vorab über den genauen Zeitrahmen."
          },
          {
            question: "Müssen die Bremssättel dafür ausgebaut werden?",
            answer: "In den meisten Fällen werden die Räder demontiert und die Bremssättel im eingebauten Zustand sorgfältig abgeklebt und lackiert."
          }
        ]}
      />
    </>
  );
}
