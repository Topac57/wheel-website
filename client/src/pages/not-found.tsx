import { Phone } from "lucide-react";
import { Link } from "wouter";
import { business } from "@/lib/business";
import { PageShell } from "@/components/PageShell";
import { CallLink } from "@/components/CallLink";

/**
 * Wer hier landet, hat sich vertippt oder folgt einem alten Link — und hat
 * trotzdem ein Anliegen. Statt einer Sackgasse steht deshalb auch hier die
 * Telefonnummer.
 */
export default function NotFound() {
  return (
    <PageShell>
      <section className="flex min-h-[70vh] items-center bg-slate-50 py-20">
        <div className="container-padding mx-auto max-w-xl text-center">
          <p className="mb-2 font-display text-5xl font-extrabold text-primary">404</p>
          <h1 className="mb-3 font-display text-2xl font-bold text-slate-900 md:text-3xl">
            Diese Seite gibt es nicht
          </h1>
          <p className="mb-8 text-slate-600">
            Der Link führt ins Leere. Ihr Anliegen klären wir aber am schnellsten sowieso
            am Telefon – auch ohne Termin.
          </p>

          <CallLink
            className="inline-flex items-center gap-2.5 rounded-full bg-primary px-6 py-3.5 font-display text-lg font-extrabold text-primary-foreground shadow-lg"
            testId="button-404-call"
          >
            <Phone className="h-5 w-5 shrink-0" />
            {business.phoneDisplay}
          </CallLink>

          <p className="mt-8">
            <Link href="/" className="font-medium text-primary hover:underline">
              Zurück zur Startseite
            </Link>
          </p>
        </div>
      </section>
    </PageShell>
  );
}
