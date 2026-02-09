import { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link, useLocation } from "wouter";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import logoImage from "@assets/logo-taleb_1769854324948.png";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [location] = useLocation();
  const isHomePage = location === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Start", to: "home", href: "/" },
    { name: "Leistungen", to: "leistungen", href: "/#leistungen" },
    { name: "Über Uns", to: "about", href: "/#about" },
    { name: "Kontakt", to: "contact", href: "/#contact" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-4"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {isHomePage ? (
            <ScrollLink
              to="home"
              smooth={true}
              className="cursor-pointer"
              data-testid="link-home-logo"
            >
              <img
                src={logoImage}
                alt="ReifenDrive Logo"
                className={cn(
                  "h-12 md:h-14 w-auto transition-all",
                  !isScrolled && "brightness-0 invert lg:brightness-100 lg:invert-0"
                )}
              />
            </ScrollLink>
          ) : (
            <Link href="/" className="cursor-pointer" data-testid="link-home-logo">
              <img
                src={logoImage}
                alt="ReifenDrive Logo"
                className={cn(
                  "h-12 md:h-14 w-auto transition-all",
                  !isScrolled && "brightness-0 invert lg:brightness-100 lg:invert-0"
                )}
              />
            </Link>
          )}

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) =>
              isHomePage ? (
                <ScrollLink
                  key={link.name}
                  to={link.to}
                  spy={true}
                  smooth={true}
                  offset={-100}
                  className={cn(
                    "text-sm font-medium cursor-pointer hover:text-primary transition-colors uppercase tracking-wide",
                    isScrolled ? "text-slate-600" : "text-white/90 hover:text-white"
                  )}
                  data-testid={`link-nav-${link.to}`}
                >
                  {link.name}
                </ScrollLink>
              ) : (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "text-sm font-medium cursor-pointer hover:text-primary transition-colors uppercase tracking-wide",
                    isScrolled ? "text-slate-600" : "text-white/90 hover:text-white"
                  )}
                  data-testid={`link-nav-${link.to}`}
                >
                  {link.name}
                </Link>
              )
            )}
            <a href="tel:+491637947079" data-testid="button-nav-call">
              <Button
                variant={isScrolled ? "default" : "secondary"}
                className={cn(
                  "gap-2 font-bold rounded-full px-6",
                  !isScrolled && "bg-white text-primary hover:bg-white/90"
                )}
              >
                <Phone className="h-4 w-4" />
                Anrufen
              </Button>
            </a>
          </nav>

          <button
            className={cn(
              "md:hidden p-2 rounded-md",
              isScrolled ? "text-slate-900" : "text-slate-900 lg:text-white"
            )}
            onClick={() => setIsOpen(!isOpen)}
            data-testid="button-mobile-menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b shadow-xl animate-in slide-in-from-top-5">
          <div className="flex flex-col p-4 gap-4">
            {navLinks.map((link) =>
              isHomePage ? (
                <ScrollLink
                  key={link.name}
                  to={link.to}
                  smooth={true}
                  offset={-80}
                  className="text-lg font-medium text-slate-800 py-2 border-b border-gray-100"
                  onClick={() => setIsOpen(false)}
                  data-testid={`link-mobile-${link.to}`}
                >
                  {link.name}
                </ScrollLink>
              ) : (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-lg font-medium text-slate-800 py-2 border-b border-gray-100"
                  onClick={() => setIsOpen(false)}
                  data-testid={`link-mobile-${link.to}`}
                >
                  {link.name}
                </Link>
              )
            )}
            <a href="tel:+491637947079" className="w-full" data-testid="button-mobile-call">
              <Button className="w-full gap-2 rounded-xl py-6 text-lg">
                <Phone className="h-5 w-5" />
                Jetzt Anrufen
              </Button>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
