import { useEffect, useState } from "react";
import { goTo } from "../hooks/useHashRoute";
import { useScrollLock } from "../hooks/useScrollLock";
import { couple, navigation, wedding } from "../data/site";
import RsvpButton from "./RsvpButton";
import Icon from "./Icon";
import { Monogram } from "./Ornaments";

export function Navbar({ route }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  const onHome = route === "";

  useScrollLock(open);

  /* Fundo solido assim que a pagina sai do topo. */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Qualquer mudanca de hash (inclusive voltar/avancar) recolhe o menu. */
  useEffect(() => {
    const close = () => setOpen(false);
    window.addEventListener("hashchange", close);
    return () => window.removeEventListener("hashchange", close);
  }, []);

  /* Destaca a secao visivel (scrollspy). */
  useEffect(() => {
    if (!onHome || typeof IntersectionObserver === "undefined") return;

    const sections = navigation
      .filter((item) => item.id)
      .map((item) => document.getElementById(item.id))
      .filter(Boolean);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.25, 0.6] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [onHome, route]);

  const isActive = (item) =>
    item.route ? route === item.route.slice(1) : onHome && active === item.id;

  const handleNav = (event, item) => {
    event.preventDefault();
    setOpen(false);
    goTo(item.route ?? item.id);
  };

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,backdrop-filter] duration-400 ease-soft ${scrolled || open
            ? "bg-cream/95 shadow-soft backdrop-blur-xl"
            : "bg-transparent"
          }`}
      >
        <nav
          aria-label="Navegação principal"
          className="shell flex h-16 items-center justify-between gap-2 sm:h-[4.5rem]"
        >
          {/* Monograma */}
          <a
            href="#/"
            onClick={(event) => {
              event.preventDefault();
              setOpen(false);
              goTo("/");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="group flex shrink-0 items-center gap-2 rounded-full py-1 pr-1"
          >
            <Monogram className="h-6 w-9 text-blush-500 transition-transform duration-500 ease-petal group-hover:rotate-[-8deg] sm:h-7 sm:w-11" />
            <span className="hidden font-display text-[1.05rem] leading-none text-ink xs:inline">
              {couple.groom}
              <span className="px-1 font-script text-blush-500">&amp;</span>
              {couple.bride}
            </span>
          </a>

          {/* Links do desktop */}
          <ul className="hidden items-center gap-1 lg:flex">
            {navigation.map((item) => (
              <li key={item.id ?? item.route}>
                <a
                  href={item.route ? `#${item.route}` : `#${item.id}`}
                  onClick={(event) => handleNav(event, item)}
                  aria-current={isActive(item) ? "page" : undefined}
                  className={`relative inline-flex min-h-11 items-center rounded-full px-3.5 text-[0.75rem] font-medium uppercase tracking-[0.14em] transition-colors duration-200 ease-soft ${isActive(item)
                      ? "text-leaf-700"
                      : "text-stone hover:text-ink"
                    }`}
                >
                  {item.label}
                  <span
                    className={`absolute inset-x-3.5 bottom-2.5 h-px origin-left bg-leaf-500 transition-transform duration-300 ease-soft ${isActive(item) ? "scale-x-100" : "scale-x-0"
                      }`}
                  />
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              aria-expanded={open}
              aria-controls="menu-mobile"
              aria-label={open ? "Fechar menu" : "Abrir menu"}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line bg-cream text-ink transition-transform duration-200 ease-soft active:scale-95 lg:hidden"
            >
              <Icon name={open ? "close" : "menu"} size={20} />
            </button>
          </div>
        </nav>
      </header>

      {/* Menu do celular */}
      <div
        id="menu-mobile"
        hidden={!open}
        className="fixed inset-0 z-40 lg:hidden"
        aria-hidden={!open}
      >
        <button
          type="button"
          tabIndex={-1}
          aria-hidden="true"
          onClick={() => setOpen(false)}
          className="absolute inset-0 cursor-default bg-ink/35 backdrop-blur-[2px] animate-fade-up"
        />

        <div className="absolute inset-x-0 top-16 mx-auto max-w-2xl px-3 sm:top-[4.5rem]">
          <div className="animate-sheet-up overflow-hidden rounded-3xl border border-line bg-cream shadow-lift">
            <ul className="p-2">
              {navigation.map((item, index) => (
                <li key={item.id ?? item.route}>
                  <a
                    href={item.route ? `#${item.route}` : `#${item.id}`}
                    onClick={(event) => handleNav(event, item)}
                    aria-current={isActive(item) ? "page" : undefined}
                    style={{ animationDelay: `${index * 45}ms` }}
                    className={`flex min-h-12 animate-fade-up items-center justify-between gap-3 rounded-2xl px-4 py-3 text-[0.8rem] font-medium uppercase tracking-[0.14em] transition-colors duration-200 ease-soft ${isActive(item)
                        ? "bg-leaf-50 text-leaf-700"
                        : "text-stone hover:bg-blush-50 hover:text-ink"
                      }`}
                  >
                    {item.label}
                    <Icon name="arrowRight" size={16} className="opacity-45" />
                  </a>
                </li>
              ))}
            </ul>

            <div className="border-t border-line bg-blush-50 px-4 py-4">
              <RsvpButton size="md" className="w-full" onClick={() => setOpen(false)} />
              <p className="mt-3 text-center text-mini uppercase tracking-[0.2em] text-stone">
                {wedding.dateShort} · {wedding.city}/{wedding.state}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
