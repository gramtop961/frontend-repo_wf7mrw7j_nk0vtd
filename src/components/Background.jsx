export default function Background() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {/* Soft radial glow */}
      <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-rose-400/30 blur-3xl" />
      <div className="absolute top-40 -right-20 h-80 w-80 rounded-full bg-fuchsia-400/30 blur-3xl" />
      <div className="absolute bottom-[-60px] left-1/2 -translate-x-1/2 h-96 w-[36rem] rounded-full bg-sky-400/20 blur-3xl" />

      {/* Subtle grid */}
      <svg className="absolute inset-0 h-full w-full opacity-[0.07]" viewBox="0 0 100 100" preserveAspectRatio="none">
        <defs>
          <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
            <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    </div>
  );
}
