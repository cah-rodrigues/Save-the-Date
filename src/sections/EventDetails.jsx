import Icon from "../components/Icon";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import { ceremony, dressCode, infoCards, wedding } from "../data/site";
import { photos } from "../lib/media";

export function EventDetails() {
  return (
    <section
      id="grande-dia"
      className="relative overflow-hidden bg-gradient-to-b from-leaf-50 via-cream to-cream py-20 sm:py-28"
    >
      <div className="shell relative z-10">
        <SectionHeading
          script="03 de janeiro"
          title="O grande dia"
          tone="leaf"
          description="Anote o endereço, o horário e venha celebrar com a gente."
        />

        {/* Cerimônia: foto de um lado, informações do outro */}
        <Reveal
          variant="bloom"
          className="mt-14 overflow-hidden rounded-[1.75rem] border border-line bg-cream shadow-soft sm:rounded-[2.25rem]"
        >
          <div className="grid lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
            <img
              src={photos.abraco.src}
              alt={photos.abraco.alt}
              width={photos.abraco.w}
              height={photos.abraco.h}
              loading="lazy"
              decoding="async"
              className="h-56 w-full object-cover object-center sm:h-72 lg:h-full"
            />

            <div className="p-6 sm:p-9 lg:p-11">
              <p className="font-script text-script leading-none text-leaf-700">
                {ceremony.title}
              </p>

              <p className="mt-4 font-display text-h3 text-ink">{ceremony.place}</p>

              <dl className="mt-7 grid gap-5 xs:grid-cols-2">
                <div>
                  <dt className="text-[0.68rem] font-medium uppercase tracking-[0.2em] text-stone">
                    Quando
                  </dt>
                  <dd className="tnum mt-1.5 text-body text-ink">
                    {wedding.weekday}, {wedding.dateShort}
                    <br />
                    às {wedding.time}
                  </dd>
                </div>

                <div>
                  <dt className="text-[0.68rem] font-medium uppercase tracking-[0.2em] text-stone">
                    Onde
                  </dt>
                  <dd className="mt-1.5 text-body text-ink">{ceremony.address}</dd>
                </div>
              </dl>

              <p className="mt-7 flex items-start gap-2.5 border-t border-line pt-6 text-mini text-blush-700">
                <Icon name="clock" size={17} className="mt-0.5 shrink-0" />
                {ceremony.note}
              </p>

              <a
                href={ceremony.mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex min-h-11 items-center gap-2 rounded-full bg-leaf-700 px-6 text-[0.74rem] font-medium uppercase tracking-[0.14em] text-cream transition-all duration-200 ease-soft hover:-translate-y-0.5 hover:bg-[#2f4434] hover:shadow-lift"
              >
                <Icon name="pin" size={16} />
                Ver no mapa
              </a>
            </div>
          </div>
        </Reveal>

        {/* Traje: duas colunas separadas por um fio, sem caixa dentro de caixa */}
        <Reveal
          delay={80}
          className="mt-6 overflow-hidden rounded-[1.75rem] border border-blush-200 bg-blush-50 p-6 sm:rounded-[2.25rem] sm:p-9 lg:p-11"
        >
          <div className="flex flex-col gap-6 lg:flex-row lg:gap-12">
            <div className="lg:w-[16rem] lg:shrink-0">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-cream text-blush-700">
                <Icon name="dress" size={22} strokeWidth={1.5} />
              </span>
              <h3 className="mt-4 text-h3">{dressCode.title}</h3>
              <p className="mt-2 text-mini text-stone">{dressCode.intro}</p>
            </div>

            <div className="grid flex-1 gap-6 sm:grid-cols-2 sm:gap-0 sm:divide-x sm:divide-blush-200">
              {dressCode.items.map((item, index) => (
                <div key={item.title} className={index === 0 ? "sm:pr-7" : "sm:pl-7"}>
                  <h4 className="text-[0.72rem] font-medium uppercase tracking-[0.2em] text-blush-700">
                    {item.title}
                  </h4>
                  <p className="mt-2.5 text-body text-stone">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Recados rápidos: uma faixa só, dividida por fios */}
        <Reveal
          delay={140}
          className="mt-6 overflow-hidden rounded-[1.75rem] border border-line bg-cream sm:rounded-[2.25rem]"
        >
          <ul className="grid divide-y divide-line sm:grid-cols-[repeat(auto-fit,minmax(0,1fr))] sm:divide-x sm:divide-y-0">
            {infoCards.map((card) => (
              <li key={card.title} className="flex gap-3.5 p-6 sm:p-7">
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-leaf-100 text-leaf-700">
                  <Icon name={card.icon} size={19} strokeWidth={1.5} />
                </span>
                <div className="min-w-0">
                  <h3 className="text-h4 font-medium">{card.title}</h3>
                  <p className="mt-1.5 text-mini text-stone">{card.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

export default EventDetails;
