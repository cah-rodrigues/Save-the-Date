/**
 * Enfeites decorativos (ramos, folhas e uma flor solta) usados como textura
 * de fundo. Sao puramente estetico: sempre aria-hidden e sem interacao.
 */

export function Branch({ className = "", flip = false }) {
  return (
    <svg
      viewBox="0 0 140 220"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.1"
      strokeLinecap="round"
      aria-hidden="true"
      focusable="false"
      style={flip ? { transform: "scaleX(-1)" } : undefined}
    >
      <path d="M22 216C34 168 52 116 82 74 100 48 120 28 136 16" />
      <path d="M44 158c-14-6-22-20-20-36 16 2 27 12 30 27" />
      <path d="M44 158c2-15 12-27 27-31 3 15-4 29-17 35" />
      <path d="M66 116c-13-7-19-21-16-36 15 4 25 15 26 30" />
      <path d="M66 116c4-14 15-25 30-27 1 15-7 28-20 33" />
      <path d="M92 74c-12-8-16-22-12-36 14 5 23 17 23 32" />
      <path d="M92 74c5-14 17-23 32-24-1 15-10 27-23 31" />
      <path d="M116 38c-9-8-11-20-6-31 11 6 17 17 15 29" />
    </svg>
  );
}

export function Sprig({ className = "" }) {
  return (
    <svg
      viewBox="0 0 120 60"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.1"
      strokeLinecap="round"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M6 30h108" />
      <path d="M30 30c0-8 6-14 15-16 1 9-5 16-15 16zM30 30c0 8 6 14 15 16 1-9-5-16-15-16z" />
      <path d="M60 30c0-8 6-14 15-16 1 9-5 16-15 16zM60 30c0 8 6 14 15 16 1-9-5-16-15-16z" />
      <path d="M90 30c0-7 5-12 13-14 1 8-4 14-13 14zM90 30c0 7 5 12 13 14 1-8-4-14-13-14z" />
    </svg>
  );
}

export function Bloom({ className = "" }) {
  return (
    <svg
      viewBox="0 0 80 80"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.1"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <circle cx="40" cy="40" r="7.5" />
      <path d="M40 32.5c0-9 3-15 8-18 4 5 3.5 13-2 18" />
      <path d="M47.5 40c9 0 15 3 18 8-5 4-13 3.5-18-2" />
      <path d="M40 47.5c0 9-3 15-8 18-4-5-3.5-13 2-18" />
      <path d="M32.5 40c-9 0-15-3-18-8 5-4 13-3.5 18 2" />
      <path d="M45.3 34.7c6.4-6.4 12.3-9 18-8.2.8 5.7-1.8 11.6-8.2 18" />
      <path d="M45.3 45.3c6.4 6.4 9 12.3 8.2 18-5.7.8-11.6-1.8-18-8.2" />
      <path d="M34.7 45.3c-6.4 6.4-12.3 9-18 8.2-.8-5.7 1.8-11.6 8.2-18" />
      <path d="M34.7 34.7c-6.4-6.4-9-12.3-8.2-18 5.7-.8 11.6 1.8 18 8.2" />
    </svg>
  );
}

export function Monogram({ className = "" }) {
  return (
    <svg
      viewBox="0 0 64 44"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinecap="round"
      aria-hidden="true"
      focusable="false"
    >
      <circle cx="24" cy="24" r="15" />
      <circle cx="40" cy="24" r="15" />
      <path d="M32 9c0-4 2.5-7 6-7" />
      <path d="M38 2l2.5 3.5L38 6l-2-1z" />
    </svg>
  );
}
