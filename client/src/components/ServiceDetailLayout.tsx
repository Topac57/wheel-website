import { useEffect } from "react";
import { motion } from "framer-motion";
import { Phone, MessageCircle, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Navbar } from "@/components/Navbar";
import { FloatingActions } from "@/components/FloatingActions";

interface FAQItem {
  question: string;
  answer: string;
}

interface ServiceDetailLayoutProps {
  title: string;
  seoTitle: string;
  seoDescription: string;
  intro: string;
  description: string;
  benefits: string[];
  process: string[];
  faq: FAQItem[];
  heroImage: string;
  children?: React.ReactNode;
  extraSections?: React.ReactNode;
}

export function ServiceDetailLayout({
  title,
  seoTitle,
  seoDescription,
  intro,
  description,
  benefits,
  process,
  faq,
  heroImage,
  children,
  extraSections,
}: ServiceDetailLayoutProps) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen font-sans bg-background text-foreground pb-20 md:pb-0">
      <Navbar />
      <FloatingActions />

      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt={title}
            className="w-full h-full object-cover"
            style={{ filter: "blur(2px)" }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/70 to-slate-900/90" />
        </div>

        <div className="max-w-4xl mx-auto container-padding relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <nav className="flex items-center gap-2 text-sm text-white/60 mb-8 flex-wrap" data-testid="breadcrumb">
              <Link href="/" className="hover:text-white transition-colors" data-testid="link-breadcrumb-home">
                Startseite
              </Link>
              <ChevronRight className="w-4 h-4" />
              <Link href="/#services" className="hover:text-white transition-colors" data-testid="link-breadcrumb-services">
                Leistungen
              </Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-white font-medium">{title}</span>
            </nav>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              {title}
            </h1>
            <p className="text-xl text-white/80 max-w-2xl leading-relaxed">
              {intro}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto container-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div>
              <h2 className="text-3xl font-bold mb-6">Unser Service im Detail</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">{description}</p>
            </div>

            {children}

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">Ihre Vorteile</h3>
                <ul className="space-y-3">
                  {benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="mt-1.5 w-2 h-2 rounded-full bg-primary shrink-0" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Ablauf</h3>
                <ol className="space-y-3">
                  {process.map((step, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-0.5 flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary text-sm font-bold shrink-0">
                        {i + 1}
                      </span>
                      <span className="text-muted-foreground">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {extraSections}

      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto container-padding">
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
        <div className="max-w-4xl mx-auto container-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card className="border-none shadow-xl overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-r from-slate-900 to-slate-800" />
              <CardContent className="relative z-10 p-8 md:p-12 text-center">
                <h2 className="text-3xl font-bold text-white mb-3">Termin vereinbaren</h2>
                <p className="text-gray-400 text-lg mb-8">
                  Schnell per Telefon oder WhatsApp – wir freuen uns auf Sie.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                  <a href="tel:+491637947079" data-testid="button-detail-call">
                    <Button className="h-14 px-8 rounded-full text-lg font-bold bg-primary shadow-lg shadow-primary/25 transition-all duration-300">
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
                    <Button variant="outline" className="h-14 px-8 rounded-full text-lg font-bold border-white/20 bg-[#25D366] text-white">
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
        <div className="max-w-4xl mx-auto container-padding flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link href="/" data-testid="link-back-home">
            <Button variant="outline" className="gap-2 rounded-full">
              <ChevronLeft className="w-4 h-4" />
              Zurück zur Startseite
            </Button>
          </Link>
          <Link href="/#services" data-testid="link-all-services">
            <Button variant="ghost" className="gap-2 rounded-full text-primary">
              Alle Leistungen ansehen
            </Button>
          </Link>
        </div>
      </div>

      <footer className="bg-black text-white py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto container-padding">
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
                <li><a href="#" className="hover:text-primary transition-colors">Impressum</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Datenschutz</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">AGB</a></li>
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
  );
}
