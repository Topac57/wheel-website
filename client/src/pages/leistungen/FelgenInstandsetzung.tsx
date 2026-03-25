import { ServiceDetailLayout } from "@/components/ServiceDetailLayout";
import { SEO } from "@/components/SEO";

export default function FelgenInstandsetzung() {
  return (
    <>
      <SEO
        title="Felgen Smartrepair in Wuppertal – Aufbereitung & Lackierung | ReifenDrive"
        description="Professionelles Felgen Smartrepair in Wuppertal: Bordsteinschäden aufbereiten, Felgen lackieren und optisch erneuern. ReifenDrive – Taha Taleb."
      />
      <ServiceDetailLayout
        title="Felgen Smartrepair"
        seoTitle="Felgen Smartrepair in Wuppertal"
        seoDescription="Professionelles Felgen Smartrepair in Wuppertal"
        intro="Bordsteinschäden, Kratzer oder abgeplatzte Farbe? Wir bringen Ihre Felgen mit präziser Aufbereitung wieder auf Hochglanz – farbgetreu und mit perfektem Finish."
        heroImage="https://i.imgur.com/IZqqFth.jpeg"
        description="Beschädigte Felgen sind nicht nur ein optischer Makel, sondern mindern auch den Wert Ihres Fahrzeugs. Bei ReifenDrive bieten wir professionelles Felgen Smartrepair an: Von der Aufbereitung typischer Bordsteinschäden über die Beseitigung von Kratzern und Abschürfungen bis hin zur professionellen Neulackierung in der passenden Felgenfarbe. Wir arbeiten mit präziser Farbtonanpassung, damit Ihre Felgen nach der Aufbereitung wieder wie neu aussehen."
        benefits={[
          "Fachgerechte Aufbereitung von Bordsteinschäden und Kratzern",
          "Präzise Farbtonanpassung an Ihre originale Felgenfarbe",
          "Hochwertige Lackierung mit langlebigem Finish",
          "Optische Aufwertung und Werterhalt Ihres Fahrzeugs",
          "Abschließende Reinigung und Qualitätskontrolle",
          "Schnelle Bearbeitung mit Terminvereinbarung"
        ]}
        process={[
          "Kontaktaufnahme per Telefon oder WhatsApp mit Fotos der Beschädigung",
          "Sichtprüfung und Bewertung des optischen Schadens vor Ort",
          "Aufbereitung der Oberfläche: Schleifen, Spachteln und Glätten der beschädigten Stellen",
          "Farbtonanpassung und Lackierung in der passenden Felgenfarbe",
          "Trocknung, abschließende Reinigung und Endkontrolle"
        ]}
        faq={[
          {
            question: "Welche Schäden können aufbereitet werden?",
            answer: "Typische Bordsteinschäden, Kratzer, Abschürfungen und Lackabplatzungen können in den meisten Fällen vollständig aufbereitet werden. Bei größeren Beschädigungen beraten wir Sie ehrlich über die Möglichkeiten."
          },
          {
            question: "Wird die Farbe exakt an meine Felgen angepasst?",
            answer: "Ja, wir führen eine präzise Farbtonanpassung durch, damit die aufbereitete Stelle optisch nicht mehr von der Originaloberfläche zu unterscheiden ist."
          },
          {
            question: "Wie lange dauert ein Felgen Smartrepair?",
            answer: "Je nach Umfang der Beschädigung dauert die Aufbereitung in der Regel 1–2 Arbeitstage. Wir informieren Sie vorab über den genauen Zeitrahmen."
          },
          {
            question: "Können auch Alufelgen aufbereitet werden?",
            answer: "Ja, wir arbeiten mit Alufelgen, Stahlfelgen und Schmiedefelgen. Senden Sie uns gerne Bilder per WhatsApp für eine Vorab-Einschätzung."
          },
          {
            question: "Was kostet das Felgen Smartrepair?",
            answer: "Die Kosten richten sich nach Art und Umfang der Beschädigung. Kontaktieren Sie uns per Telefon oder WhatsApp für eine individuelle Einschätzung."
          }
        ]}
      />
    </>
  );
}
