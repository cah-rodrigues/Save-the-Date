import { useEffect, useState } from "react";

function Countdown() {
  const targetDate = new Date("2027-01-03T16:00:00");

  const calculateTimeLeft = () => {
    const difference = targetDate - new Date();

    if (difference <= 0) {
      return {
        dias: 0,
        horas: 0,
        minutos: 0,
        segundos: 0,
      };
    }

    return {
      dias: Math.floor(difference / (1000 * 60 * 60 * 24)),
      horas: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutos: Math.floor((difference / 1000 / 60) % 60),
      segundos: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="mt-12 flex gap-4 flex-wrap justify-center">

      <Card value={timeLeft.dias} label="DIAS" />
      <Card value={timeLeft.horas} label="HORAS" />
      <Card value={timeLeft.minutos} label="MIN" />
      <Card value={timeLeft.segundos} label="SEG" />

    </div>
  );
}

function Card({ value, label }) {
  return (
    <div className="bg-white/10 backdrop-blur-md rounded-3xl px-6 py-5 min-w-[100px] shadow-xl">

      <h2 className="text-3xl md:text-5xl font-light text-white">
        {value}
      </h2>

      <p className="text-xs tracking-[0.3em] text-white/80 mt-2">
        {label}
      </p>

    </div>
  );
}

export default Countdown;