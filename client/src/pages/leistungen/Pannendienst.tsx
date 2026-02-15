import { useEffect } from "react";
import { motion } from "framer-motion";
import { Phone, MessageCircle, ChevronLeft, ChevronRight, AlertTriangle, Clock, MapPin } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Navbar } from "@/components/Navbar";
import { FloatingActions } from "@/components/FloatingActions";
import { SEO } from "@/components/SEO";

export default function Pannendienst() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const faq = [
    {
      question: "Wann ist der Pannendienst erreichbar?",
      answer: "Unser Pannendienst ist rund um die Uhr, 7 Tage die Woche telefonisch erreichbar. Rufen Sie uns im Notfall einfach an – wir helfen schnell und unkompliziert."
    },
    {
      question: "Welche Pannen werden abgedeckt?",
      answer: "Wir helfen bei Reifenpannen, platten Reifen, beschädigten Felgen und ähnlichen Problemen rund ums Rad. Für andere Pannenarten vermitteln wir Sie gerne an den passenden Dienst."
    },
    {
      question: "Was kostet der Pannendienst?",
      answer: "Die Kosten richten sich nach Art und Umfang der Hilfe. Rufen Sie uns an – wir beraten Sie transparent und fair, bevor wir losfahren."
    },
    {
      question: "Kommt der Pannendienst auch zu mir?",
      answer: "Ja, je nach Standort und Verfügbarkeit kommen wir direkt zu Ihnen oder beraten Sie telefonisch über die schnellste Lösung."
    },
    {
      question: "Brauche ich einen Termin?",
      answer: "Nein – im Notfall rufen Sie einfach an. Für geplante Serviceleistungen empfehlen wir jedoch eine Terminvereinbarung."
    }
  ];

  return (
    <>
      <SEO
        title="24/7 Pannendienst in Wuppertal – Reifenpanne Soforthilfe | ReifenDrive"
        description="Reifenpanne? ReifenDrive bietet 24/7 Pannendienst in Wuppertal. Schnelle Hilfe bei Reifenschäden, platten Reifen und Felgenproblemen. Jetzt anrufen!"
      />
      <div className="min-h-screen font-sans bg-background text-foreground pb-20 md:pb-0">
        <Navbar />
        <FloatingActions />

        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 z-0 bg-gradient-to-br from-amber-100 via-amber-50 to-white" />

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <nav className="flex items-center gap-2 text-sm text-slate-500 mb-8 flex-wrap" data-testid="breadcrumb">
                <Link href="/" className="hover:text-black transition-colors" data-testid="link-breadcrumb-home">
                  Startseite
                </Link>
                <ChevronRight className="w-4 h-4" />
                <Link href="/#leistungen" className="hover:text-black transition-colors" data-testid="link-breadcrumb-services">
                  Leistungen
                </Link>
                <ChevronRight className="w-4 h-4" />
                <span className="text-black font-medium">24/7 Pannendienst</span>
              </nav>

              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-400/20 text-amber-700 mb-6">
                <AlertTriangle className="w-4 h-4" />
                <span className="text-sm font-bold tracking-wide">NOTFALL-SERVICE</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight mb-6" data-testid="heading-pannendienst">
                24/7 Pannendienst
              </h1>
              <p className="text-xl text-slate-600 max-w-2xl leading-relaxed mb-8">
                Reifenpanne? Wir sind rund um die Uhr für Sie da – schnell, zuverlässig und direkt erreichbar.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:+491637947079" data-testid="button-pannendienst-call">
                  <Button size="lg" className="rounded-full font-bold bg-amber-500 text-black shadow-lg shadow-amber-200">
                    <Phone className="mr-2 h-5 w-5" />
                    Notfall anrufen
                  </Button>
                </a>
                <a
                  href="https://wa.me/491637947079"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="button-pannendienst-whatsapp"
                >
                  <Button size="lg" variant="outline" className="rounded-full font-bold border-amber-300 text-slate-700">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    WhatsApp
                  </Button>
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-12"
            >
              <div>
                <h2 className="text-3xl font-bold mb-6">Schnelle Hilfe, wenn es darauf ankommt</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Eine Reifenpanne kommt immer zum ungünstigsten Zeitpunkt. Ob auf dem Weg zur Arbeit, nachts auf der Autobahn oder am Wochenende – unser Pannendienst ist rund um die Uhr erreichbar. Wir helfen Ihnen schnell und unkompliziert bei allen Problemen rund um Reifen und Felgen. Ein Anruf genügt.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4">Typische Situationen</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    "Platter Reifen auf der Straße",
                    "Reifenplatzer auf der Autobahn",
                    "Beschädigte Felge durch Bordsteinkontakt",
                    "Ventilschaden oder Druckverlust",
                    "Radwechsel ohne passendes Werkzeug",
                    "Festsitzende oder beschädigte Radmuttern"
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-amber-50/50">
                      <div className="mt-1 w-2 h-2 rounded-full bg-amber-500 shrink-0" />
                      <span className="text-slate-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4">So funktioniert's</h3>
                <ol className="space-y-4">
                  {[
                    "Rufen Sie uns an – wir sind 24/7 erreichbar",
                    "Schildern Sie kurz Ihr Problem und Ihren Standort",
                    "Wir beraten Sie sofort und besprechen die beste Lösung",
                    "Je nach Situation kommen wir zu Ihnen oder Sie kommen zu uns"
                  ].map((step, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="flex items-center justify-center w-7 h-7 rounded-full bg-amber-100 text-amber-700 text-sm font-bold shrink-0">
                        {i + 1}
                      </span>
                      <span className="text-muted-foreground">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="grid sm:grid-cols-3 gap-6">
                <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-slate-50">
                  <Clock className="w-8 h-8 text-amber-500 mb-3" />
                  <h4 className="font-bold mb-1">24/7 erreichbar</h4>
                  <p className="text-sm text-muted-foreground">Tag und Nacht, auch am Wochenende</p>
                </div>
                <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-slate-50">
                  <Phone className="w-8 h-8 text-amber-500 mb-3" />
                  <h4 className="font-bold mb-1">Direkt erreichbar</h4>
                  <p className="text-sm text-muted-foreground">Kein Callcenter, keine Warteschlange</p>
                </div>
                <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-slate-50">
                  <MapPin className="w-8 h-8 text-amber-500 mb-3" />
                  <h4 className="font-bold mb-1">Region Wuppertal</h4>
                  <p className="text-sm text-muted-foreground">Schnelle Hilfe vor Ort oder telefonisch</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-16 bg-slate-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-8">Häufige Fragen</h2>
              <div className="space-y-4">
                {faq.map((item, i) => (
                  <Card key={i} className="border-none shadow-sm">
                    <CardContent className="p-6">
                      <h4 className="text-lg font-bold mb-2">{item.question}</h4>
                      <p className="text-muted-foreground leading-relaxed">{item.answer}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Card className="border-none shadow-xl overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900 to-slate-800" />
                <CardContent className="relative z-10 p-8 md:p-12 text-center">
                  <h2 className="text-3xl font-bold text-white mb-3">Notfall? Jetzt anrufen!</h2>
                  <p className="text-gray-400 text-lg mb-8">
                    Rund um die Uhr erreichbar – wir helfen sofort.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                    <a href="tel:+491637947079" data-testid="button-detail-call">
                      <Button size="lg" className="rounded-full font-bold bg-amber-500 text-black shadow-lg shadow-amber-200">
                        <Phone className="mr-2 h-5 w-5" />
                        Jetzt anrufen
                      </Button>
                    </a>
                    <a
                      href="https://wa.me/491637947079"
                      target="_blank"
                      rel="noopener noreferrer"
                      data-testid="button-detail-whatsapp"
                    >
                      <Button size="lg" variant="outline" className="rounded-full font-bold bg-[#25D366] text-white">
                        <MessageCircle className="mr-2 h-5 w-5" />
                        WhatsApp
                      </Button>
                    </a>
                  </div>

                  <div className="text-gray-400 text-sm space-y-1">
                    <p className="font-medium text-white">ReifenDrive – Taha Taleb</p>
                    <p>Ludwig-Richter-Str. 13, 42429 Wuppertal</p>
                    <p>
                      <a href="mailto:reifendrive@gmail.com" className="transition-colors" data-testid="link-detail-email">reifendrive@gmail.com</a>
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        <div className="py-8 bg-slate-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <Link href="/" data-testid="link-back-home">
              <Button variant="outline" className="gap-2 rounded-full">
                <ChevronLeft className="w-4 h-4" />
                Zurück zur Startseite
              </Button>
            </Link>
            <Link href="/#leistungen" data-testid="link-all-services">
              <Button variant="ghost" className="gap-2 rounded-full text-primary">
                Alle Leistungen ansehen
              </Button>
            </Link>
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
