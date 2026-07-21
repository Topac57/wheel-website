import { Star } from "lucide-react";
import { business } from "@/lib/business";

/**
 * Sternebewertung aus dem Google-Unternehmensprofil.
 *
 * Die 4,8 werden als tatsächlich zu 96 % gefüllte Sternreihe dargestellt und
 * nicht auf 5 aufgerundet — eine geschönte Darstellung wäre gegenüber Besuchern
 * unehrlich und verstößt gegen Googles Richtlinien für Bewertungs-Snippets.
 */
export function GoogleRating({ className }: { className?: string }) {
  const percent = (business.rating / 5) * 100;

  return (
    <div className={className} data-testid="block-google-rating">
      <div className="flex items-center gap-3">
        <span className="font-display text-4xl font-extrabold leading-none text-slate-900">
          {business.rating.toLocaleString("de-DE", { minimumFractionDigits: 1 })}
        </span>

        <div>
          <div className="relative inline-block" aria-hidden="true">
            <div className="flex gap-0.5 text-slate-300">
              {Array.from({ length: 5 }, (_, i) => (
                <Star key={i} className="h-5 w-5 fill-current" />
              ))}
            </div>
            <div
              className="absolute inset-y-0 left-0 overflow-hidden"
              style={{ width: `${percent}%` }}
            >
              <div className="flex gap-0.5 text-amber-400">
                {Array.from({ length: 5 }, (_, i) => (
                  <Star key={i} className="h-5 w-5 shrink-0 fill-current" />
                ))}
              </div>
            </div>
          </div>
          <p className="text-sm text-slate-600">
            <span className="sr-only">
              {business.rating.toLocaleString("de-DE", { minimumFractionDigits: 1 })} von 5 Sternen bei{" "}
            </span>
            {business.reviewCount} Google-Bewertungen
          </p>
        </div>
      </div>
    </div>
  );
}
