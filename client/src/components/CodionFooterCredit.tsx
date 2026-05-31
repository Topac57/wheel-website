export function CodionFooterCredit() {
  return (
    <div className="mt-8 flex flex-col items-center justify-center gap-3 border-t border-white/10 pt-6 sm:flex-row sm:gap-4">
      <span className="text-[11px] uppercase tracking-[0.18em] text-white/35">
        Designed &amp; Developed by
      </span>
      <a
        href="https://www.codion.digital"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Codion - Designed and developed by"
        className="group inline-flex items-center rounded-md px-2 py-1 transition-all duration-300 hover:scale-[1.04] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
      >
        <img
          src="/Logo-Neu.webp"
          alt="Codion"
          className="h-5 w-auto opacity-90 transition-all duration-300 group-hover:opacity-100 group-hover:drop-shadow-[0_0_6px_rgba(255,255,255,0.35)]"
        />
      </a>
    </div>
  );
}
