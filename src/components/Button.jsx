import { goTo } from "../hooks/useHashRoute";

const base =
  "group inline-flex items-center justify-center gap-2 rounded-full font-body font-medium " +
  "tracking-[0.14em] uppercase transition-[transform,background-color,color,box-shadow,border-color] " +
  "duration-200 ease-soft active:scale-[0.97] disabled:pointer-events-none disabled:opacity-50 " +
  "min-h-11 text-center whitespace-nowrap";

const sizes = {
  sm: "px-4 py-2.5 text-[0.7rem] xs:text-[0.73rem]",
  md: "px-5 py-3 text-[0.72rem] xs:text-[0.77rem]",
  lg: "px-6 py-3.5 text-[0.74rem] xs:text-[0.81rem]",
};

const variants = {
  primary:
    "sheen bg-leaf-700 text-cream shadow-soft hover:bg-[#2f4434] hover:shadow-lift hover:-translate-y-0.5",
  blush:
    "sheen bg-blush-700 text-cream shadow-soft hover:bg-[#5e332f] hover:shadow-lift hover:-translate-y-0.5",
  outline:
    "border border-leaf-300 bg-transparent text-leaf-700 hover:bg-leaf-50 hover:border-leaf-500 hover:-translate-y-0.5",
  ghostLight:
    "border border-cream/70 bg-cream/15 text-cream backdrop-blur-sm hover:bg-cream/25 hover:-translate-y-0.5",
  soft: "bg-blush-100 text-blush-700 hover:bg-blush-200 hover:-translate-y-0.5",
};

export function Button({
  as,
  to,
  href,
  variant = "primary",
  size = "md",
  className = "",
  children,
  onClick,
  ...rest
}) {
  const classes = `${base} ${sizes[size]} ${variants[variant]} ${className}`;

  if (to) {
    return (
      <a
        href={to.startsWith("/") ? `#${to}` : `#${to}`}
        className={classes}
        onClick={(event) => {
          event.preventDefault();
          goTo(to);
          onClick?.(event);
        }}
        {...rest}
      >
        <span className="inline-flex items-center gap-2">{children}</span>
      </a>
    );
  }

  const Tag = as ?? (href ? "a" : "button");

  return (
    <Tag
      href={href}
      className={classes}
      onClick={onClick}
      {...(Tag === "button" ? { type: rest.type ?? "button" } : null)}
      {...rest}
    >
      <span className="inline-flex items-center gap-2">{children}</span>
    </Tag>
  );
}

export default Button;
