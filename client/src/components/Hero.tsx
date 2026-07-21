import { Phone, MessageCircle, CalendarCheck, Star } from "lucide-react";
import { business } from "@/lib/business";
import { CallLink, WhatsAppLink } from "@/components/CallLink";
import { OpeningStatus } from "@/components/OpeningStatus";

/**
 * Alles, was ein Besucher auf dem Handy ohne Scrollen sehen muss: wer wir sind,
 * was wir machen, dass es ohne Termin geht, ob gerade offen ist, was es kostet
 * und wie man uns in einem Tipp erreicht.
 *
 * Der gesamte Block steht als statisches HTML im ausgelieferten Quelltext —
 * Überschrift, Nummer und Anruf-Button funktionieren auch mit deaktiviertem
 * JavaScript.
 */
export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center overflow-hidden pb-28 pt-20 md:pb-16"
    >
      <div className="absolute inset-0 z-0">
        <img
          src="/img/hero-werkstatt-1280.webp"
          srcSet="/img/hero-werkstatt-768.webp 768w, /img/hero-werkstatt-1280.webp 1280w"
          sizes="100vw"
          alt=""
          aria-hidden="true"
          decoding="async"
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/95 via-slate-900/85 to-slate-900/95 md:bg-gradient-to-r md:from-slate-900/95 md:via-slate-900/80 md:to-slate-900/40" />
      </div>

      <div className="container-padding relative z-10 mx-auto w-full max-w-7xl">
        <div className="max-w-2xl">
          <div className="mb-4 flex flex-wrap items-center gap-2">
            <span
              className="inline-flex items-center gap-1.5 rounded-full bg-primary px-3 py-1.5 text-sm font-bold text-primary-foreground shadow-lg shadow-primary/30"
              data-testid="badge-ohne-termin"
            >
              <CalendarCheck className="h-4 w-4" />
              Auch ohne Termin
            </span>
            <OpeningStatus />
          </div>

          <h1 className="mb-3 font-display text-3xl font-bold leading-[1.1] text-white sm:text-5xl lg:text-6xl">
            Reifenservice
            <br />
            <span className="text-primary">Wuppertal-Vohwinkel</span>
          </h1>

          <p className="mb-2 text-base font-medium text-white/90 sm:text-lg" data-testid="text-hero-leistungen">
            Reifenwechsel · Reifenmontage · Reifen kaufen · Alufelgen · 24/7 Pannendienst
          </p>

          <p className="mb-5 text-sm text-white/70 sm:text-base">
            Ihre Reifenwerkstatt in der Nähe – Vohwinkel &amp; Umgebung, auch Solingen.
          </p>

          {/* Preisanker: eigene, helle Fläche statt im Fließtext versteckt —
              aber in derselben Pillenform wie die Abzeichen oben, damit er
              sich einfügt statt sich aufzudrängen. */}
          <p
            className="mb-6 inline-flex items-baseline gap-2 rounded-full bg-white px-5 py-2.5 shadow-lg"
            data-testid="badge-preisanker"
          >
            <span className="font-display font-semibold text-slate-900">Reifenwechsel</span>
            <span className="font-display text-xl font-extrabold text-primary sm:text-2xl">
              ab {business.priceFrom}
            </span>
          </p>

          {/*
            Nur ein gefüllter Knopf. Der Anruf ist das Ziel der Seite, WhatsApp
            die Alternative — deshalb dort die zurückhaltende Glasoptik statt
            einer zweiten grünen Fläche.
          */}
          <div className="flex items-center gap-3">
            <CallLink
              className="inline-flex items-center gap-2.5 rounded-full bg-primary px-5 py-3.5 font-display text-lg font-extrabold text-primary-foreground shadow-lg transition-transform active:scale-[0.98] sm:px-6 sm:text-xl"
              testId="button-hero-call"
            >
              <Phone className="h-5 w-5 shrink-0" />
              {business.phoneDisplay}
            </CallLink>

            {/* Auf schmalen Displays nur das Symbol: Die Beschriftung steht
                ohnehin im Aktionsbalken am unteren Rand, und zwei ausgeschriebene
                Knöpfe passen bei 375 px nicht nebeneinander — sie würden
                umbrechen und den Hero unnötig in die Länge ziehen. */}
            <WhatsAppLink
              className="inline-flex items-center gap-2.5 rounded-full border border-white/25 bg-white/10 p-3.5 font-display text-lg font-bold text-white backdrop-blur-md transition-colors hover:bg-white/20 sm:px-6"
              testId="button-hero-whatsapp"
            >
              <MessageCircle className="h-5 w-5 shrink-0 text-[#25D366]" />
              <span className="sr-only sm:not-sr-only">WhatsApp</span>
            </WhatsAppLink>
          </div>

          {/* Bewertung direkt unter dem Anruf-Knopf: an genau dieser Stelle
              entscheidet sich, ob jemand tippt oder weiterscrollt. */}
          <p className="mt-5 flex items-center gap-2 text-sm text-white/70">
            <Star className="h-4 w-4 shrink-0 fill-amber-400 text-amber-400" />
            <span>
              <strong className="font-semibold text-white">
                {business.rating.toLocaleString("de-DE", { minimumFractionDigits: 1 })}
              </strong>{" "}
              aus {business.reviewCount} Google-Bewertungen
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
