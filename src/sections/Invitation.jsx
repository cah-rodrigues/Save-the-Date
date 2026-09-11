import Photo from "../components/Photo";
import Reveal from "../components/Reveal";
import { Bloom, Sprig } from "../components/Ornaments";
import { couple, wedding } from "../data/site";
import { photos } from "../lib/media";

export function Invitation() {
  return (
    <section id="convite" className="relative overflow-hidden bg-blush-50 py-20 sm:py-28">
      <Bloom className="pointer-events-none absolute -right-10 top-10 h-40 w-40 animate-float text-blush-200 opacity-70 sm:h-56 sm:w-56" />

      <div className="shell relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Retrato redondo */}
          <Reveal variant="left" className="relative mx-auto w-full max-w-[22rem] sm:max-w-[26rem]">
            <Photo
              photo={photos.pedido}
              ratio="1/1"
              frame="frame-round"
              focus="50% 58%"
              className="shadow-lift"
            />
            <Sprig className="pointer-events-none absolute -bottom-4 left-1/2 h-4 w-28 -translate-x-1/2 text-leaf-300 xs:w-40" />
          </Reveal>

          {/* Texto do convite */}
          <div className="text-center lg:text-left">
            <Reveal as="p" className="font-script text-script text-blush-700">
              Com alegria
            </Reveal>

            <Reveal as="h2" delay={80} className="mt-3 text-h2">
              Convidamos você para o nosso casamento
            </Reveal>

            <Reveal as="p" delay={160} className="mt-6 max-w-[46ch] text-body text-stone lg:mx-0">

            </Reveal>

            {/* Bloco da data */}
            <Reveal
              delay={240}
              variant="bloom"
              className="mx-auto mt-9 inline-flex flex-col items-center rounded-[2rem] border border-line bg-cream px-8 py-6 shadow-soft sm:px-10 lg:mx-0"
            >
              <span className="text-mini font-medium uppercase tracking-[0.32em] text-stone">
                {wedding.weekday}
              </span>
              <span className="my-2 h-px w-full min-w-28 bg-line" aria-hidden="true" />
              <span className="tnum font-display text-[clamp(3rem,16vw,5rem)] leading-none text-ink">
                03
              </span>
              <span className="my-2 h-px w-full min-w-28 bg-line" aria-hidden="true" />
              <span className="text-mini font-medium uppercase tracking-[0.32em] text-stone">
                Janeiro · 2027
              </span>
            </Reveal>

            <Reveal
              as="p"
              delay={320}
              className="mt-8 font-script text-[clamp(1.6rem,7vw,2.6rem)] leading-tight text-blush-700"
            >
              {couple.groom} &amp; {couple.bride}
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Invitation;
