import Button from "../components/Button";
import GiftIcon from "../components/GiftIcon";
import Icon from "../components/Icon";
import Reveal from "../components/Reveal";
import { Bloom } from "../components/Ornaments";
import { gifts } from "../data/gifts";
import { money } from "../lib/format";
import { goTo } from "../hooks/useHashRoute";

const highlights = gifts.filter((gift) => !gift.taken).slice(0, 3);

export function GiftsTeaser() {
  return (
    <section id="presentes-preview" className="relative overflow-hidden bg-leaf-50 py-20 sm:py-28">
      <Bloom className="pointer-events-none absolute -left-12 bottom-6 h-44 w-44 animate-float text-leaf-200 opacity-70 sm:h-60 sm:w-60" />

      <div className="shell relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:gap-16">
          <div className="text-center lg:text-left">
            <Reveal as="p" variant="down" className="font-script text-script text-leaf-700">
              Se quiser nos mimar
            </Reveal>

            <Reveal as="h2" delay={80} className="mt-3 text-h2">
              Lista de presentes
            </Reveal>

            <Reveal as="p" delay={150} className="mx-auto mt-5 max-w-[48ch] text-body text-stone lg:mx-0">
              Sua presença já é o maior presente. Mas, se você quiser ajudar a
              montar o nosso cantinho, separamos algumas ideias para você.
            </Reveal>

            <Reveal delay={220} className="mt-8 flex justify-center lg:justify-start">
              <Button to="/presentes" size="lg">
                <Icon name="gift" size={16} />
                Ver a lista completa
              </Button>
            </Reveal>
          </div>

          <ul className="grid gap-3 xs:gap-4">
            {highlights.map((gift, index) => (
              <Reveal
                as="li"
                key={gift.id}
                variant="right"
                delay={index * 110}
              >
                <button
                  type="button"
                  onClick={() => goTo("/presentes")}
                  className="group flex h-full w-full items-center gap-3.5 rounded-[1.65rem] border border-line bg-cream p-4 text-left shadow-soft transition-[transform,box-shadow,border-color] duration-400 ease-soft hover:-translate-y-1 hover:border-leaf-300 hover:shadow-lift sm:gap-5 sm:p-5"
                >
                  <span className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-[1.2rem] bg-leaf-100 text-leaf-700 transition-transform duration-500 ease-petal group-hover:scale-105 sm:h-16 sm:w-16">
                    <GiftIcon name={gift.icon} className="h-8 w-8 sm:h-9 sm:w-9" />
                  </span>

                  <span className="min-w-0 flex-1">
                    <span className="block truncate font-display text-h4 text-ink">
                      {gift.name}
                    </span>
                    <span className="tnum mt-0.5 block text-mini font-medium text-stone">
                      {money(gift.price)}
                    </span>
                  </span>

                  <Icon
                    name="arrowRight"
                    size={18}
                    className="shrink-0 text-leaf-700 transition-transform duration-300 ease-soft group-hover:translate-x-1"
                  />
                </button>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default GiftsTeaser;
