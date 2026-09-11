import Button from "./Button";
import GiftIcon from "./GiftIcon";
import Icon from "./Icon";
import { money } from "../lib/format";

const tones = {
  blush: { surface: "from-blush-50 to-blush-100", art: "text-blush-500", halo: "bg-blush-200/45" },
  leaf: { surface: "from-leaf-50 to-leaf-100", art: "text-leaf-500", halo: "bg-leaf-200/45" },
  denim: { surface: "from-denim-50 to-denim-100", art: "text-denim-500", halo: "bg-denim-200/45" },
  denimSoft: { surface: "from-denim-50 to-blush-50", art: "text-denim-500", halo: "bg-denim-200/40" },
};

export function GiftCard({ gift, chosen = false, onChoose }) {
  const tone = tones[gift.tone] ?? tones.denimSoft;
  const unavailable = gift.taken && !chosen;

  return (
    <article
      className={`group relative flex h-full flex-col overflow-hidden rounded-[1.75rem] border bg-cream transition-[transform,box-shadow,border-color] duration-400 ease-soft sm:rounded-[2rem] ${
        unavailable
          ? "border-line/70 opacity-75"
          : "border-line shadow-soft hover:-translate-y-1.5 hover:border-blush-200 hover:shadow-lift"
      }`}
    >
      {/* Ilustração */}
      <div
        className={`relative flex aspect-[5/4] items-center justify-center bg-gradient-to-br ${tone.surface}`}
      >
        <span
          aria-hidden="true"
          className={`absolute h-24 w-24 rounded-full transition-transform duration-700 ease-soft group-hover:scale-125 sm:h-28 sm:w-28 ${tone.halo}`}
        />
        <GiftIcon
          name={gift.icon}
          className={`relative h-14 w-14 transition-transform duration-500 ease-petal group-hover:-translate-y-1 group-hover:scale-105 sm:h-16 sm:w-16 ${tone.art}`}
        />

        {chosen ? (
          <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-leaf-700 px-3 py-1.5 text-[0.6rem] uppercase tracking-[0.16em] text-cream">
            <Icon name="check" size={13} strokeWidth={2.1} />
            Escolhido
          </span>
        ) : null}

        {unavailable ? (
          <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-cream px-3 py-1.5 text-[0.64rem] font-medium uppercase tracking-[0.14em] text-stone">
            <Icon name="heart" size={13} />
            Já presenteado
          </span>
        ) : null}
      </div>

      {/* Conteúdo */}
      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <h3 className="text-h4">{gift.name}</h3>
        <p className="mt-1.5 flex-1 text-mini text-stone">{gift.description}</p>

        <div className="mt-4 flex flex-col gap-3 xs:flex-row xs:items-center xs:justify-between">
          <span className="tnum font-display text-[1.35rem] leading-none text-ink">
            {money(gift.price)}
          </span>

          {unavailable ? (
            <span className="text-[0.68rem] font-medium uppercase tracking-[0.14em] text-stone">
              Obrigado ♡
            </span>
          ) : (
            <Button
              size="sm"
              variant={chosen ? "soft" : "primary"}
              onClick={() => onChoose?.(gift)}
              aria-label={`${chosen ? "Ver" : "Presentear"}: ${gift.name}`}
            >
              {chosen ? "Ver dados" : "Presentear"}
              <Icon name="arrowRight" size={14} className="transition-transform duration-300 ease-soft group-hover:translate-x-0.5" />
            </Button>
          )}
        </div>
      </div>
    </article>
  );
}

export default GiftCard;
