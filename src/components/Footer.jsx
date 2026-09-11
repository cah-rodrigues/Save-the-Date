import Icon from "./Icon";
import { PlaylistCard } from "./SpotifyPlayer";
import { Monogram, Sprig } from "./Ornaments";
import Reveal from "./Reveal";
import { goTo } from "../hooks/useHashRoute";
import { couple, navigation, wedding } from "../data/site";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-leaf-50 pt-16 sm:pt-20">
      <div className="shell">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.8fr)_minmax(0,1fr)] lg:gap-12">
          {/* Identidade */}
          <Reveal>
            <Monogram className="h-9 w-14 text-blush-500" />

            <p className="mt-4 font-display text-[clamp(1.6rem,7vw,2.2rem)] leading-tight text-ink">
              {couple.groom}
              <span className="px-2 font-script text-blush-500">&amp;</span>
              {couple.bride}
            </p>

            <p className="mt-3 text-mini font-medium uppercase tracking-[0.22em] text-stone">
              {wedding.dateShort} · {wedding.city}/{wedding.state}
            </p>

            <p className="mt-5 max-w-[38ch] text-mini text-stone">
              "O amor é paciente e bondoso... Suporta todas as coisas, acredita em todas as coisas, espera todas as coisas, persevera em todas as coisas. O amor nunca acaba." (1 Cor. 13:4-8)
            </p>

            <Sprig className="mt-6 h-4 w-28 text-leaf-300 xs:w-36" />
          </Reveal>

          {/* Navegação */}
          <Reveal delay={100}>
            <h2 className="text-mini font-medium uppercase tracking-[0.2em] text-ink">
              Navegue
            </h2>

            <ul className="mt-4 space-y-0.5">
              {navigation.map((item) => (
                <li key={item.id ?? item.route}>
                  <a
                    href={item.route ? `#${item.route}` : `#${item.id}`}
                    onClick={(event) => {
                      event.preventDefault();
                      goTo(item.route ?? item.id);
                    }}
                    className="group inline-flex min-h-10 items-center gap-2 text-body text-stone transition-colors duration-200 ease-soft hover:text-ink"
                  >
                    <span className="h-px w-4 bg-blush-300 transition-all duration-300 ease-soft group-hover:w-7" />
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Playlist */}
          <Reveal delay={180}>
            <h2 className="text-mini font-medium uppercase tracking-[0.2em] text-ink">
              Trilha sonora
            </h2>
            <p className="mt-3 text-mini text-stone">
              As músicas que contam a nossa história e que vão tocar na festa.
            </p>
            <PlaylistCard className="mt-4" />
          </Reveal>
        </div>

        {/* Barra final */}
        <div className="mt-14 flex flex-col items-center gap-4 border-t border-line py-7 sm:flex-row sm:justify-between">
          <p className="text-center text-[0.72rem] font-medium uppercase tracking-[0.18em] text-stone sm:text-left">
            {couple.hashtag}
          </p>

          <p className="flex items-center gap-1.5 text-[0.72rem] text-stone">
            Feito com
            <Icon name="heart" size={13} className="text-blush-500" />
            para o nosso dia
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
