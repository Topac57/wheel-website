import { MapPin } from "lucide-react";

export function Map() {
  return (
    <div className="space-y-6">
      <div className="bg-slate-900 text-white p-8 rounded-3xl shadow-xl">
        <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
          <MapPin className="text-primary" />
          Standort
        </h3>
        
        <div className="space-y-4 text-gray-300">
          <div>
            <p className="font-semibold text-white">Taha Taleb</p>
            <p>Premium Reifen- & Felgenservice</p>
          </div>
          <div>
            <p>Ludwig-Richter-Str. 13</p>
            <p>42429 Wuppertal</p>
          </div>
          <div className="pt-4 border-t border-gray-800" data-testid="text-opening-hours-footer">
            <p className="font-semibold text-white mb-2">Öffnungszeiten</p>
            <div className="space-y-1 text-sm">
              <div className="flex justify-between"><span>Montag</span><span>08:00 – 19:00 Uhr</span></div>
              <div className="flex justify-between"><span>Dienstag</span><span>08:00 – 19:00 Uhr</span></div>
              <div className="flex justify-between"><span>Mittwoch</span><span>08:00 – 19:00 Uhr</span></div>
              <div className="flex justify-between"><span>Donnerstag</span><span>08:00 – 19:00 Uhr</span></div>
              <div className="flex justify-between"><span>Freitag</span><span>15:30 – 19:00 Uhr</span></div>
              <div className="flex justify-between"><span>Samstag</span><span>08:00 – 17:00 Uhr</span></div>
              <div className="flex justify-between"><span>Sonntag</span><span className="text-gray-500">Geschlossen</span></div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-[300px] bg-gray-200 rounded-3xl overflow-hidden shadow-lg">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2516.4800845353594!2d7.14725!3d51.2475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b8d60555555555%3A0x5555555555555555!2sLudwig-Richter-Stra%C3%9Fe%2013%2C%2042429%20Wuppertal!5e0!3m2!1sde!2sde!4v1709855555555!5m2!1sde!2sde" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Standort Taha Taleb Wuppertal"
        />
      </div>
    </div>
  );
}
