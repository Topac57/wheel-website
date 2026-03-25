import { useEffect } from "react";
import { Link } from "wouter";
import { ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { FloatingActions } from "@/components/FloatingActions";
import { SEO } from "@/components/SEO";

export default function AGB() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEO
        title="Allgemeine Geschäftsbedingungen (AGB) | ReifenDrive – Taha Taleb, Wuppertal"
        description="Allgemeine Geschäftsbedingungen (AGB) der Reifenwerkstatt Taha Taleb – ReifenDrive, Wuppertal."
      />
      <div className="min-h-screen font-sans bg-white text-foreground pb-20 md:pb-0">
        <Navbar />
        <FloatingActions />

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
                  Das Leistungsangebot umfasst insbesondere Reifenwechsel (Sommer-, Winter- und Allwetterreifen), Reifenmontage, Reifen auswuchten, Bremssattel-Lackierung, Felgen-Instandsetzung sowie den An- und Verkauf von Reifen.
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

        <footer className="bg-black text-white py-12 border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div>
                <h4 className="text-lg font-bold mb-4">ReifenDrive</h4>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Ihr Experte für Reifen und Felgen in Wuppertal. <br />
                  Qualität, die bewegt.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-bold mb-4">Rechtliches</h4>
                <ul className="space-y-2 text-sm text-gray-500">
                  <li><Link href="/impressum" className="hover:text-primary transition-colors">Impressum</Link></li>
                  <li><Link href="/datenschutz" className="hover:text-primary transition-colors">Datenschutz</Link></li>
                  <li><Link href="/agb" className="hover:text-primary transition-colors">AGB</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-bold mb-4">Kontakt</h4>
                <ul className="space-y-2 text-sm text-gray-500">
                  <li>Ludwig-Richter-Str. 13</li>
                  <li>42429 Wuppertal</li>
                  <li>Tel: +49 163 7947079</li>
                </ul>
              </div>
            </div>
            <div className="pt-8 border-t border-white/10 text-center text-sm text-gray-600">
              &copy; {new Date().getFullYear()} ReifenDrive - Taha Taleb. Alle Rechte vorbehalten.
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
