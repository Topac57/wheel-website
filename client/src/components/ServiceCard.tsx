import { motion } from "framer-motion";
import { Disc, Wrench, Warehouse, Info, ShieldCheck, Timer } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import type { Service } from "@shared/schema";

// Map icon strings to Lucide components
const IconMap: Record<string, any> = {
  Disc,
  Wrench,
  Warehouse,
  Info,
  ShieldCheck,
  Timer
};

interface ServiceCardProps {
  service: Service;
  index: number;
}

export function ServiceCard({ service, index }: ServiceCardProps) {
  const Icon = IconMap[service.icon] || Info;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Card className="h-full border-none shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden bg-slate-50/50">
        <CardContent className="p-8 flex flex-col items-start gap-4">
          <div className="p-4 rounded-2xl bg-white shadow-sm group-hover:bg-primary group-hover:text-white transition-colors duration-300">
            <Icon className="w-8 h-8" />
          </div>
          
          <div className="space-y-2">
            <h3 className="text-xl font-bold text-slate-900 group-hover:text-primary transition-colors">
              {service.title}
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {service.description}
            </p>
          </div>
          
          <div className="mt-auto pt-4 w-full">
            <div className="h-1 w-12 bg-gray-200 rounded-full group-hover:w-full group-hover:bg-primary/20 transition-all duration-500" />
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
