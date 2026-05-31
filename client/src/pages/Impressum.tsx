import { useEffect } from "react";
import { Link } from "wouter";
import { ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { FloatingActions } from "@/components/FloatingActions";
import { SEO } from "@/components/SEO";
import { CodionFooterCredit } from "@/components/CodionFooterCredit";

export default function Impressum() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEO
        title="Impressum | ReifenDrive – Taha Taleb, Wuppertal"
        description="Impressum von ReifenDrive – Taha Taleb. Angaben gemäß § 5 TMG. Ludwig-Richter-Str. 13, Wuppertal-Vohwinkel."
      />
      <div className="min-h-screen font-sans bg-white text-foreground pb-20 md:pb-0">
        <Navbar />
        <FloatingActions />

        <div className="pt-28 pb-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold mb-10" data-testid="heading-impressum">Impressum</h1>

            <div className="space-y-8 text-base leading-relaxed text-slate-700">
              <section>
                <h2 className="text-xl font-bold text-black mb-3">Angaben gemäß § 5 TMG</h2>
                <p>
                  Taha Taleb<br />
                  Einzelunternehmen
                </p>
                <p className="mt-3">
                  Ludwig-Richter-Str. 13<br />
                  Wuppertal-Vohwinkel<br />
                  Deutschland
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-black mb-3">Kontakt</h2>
                <p>
                  Telefon: <a href="tel:+491637947079" className="text-primary hover:underline">+49 163 7947079</a><br />
                  E-Mail: <a href="mailto:reifendrive@gmail.com" className="text-primary hover:underline">reifendrive@gmail.com</a>
                </p>
              </section>

              <section>
                <p>
                  Steuernummer: 13253255939<br />
                  Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
                  DE458176534
                </p>
              </section>

              <section>
                <p>
                  Zuständige Aufsichtsbehörde:<br />
                  Stadt Wuppertal – Gewerbeamt
                </p>
              </section>

              <section>
                <p>
                  Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV:<br />
                  Taha Taleb, Anschrift wie oben
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-black mb-3">Haftung für Inhalte</h2>
                <p>
                  Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-black mb-3">Haftung für Links</h2>
                <p>
                  Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Für diese fremden Inhalte übernehmen wir keine Gewähr. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
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
            <CodionFooterCredit />
          </div>
        </footer>
      </div>
    </>
  );
}
