import type { ReactNode } from "react";
import { Link } from "wouter";
import { business } from "@/lib/business";
import { Navbar } from "@/components/Navbar";
import { StickyCallBar } from "@/components/StickyCallBar";
import { CallLink } from "@/components/CallLink";
import { CodionFooterCredit } from "@/components/CodionFooterCredit";

/**
 * Gemeinsamer Rahmen aller Seiten: Navigation oben, Aktionsbalken unten, Fußzeile.
 *
 * Das `pb-[…]` unten ist kein Schönheitsabstand, sondern hält exakt die Höhe des
 * fixierten Aktionsbalkens frei, damit dieser nie Inhalt verdeckt (inklusive der
 * Home-Indicator-Leiste auf iPhones).
 */
export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-background font-sans text-foreground">
      <Navbar />
      <StickyCallBar />

      <main className="flex-1 pb-[calc(4.5rem+env(safe-area-inset-bottom,0px))] md:pb-0">
        {children}
      </main>

      <footer className="bg-slate-950 pb-[calc(4.5rem+env(safe-area-inset-bottom,0px))] pt-12 text-white md:pb-12">
        <div className="container-padding mx-auto max-w-7xl">
          <div className="mb-8 grid gap-8 md:grid-cols-3">
            <div>
              <h2 className="mb-3 font-display text-lg font-bold text-white">ReifenDrive</h2>
              <p className="text-sm leading-relaxed text-slate-400">
                Reifenservice in Wuppertal-Vohwinkel. Reifenwechsel, Reifenmontage,
                Reifen kaufen, Alufelgen und 24/7 Pannendienst – auch ohne Termin.
              </p>
            </div>

            <div>
              <h2 className="mb-3 font-display text-lg font-bold text-white">Kontakt</h2>
              <address className="space-y-1 text-sm not-italic text-slate-400">
                <p>{business.owner}</p>
                <p>{business.street}</p>
                <p>
                  {business.postalCode} {business.city}-{business.district}
                </p>
                <p>
                  <CallLink className="font-bold text-white hover:text-primary" testId="button-footer-call">
                    {business.phoneDisplay}
                  </CallLink>
                </p>
              </address>
            </div>

            <div>
              <h2 className="mb-3 font-display text-lg font-bold text-white">Rechtliches</h2>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>
                  <Link href="/impressum" className="transition-colors hover:text-primary">
                    Impressum
                  </Link>
                </li>
                <li>
                  <Link href="/datenschutz" className="transition-colors hover:text-primary">
                    Datenschutz
                  </Link>
                </li>
                <li>
                  <Link href="/agb" className="transition-colors hover:text-primary">
                    AGB
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-6 text-center text-sm text-slate-500">
            &copy; {new Date().getFullYear()} ReifenDrive – {business.owner}. Alle Rechte vorbehalten.
          </div>
          <CodionFooterCredit />
        </div>
      </footer>
    </div>
  );
}
