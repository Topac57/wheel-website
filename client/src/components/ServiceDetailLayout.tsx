import type { ReactNode } from "react";
import { ChevronLeft, ChevronRight, MessageCircle, Phone } from "lucide-react";
import { Link } from "wouter";
import { business } from "@/lib/business";
import { PageShell } from "@/components/PageShell";
import { CallLink, WhatsAppLink } from "@/components/CallLink";

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
  children?: ReactNode;
  extraSections?: ReactNode;
}

export function ServiceDetailLayout({
  title,
  intro,
  description,
  benefits,
  process,
  faq,
  heroImage,
  children,
  extraSections,
}: ServiceDetailLayoutProps) {
  return (
    <PageShell>
      <section className="relative overflow-hidden pb-16 pt-28 md:pt-32">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt=""
            aria-hidden="true"
            decoding="async"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/90 via-slate-900/80 to-slate-900/95" />
        </div>

        <div className="container-padding relative z-10 mx-auto max-w-4xl">
          <nav className="mb-6 flex flex-wrap items-center gap-2 text-sm text-white/60" data-testid="breadcrumb">
            <Link href="/" className="transition-colors hover:text-white" data-testid="link-breadcrumb-home">
              Startseite
            </Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/#leistungen" className="transition-colors hover:text-white" data-testid="link-breadcrumb-services">
              Leistungen
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="font-medium text-white">{title}</span>
          </nav>

          <h1 className="mb-4 font-display text-3xl font-bold leading-tight text-white md:text-5xl">
            {title}
          </h1>
          <p className="mb-6 max-w-2xl text-lg leading-relaxed text-white/80">{intro}</p>

          {/* Anruf direkt im sichtbaren Bereich — auch auf den Unterseiten. */}
          <CallLink
            className="inline-flex items-center gap-2.5 rounded-full bg-primary px-6 py-3.5 font-display text-lg font-extrabold text-primary-foreground shadow-lg transition-transform active:scale-[0.98]"
            testId="button-detail-hero-call"
          >
            <Phone className="h-5 w-5 shrink-0" />
            {business.phoneDisplay}
          </CallLink>
        </div>
      </section>

      <section className="bg-white py-12 md:py-20">
        <div className="container-padding mx-auto max-w-4xl space-y-12">
          <div>
            <h2 className="mb-4 font-display text-2xl font-bold md:text-3xl">Unser Service im Detail</h2>
            <p className="text-lg leading-relaxed text-slate-600">{description}</p>
          </div>

          {children}

          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="mb-4 font-display text-xl font-bold md:text-2xl">Ihre Vorteile</h3>
              <ul className="space-y-3">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary" />
                    <span className="text-slate-600">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="mb-4 font-display text-xl font-bold md:text-2xl">Ablauf</h3>
              <ol className="space-y-3">
                {process.map((step, i) => (
                  <li key={step} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                      {i + 1}
                    </span>
                    <span className="text-slate-600">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {extraSections}

      <section className="bg-slate-50 py-12 md:py-16">
        <div className="container-padding mx-auto max-w-4xl">
          <h2 className="mb-6 font-display text-2xl font-bold md:text-3xl">Häufige Fragen</h2>
          <div className="space-y-4">
            {faq.map((item) => (
              <div key={item.question} className="rounded-xl bg-white p-6 shadow-sm">
                <h3 className="mb-2 font-display text-lg font-bold">{item.question}</h3>
                <p className="leading-relaxed text-slate-600">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-12 md:py-16">
        <div className="container-padding mx-auto max-w-4xl">
          <div className="rounded-2xl bg-gradient-to-r from-slate-900 to-slate-800 p-8 text-center md:p-12">
            <h2 className="mb-3 font-display text-2xl font-bold text-white md:text-3xl">
              Auch ohne Termin – rufen Sie einfach an
            </h2>
            <p className="mb-8 text-slate-300 md:text-lg">
              Wir sagen Ihnen sofort, ob Sie direkt vorbeikommen können.
            </p>

            <div className="mb-8 flex flex-wrap items-center justify-center gap-3">
              <CallLink
                className="inline-flex items-center gap-2.5 rounded-full bg-primary px-6 py-3.5 font-display text-lg font-extrabold text-primary-foreground shadow-lg transition-transform active:scale-[0.98]"
                testId="button-detail-call"
              >
                <Phone className="h-5 w-5 shrink-0" />
                {business.phoneDisplay}
              </CallLink>
              <WhatsAppLink
                className="inline-flex items-center gap-2.5 rounded-full border border-white/25 bg-white/10 px-6 py-3.5 font-display text-lg font-bold text-white transition-colors hover:bg-white/20"
                testId="button-detail-whatsapp"
              >
                <MessageCircle className="h-5 w-5 shrink-0 text-[#25D366]" />
                WhatsApp
              </WhatsAppLink>
            </div>

            <address className="space-y-1 text-sm not-italic text-slate-400">
              <p className="font-medium text-white">{business.name}</p>
              <p>
                {business.street}, {business.postalCode} {business.city}-{business.district}
              </p>
              <p>
                <a href="mailto:reifendrive@gmail.com" data-testid="link-detail-email">
                  reifendrive@gmail.com
                </a>
              </p>
            </address>
          </div>
        </div>
      </section>

      <div className="bg-slate-50 py-8">
        <div className="container-padding mx-auto flex max-w-4xl flex-col items-center justify-between gap-4 sm:flex-row">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-5 py-2.5 font-medium text-slate-700 transition-colors hover:bg-white"
            data-testid="link-back-home"
          >
            <ChevronLeft className="h-4 w-4" />
            Zurück zur Startseite
          </Link>
          <Link
            href="/#leistungen"
            className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 font-medium text-primary hover:underline"
            data-testid="link-all-services"
          >
            Alle Leistungen ansehen
          </Link>
        </div>
      </div>
    </PageShell>
  );
}
