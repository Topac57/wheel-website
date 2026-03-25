import { ServiceDetailLayout } from "@/components/ServiceDetailLayout";
import { SEO } from "@/components/SEO";

export default function BremssattelLackierung() {
  return (
    <>
      <SEO
        title="Optische Aufbereitung von Bremssätteln in Wuppertal | ReifenDrive – Taha Taleb"
        description="Optische Aufbereitung von Bremssätteln in Wuppertal – farbliche Veredelung für eine sportliche Fahrzeugoptik. Bearbeitung am selben Tag möglich. ReifenDrive – Taha Taleb."
      />
      <ServiceDetailLayout
        title="Optische Aufbereitung von Bremssätteln"
        seoTitle="Optische Aufbereitung von Bremssätteln in Wuppertal"
        seoDescription="Optische Aufbereitung von Bremssätteln zur Verbesserung der Fahrzeugoptik in Wuppertal"
        intro="Verleihen Sie Ihrem Fahrzeug einen sportlichen, individuellen Look – durch professionelle farbliche Veredelung der Bremssättel."
        heroImage="https://i.imgur.com/oQV4knw.jpeg"
        description="Optische Aufbereitung von Bremssätteln zur Verbesserung der Fahrzeugoptik – inklusive Reinigung und farblicher Veredelung. Ob klassisches Rot, sportliches Gelb, dezentes Schwarz oder ein individueller Farbton passend zu Ihrem Fahrzeug – wir gestalten die Bremssättel nach Ihren Wünschen. Das Ergebnis: ein hochwertiges, gepflegtes Erscheinungsbild, das durch die Felgen hindurch sofort ins Auge fällt. Bearbeitung am selben Tag möglich."
        benefits={[
          "Individuelle Farbgestaltung nach Ihren Wünschen",
          "Optische Aufwertung und sportlicher Look für Ihr Fahrzeug",
          "Inklusive gründlicher Reinigung und Vorbereitung der Oberfläche",
          "Bearbeitung am selben Tag möglich",
          "Hochwertige Ausführung mit sorgfältiger Abdeckung aller Bauteile",
          "Professionelles Finish für einen langlebigen, ansprechenden Look"
        ]}
        process={[
          "Beratung zur Farbauswahl und Abstimmung auf Ihr Fahrzeug",
          "Gründliche Reinigung und Vorbereitung der Oberfläche",
          "Sorgfältiges Abkleben aller angrenzenden Bauteile",
          "Farbliche Veredelung in mehreren sorgfältigen Schichten",
          "Trocknung, Endkontrolle und Übergabe am selben Tag"
        ]}
        faq={[
          {
            question: "Welche Farben stehen zur Auswahl?",
            answer: "Grundsätzlich sind alle Farben möglich – von Rot, Gelb, Blau über Schwarz bis hin zu individuellen Tönen passend zu Ihrem Fahrzeug. Kontaktieren Sie uns für eine persönliche Beratung."
          },
          {
            question: "Kann die Aufbereitung noch am selben Tag abgeholt werden?",
            answer: "Ja, in der Regel ist die Bearbeitung am selben Tag möglich. Wir informieren Sie bei der Terminvereinbarung über den genauen Zeitrahmen."
          },
          {
            question: "Wie lange hält die Farbveredelung?",
            answer: "Bei sachgemäßer Pflege hält die Farbveredelung langfristig und behält ihr ansprechendes Erscheinungsbild. Wir informieren Sie gerne über die richtige Pflege."
          },
          {
            question: "Muss das Fahrzeug dafür länger abgegeben werden?",
            answer: "In der Regel nicht – die Aufbereitung ist in den meisten Fällen taggleich abgeschlossen. Sprechen Sie uns einfach an und wir stimmen den Ablauf gemeinsam ab."
          }
        ]}
      />
    </>
  );
}
