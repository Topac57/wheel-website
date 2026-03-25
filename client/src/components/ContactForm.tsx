import { Phone, MessageCircle, MapPin, Clock } from "lucide-react";
import { motion } from "framer-motion";

export function DirectContact() {
  return (
    <div className="space-y-6">
      <div className="mb-8">
        <h3 className="text-2xl font-bold mb-2 text-white">Direkter Kontakt</h3>
        <p className="text-gray-400">Rufen Sie uns an oder schreiben Sie per WhatsApp.</p>
      </div>

      <div className="grid gap-4">
        <motion.a
          href="tel:+491637947079"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="group flex items-center gap-5 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 hover:border-primary/30 transition-all duration-300"
          data-testid="button-call-contact"
        >
          <div className="bg-slate-900 p-4 rounded-xl text-white group-hover:bg-primary transition-colors">
            <Phone className="h-7 w-7" />
          </div>
          <div className="flex-1">
            <p className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-1">Jetzt Anrufen</p>
            <p className="text-xl font-bold text-slate-900">0163 794 70 79</p>
          </div>
        </motion.a>

        <motion.a
          href="https://wa.me/491637947079"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="group flex items-center gap-5 bg-[#25D366] p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
          data-testid="button-whatsapp-contact"
        >
          <div className="bg-white/20 p-4 rounded-xl text-white">
            <MessageCircle className="h-7 w-7" />
          </div>
          <div className="flex-1 text-white">
            <p className="text-sm font-medium text-white/80 uppercase tracking-wide mb-1">WhatsApp schreiben</p>
            <p className="text-xl font-bold">Sofort verbinden</p>
          </div>
        </motion.a>
      </div>

      <div className="mt-8 pt-6 border-t border-white/10">
        <div className="space-y-4 text-gray-400">
          <div className="flex items-start gap-3">
            <MapPin className="h-5 w-5 text-primary mt-0.5 shrink-0" />
            <div>
              <p className="font-medium text-white">Adresse</p>
              <p>Ludwig-Richter-Str. 13</p>
              <p>42429 Wuppertal</p>
            </div>
          </div>
          <div className="flex items-start gap-3" data-testid="text-opening-hours-contact">
            <Clock className="h-5 w-5 text-primary mt-0.5 shrink-0" />
            <div>
              <p className="font-medium text-white mb-1">Geschäftszeiten</p>
              <div className="space-y-0.5 text-sm">
                <p>Mo – Do: 08:00 – 19:00</p>
                <p>Fr: 15:30 – 19:00</p>
                <p>Sa: 08:00 – 17:00</p>
                <p className="text-gray-500">So: Geschlossen</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ContactForm() {
  return <DirectContact />;
}
