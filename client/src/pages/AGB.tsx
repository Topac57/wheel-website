import { Link } from "wouter";
import { ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageShell } from "@/components/PageShell";

export default function AGB() {
  return (
    <PageShell>

        <div className="pt-28 pb-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold mb-10" data-testid="heading-agb">Allgemeine Geschäftsbedingungen (AGB)</h1>

            <div className="space-y-8 text-base leading-relaxed text-slate-700">
              <section>
                <h2 className="text-xl font-bold text-black mb-3">1. Geltungsbereich</h2>
                <p>
                  Diese Allgemeinen Geschäftsbedingungen gelten für alle Verträge und Dienstleistungen der Reifenwerkstatt Taha Taleb.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-black mb-3">2. Leistungen</h2>
                <p>
                  Das Leistungsangebot umfasst insbesondere Reifenwechsel (Sommer-, Winter- und Allwetterreifen), Reifenmontage, Reifen auswuchten, Optische Aufbereitung von Bremssätteln, Felgen Smart Repair sowie den An- und Verkauf von Reifen.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-black mb-3">3. Terminvereinbarung</h2>
                <p>
                  Termine erfolgen nach individueller Vereinbarung zwischen dem Kunden und dem Unternehmen.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-black mb-3">4. Anzahlung bei Reifenbestellungen</h2>
                <p>
                  Bei Terminvereinbarungen, bei denen neue Reifen speziell für den Kunden bestellt werden, ist vor der Bestellung eine angemessene Anzahlung zu leisten. Erfolgt keine Anzahlung, besteht kein Anspruch auf Bestellung der Reifen.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-black mb-3">5. Preise und Zahlung</h2>
                <p>
                  Die Zahlung der vereinbarten Leistungen erfolgt vor Ort. Als Zahlungsarten werden Barzahlung und Kartenzahlung akzeptiert.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-black mb-3">6. An- und Verkauf von Reifen</h2>
                <p>
                  Der An- und Verkauf von Reifen erfolgt ausschließlich vor Ort im Betrieb.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-black mb-3">7. Haftung</h2>
                <p>
                  Es gelten die gesetzlichen Haftungsbestimmungen. Eine Haftung für Schäden, die durch unsachgemäße Nutzung oder durch vom Kunden bereitgestellte Materialien entstehen, ist ausgeschlossen, soweit gesetzlich zulässig.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-black mb-3">8. Schlussbestimmungen</h2>
                <p>
                  Es gilt das Recht der Bundesrepublik Deutschland. Sollten einzelne Bestimmungen dieser AGB unwirksam sein oder werden, bleibt die Wirksamkeit der übrigen Bestimmungen unberührt.
                </p>
              </section>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-200">
              <Link href="/" data-testid="link-back-home">
                <Button variant="outline" className="gap-2 rounded-full">
                  <ChevronLeft className="w-4 h-4" />
                  Zurück zur Startseite
                </Button>
              </Link>
            </div>
          </div>
        </div>

    </PageShell>
  );
}
