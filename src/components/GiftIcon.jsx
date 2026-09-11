/**
 * Ilustracoes de linha para a lista de presentes.
 * Mesma familia visual dos icones de interface: traco 1.4, grid 48x48.
 */
const art = {
  panela: (
    <>
      <path d="M10 18h28" />
      <path d="M13 18l1.4 16.2A4 4 0 0 0 18.4 38h11.2a4 4 0 0 0 4-3.8L35 18" />
      <path d="M10 21H7.5a2.5 2.5 0 0 0 0 5H10" />
      <path d="M38 21h2.5a2.5 2.5 0 0 1 0 5H38" />
      <path d="M17 18a7 7 0 0 1 14 0" />
      <path d="M24 8.5V11" />
    </>
  ),
  fritadeira: (
    <>
      <rect x="10" y="10" width="28" height="28" rx="7" />
      <path d="M10 26h28" />
      <path d="M20 32.5h8" />
      <circle cx="24" cy="18" r="3.5" />
    </>
  ),
  cafeteira: (
    <>
      <path d="M12 17h20v7.5A10 10 0 0 1 12 24.5z" />
      <path d="M32 19h3a4 4 0 0 1 0 8h-3" />
      <path d="M9 38h30" />
      <path d="M18 8.5c0 2-2 2-2 4M24 7.5c0 2-2 2-2 4M30 8.5c0 2-2 2-2 4" />
    </>
  ),
  talheres: (
    <>
      <path d="M9.5 8v8a4 4 0 0 0 8 0V8" />
      <path d="M13.5 8v8" />
      <path d="M13.5 24v16" />
      <path d="M30 22.5c-1.6-6.2.4-11.4 4.6-14.5 1.6 5.2 1.6 10.2 0 14.5z" />
      <path d="M34.6 22.5V40" />
    </>
  ),
  tacas: (
    <>
      <path d="M16 9h16l-1.7 8.8A6.5 6.5 0 0 1 24 23a6.5 6.5 0 0 1-6.3-5.2z" />
      <path d="M24 23v13" />
      <path d="M17 39h14" />
    </>
  ),
  jantar: (
    <>
      <circle cx="24" cy="24" r="15.5" />
      <circle cx="24" cy="24" r="9.5" />
    </>
  ),
  liquidificador: (
    <>
      <path d="M16.5 9h15l-1.4 16.5h-12.2z" />
      <path d="M17 15h14" />
      <path d="M18.5 25.5h11l-.7 5.5h-9.6z" />
      <path d="M15 31h18a3 3 0 0 1 3 3v3a2 2 0 0 1-2 2H14a2 2 0 0 1-2-2v-3a3 3 0 0 1 3-3z" />
    </>
  ),
  tapete: (
    <>
      <rect x="7" y="13" width="34" height="21" rx="5" />
      <path d="M7 19h34M7 28h34" />
      <path d="M11.5 34v4M17 34v4M22.5 34v4M28 34v4M33.5 34v4" />
    </>
  ),
  luminaria: (
    <>
      <path d="M15 20.5L19.5 9h9L33 20.5z" />
      <path d="M24 20.5V39" />
      <path d="M16.5 39.5h15" />
    </>
  ),
  vaso: (
    <>
      <path d="M18 21h12c0 9-1.8 16-6 16s-6-7-6-16z" />
      <path d="M17.6 17h12.8l-.9 4H18.5z" />
      <path d="M24 17V9.5" />
      <path d="M24 14.5c-3.2 0-5.4-2-5.4-4.4 3.2 0 5.4 1.8 5.4 4.4zM24 14.5c3.2 0 5.4-2 5.4-4.4-3.2 0-5.4 1.8-5.4 4.4z" />
      <circle cx="24" cy="7" r="2.6" />
    </>
  ),
  cama: (
    <>
      <path d="M7 34.5V17" />
      <path d="M41 34.5v-8a4 4 0 0 0-4-4H7" />
      <path d="M7 29.5h34" />
      <path d="M13.5 22.5v-4a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v4" />
      <path d="M10.5 34.5v4M37.5 34.5v4" />
    </>
  ),
  toalhas: (
    <>
      <rect x="9" y="12" width="30" height="9" rx="4.5" />
      <circle cx="15" cy="16.5" r="2.1" />
      <rect x="9" y="26" width="30" height="9" rx="4.5" />
      <circle cx="15" cy="30.5" r="2.1" />
    </>
  ),
  almofadas: (
    <>
      <path d="M11 14c8-1.6 18-1.6 26 0 1.7 6.2 1.7 13.8 0 20-8 1.6-18 1.6-26 0-1.7-6.2-1.7-13.8 0-20z" />
      <path d="M17.5 20.5c4.3-.8 8.7-.8 13 0" />
    </>
  ),
  brinde: (
    <>
      <path d="M9 11h10l-1.5 6.6A4.2 4.2 0 0 1 14 21a4.2 4.2 0 0 1-3.5-3.4z" />
      <path d="M14 21v12M10 34h8" />
      <path d="M29 11h10l-1.5 6.6A4.2 4.2 0 0 1 34 21a4.2 4.2 0 0 1-3.5-3.4z" />
      <path d="M34 21v12M30 34h8" />
      <path d="M24 31.5s-5.6-3.6-5.6-7.4a3.1 3.1 0 0 1 5.6-1.9 3.1 3.1 0 0 1 5.6 1.9c0 3.8-5.6 7.4-5.6 7.4z" />
    </>
  ),
  barco: (
    <>
      <path d="M7 32h34l-3.6 6.6a2 2 0 0 1-1.8 1.1H12.4a2 2 0 0 1-1.8-1.1z" />
      <path d="M23 32V7L11 32z" />
      <path d="M27 32V14.5L37 32z" />
    </>
  ),
  aviao: (
    <>
      <path d="M42 7L6.5 21.5l13.4 5.4z" />
      <path d="M42 7L19.9 26.9v12.4l6.7-8.4" />
    </>
  ),
  mala: (
    <>
      <rect x="8" y="16" width="32" height="22" rx="6" />
      <path d="M18 16v-3a3.5 3.5 0 0 1 3.5-3.5h5A3.5 3.5 0 0 1 30 13v3" />
      <path d="M18.5 22.5v9M29.5 22.5v9" />
    </>
  ),
  espumante: (
    <>
      <path d="M20 8.5h8v5.2l3 6.3V37a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 17 37V20l3-6.3z" />
      <path d="M17 24h14" />
      <path d="M36 11l.9 2.6 2.6.9-2.6.9-.9 2.6-.9-2.6-2.6-.9 2.6-.9z" />
      <path d="M11 19l.7 2 2 .7-2 .7-.7 2-.7-2-2-.7 2-.7z" />
    </>
  ),
};

export function GiftIcon({ name, size = 48, className = "" }) {
  const glyph = art[name] ?? art.jantar;

  return (
    <svg
      viewBox="0 0 48 48"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      {glyph}
    </svg>
  );
}

export default GiftIcon;
