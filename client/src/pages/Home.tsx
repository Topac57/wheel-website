import { Phone, MessageCircle } from "lucide-react";
import { defaultServiceCards } from "@shared/services";
import { business } from "@/lib/business";
import { PageShell } from "@/components/PageShell";
import { Hero } from "@/components/Hero";
import { TrustSection } from "@/components/TrustSection";
import { ServiceCard } from "@/components/ServiceCard";
import { CallLink, WhatsAppLink } from "@/components/CallLink";

export default function Home() {
  return (
    <PageShell>
      <Hero />
      <TrustSection />

      <section id="leistungen" className="bg-slate-50 py-12 md:py-20">
        <div className="container-padding mx-auto max-w-7xl">
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <h2 className="mb-3 font-display text-2xl font-bold text-slate-900 md:text-4xl">
              Unsere Leistungen
            </h2>
            <p className="text-slate-600 md:text-lg">
              Reifenwechsel, Reifenmontage, Alufelgen und Reifen kaufen – alles aus einer Hand
              in Wuppertal-Vohwinkel. Auch ohne Termin.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
            {defaultServiceCards.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Abschluss-CTA: letzte Gelegenheit zum Anruf, bevor die Fußzeile kommt. */}
      <section id="contact" className="bg-slate-900 py-12 text-white md:py-20">
        <div className="container-padding mx-auto max-w-3xl text-center">
          <h2 className="mb-3 font-display text-2xl font-bold text-white md:text-4xl">
            Reifenpanne? Wir sind dran.
          </h2>
          <p className="mb-8 text-slate-300 md:text-lg">
            Ein Anruf genügt – wir sagen Ihnen sofort, ob Sie direkt vorbeikommen können.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <CallLink
              className="inline-flex items-center gap-2.5 rounded-full bg-primary px-6 py-3.5 font-display text-lg font-extrabold text-primary-foreground shadow-lg transition-transform active:scale-[0.98]"
              testId="button-contact-call"
            >
              <Phone className="h-5 w-5 shrink-0" />
              {business.phoneDisplay}
            </CallLink>

            <WhatsAppLink
              className="inline-flex items-center gap-2.5 rounded-full border border-white/25 bg-white/10 px-6 py-3.5 font-display text-lg font-bold text-white transition-colors hover:bg-white/20"
              testId="button-contact-whatsapp"
            >
              <MessageCircle className="h-5 w-5 shrink-0 text-[#25D366]" />
              WhatsApp
            </WhatsAppLink>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
