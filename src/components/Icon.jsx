/**
 * Conjunto unico de icones de interface: traco 1.6, cantos arredondados,
 * grid 24x24. Nada de emoji como icone estrutural.
 */
const paths = {
  menu: <path d="M3.5 7.5h17M3.5 12h11M3.5 16.5h17" />,
  close: <path d="M6.5 6.5l11 11M17.5 6.5l-11 11" />,
  chevronDown: <path d="M6 9.5l6 5.5 6-5.5" />,
  chevronLeft: <path d="M14.5 5.5L8 12l6.5 6.5" />,
  chevronRight: <path d="M9.5 5.5L16 12l-6.5 6.5" />,
  arrowRight: <path d="M3.75 12h15.5M13 6l6.25 6L13 18" />,
  arrowUp: <path d="M12 19.5V5M6 11l6-6 6 6" />,
  heart: (
    <path d="M12 20.4s-7.6-4.8-7.6-10A4.2 4.2 0 0 1 12 7.7a4.2 4.2 0 0 1 7.6 2.7c0 5.2-7.6 10-7.6 10z" />
  ),
  gift: (
    <>
      <path d="M4 11.5h16V19a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z" />
      <path d="M2.75 7.5h18.5v4H2.75z" />
      <path d="M12 7.5V21" />
      <path d="M12 7.5S9.6 7.4 8.4 6.2A2.2 2.2 0 0 1 11.5 3C12.6 4.1 12 7.5 12 7.5zM12 7.5s2.4-.1 3.6-1.3A2.2 2.2 0 0 0 12.5 3C11.4 4.1 12 7.5 12 7.5z" />
    </>
  ),
  calendar: (
    <>
      <rect x="3.25" y="5.5" width="17.5" height="15.25" rx="4" />
      <path d="M3.25 10h17.5M8.5 3v4.5M15.5 3v4.5" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="8.75" />
      <path d="M12 7v5.3l3.4 2" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21s7-6.4 7-11.2A7 7 0 1 0 5 9.8C5 14.6 12 21 12 21z" />
      <circle cx="12" cy="9.7" r="2.6" />
    </>
  ),
  check: <path d="M4.75 12.5l4.75 4.75L19.25 7" />,
  copy: (
    <>
      <rect x="8.75" y="8.75" width="11.5" height="11.5" rx="3.5" />
      <path d="M5.25 15.25H5a1.75 1.75 0 0 1-1.75-1.75V5.5A1.75 1.75 0 0 1 5 3.75h8a1.75 1.75 0 0 1 1.75 1.75v.25" />
    </>
  ),
  sparkle: (
    <>
      <path d="M12 3.2l1.9 5.4 5.4 1.9-5.4 1.9L12 17.8l-1.9-5.4L4.7 10.5l5.4-1.9z" />
      <path d="M18.6 16.4l.7 2 2 .7-2 .7-.7 2-.7-2-2-.7 2-.7z" />
    </>
  ),
  music: (
    <>
      <path d="M9 18.5V6.2l10-2v12.3" />
      <circle cx="6.75" cy="18.5" r="2.35" />
      <circle cx="16.75" cy="16.5" r="2.35" />
    </>
  ),
  instagram: (
    <>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <path d="M16.9 7.1h.01" />
    </>
  ),
  chat: (
    <path d="M20.5 11.6c0 4.1-3.8 7.4-8.5 7.4-1 0-2-.15-2.9-.43L4 20.5l1.6-3.7A7 7 0 0 1 3.5 11.6C3.5 7.5 7.3 4.2 12 4.2s8.5 3.3 8.5 7.4z" />
  ),
  mail: (
    <>
      <rect x="2.75" y="5" width="18.5" height="14" rx="4" />
      <path d="M4.5 8.25L12 13.3l7.5-5.05" />
    </>
  ),
  users: (
    <>
      <circle cx="9.5" cy="8.25" r="3.5" />
      <path d="M3.5 20c0-3.3 2.7-5.5 6-5.5s6 2.2 6 5.5" />
      <path d="M16 5.2a3.5 3.5 0 0 1 0 6.6M17.5 14.9c2 .7 3.3 2.4 3.3 4.6" />
    </>
  ),
  chapel: (
    <>
      <path d="M4.75 20.5V10L12 4.6l7.25 5.4v10.5" />
      <path d="M3 20.5h18" />
      <path d="M9.6 20.5v-4.2a2.4 2.4 0 0 1 4.8 0v4.2" />
      <path d="M12 1.8v3.4M10.5 3.2h3" />
    </>
  ),
  glass: (
    <>
      <path d="M7.5 3.5h9l-1 5.6A3.7 3.7 0 0 1 12 12a3.7 3.7 0 0 1-3.5-2.9z" />
      <path d="M12 12v7.5M8.5 20.5h7" />
    </>
  ),
  dress: (
    <path d="M8.5 3l3.5 1.8L15.5 3l4 2.4-2.2 3.6-1.8-.9V21h-7V8.1l-1.8.9L4.5 5.4z" />
  ),
  camera: (
    <>
      <path d="M3 8.75A2.75 2.75 0 0 1 5.75 6h1.6l1.2-2.1h6.9L16.65 6h1.6A2.75 2.75 0 0 1 21 8.75v8.5A2.75 2.75 0 0 1 18.25 20H5.75A2.75 2.75 0 0 1 3 17.25z" />
      <circle cx="12" cy="12.8" r="3.7" />
    </>
  ),
  pix: (
    <>
      <path d="M12 2.9l9.1 9.1-9.1 9.1-9.1-9.1z" />
      <path d="M12 8.2L15.8 12 12 15.8 8.2 12z" />
    </>
  ),
  card: (
    <>
      <rect x="2.75" y="5" width="18.5" height="14" rx="4" />
      <path d="M2.75 9.75h18.5M6.5 15h3.5" />
    </>
  ),
  filter: <path d="M4 6.5h16M7 12h10M10 17.5h4" />,
  leaf: (
    <>
      <path d="M20 4c0 9-5.6 13.5-11 13.5A5.2 5.2 0 0 1 3.9 12C3.9 7.2 9.5 4.3 20 4z" />
      <path d="M4.5 20.5C7.5 15 12 11.5 16.5 9.5" />
    </>
  ),
  ring: (
    <>
      <circle cx="12" cy="14.5" r="6" />
      <path d="M9.2 8.9L10.6 4h2.8l1.4 4.9" />
    </>
  ),
  external: (
    <>
      <path d="M13.5 4.5h6v6" />
      <path d="M19.5 4.5L11 13" />
      <path d="M18.5 14v4.5a2 2 0 0 1-2 2h-11a2 2 0 0 1-2-2v-11a2 2 0 0 1 2-2H10" />
    </>
  ),
  eye: (
    <>
      <path d="M2.5 12S6.2 5.75 12 5.75 21.5 12 21.5 12 17.8 18.25 12 18.25 2.5 12 2.5 12z" />
      <circle cx="12" cy="12" r="3.1" />
    </>
  ),
  whatsapp: (
    <>
      <path d="M3.6 20.4l1.3-4.5a8.2 8.2 0 1 1 3.3 3.2z" />
      <path d="M9 8.6c.5-.1.8 0 1 .4l.6 1.3c.1.3.1.5-.1.8l-.4.5c-.2.2-.2.4-.1.6a5 5 0 0 0 2.3 2.3c.2.1.4.1.6-.1l.5-.5c.2-.2.5-.3.8-.1l1.3.6c.4.2.5.5.4 1a2 2 0 0 1-2 1.4 7.6 7.6 0 0 1-6.4-6.4 2 2 0 0 1 1.5-1.8z" />
    </>
  ),
};

export function Icon({ name, size = 22, strokeWidth = 1.6, className = "", title }) {
  const glyph = paths[name];
  if (!glyph) return null;

  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden={title ? undefined : "true"}
      role={title ? "img" : undefined}
      focusable="false"
    >
      {title ? <title>{title}</title> : null}
      {glyph}
    </svg>
  );
}

export default Icon;
