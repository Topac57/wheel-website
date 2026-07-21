import { ServiceDetailLayout } from "@/components/ServiceDetailLayout";

export default function Reifenmontage() {
  return (
    <>
      <ServiceDetailLayout
        title="Reifenmontage & Demontage"
        seoTitle="Reifenmontage in Wuppertal"
        seoDescription="Professionelle Reifenmontage in Wuppertal"
        intro="Fachgerechte Montage und Demontage Ihrer Reifen – schonend, präzise und auf modernstem Equipment."
        heroImage="/img/reifenmontage.webp"
        description="Ob Neubereifung, Reifentausch oder saisonaler Wechsel – bei ReifenDrive montieren wir Ihre Reifen mit modernsten Maschinen, die speziell für die felgenschonende Behandlung ausgelegt sind. Wir arbeiten mit Stahl- und Alufelgen aller gängigen Hersteller und achten dabei auf höchste Präzision."
        benefits={[
          "Felgenschonende Montage mit modernster Technik",
          "Geeignet für alle Felgentypen: Stahl, Alu, Schmiede",
          "Runflat- und UHP-Reifen kein Problem",
          "Sorgfältige Prüfung bei jeder Montage",
          "Schnelle Bearbeitungszeit"
        ]}
        process={[
          "Terminvereinbarung per Telefon oder WhatsApp",
          "Abnahme des Rades und Demontage des alten Reifens",
          "Prüfung der Felge auf Beschädigungen und Unwucht",
          "Montage des neuen Reifens mit Spezialwerkzeug",
          "Wuchten, Reifendruckkontrolle und Endabnahme"
        ]}
        faq={[
          {
            question: "Können auch Runflat-Reifen montiert werden?",
            answer: "Ja, unsere Montiermaschinen sind speziell für Runflat- und UHP-Reifen ausgerüstet. Wir behandeln jede Felge mit größter Sorgfalt."
          },
          {
            question: "Wie viel kostet die Reifenmontage?",
            answer: "Die Kosten hängen von Reifengröße und -typ ab. Kontaktieren Sie uns per Telefon oder WhatsApp für ein individuelles Angebot."
          },
          {
            question: "Muss ich die Reifen mitbringen?",
            answer: "Sie können Ihre eigenen Reifen mitbringen oder wir beraten Sie bei der Auswahl passender Neureifen."
          },
          {
            question: "Wird bei der Montage auch gewuchtet?",
            answer: "Ja, standardmäßig wuchten wir jeden montierten Reifen aus, um ein ruhiges Fahrverhalten zu gewährleisten."
          }
        ]}
      />
    </>
  );
}
