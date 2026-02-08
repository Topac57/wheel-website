import { motion } from "framer-motion";
import { Disc, Wrench, Warehouse, Info, ShieldCheck, Timer, RefreshCw, Gauge, ShoppingCart, Paintbrush, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
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
  Paintbrush
};

interface ServiceCardProps {
  service: Service;
  index: number;
}

export function ServiceCard({ service, index }: ServiceCardProps) {
  const Icon = IconMap[service.icon] || Info;
  const slug = service.slug;

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
