import { ServiceDetailLayout } from "@/components/ServiceDetailLayout";
import { SEO } from "@/components/SEO";

export default function Felgenservice() {
  return (
    <>
      <SEO
        title="Felgenservice in Wuppertal – Reinigung & Pflege | ReifenDrive – Taha Taleb"
        description="Professioneller Felgenservice in Wuppertal: Reinigung, Pflege und Aufbereitung Ihrer Felgen. ReifenDrive – Taha Taleb."
      />
      <ServiceDetailLayout
        title="Felgenservice"
        seoTitle="Felgenservice in Wuppertal"
        seoDescription="Felgenservice in Wuppertal"
        intro="Professionelle Reinigung, Pflege und Aufbereitung – damit Ihre Felgen glänzen wie am ersten Tag."
        heroImage="https://i.imgur.com/QoAtIbY.jpeg"
        description="Felgen sind täglich Bremsstaub, Schmutz und Witterungseinflüssen ausgesetzt. Unser Felgenservice bei ReifenDrive umfasst die gründliche Reinigung, professionelle Pflege und optische Aufbereitung Ihrer Felgen. Ob Alufelgen, Schmiedefelgen oder Stahlfelgen – wir sorgen dafür, dass sie nicht nur sauber sind, sondern auch langfristig ihren Wert behalten."
        benefits={[
          "Gründliche Tiefenreinigung von Bremsstaub und Verschmutzungen",
          "Werterhalt Ihrer Felgen durch professionelle Pflege",
          "Geeignet für alle Felgentypen und -materialien",
          "Optische Aufbereitung und Versiegelung",
          "Beratung zur richtigen Felgenpflege für zu Hause"
        ]}
        process={[
          "Sichtprüfung und Zustandsbewertung der Felgen",
          "Schonende Reinigung mit Spezialreinigern",
          "Entfernung von hartnäckigem Bremsstaub und Flugrost",
          "Pflege und ggf. Versiegelung der Oberfläche",
          "Endkontrolle und Empfehlung für Nachpflege"
        ]}
        faq={[
          {
            question: "Für welche Felgentypen bieten Sie den Service an?",
            answer: "Für alle: Alufelgen, Schmiedefelgen, Stahlfelgen und lackierte Felgen. Wir passen die Reinigung an das Material an."
          },
          {
            question: "Können Kratzer an Felgen repariert werden?",
            answer: "Leichte Bordsteinkratzer können wir optisch aufbereiten. Bei größeren Schäden beraten wir Sie gerne zu den Möglichkeiten."
          },
          {
            question: "Wie oft sollte man Felgen professionell reinigen lassen?",
            answer: "Wir empfehlen eine professionelle Reinigung mindestens zweimal im Jahr – idealerweise beim saisonalen Reifenwechsel."
          }
        ]}
      />
    </>
  );
}
