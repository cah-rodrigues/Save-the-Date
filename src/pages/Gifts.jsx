import { useMemo, useState } from "react";
import Button from "../components/Button";
import GiftCard from "../components/GiftCard";
import GiftModal from "../components/GiftModal";
import Icon from "../components/Icon";
import Reveal from "../components/Reveal";
import { Branch, Sprig } from "../components/Ornaments";
import { categories, gifts } from "../data/gifts";
import { whatsappUrl } from "../data/site";

export function Gifts() {
  const [filter, setFilter] = useState("todos");
  const [chosen, setChosen] = useState(() => new Set());
  const [active, setActive] = useState(null);

  const visible = useMemo(
    () => (filter === "todos" ? gifts : gifts.filter((gift) => gift.category === filter)),
    [filter],
  );

  const available = gifts.filter((gift) => !gift.taken).length;

  const confirm = (gift) => {
    setChosen((current) => new Set(current).add(gift.id));
  };

  return (
    <>
      {/* ---------- Cabeçalho ---------- */}
      <section className="relative overflow-hidden bg-cream pt-28 pb-14 sm:pt-32 sm:pb-16">
        <Branch className="pointer-events-none absolute -left-10 -top-6 h-56 w-36 animate-sway text-leaf-200 opacity-70 sm:h-72 sm:w-44" />
        <Branch
          flip
          className="pointer-events-none absolute -right-10 top-10 h-48 w-32 rotate-[170deg] animate-sway text-blush-200 opacity-70 [animation-delay:-3s] sm:h-64 sm:w-40"
        />

        <div className="shell relative z-10 text-center">
          <Reveal as="p" className="font-script text-script text-blush-700">
            Com muito carinho
          </Reveal>

          <Reveal as="h1" delay={140} className="mt-2 text-h2">
            Lista de presentes
          </Reveal>

          <Reveal delay={200} className="divider-bloom mt-4">
            <Sprig className="h-3.5 w-20 text-blush-300 xs:w-28" />
          </Reveal>

          <Reveal as="p" delay={260} className="mx-auto mt-5 max-w-[52ch] text-body text-stone">
            Sua presença no nosso dia já vale mais que qualquer item desta lista. Mas
            se você quiser nos ajudar a montar o primeiro
            lar, pode escolher fique à vontade para escolher algo para nós 😊
          </Reveal>

          <Reveal delay={320} className="mt-7 flex flex-wrap items-center justify-center gap-2.5">
            <span className="inline-flex items-center gap-2 rounded-full bg-leaf-100 px-3.5 py-2 text-[0.7rem] font-medium uppercase tracking-[0.14em] text-leaf-700">
              <Icon name="gift" size={14} />
              {available} disponíveis
            </span>

            {chosen.size > 0 ? (
              <span className="inline-flex animate-pop-in items-center gap-2 rounded-full bg-blush-100 px-3.5 py-2 text-[0.7rem] font-medium uppercase tracking-[0.14em] text-blush-700">
                <Icon name="heart" size={14} />
                {chosen.size} escolhido{chosen.size > 1 ? "s" : ""} por você
              </span>
            ) : null}
          </Reveal>
        </div>
      </section>

      {/* ---------- Filtros + grade ---------- */}
      <section className="bg-cream pb-20 pt-10 sm:pb-28 sm:pt-12">
        <div className="shell">
          <div className="flex items-center gap-3">
            <Icon name="filter" size={17} className="hidden shrink-0 text-mist sm:block" />

            <div
              role="tablist"
              aria-label="Categorias de presente"
              className="-mx-1 flex flex-1 gap-2 overflow-x-auto px-1 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              {categories.map((category) => {
                const selected = filter === category.id;
                return (
                  <button
                    key={category.id}
                    type="button"
                    role="tab"
                    aria-selected={selected}
                    onClick={() => setFilter(category.id)}
                    className={`inline-flex min-h-11 shrink-0 items-center rounded-full border px-4 text-[0.72rem] font-medium uppercase tracking-[0.14em] transition-[background-color,color,border-color,transform] duration-200 ease-soft active:scale-95 ${selected
                      ? "border-leaf-700 bg-leaf-700 text-cream shadow-soft"
                      : "border-line bg-cream text-stone hover:border-leaf-300 hover:text-ink"
                      }`}
                  >
                    {category.label}
                  </button>
                );
              })}
            </div>
          </div>

          <p aria-live="polite" className="mt-4 text-mini text-stone">
            {visible.length} presente{visible.length === 1 ? "" : "s"} nesta seleção
          </p>

          {visible.length === 0 ? (
            <div className="mt-10 rounded-[2rem] border border-dashed border-line bg-cream p-10 text-center">
              <Icon name="leaf" size={30} className="mx-auto text-leaf-300" />
              <h2 className="mt-4 text-h3">Nada por aqui ainda</h2>
              <p className="mx-auto mt-2 max-w-[36ch] text-mini text-stone">
                Esta categoria está vazia no momento. Dá uma olhada nas outras, tem
                coisa bonita esperando.
              </p>
              <Button onClick={() => setFilter("todos")} variant="outline" className="mt-6">
                Ver todos os presentes
              </Button>
            </div>
          ) : (
            <ul className="mt-6 grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
              {visible.map((gift, index) => (
                <Reveal
                  as="li"
                  key={gift.id}
                  variant="bloom"
                  delay={(index % 3) * 80}
                  className="h-full"
                >
                  <GiftCard
                    gift={gift}
                    chosen={chosen.has(gift.id)}
                    onChoose={setActive}
                  />
                </Reveal>
              ))}
            </ul>
          )}

          {/* Nota final */}
          <Reveal className="mx-auto mt-14 max-w-2xl rounded-[1.9rem] border border-line bg-cream p-6 text-center shadow-soft sm:rounded-[2.25rem] sm:p-8">
            <Icon name="ring" size={26} className="mx-auto text-blush-500" />
            <h2 className="mt-4 text-h3">Prefere presentear de outro jeito?</h2>
            <p className="mx-auto mt-3 max-w-[46ch] text-body text-stone">
              Fique à vontade para escolher algo fora da lista ou contribuir com o
              valor que quiser.
            </p>
            <Button
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              size="lg"
              className="mt-6"
            >
              <Icon name="whatsapp" size={16} />
              Fale com a gente
            </Button>
          </Reveal>
        </div>
      </section>

      <GiftModal
        gift={active}
        open={active !== null}
        onClose={() => setActive(null)}
        onConfirm={confirm}
      />
    </>
  );
}

export default Gifts;
