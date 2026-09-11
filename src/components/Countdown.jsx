import { useEffect, useState } from "react";
import { wedding } from "../data/site";

const SECOND = 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;

const readTimeLeft = (target) => {
  const diff = target.getTime() - Date.now();
  if (diff <= 0) return { dias: 0, horas: 0, min: 0, seg: 0, done: true };

  return {
    dias: Math.floor(diff / DAY),
    horas: Math.floor((diff % DAY) / HOUR),
    min: Math.floor((diff % HOUR) / MINUTE),
    seg: Math.floor((diff % MINUTE) / SECOND),
    done: false,
  };
};

const pad = (value) => String(value).padStart(2, "0");

export function Countdown({ tone = "light", className = "" }) {
  const [time, setTime] = useState(() => readTimeLeft(wedding.date));

  useEffect(() => {
    const timer = setInterval(() => setTime(readTimeLeft(wedding.date)), 1000);
    return () => clearInterval(timer);
  }, []);

  const tones = {
    light: "border-line bg-cream text-ink shadow-soft",
    dark: "border-cream/40 bg-ink/45 text-cream backdrop-blur-md",
  };

  const labelTone = tone === "dark" ? "text-cream/85" : "text-stone";

  const units = [
    { value: time.dias, label: "dias", pad: false },
    { value: time.horas, label: "horas", pad: true },
    { value: time.min, label: "min", pad: true },
    { value: time.seg, label: "seg", pad: true },
  ];

  if (time.done) {
    return (
      <p className={`font-script text-script text-blush-500 ${className}`}>
        Hoje é o grande dia
      </p>
    );
  }

  return (
    <div className={className}>
      {/* Leitores de tela recebem um resumo estatico em vez do tique-taque. */}
      <p className="sr-only">
        Faltam {time.dias} dias, {time.horas} horas e {time.min} minutos para o casamento.
      </p>

      <ul
        aria-hidden="true"
        className="grid grid-cols-4 gap-1.5 xs:gap-2.5 sm:gap-3"
      >
        {units.map((unit, index) => (
          <li
            key={unit.label}
            style={{ animationDelay: `${index * 70}ms` }}
            className={`animate-fade-up rounded-[1.35rem] border px-1 py-3 text-center transition-transform duration-300 ease-soft hover:-translate-y-1 xs:rounded-[1.6rem] xs:px-2 xs:py-4 sm:px-3 sm:py-5 ${tones[tone]}`}
          >
            <span className="tnum block font-display text-numeral font-normal leading-none">
              {unit.pad ? pad(unit.value) : unit.value}
            </span>
            <span
              className={`mt-1.5 block text-[0.6rem] font-medium uppercase tracking-[0.16em] xs:text-[0.66rem] xs:tracking-[0.2em] ${labelTone}`}
            >
              {unit.label}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Countdown;
