import { useState } from "react";
import Icon from "./Icon";
import { goTo } from "../hooks/useHashRoute";
import { playlist } from "../data/site";

/**
 * Iframe do Spotify. `height` aceita px (152 e o modo compacto, 380+ mostra a
 * lista) ou qualquer medida CSS, como "100%" dentro de um contêiner com altura.
 */
export function PlaylistEmbed({ height = 380, className = "" }) {
  return (
    <iframe
      title="Playlist do casamento no Spotify"
      src={playlist.embedUrl}
      style={{
        width: "100%",
        height: typeof height === "number" ? `${height}px` : height,
        borderRadius: "20px",
        border: 0,
        display: "block",
      }}
      loading="lazy"
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      className={className}
    />
  );
}

/** Chamada para a pagina da playlist, usada no rodape. */
export function PlaylistCard({ className = "" }) {
  return (
    <div
      className={`overflow-hidden rounded-[1.75rem] border border-line bg-cream shadow-soft ${className}`}
    >
      <div className="relative flex items-center gap-3 bg-gradient-to-br from-leaf-100 to-blush-100 px-4 py-5">
        <span
          aria-hidden="true"
          className="absolute -right-6 -top-6 h-20 w-20 animate-breathe rounded-full bg-cream/40"
        />
        <span className="relative inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-[1.1rem] bg-cream text-leaf-700 shadow-soft">
          <Icon name="music" size={22} />
        </span>
        <div className="relative min-w-0">
          <p className="truncate font-display text-h4 text-ink">Nossa playlist</p>
          <p className="truncate text-[0.72rem] font-medium uppercase tracking-[0.14em] text-stone">
            As músicas do nosso dia
          </p>
        </div>
      </div>

      <div className="p-3.5">
        <PlaylistEmbed height={152} />

        <button
          type="button"
          onClick={() => goTo("/playlist")}
          className="group mt-3 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full border border-line px-4 text-[0.7rem] font-medium uppercase tracking-[0.14em] text-stone transition-[background-color,color] duration-200 ease-soft hover:bg-leaf-50 hover:text-leaf-700"
        >
          Abrir a playlist completa
          <Icon
            name="arrowRight"
            size={15}
            className="transition-transform duration-300 ease-soft group-hover:translate-x-1"
          />
        </button>
      </div>
    </div>
  );
}

/** Player flutuante, so em telas grandes e recolhido por padrao. */
export function SpotifyDock() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40 hidden lg:block">
      {open ? (
        <div className="w-[23rem] animate-sheet-up overflow-hidden rounded-[1.9rem] border border-line bg-cream/95 shadow-lift backdrop-blur-xl">
          <div className="flex items-center gap-2.5 bg-gradient-to-r from-leaf-100 to-blush-100 px-4 py-3">
            <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-cream text-leaf-700">
              <Icon name="music" size={17} />
            </span>

            <p className="min-w-0 flex-1 truncate text-mini font-medium uppercase tracking-[0.16em] text-ink">
              Nossa playlist
            </p>

            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Recolher player"
              className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-stone transition-[background-color,transform] duration-200 hover:bg-cream/70 hover:text-ink active:scale-95"
            >
              <Icon name="close" size={16} />
            </button>
          </div>

          <div className="p-3.5">
            <PlaylistEmbed height={380} />

            <button
              type="button"
              onClick={() => {
                setOpen(false);
                goTo("/playlist");
              }}
              className="group mt-3 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full border border-line px-4 text-[0.7rem] font-medium uppercase tracking-[0.14em] text-stone transition-[background-color,color] duration-200 ease-soft hover:bg-leaf-50 hover:text-leaf-700"
            >
              Ver em tela cheia
              <Icon
                name="arrowRight"
                size={15}
                className="transition-transform duration-300 ease-soft group-hover:translate-x-1"
              />
            </button>
          </div>
        </div>
      ) : (
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="group inline-flex min-h-12 items-center gap-2.5 rounded-full border border-line bg-cream px-5 py-3 text-[0.74rem] font-medium uppercase tracking-[0.14em] text-stone shadow-soft backdrop-blur-xl transition-all duration-300 ease-soft hover:-translate-y-0.5 hover:text-ink hover:shadow-lift"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-breathe rounded-full bg-leaf-500" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-leaf-700" />
          </span>
          <Icon name="music" size={16} className="text-blush-500" />
          Nossa playlist
        </button>
      )}
    </div>
  );
}

export default PlaylistCard;
