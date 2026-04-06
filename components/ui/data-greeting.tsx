"use client";

import { useEffect, useState } from "react";

interface GreetingData {
  time: string;
  date: string;
  greeting: string;
}

function getGreeting(hour: number, lang: string): string {
  const isMorning = hour >= 5 && hour < 12;
  const isAfternoon = hour >= 12 && hour < 18;

  const greetings = {
    pt: isMorning ? "Bom dia" : isAfternoon ? "Boa tarde" : "Boa noite",
    en: isMorning
      ? "Good morning"
      : isAfternoon
        ? "Good afternoon"
        : "Good evening",
    es: isMorning
      ? "Buenos días"
      : isAfternoon
        ? "Buenas tardes"
        : "Buenas noches",
  };

  return greetings[lang as keyof typeof greetings] ?? greetings.en;
}

export default function GreetingWidget() {
  const [data, setData] = useState<GreetingData>({
    time: "",
    date: "",
    greeting: "",
  });

  useEffect(() => {
    const update = (): void => {
      const now = new Date();
      const hour = now.getHours();

      const language = navigator.language.slice(0, 2);

      const time = now.toLocaleTimeString(navigator.language, {
        hour: "2-digit",
        minute: "2-digit",
      });

      const date = now.toLocaleDateString(navigator.language, {
        weekday: "long",
        day: "numeric",
        month: "long",
      });

      setData({
        time,
        date,
        greeting: getGreeting(hour, language),
      });
    };

    update();
    const interval = setInterval(update, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full">
      {/* <div className="flex items-center justify-between gap-3 px-1">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-zinc-500">
            Local Time
          </p>
          <p className="mt-1 text-sm text-zinc-500">Dublin, Ireland</p>
        </div>

        <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200/80 bg-white/95 px-3 py-1 text-[11px] font-medium text-zinc-600 shadow-sm">
          <span className="relative flex h-2 w-2 items-center justify-center">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60 [animation-duration:2.2s]" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          Live
        </div>
      </div> */}

      <div className=" flex flex-col items-center">
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-zinc-400 capitalize">
          {data.date}
        </p>
        <p className="mt-3 text-5xl font-semibold tracking-tight text-zinc-950 sm:text-6xl">
          {data.time}
        </p>
      </div>
    </div>
  );
}
