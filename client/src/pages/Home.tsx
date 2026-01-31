import { motion } from "framer-motion";
import { Phone, MessageCircle, CheckCircle2 } from "lucide-react";
import aboutLogo from "@assets/logo-taleb_1769854557829.png";
import { Navbar } from "@/components/Navbar";
import { ServiceCard } from "@/components/ServiceCard";
import { ContactForm } from "@/components/ContactForm";
import { Map } from "@/components/Map";
import { FloatingActions } from "@/components/FloatingActions";
import { useServices } from "@/hooks/use-services";
import { Button } from "@/components/ui/button";

export default function Home() {
  const { data: services, isLoading } = useServices();

  return (
    <div className="min-h-screen font-sans bg-background text-foreground pb-20 md:pb-0">
      <Navbar />
      <FloatingActions />

      {/* HERO SECTION */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://i.imgur.com/cpFX64f.png" 
            alt="ReifenDrive Premium Service" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-slate-900/40" />
        </div>

        <div className="container-padding relative z-10 w-full max-w-7xl mx-auto pt-20">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white mb-6">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-sm font-medium tracking-wide">Jetzt Termine verfügbar</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white leading-[1.1] mb-6">
              Premium Reifen- & <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-green-400">
                Felgenservice in Wuppertal
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed max-w-lg">
              Ihr Premium Reifen- & Felgenservice in Wuppertal. 
              Fachgerechte Montage, Einlagerung und Pflege für höchste Ansprüche.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:+491637947079" data-testid="button-hero-call">
                <Button className="h-14 px-8 rounded-full text-lg font-bold bg-[#0e172a] hover:bg-primary/90 shadow-lg shadow-primary/25 hover:scale-105 transition-all duration-300">
                  <Phone className="mr-2 h-5 w-5" />
                  Jetzt anrufen
                </Button>
              </a>
              
              <a 
                href="https://wa.me/491637947079" 
                target="_blank" 
                rel="noopener noreferrer"
                data-testid="button-hero-whatsapp"
              >
                <Button variant="outline" className="h-14 px-8 rounded-full text-lg font-bold border-white/20 bg-[#25D366] text-white hover:bg-[#25D366]/90 backdrop-blur-sm">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  WhatsApp
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="section-padding bg-slate-50">
        <div className="max-w-7xl mx-auto container-padding">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Unsere Leistungen</h2>
            <p className="text-muted-foreground text-lg">
              Maßgeschneiderter Service für Ihr Fahrzeug. Wir kümmern uns um Ihre Reifen und Felgen mit größter Sorgfalt und modernster Technik.
            </p>
          </motion.div>

          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="h-64 bg-gray-200 rounded-2xl animate-pulse" />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {services?.map((service, index) => (
                <ServiceCard key={service.id} service={service} index={index} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="section-padding bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto container-padding flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-white p-8 flex items-center justify-center">
              <img 
                src={aboutLogo} 
                alt="ReifenDrive Logo" 
                className="w-full max-w-md h-auto transform hover:scale-105 transition-transform duration-700"
              />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <h2 className="text-4xl font-bold mb-6">Warum ReifenDrive?</h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Wir verbinden handwerkliche Präzision mit modernster Technik. Bei uns ist Ihr Fahrzeug in besten Händen – egal ob Sportwagen, SUV oder Limousine.
            </p>

            <ul className="space-y-4">
              {[
                "Modernste Wucht- & Montagemaschinen",
                "Spezialisiert auf Runflat & UHP Reifen",
                "Felgenschonende Montage",
                "Express-Service ohne lange Wartezeiten"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="bg-primary/10 p-1 rounded-full text-primary">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <span className="font-medium text-slate-700">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 pt-8 border-t border-gray-100 flex gap-8">
              <div>
                <p className="text-3xl font-bold text-primary">1500+</p>
                <p className="text-sm text-muted-foreground">Zufriedene Kunden</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">100%</p>
                <p className="text-sm text-muted-foreground">Servicequalität</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* BEWERTUNGEN SECTION */}
      <section id="rezensionen" className="section-padding bg-white">
        <div className="max-w-7xl mx-auto container-padding">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-4 text-slate-900">Bewertungen</h2>
            <p className="text-slate-600 text-lg mb-8">
              Echte Kundenmeinungen finden Sie auf Google.
            </p>
            <a 
              href="https://share.google/wFe2tPCE3SRGJa3p4" 
              target="_blank" 
              rel="noreferrer"
              data-testid="button-google-reviews"
            >
              <Button className="h-14 px-8 rounded-full text-lg font-bold bg-primary hover:bg-primary/90 shadow-lg shadow-primary/25 hover:scale-105 transition-all duration-300">
                Google Rezensionen ansehen
              </Button>
            </a>
          </motion.div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="section-padding bg-slate-900 text-white relative">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
           <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-primary blur-[200px] rounded-full" />
        </div>

        <div className="max-w-7xl mx-auto container-padding relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Kontakt & Termin</h2>
            <p className="text-gray-400 text-lg">
              Besuchen Sie uns oder vereinbaren Sie direkt einen Termin.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <ContactForm />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Map />
            </motion.div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
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
