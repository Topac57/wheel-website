import { useEffect, useState } from "react";
import { getOpeningStatus, OPENING_HOURS_FALLBACK, type OpeningStatus as Status } from "@/lib/business";
import { cn } from "@/lib/utils";

/**
 * Zeigt „Jetzt geöffnet – bis 18 Uhr“ bzw. den nächsten Öffnungszeitpunkt.
 *
 * Der erste Render — also auch das vorgerenderte HTML — enthält bewusst nur die
 * Öffnungszeiten und keine Jetzt-Aussage: Vorgerendertes HTML wird gecacht, eine
 * eingebackene Behauptung „jetzt geöffnet“ wäre also über weite Strecken des
 * Tages schlicht falsch. Der Live-Status kommt nach dem Hydrieren dazu; ohne
 * JavaScript bleiben die korrekten Zeiten stehen.
 */
export function OpeningStatus({ className }: { className?: string }) {
  const [status, setStatus] = useState<Status | null>(null);

  useEffect(() => {
    const update = () => setStatus(getOpeningStatus());
    update();
    // Hält den Status auch in lange geöffneten Tabs aktuell.
    const timer = window.setInterval(update, 60_000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-sm font-medium text-white backdrop-blur-md",
        className,
      )}
      data-testid="badge-opening-status"
    >
      <span
        className={cn(
          "h-2 w-2 shrink-0 rounded-full",
          status === null && "bg-white/50",
          status?.isOpen === true && "animate-pulse bg-primary",
          status?.isOpen === false && "bg-amber-400",
        )}
      />
      {status?.label ?? OPENING_HOURS_FALLBACK}
    </span>
  );
}
