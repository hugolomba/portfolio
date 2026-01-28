import Image from "next/image";
import Stacks from "./stacks";
import { CodeBlockBasic } from "./code-block";
import GreetingWidget from "./ui/data-greeting";
import Skills from "./skills";
import Component from "./ui/text-marque";

export default function Hero() {
  // const h = []

  // h.forEach(() => {}

  return (
    <section className="grid grid-cols-2 md:grid-cols-4 md:gap-6 gap-2 mt-20">
      <div className="col-span-1 md:row-span-1 rounded-3xl relative overflow-hidden shadow-lg flex flex-col justify-between items-center p-6 gap-4">
        <div className="rounded-full w-70 h-70 overflow-hidden border-8 border-gray-300">
          <Image
            src="/images/me.png"
            // src="https://images.unsplash.com/photo-1651309098943-8503c148ef55?q=80&w=1065&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Picture of the author"
            width={500}
            height={800}
            className="w-full h-auto"
          />
        </div>

        <header className="flex flex-col items-center justify-center">
          <div className="bg-green-500 rounded-full mb-2 px-4 py-1 text-sm w-fit">
            Open to Work
          </div>
          <h2 className="md:text-4xl font-bold">Hugo Lomba</h2>
          <p className="md:text-2xl">Web Developer</p>
          <p>📍 Based in Dublin, Ireland</p>
        </header>

        <div className="w-full flex flex-col items-center gap-4 mt-4">
          <h3 className="text-sm font-semibold text-zinc-500 uppercase tracking-wide">
            Contacts
          </h3>

          <div className="flex flex-wrap gap-3">
            <a
              href="https://www.linkedin.com/in/hugo-lomba"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-blue-600 text-white px-4 py-4 rounded-full text-sm font-medium shadow hover:bg-blue-700 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.762 2.239 5 5 5h14c2.762 0 5-2.238 5-5v-14c0-2.761-2.238-5-5-5zm-11.75 19h-3v-9h3v9zm-1.5-10.25c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.25 10.25h-3v-4.5c0-1.071-.929-1.5-1.5-1.5s-1.5.429-1.5 1.5v4.5h-3v-9h3v1.25c.438-.766 1.5-1.25 2.5-1.25 2.071 0 3.5 1.429 3.5 3.5v5.5z" />
              </svg>
              {/* LinkedIn */}
            </a>

            <a
              href="https://github.com/hugolomba"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gray-800 text-white px-4 py-4 rounded-full text-sm font-medium shadow hover:bg-gray-900 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 .5c-6.627 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.111.82-.261.82-.577 0-.285-.011-1.041-.017-2.045-3.338.724-4.042-1.611-4.042-1.611-.546-1.387-1.333-1.756-1.333-1.756-1.089-.744.083-.729.083-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.835 2.807 1.305 3.492.998.108-.775.418-1.305.76-1.605-2.665-.303-5.467-1.332-5.467-5.932 0-1.31.469-2.381 1.236-3.221-.124-.303-.536-1.521.117-3.172 0 0 1.008-.322 3.301 1.23a11.494 11.494 0 013.003-.404c1.019.004 2.045.138 3.003.404 2.291-1.552 3.297-1.23 3.297-1.23.655 1.651.243 2.869.119 3.172.77.84 1.236 1.911 1.236 3.221 0 4.609-2.807 5.625-5.479 5.921.43.371.813 1.102.813 2.222 0 1.605-.015 2.896-.015 3.289 0 .319.218.694.825.576C20.565 22.298 24 17.803 24 12.5 24 5.873 18.627.5 12 .5z" />
              </svg>
              {/* GitHub */}
            </a>

            <a
              href="mailto:hello@hugolomba.com"
              className="flex items-center gap-2 bg-red-500 text-white px-4 py-4 rounded-full text-sm font-medium shadow hover:bg-red-600 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 12.713l11.985-7.713h-23.97l11.985 7.713zm0 2.574l-12-7.987v13.7h24v-13.7l-12 7.987z" />
              </svg>
              {/* Email */}
            </a>
          </div>
        </div>
      </div>

      <div className="md:col-span-2 flex flex-col gap-4">
        <header className="rounded-3xl md:col-span-2 md:row-span-1 p-2 md:p-8 shadow-lg">
          <h1 className="md:text-4xl font-bold mb-4">
            Crafting Modern Web Experiences
          </h1>
          <p>
            I build clean, fast web apps with React and Next.js. Former bank
            professional, now focused on tech.
          </p>

          <div className="flex flex-col md:flex-row md:gap-6 mt-4">
            <button className="rounded-full bg-black px-5 py-2 text-sm font-medium text-white shadow-sm">
              Download CV
            </button>
          </div>
        </header>

        <div className="flex flex-row md:gap-6 h-full w-full">
          <div className="overflow-hidden w-full rounded-3xl">
            <CodeBlockBasic />
          </div>

          <div className="rounded-3xl flex flex-col shadow-lg max-w-80">
            <h2 className="text-2xl font-bold self-center uppercase tracking-tight p-2 mb-5 mt-6">
              Tech Stack
            </h2>
            <Stacks />
          </div>
        </div>
      </div>

      <div className="flex flex-col h-full justify-between md:gap-6">
        <div className="rounded-3xl p-10 shadow-lg ">
          <GreetingWidget />
        </div>
        <div className="rounded-3xl flex flex-col justify-center items-center p-4 shadow-lg bg-black  hover:-translate-y-1 hover:shadow-xl transition-all cursor-pointer h-full">
          <h2 className="text-6xl font-bold self-center uppercase tracking-tight text-white p-2 text-center">
            See My Work
          </h2>
        </div>
      </div>
    </section>
  );
}
