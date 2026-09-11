import RsvpButton from "../components/RsvpButton";
import Icon from "../components/Icon";
import Reveal from "../components/Reveal";
import { useParallax } from "../hooks/useParallax";
import { photos } from "../lib/media";
import { couple, wedding } from "../data/site";

export function Rsvp() {
  const image = useParallax(-26);

  return (
    <section id="confirmar" className="relative isolate overflow-hidden">
      <div ref={image} className="parallax absolute inset-0 -z-10 scale-110">
        <img
          src={photos.beijo.src}
          alt=""
          aria-hidden="true"
          loading="lazy"
          decoding="async"
          className="h-full w-full scale-105 object-cover blur-[3px]"
        />
      </div>

      {/*
        Duas camadas: um véu uniforme que garante o contraste do texto e um
        degradê que escurece as bordas, para o bloco central respirar.
      */}
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-ink/72" />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-b from-ink/55 via-ink/25 to-ink/65"
      />

      <div className="shell-narrow py-24 text-center sm:py-32">
        <Reveal as="p" variant="down" className="on-photo font-script text-script text-blush-200">
          Vamos celebrar
        </Reveal>

        <Reveal as="h2" delay={80} className="on-photo mt-3 text-h2 text-cream">
          Confirme sua presença
        </Reveal>

        <Reveal
          as="p"
          delay={160}
          className="on-photo mx-auto mt-5 max-w-[46ch] text-body text-cream"
        >
          É bem rapidinho e nos ajuda a organizar nosso evento.
        </Reveal>

        <Reveal
          delay={240}
          className="mt-9 flex flex-col items-stretch justify-center gap-3 xs:flex-row"
        >
          <RsvpButton size="lg" variant="blush">
            <Icon name="check" size={15} />
            Confirmar presença
          </RsvpButton>

        </Reveal>

        <Reveal delay={360} className="mt-10 flex flex-col items-center gap-2">

          <p className="on-photo text-mini font-medium uppercase tracking-[0.3em] text-cream">
            {wedding.dateShort}
          </p>
          <p className="on-photo text-mini uppercase tracking-[0.3em] text-cream/80">
            {couple.hashtag}
          </p>
        </Reveal>
      </div>
    </section>
  );
}

export default Rsvp;
