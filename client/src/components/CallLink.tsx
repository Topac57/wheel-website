import type { ReactNode } from "react";
import { business } from "@/lib/business";

/**
 * ⚠️ NICHT durch einen <button> mit onClick ersetzen.
 *
 * An genau diesen `tel:`-Links hängt die Click-to-Call-Conversion-Messung in
 * Google Ads. Ein Button mit JavaScript-Handler wird dort nicht als Anruf
 * gezählt — die Erfolgsmessung der Kampagnen wäre sofort blind. Aus demselben
 * Grund ist das hier ein reiner Anker ohne Klick-Handler: Er funktioniert auch
 * dann, wenn das JS-Bundle noch gar nicht geladen ist.
 */
export function CallLink({
  className,
  children,
  testId,
}: {
  className?: string;
  children: ReactNode;
  testId?: string;
}) {
  return (
    <a
      href={business.phoneHref}
      className={className}
      data-google-wcc-phone="business"
      data-testid={testId}
    >
      {children}
    </a>
  );
}

export function WhatsAppLink({
  className,
  children,
  testId,
}: {
  className?: string;
  children: ReactNode;
  testId?: string;
}) {
  return (
    <a
      href={business.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      data-testid={testId}
    >
      {children}
    </a>
  );
}
