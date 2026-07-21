import { useRef } from "react";
import { Menu, Phone, X } from "lucide-react";
import { Link, useLocation } from "wouter";
import { business } from "@/lib/business";
import { CallLink } from "@/components/CallLink";

/**
 * Die Sprungmarken sind gewöhnliche `#`-Anker statt einer Scroll-Bibliothek.
 * Sie funktionieren damit auch ohne JavaScript, und das weiche Scrollen
 * übernimmt `scroll-behavior: smooth` aus dem Stylesheet.
 */
const navLinks = [
  { name: "Start", href: "/#home" },
  { name: "Leistungen", href: "/#leistungen" },
  { name: "Bewertungen", href: "/#vertrauen" },
  { name: "Kontakt", href: "/#contact" },
];

export function Navbar() {
  const [location] = useLocation();
  const isHomePage = location === "/";
  const menuRef = useRef<HTMLDetailsElement>(null);

  // Auf der Startseite reicht die reine Sprungmarke, sonst muss der Pfad mit.
  const linkHref = (href: string) => (isHomePage ? href.replace("/#", "#") : href);
  const closeMenu = () => {
    if (menuRef.current) menuRef.current.open = false;
  };

  return (
    <header className="absolute inset-x-0 top-0 z-40 py-3">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-3">
          <Link href="/" className="shrink-0" data-testid="link-home-logo" onClick={closeMenu}>
            <img
              src="/img/logo-reifendrive.webp"
              alt="ReifenDrive – Reifenservice Wuppertal-Vohwinkel"
              width={140}
              height={47}
              className="h-10 w-auto brightness-0 invert md:h-12"
            />
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={linkHref(link.href)}
                className="text-sm font-medium uppercase tracking-wide text-white/90 transition-colors hover:text-white"
                data-testid={`link-nav-${link.name.toLowerCase()}`}
              >
                {link.name}
              </a>
            ))}
            {/* Bewusst nur „Anrufen“ statt der Nummer: die steht groß im Hero.
                Zweimal dieselbe Nummer auf einem Bildschirm wirkt marktschreierisch. */}
            <CallLink
              className="flex items-center gap-2 rounded-full bg-white px-5 py-2.5 font-display font-bold text-slate-900 transition-colors hover:bg-white/90"
              testId="button-nav-call"
            >
              <Phone className="h-4 w-4" />
              Anrufen
            </CallLink>
          </nav>

          {/* Mobil: <details> statt React-State — das Menü öffnet sich auch,
              wenn das JS-Bundle noch nicht geladen ist. */}
          <details ref={menuRef} className="group relative md:hidden">
            <summary
              className="flex cursor-pointer list-none items-center rounded-lg p-2 text-white [&::-webkit-details-marker]:hidden"
              aria-label="Menü öffnen"
              data-testid="button-mobile-menu"
            >
              <Menu className="h-6 w-6 group-open:hidden" />
              <X className="hidden h-6 w-6 group-open:block" />
            </summary>

            <div className="absolute right-0 top-full mt-2 w-56 rounded-xl border border-slate-200 bg-white p-2 shadow-xl">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={linkHref(link.href)}
                  onClick={closeMenu}
                  className="block rounded-lg px-3 py-2.5 font-medium text-slate-800 hover:bg-slate-100"
                  data-testid={`link-mobile-${link.name.toLowerCase()}`}
                >
                  {link.name}
                </a>
              ))}
              <CallLink
                className="mt-1 flex items-center justify-center gap-2 rounded-lg bg-primary px-3 py-3 font-display font-bold text-primary-foreground"
                testId="button-mobile-call"
              >
                <Phone className="h-4 w-4" />
                {business.phoneDisplay}
              </CallLink>
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}
