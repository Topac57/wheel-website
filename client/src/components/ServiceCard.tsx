import {
  AlertTriangle,
  ArrowRight,
  Disc,
  Gauge,
  Info,
  Paintbrush,
  Phone,
  PhoneCall,
  RefreshCw,
  ShieldCheck,
  ShoppingCart,
  Timer,
  Warehouse,
  Wrench,
} from "lucide-react";
import { Link } from "wouter";
import type { Service } from "@shared/schema";
import { CallLink, WhatsAppLink } from "@/components/CallLink";

const IconMap: Record<string, typeof Disc> = {
  Disc,
  Wrench,
  Warehouse,
  Info,
  ShieldCheck,
  Timer,
  RefreshCw,
  Gauge,
  ShoppingCart,
  Paintbrush,
  PhoneCall,
};

export function ServiceCard({ service }: { service: Service }) {
  const Icon = IconMap[service.icon] ?? Info;

  /**
   * Die Notfallkarte ist bewusst kein anklickbarer Block: Sie enthält einen
   * echten `tel:`-Link, und ein Link im Link ist ungültiges HTML — Browser und
   * Screenreader behandeln so etwas unvorhersehbar. Stattdessen stehen hier
   * eigene, klar benannte Aktionen.
   */
  if (service.category === "emergency") {
    return (
      <div className="rounded-2xl bg-gradient-to-r from-amber-50 via-amber-100/80 to-amber-50 p-6 shadow-lg md:col-span-2 md:p-8 lg:col-span-3">
        <div className="flex flex-col gap-6 md:flex-row md:items-center">
          <div className="flex flex-1 items-start gap-4">
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-amber-400/25 text-amber-600">
              <AlertTriangle className="h-7 w-7" />
            </span>
            <div>
              <h3 className="font-display text-xl font-bold text-slate-900" data-testid="text-emergency-title">
                {service.title}
              </h3>
              <p className="leading-relaxed text-slate-700">{service.description}</p>
              <Link
                href={`/leistungen/${service.slug}`}
                className="mt-2 inline-flex items-center gap-1 text-sm font-bold text-amber-700 underline-offset-2 hover:underline"
                data-testid={`link-service-${service.slug}`}
              >
                Mehr zum Pannendienst
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="flex shrink-0 gap-3">
            <CallLink
              className="flex items-center gap-2 rounded-full bg-slate-900 px-5 py-3 font-display font-bold text-white shadow-md transition-transform active:scale-[0.98]"
              testId="button-emergency-call"
            >
              <Phone className="h-4 w-4" />
              Notfall anrufen
            </CallLink>
            <WhatsAppLink
              className="flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-3 font-display font-bold text-white shadow-md transition-transform active:scale-[0.98]"
              testId="button-emergency-whatsapp"
            >
              WhatsApp
            </WhatsAppLink>
          </div>
        </div>
      </div>
    );
  }

  return (
    <Link
      href={`/leistungen/${service.slug}`}
      className="group relative flex min-h-[280px] flex-col overflow-hidden rounded-2xl shadow-lg transition-shadow hover:shadow-xl"
      data-testid={`link-service-${service.slug}`}
    >
      {service.image && (
        <div className="absolute inset-0 z-0">
          <img
            src={service.image}
            alt=""
            aria-hidden="true"
            /* Unterhalb des Hero-Bereichs: erst laden, wenn er sich nähert. */
            loading="lazy"
            decoding="async"
            width={800}
            height={600}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/55" />
        </div>
      )}

      <div className="relative z-10 flex h-full flex-col items-start gap-4 p-6 md:p-8">
        <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/90 text-slate-900 shadow-sm transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
          <Icon className="h-7 w-7" />
        </span>

        <div className="space-y-2">
          <h3 className="font-display text-xl font-bold text-white drop-shadow">{service.title}</h3>
          <p className="leading-relaxed text-white/90 drop-shadow">{service.description}</p>
        </div>

        <div className="mt-auto flex w-full items-center justify-between pt-4">
          <span className="h-1 w-12 rounded-full bg-white/30 transition-all duration-500 group-hover:w-2/3 group-hover:bg-primary/60" />
          <ArrowRight className="h-5 w-5 text-white/60 transition-all duration-300 group-hover:translate-x-1 group-hover:text-primary" />
        </div>
      </div>
    </Link>
  );
}
