import { Link } from "wouter";
import { ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageShell } from "@/components/PageShell";

export default function Datenschutz() {
  return (
    <PageShell>

        <div className="pt-28 pb-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold mb-10" data-testid="heading-datenschutz">Datenschutzerklärung</h1>

            <div className="space-y-8 text-base leading-relaxed text-slate-700">
              <section>
                <h2 className="text-xl font-bold text-black mb-3">1. Verantwortlicher</h2>
                <p>
                  Taha Taleb<br />
                  Ludwig-Richter-Str. 13A<br />
                  Wuppertal-Vohwinkel<br />
                  Deutschland<br />
                  E-Mail: <a href="mailto:reifendrive@gmail.com" className="text-primary hover:underline">reifendrive@gmail.com</a>
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-black mb-3">2. Hosting</h2>
                <p>
                  Diese Website wird bei Replit, Inc., USA, gehostet. Beim Hosting können personenbezogene Daten in Drittländer (insbesondere die USA) übertragen werden. Die Übermittlung erfolgt auf Grundlage von Standardvertragsklauseln der EU-Kommission gemäß Art. 46 DSGVO.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-black mb-3">3. Zugriffsdaten / Server-Logfiles</h2>
                <p>
                  Beim Aufruf dieser Website werden automatisch Informationen allgemeiner Natur erfasst. Diese Informationen (Server-Logfiles) beinhalten u. a. IP-Adresse, Browsertyp, Betriebssystem, Referrer-URL, Uhrzeit des Zugriffs. Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-black mb-3">4. Kontaktaufnahme</h2>
                <p>
                  Bei Kontaktaufnahme per Telefon oder E-Mail werden die übermittelten personenbezogenen Daten ausschließlich zum Zweck der Bearbeitung der Anfrage verarbeitet und nicht ohne Einwilligung weitergegeben.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-black mb-3">5. Kontaktaufnahme über WhatsApp</h2>
                <p>
                  Wenn Sie uns über WhatsApp kontaktieren, erfolgt die Kommunikation über WhatsApp Ireland Limited. Dabei können personenbezogene Daten (z. B. Telefonnummer, Nachrichteninhalte, Metadaten) verarbeitet werden. Die Nutzung von WhatsApp erfolgt freiwillig. Es gelten die Datenschutzbestimmungen von WhatsApp.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-black mb-3">6. Google Maps</h2>
                <p>
                  Diese Website bindet Kartenmaterial von Google Maps (Google Ireland Limited) ein. Zur Nutzung der Funktionen von Google Maps ist es notwendig, Ihre IP-Adresse zu speichern. Diese Informationen werden in der Regel an einen Server von Google übertragen.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-black mb-3">7. Google Ads</h2>
                <p>
                  Wir nutzen Google Ads, ein Online-Werbeprogramm der Google Ireland Limited. Im Rahmen von Google Ads können Cookies gesetzt und Nutzungsdaten verarbeitet werden, um die Wirksamkeit von Werbeanzeigen zu messen und zu optimieren.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-black mb-3">8. Cookies</h2>
                <p>
                  Diese Website verwendet technisch notwendige Cookies. Eine Analyse des Nutzerverhaltens mittels Analytics oder vergleichbarer Tracking-Tools findet nicht statt.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-black mb-3">9. Rechte der betroffenen Personen</h2>
                <p>
                  Sie haben jederzeit das Recht auf Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger sowie den Zweck der Datenverarbeitung. Zudem haben Sie das Recht auf Berichtigung, Sperrung oder Löschung dieser Daten, soweit dem keine gesetzliche Aufbewahrungspflicht entgegensteht. Ihnen steht außerdem ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
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
