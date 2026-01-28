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
      <p className="text-lg capitalize">{data.date}</p>
      <p className="text-7xl font-semibold ">{data.time}</p>

      <p className="text-lg font-medium">{data.greeting} 👋</p>
    </div>
  );
}
