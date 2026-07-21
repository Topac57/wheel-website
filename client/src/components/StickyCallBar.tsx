import { Phone, MessageCircle } from "lucide-react";
import { CallLink, WhatsAppLink } from "@/components/CallLink";

/**
 * Aktionsbalken am unteren Bildschirmrand — auf jeder Scrollposition in
 * Daumenreichweite.
 *
 * Damit er keinen Inhalt verdeckt, hält jede Seite unten Platz frei
 * (`pb-[calc(...)]` im Seiten-Wrapper, siehe PageShell). Die Höhe steht als
 * CSS-Variable `--sticky-bar-h` in index.css, damit Balken und Freiraum nicht
 * auseinanderlaufen können.
 */
export function StickyCallBar() {
  return (
    <>
      {/* Mobil: durchgehender Balken, Anruf links und deutlich größer. */}
      <div
        className="fixed inset-x-0 bottom-0 z-50 border-t border-slate-200 bg-white/95 backdrop-blur-md shadow-[0_-4px_16px_-4px_rgba(0,0,0,0.18)] md:hidden"
        style={{ paddingBottom: "env(safe-area-inset-bottom, 0px)" }}
        data-testid="bar-sticky-actions"
      >
        <div className="flex items-stretch gap-2 p-2">
          <CallLink
            className="flex flex-[3] items-center justify-center gap-2 rounded-xl bg-primary py-3 font-display text-base font-extrabold text-primary-foreground shadow-md transition-transform active:scale-[0.98]"
            testId="button-sticky-call"
          >
            <Phone className="h-5 w-5 shrink-0" />
            <span>Jetzt anrufen</span>
          </CallLink>

          <WhatsAppLink
            className="flex flex-[2] items-center justify-center gap-2 rounded-xl bg-[#25D366] py-3 font-display text-base font-bold text-white shadow-md transition-transform active:scale-[0.98]"
            testId="button-sticky-whatsapp"
          >
            <MessageCircle className="h-5 w-5 shrink-0" />
            <span>WhatsApp</span>
          </WhatsAppLink>
        </div>
      </div>

      {/*
        Desktop: nur eine einzige schwebende Schaltfläche.
        Die Nummer steht dort bereits in der Navigation und im Hero — ein
        zusätzlicher Anruf-Knopf hier wäre die dritte Wiederholung auf einem
        Bildschirm und macht die Seite unruhig, ohne etwas hinzuzufügen.
        Auf dem Handy übernimmt der Balken oben diese Aufgabe.
      */}
      <WhatsAppLink
        className="group fixed bottom-8 right-8 z-50 hidden items-center gap-2 rounded-full bg-[#25D366] p-4 text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl md:flex"
        testId="button-desktop-whatsapp"
      >
        <MessageCircle className="h-6 w-6" />
        <span className="max-w-0 overflow-hidden whitespace-nowrap font-bold transition-all duration-300 group-hover:max-w-xs">
          WhatsApp
        </span>
      </WhatsAppLink>
    </>
  );
}
