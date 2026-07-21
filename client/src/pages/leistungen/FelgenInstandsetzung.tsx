import { ServiceDetailLayout } from "@/components/ServiceDetailLayout";

export default function FelgenInstandsetzung() {
  return (
    <>
      <ServiceDetailLayout
        title="Felgen Smart Repair"
        seoTitle="Felgen Smart Repair in Wuppertal"
        seoDescription="Professionelle Felgen Smart Repair in Wuppertal"
        intro="Bordsteinschäden, Kratzer oder abgeplatzte Farbe? Wir bringen Ihre Felgen professionell wieder in Form – präzise, farbgetreu und mit perfektem Finish."
        heroImage="/img/felgen-smart-repair.webp"
        description="Beschädigte Felgen sind nicht nur ein optischer Makel, sondern können auch die Sicherheit beeinträchtigen. Bei ReifenDrive bieten wir eine umfassende Felgen Smart Repair an: Von der Reparatur typischer Bordsteinschäden über die Beseitigung von Kratzern und Dellen bis hin zur farblichen Veredelung in der passenden Felgenfarbe. Wir arbeiten mit präziser Farbtonanpassung, damit Ihre Felgen nach der Aufbereitung wieder wie neu aussehen. Auch größere Beschädigungen setzen wir – soweit technisch möglich – fachgerecht instand."
        benefits={[
          "Fachgerechte Reparatur von Bordsteinschäden und Kratzern",
          "Instandsetzung auch größerer Beschädigungen (soweit möglich)",
          "Präzise Farbtonanpassung an Ihre originale Felgenfarbe",
          "Hochwertige optische Aufbereitung mit langlebigem Finish",
          "Abschließende Reinigung und Qualitätskontrolle",
          "Werterhalt und optische Aufwertung Ihrer Felgen"
        ]}
        process={[
          "Kontaktaufnahme per Telefon oder WhatsApp mit Fotos der Beschädigung",
          "Sichtprüfung und Bewertung des Schadens vor Ort",
          "Fachgerechte Reparatur: Schleifen, Spachteln und Glätten der beschädigten Stellen",
          "Farbliche Veredelung in der passenden Felgenfarbe",
          "Trocknung, abschließende Reinigung und Endkontrolle"
        ]}
        faq={[
          {
            question: "Welche Schäden können repariert werden?",
            answer: "Typische Bordsteinschäden, Kratzer, Abschürfungen und leichte Dellen können in den meisten Fällen vollständig repariert werden. Bei größeren strukturellen Schäden beraten wir Sie ehrlich über die Möglichkeiten."
          },
          {
            question: "Wird die Farbe exakt an meine Felgen angepasst?",
            answer: "Ja, wir führen eine präzise Farbtonanpassung durch, damit die reparierte Stelle optisch nicht mehr von der Originaloberfläche zu unterscheiden ist."
          },
          {
            question: "Wie lange dauert eine Felgen Smart Repair?",
            answer: "Je nach Umfang des Schadens dauert die Aufbereitung in der Regel 1–2 Arbeitstage. Wir informieren Sie vorab über den genauen Zeitrahmen."
          },
          {
            question: "Können auch Alufelgen aufbereitet werden?",
            answer: "Ja, wir bereiten sowohl Alufelgen als auch Stahlfelgen und Schmiedefelgen professionell auf. Senden Sie uns gerne Bilder per WhatsApp für eine Vorab-Einschätzung."
          },
          {
            question: "Was kostet die Felgen Smart Repair?",
            answer: "Die Kosten richten sich nach Art und Umfang der Beschädigung. Kontaktieren Sie uns per Telefon oder WhatsApp für eine individuelle Einschätzung."
          }
        ]}
      />
    </>
  );
}
