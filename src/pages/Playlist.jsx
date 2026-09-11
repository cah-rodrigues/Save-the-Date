import Button from "../components/Button";
import Icon from "../components/Icon";
import Photo from "../components/Photo";
import Reveal from "../components/Reveal";
import { PlaylistEmbed } from "../components/SpotifyPlayer";
import { Branch, Sprig } from "../components/Ornaments";
import { couple, playlist, whatsappSuggestionUrl } from "../data/site";
import { photos } from "../lib/media";

export function Playlist() {
  return (
    <>
      {/* ---------- Cabeçalho ---------- */}
      <section className="relative overflow-hidden bg-cream pb-12 pt-28 sm:pb-16 sm:pt-32">
        <Branch className="pointer-events-none absolute -left-10 -top-6 h-56 w-36 animate-sway text-leaf-200 opacity-70 sm:h-72 sm:w-44" />
        <Branch
          flip
          className="pointer-events-none absolute -right-10 top-12 h-48 w-32 rotate-[170deg] animate-sway text-blush-200 opacity-70 [animation-delay:-3s] sm:h-64 sm:w-40"
        />

        <div className="shell relative z-10 text-center">
          <Reveal as="p" className="font-script text-script text-leaf-700">
            Trilha sonora
          </Reveal>

          <Reveal as="h1" delay={140} className="mt-2 text-h2">
            Nossa playlist
          </Reveal>

          <Reveal delay={200} className="divider-bloom mt-4">
            <Sprig className="h-3.5 w-20 text-blush-300 xs:w-28" />
          </Reveal>

          <Reveal as="p" delay={260} className="mx-auto mt-5 max-w-[52ch] text-body text-stone">
            As músicas que marcaram nossa história de amor ❤
          </Reveal>
        </div>
      </section>

      {/* ---------- Player grande ---------- */}
      <section className="bg-leaf-50 pb-20 pt-12 sm:pb-28 sm:pt-14">
        <div className="shell">
          <Reveal
            variant="bloom"
            className="mx-auto max-w-3xl overflow-hidden rounded-[1.9rem] border border-line bg-cream p-3 shadow-lift sm:rounded-[2.25rem] sm:p-5"
          >
            <div className="mb-3 flex items-center gap-3 px-2 pt-1 sm:mb-4">
              <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-[1.05rem] bg-leaf-100 text-leaf-700">
                <Icon name="music" size={20} />
              </span>

              <div className="min-w-0 flex-1">
                <p className="truncate font-display text-h4 text-ink">
                  {couple.groom} &amp; {couple.bride}
                </p>
                <p className="truncate text-[0.7rem] uppercase tracking-[0.16em] text-stone">
                  As músicas do nosso dia
                </p>
              </div>

              <a
                href={playlist.openUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-11 shrink-0 items-center gap-2 rounded-full border border-line px-4 text-[0.68rem] font-medium uppercase tracking-[0.14em] text-stone transition-[background-color,color] duration-200 ease-soft hover:bg-leaf-50 hover:text-leaf-700"
              >
                <span className="hidden xs:inline">Abrir no Spotify</span>
                <Icon name="external" size={15} />
              </a>
            </div>

            {/* Alto no desktop, ainda confortavel no celular */}
            <div className="h-[26rem] sm:h-[34rem] lg:h-[40rem]">
              <PlaylistEmbed height="100%" className="h-full" />
            </div>
          </Reveal>

          {/* Convite para sugerir música */}
          <div className="mx-auto mt-12 grid max-w-3xl items-center gap-8 sm:grid-cols-[minmax(0,0.75fr)_minmax(0,1fr)]">
            <Reveal variant="left" className="mx-auto w-full max-w-[16rem] sm:max-w-none">
              <Photo
                photo={photos.piquenique}
                ratio="3/4"
                frame="frame-soft"
                className="shadow-soft"
              />
            </Reveal>

            <div className="text-center sm:text-left">
              <Reveal as="h2" className="text-h3">
                Tem uma música pra sugerir?
              </Reveal>

              <Reveal as="p" delay={90} className="mt-3 text-body text-stone">
                Se tem uma canção que te lembra a gente, mande uma sugestão no WhatsApp!
              </Reveal>

              <Reveal delay={160} className="mt-6 flex justify-center sm:justify-start">
                <Button href={whatsappSuggestionUrl} target="_blank" rel="noreferrer" size="lg">
                  <Icon name="whatsapp" size={16} />
                  Mandar sugestão
                </Button>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Playlist;
