import RsvpButton from "../components/RsvpButton";
import Button from "../components/Button";
import Countdown from "../components/Countdown";
import Photo from "../components/Photo";
import { Bloom, Branch, Sprig } from "../components/Ornaments";
import { useParallax } from "../hooks/useParallax";
import { couple, wedding } from "../data/site";
import { photos } from "../lib/media";

export function Hero() {
  const leftPhoto = useParallax(30);
  const rightPhoto = useParallax(-30);

  return (
    <section
      id="inicio"
      className="relative flex min-h-[100dvh] flex-col justify-center overflow-hidden bg-cream pt-24 pb-14 sm:pt-28 sm:pb-20"
    >
      {/* Brilho quente atrás dos nomes */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[36rem] w-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(245,225,219,0.8),rgba(251,247,242,0)_68%)]"
      />

      {/* Ramos decorativos */}
      <Branch
        className="pointer-events-none absolute -left-8 -top-4 h-52 w-32 animate-sway text-leaf-200 opacity-70 sm:h-72 sm:w-44 lg:h-96 lg:w-60"
        aria-hidden="true"
      />
      <Branch
        flip
        className="pointer-events-none absolute -right-10 bottom-0 h-48 w-28 rotate-180 animate-sway text-blush-200 opacity-70 [animation-delay:-4s] sm:h-64 sm:w-40 lg:h-80 lg:w-52"
        aria-hidden="true"
      />

      <div className="shell relative z-10">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1.5fr)_minmax(0,0.7fr)] lg:gap-10">
          {/* Foto da esquerda, só no desktop */}
          <div ref={leftPhoto} className="parallax hidden lg:block">
            <div className="animate-fade-up [animation-delay:500ms]">
              <Photo
                photo={photos.banco}
                ratio="3/4"
                frame="frame-pill"
                priority
                className="shadow-petal"
              />
            </div>
          </div>

          {/* Núcleo do convite */}
          <div className="flex flex-col items-center text-center">
            <p className="flex animate-fade-up items-center gap-3 text-eyebrow font-medium uppercase tracking-[0.4em] text-blush-700">
              <Sprig className="h-2.5 w-12 text-blush-300 xs:w-16" />
              Save the date
              <Sprig className="h-2.5 w-12 -scale-x-100 text-blush-300 xs:w-16" />
            </p>

            <h1 className="mt-5 font-display text-h1 font-normal text-ink">
              <span className="block animate-fade-up [animation-delay:120ms]">
                {couple.groom}
              </span>
              <span className="my-1 block animate-fade-up font-script text-[0.46em] leading-none text-blush-500 [animation-delay:200ms]">
                &amp;
              </span>
              <span className="block animate-fade-up [animation-delay:280ms]">
                {couple.bride}
              </span>
            </h1>

            <div className="mt-7 flex animate-fade-up flex-col items-center gap-2 [animation-delay:360ms]">
              <p className="text-mini font-medium uppercase tracking-[0.3em] text-ink xs:tracking-[0.4em]">
                {wedding.dateLabel}
              </p>
              <span className="h-px w-10 bg-blush-300" aria-hidden="true" />
            </div>
            <div className="mt-8 flex w-full animate-fade-up flex-col items-stretch justify-center gap-3 [animation-delay:480ms] xs:w-auto xs:flex-row">
              <RsvpButton size="lg" />
              <Button to="/presentes" variant="outline" size="lg">
                Lista de presentes
              </Button>
            </div>
          </div>

          {/* Foto da direita, só no desktop */}
          <div ref={rightPhoto} className="parallax relative hidden lg:block">
            <div className="animate-fade-up [animation-delay:560ms]">
              <Photo
                photo={photos.caminho}
                ratio="3/4"
                frame="frame-pill"
                priority
                className="shadow-petal"
              />
            </div>
            <Bloom
              className="pointer-events-none absolute -left-6 bottom-8 h-16 w-16 animate-float text-blush-300"
              aria-hidden="true"
            />
          </div>
        </div>

        {/* Par de fotos do celular e do tablet, na mesma linha de base */}
        <div className="mt-11 grid animate-fade-up grid-cols-2 items-start gap-3 [animation-delay:560ms] xs:gap-4 lg:hidden">
          <Photo
            photo={photos.banco}
            ratio="3/4"
            frame="frame-pill"
            ring={false}
            priority
            className="shadow-petal"
          />
          <Photo
            photo={photos.caminho}
            ratio="3/4"
            frame="frame-pill"
            ring={false}
            priority
            className="shadow-petal"
          />
        </div>

        <Countdown className="mx-auto mt-11 w-full max-w-xl" />
      </div>

      {/* Convite para rolar */}
      <a
        href="#convite"
        aria-label="Ir para o convite"
        className="relative z-10 mx-auto mt-12 hidden h-12 w-6 shrink-0 items-start justify-center rounded-full border border-line sm:flex"
      >
        <span
          aria-hidden="true"
          className="mt-2 h-2 w-1 animate-scroll-hint rounded-full bg-blush-500"
        />
      </a>
    </section>
  );
}

export default Hero;
