import { useEffect, useState } from "react";

/**
 * Roteador minimo baseado em hash, sem dependencias novas.
 *
 * `#/presentes`  -> rota "presentes" (outra pagina)
 * `#historia`    -> continua na home e o navegador rola ate a secao
 *
 * A barra inicial e o que separa "rota" de "ancora dentro da pagina".
 */
const readRoute = () => {
  const raw = window.location.hash.slice(1);
  return raw.startsWith("/") ? raw.slice(1).replace(/\/$/, "") : "";
};

export function useHashRoute() {
  const [route, setRoute] = useState(readRoute);

  useEffect(() => {
    const sync = () => setRoute(readRoute());
    window.addEventListener("hashchange", sync);
    return () => window.removeEventListener("hashchange", sync);
  }, []);

  return route;
}

/** Navega para uma rota ou para uma secao, com rolagem suave. */
export function goTo(target) {
  if (target.startsWith("/")) {
    window.location.hash = `#${target}`;
    return;
  }
  // Ancora: se ja estamos na home, rolamos direto (sem sujar o historico).
  const el = document.getElementById(target);
  if (el && readRoute() === "") {
    el.scrollIntoView({ behavior: prefersReducedMotion() ? "auto" : "smooth", block: "start" });
    window.history.replaceState(null, "", `#${target}`);
  } else {
    window.location.hash = `#${target}`;
  }
}

export const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;
