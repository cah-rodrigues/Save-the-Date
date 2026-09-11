import { useReveal } from "../hooks/useReveal";

/**
 * Envolve qualquer conteudo com a animacao de entrada no scroll.
 * `delay` em ms cria o efeito escalonado em listas (30-60ms por item).
 */
export function Reveal({
  as: Tag = "div",
  variant = "up",
  delay = 0,
  className = "",
  style,
  children,
  ...rest
}) {
  const ref = useReveal();

  return (
    <Tag
      ref={ref}
      className={`reveal reveal--${variant} ${className}`}
      style={{ "--reveal-delay": `${delay}ms`, ...style }}
      {...rest}
    >
      {children}
    </Tag>
  );
}

export default Reveal;
