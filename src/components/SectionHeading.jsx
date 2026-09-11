import Reveal from "./Reveal";

/**
 * Cabecalho padrao das secoes: sobrenome em script, titulo serifado,
 * fio decorativo e um texto de apoio opcional.
 */
export function SectionHeading({
  script,
  title,
  description,
  tone = "blush",
  align = "center",
  className = "",
}) {
  const tones = {
    blush: "text-blush-500",
    leaf: "text-leaf-500",
    denim: "text-denim-500",
    cream: "text-cream/80",
  };

  const alignment =
    align === "center" ? "items-center text-center" : "items-start text-left";

  return (
    <div className={`flex flex-col ${alignment} ${className}`}>
      {script ? (
        <Reveal
          as="p"
          variant="down"
          className={`font-script text-script leading-none ${tones[tone]}`}
        >
          {script}
        </Reveal>
      ) : null}

      <Reveal as="h2" delay={80} className="mt-2 text-h2">
        {title}
      </Reveal>

      <Reveal
        delay={150}
        className={`divider-bloom mt-4 w-full ${align === "center" ? "" : "justify-start"}`}
      >
        <svg viewBox="0 0 24 24" className="h-3 w-3" aria-hidden="true" focusable="false">
          <path d="M12 3l2.6 6.4L21 12l-6.4 2.6L12 21l-2.6-6.4L3 12l6.4-2.6z" fill="currentColor" />
        </svg>
      </Reveal>

      {description ? (
        <Reveal
          as="p"
          delay={220}
          className={`mt-5 max-w-[52ch] text-body text-stone ${align === "center" ? "mx-auto" : ""}`}
        >
          {description}
        </Reveal>
      ) : null}
    </div>
  );
}

export default SectionHeading;
