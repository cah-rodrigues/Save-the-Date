import { useCallback, useEffect, useState } from "react";
import Icon from "../components/Icon";
import Modal, { ModalCloseButton } from "../components/Modal";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import { gallery } from "../data/site";

/**
 * Mosaico. No celular sao 2 colunas, no desktop 4. Os blocos deitados ocupam
 * duas colunas; os em pe, uma. Quem define a altura da faixa e o bloco em pe
 * (aspect 3/4) e os deitados esticam para acompanhar, entao a grade fecha
 * certinha nos dois tamanhos, sem buraco.
 */
const spans = {
  tall: "aspect-[3/4]",
  wide: "col-span-2 aspect-[3/2] lg:aspect-auto",
};

export function Gallery() {
  const [index, setIndex] = useState(null);
  const open = index !== null;

  const close = useCallback(() => setIndex(null), []);
  const step = useCallback(
    (delta) => setIndex((current) => (current + delta + gallery.length) % gallery.length),
    [],
  );

  useEffect(() => {
    if (!open) return;

    const onKey = (event) => {
      if (event.key === "ArrowRight") step(1);
      if (event.key === "ArrowLeft") step(-1);
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, step]);

  const current = open ? gallery[index] : null;

  return (
    <section id="galeria" className="relative bg-leaf-50 py-20 sm:py-28">
      <div className="shell">
        <SectionHeading
          script="Momentos"
          title="Nossa galeria"
          tone="denim"
          description="Um pedacinho do que já vivemos e nosso pré-wedding"
        />

        <ul className="mt-14 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4 lg:gap-5">
          {gallery.map((item, position) => (
            <Reveal
              as="li"
              key={item.src}
              variant="bloom"
              delay={(position % 3) * 80}
              className={spans[item.span]}
            >
              <button
                type="button"
                onClick={() => setIndex(position)}
                className="frame-soft group relative block h-full w-full overflow-hidden bg-cream shadow-soft transition-[transform,box-shadow] duration-500 ease-soft hover:-translate-y-1.5 hover:shadow-lift"
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  width={item.w}
                  height={item.h}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover object-center transition-transform duration-[900ms] ease-soft group-hover:scale-[1.06]"
                />

                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-ink/35 opacity-0 transition-opacity duration-400 ease-soft group-hover:opacity-100"
                />

                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 ease-soft group-hover:opacity-100"
                >
                  <span className="inline-flex h-11 w-11 scale-90 items-center justify-center rounded-full bg-cream text-ink shadow-soft transition-transform duration-400 ease-petal group-hover:scale-100">
                    <Icon name="eye" size={19} />
                  </span>
                </span>

                <span className="sr-only">Ampliar foto</span>
              </button>
            </Reveal>
          ))}
        </ul>
      </div>

      <Modal
        open={open}
        onClose={close}
        labelledBy="lightbox-legenda"
        scrimClassName="bg-ink/85"
        panelClassName="px-3 pb-4 sm:px-6"
      >
        {current ? (
          <figure className="mx-auto w-full max-w-3xl">
            <div className="relative overflow-hidden rounded-[1.5rem] bg-ink/60 sm:rounded-[2rem]">
              <img
                src={current.src}
                alt={current.alt}
                width={current.w}
                height={current.h}
                className="mx-auto max-h-[68dvh] w-auto max-w-full animate-pop-in object-contain"
              />

              <ModalCloseButton
                onClose={close}
                tone="light"
                className="absolute right-3 top-3"
              />
            </div>

            <figcaption
              id="lightbox-legenda"
              className="mt-4 flex items-center justify-between gap-3 rounded-full border border-cream/25 bg-ink/70 px-3 py-2 backdrop-blur-sm"
            >
              <button
                type="button"
                onClick={() => step(-1)}
                aria-label="Foto anterior"
                data-autofocus
                className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-cream transition-colors duration-200 hover:bg-cream/20"
              >
                <Icon name="chevronLeft" size={19} />
              </button>

              <span className="tnum truncate text-mini uppercase tracking-[0.2em] text-cream">
                {index + 1} / {gallery.length}
              </span>

              <button
                type="button"
                onClick={() => step(1)}
                aria-label="Próxima foto"
                className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-cream transition-colors duration-200 hover:bg-cream/20"
              >
                <Icon name="chevronRight" size={19} />
              </button>
            </figcaption>
          </figure>
        ) : null}
      </Modal>
    </section>
  );
}

export default Gallery;
