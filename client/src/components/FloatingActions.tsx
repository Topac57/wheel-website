import { Phone, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export function FloatingActions() {
  return (
    <>
      {/* Desktop Floating WhatsApp */}
      <motion.a
        href="https://wa.me/491637947079"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1 }}
        className="hidden md:flex fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 items-center gap-2 group"
      >
        <MessageCircle className="h-6 w-6" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 whitespace-nowrap font-bold">
          WhatsApp
        </span>
      </motion.a>

      {/* Mobile Sticky Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] p-4 pb-safe grid grid-cols-2 gap-4">
        <a href="tel:+491637947079" className="w-full">
          <button className="w-full flex items-center justify-center gap-2 bg-slate-900 text-white py-3 rounded-xl font-bold shadow-sm active:scale-95 transition-transform">
            <Phone className="h-5 w-5" />
            Anrufen
          </button>
        </a>
        <a 
          href="https://wa.me/491637947079" 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-full"
        >
          <button className="w-full flex items-center justify-center gap-2 bg-[#25D366] text-white py-3 rounded-xl font-bold shadow-sm active:scale-95 transition-transform">
            <MessageCircle className="h-5 w-5" />
            WhatsApp
          </button>
        </a>
      </div>
    </>
  );
}
