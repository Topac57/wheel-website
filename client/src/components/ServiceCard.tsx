import { motion } from "framer-motion";
import { Disc, Wrench, Warehouse, Info, ShieldCheck, Timer, RefreshCw, Gauge, ShoppingCart, Paintbrush, ArrowRight, PhoneCall, Phone, AlertTriangle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "wouter";
import type { Service } from "@shared/schema";

const IconMap: Record<string, any> = {
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
  PhoneCall
};

interface ServiceCardProps {
  service: Service;
  index: number;
}

export function ServiceCard({ service, index }: ServiceCardProps) {
  const Icon = IconMap[service.icon] || Info;
  const slug = service.slug;
  const isEmergency = service.category === "emergency";
  const [, setLocation] = useLocation();

  if (isEmergency) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        viewport={{ once: true }}
        className="md:col-span-2 lg:col-span-3"
      >
        <Card
          className="border-none shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden relative cursor-pointer bg-gradient-to-r from-amber-50 via-amber-100/80 to-amber-50"
          data-testid={`link-service-${slug}`}
          onClick={() => setLocation(`/leistungen/${slug}`)}
        >
          <CardContent className="p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center gap-6 relative z-10">
            <div className="flex items-center gap-5 flex-1">
              <div className="p-4 rounded-2xl bg-amber-400/20 text-amber-600 shrink-0">
                <AlertTriangle className="w-8 h-8" />
              </div>
              <div className="space-y-1">
                <h3 className="text-xl font-bold text-black group-hover:text-amber-700 transition-colors" data-testid="text-emergency-title">
                  {service.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 shrink-0 w-full md:w-auto">
              <a
                href="tel:+491637947079"
                onClick={(e) => e.stopPropagation()}
                data-testid="button-emergency-call"
              >
                <Button size="lg" className="rounded-full font-bold bg-amber-500 text-black shadow-md shadow-amber-200 w-full md:w-auto">
                  <Phone className="mr-2 h-4 w-4" />
                  Notfall anrufen
                </Button>
              </a>
              <a
                href="https://wa.me/491637947079"
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                data-testid="button-emergency-whatsapp"
              >
                <Button size="lg" variant="outline" className="rounded-full font-bold border-amber-300 text-slate-700 w-full md:w-auto">
                  WhatsApp
                </Button>
              </a>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    );
  }

  const cardContent = (
    <Card className="h-full border-none shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden relative min-h-[280px] cursor-pointer">
      {service.image && (
        <div className="absolute inset-0 z-0">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover"
            style={{ filter: "blur(1px)" }}
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
      )}

      <CardContent className="p-8 flex flex-col items-start gap-4 relative z-10 h-full">
        <div className="p-4 rounded-2xl bg-white/90 shadow-sm group-hover:bg-primary group-hover:text-white transition-colors duration-300">
          <Icon className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <h3 className="text-xl font-bold text-white drop-shadow-lg group-hover:text-primary transition-colors">
            {service.title}
          </h3>
          <p className="text-white/90 leading-relaxed drop-shadow-md">
            {service.description}
          </p>
        </div>

        <div className="mt-auto pt-4 w-full flex items-center justify-between">
          <div className="h-1 w-12 bg-white/30 rounded-full group-hover:w-2/3 group-hover:bg-primary/50 transition-all duration-500" />
          <ArrowRight className="w-5 h-5 text-white/50 group-hover:text-primary group-hover:translate-x-1 transition-all duration-300" />
        </div>
      </CardContent>
    </Card>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      {slug ? (
        <Link href={`/leistungen/${slug}`} data-testid={`link-service-${slug}`}>
          {cardContent}
        </Link>
      ) : (
        cardContent
      )}
    </motion.div>
  );
}
