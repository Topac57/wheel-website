import { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Menu, X, Car, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Start", to: "home" },
    { name: "Leistungen", to: "services" },
    { name: "Über Uns", to: "about" },
    { name: "Kontakt", to: "contact" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-4" : "bg-transparent py-6"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <ScrollLink
            to="home"
            smooth={true}
            className="flex items-center gap-2 cursor-pointer group"
          >
            <div className="bg-primary p-2 rounded-lg text-white group-hover:scale-105 transition-transform">
              <Car className="h-6 w-6" />
            </div>
            <div className="flex flex-col">
              <span className={cn(
                "font-display font-bold text-lg leading-none tracking-tight",
                isScrolled ? "text-slate-900" : "text-slate-900 lg:text-white"
              )}>
                TAHA TALEB
              </span>
              <span className={cn(
                "text-xs font-medium tracking-widest uppercase opacity-80",
                isScrolled ? "text-slate-600" : "text-slate-600 lg:text-white/80"
              )}>
                Premium Service
              </span>
            </div>
          </ScrollLink>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
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
              >
                {link.name}
              </ScrollLink>
            ))}
            <a href="tel:+491637947079">
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

          {/* Mobile Menu Button */}
          <button
            className={cn(
              "md:hidden p-2 rounded-md",
              isScrolled ? "text-slate-900" : "text-slate-900 lg:text-white"
            )}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b shadow-xl animate-in slide-in-from-top-5">
          <div className="flex flex-col p-4 gap-4">
            {navLinks.map((link) => (
              <ScrollLink
                key={link.name}
                to={link.to}
                smooth={true}
                offset={-80}
                className="text-lg font-medium text-slate-800 py-2 border-b border-gray-100"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </ScrollLink>
            ))}
            <a href="tel:+491637947079" className="w-full">
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
