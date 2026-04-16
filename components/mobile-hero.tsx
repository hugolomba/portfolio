import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import Stacks from "./stacks";

export default function MobileHero() {
  return (
    <motion.section
      className="mt-5 mb-24 grid grid-cols-1 gap-4 px-1 lg:hidden"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
    >
      {/* <div className="grid grid-cols-1 gap-4">
        <div className="rounded-[2rem] border border-gray-200/70 bg-white/85 p-5 shadow-[0_10px_30px_rgba(0,0,0,0.05)] backdrop-blur-sm">
          <GreetingWidget />
          <div className="mt-5 flex items-center justify-between gap-3">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-zinc-500">
              Live Updates
            </p>
            <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200/80 bg-white/95 px-3 py-1 text-[11px] font-medium text-zinc-600 shadow-sm">
              <span className="relative flex h-2 w-2 items-center justify-center">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60 [animation-duration:2.2s]" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              Updated now
            </div>
          </div>

          <div className="mt-5 rounded-2xl border border-gray-200/80 bg-white/90 px-4 py-4 shadow-sm">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-zinc-400">
              Right now
            </p>
            <ul className="mt-4 space-y-3 text-sm text-zinc-600">
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 rounded-full bg-zinc-400" />
                <span>
                  Studying{" "}
                  <span className="font-medium text-zinc-800">Java</span>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 rounded-full bg-zinc-400" />
                <span>
                  Strengthening foundations in{" "}
                  <span className="font-medium text-zinc-800">
                    data structures
                  </span>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 rounded-full bg-zinc-400" />
                <span>
                  Improving{" "}
                  <span className="font-medium text-zinc-800">
                    problem solving
                  </span>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div> */}

      <div className="overflow-hidden rounded-[2rem] border border-gray-200/70 bg-white/90 shadow-[0_10px_30px_rgba(0,0,0,0.05)] backdrop-blur-sm rounded-[2rem] border border-gray-200/70 bg-white/85 shadow-[0_10px_30px_rgba(0,0,0,0.05)] backdrop-blur-sm sm:p-8">
        <div className="relative px-6 pb-7 pt-6 sm:px-8">
          <div className="absolute inset-x-0 top-0 h-28 " />

          <div className="relative flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-red-400/90" />
              <span className="h-3 w-3 rounded-full bg-amber-400/90" />
              <span className="h-3 w-3 rounded-full bg-green-400/90" />
            </div>

            <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200/80 bg-white/95 px-3 py-1 text-[11px] font-medium text-zinc-600 shadow-sm">
              <span className="relative flex h-2 w-2 items-center justify-center">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60 [animation-duration:2.2s]" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              Open to Work
            </div>
          </div>

          <div className="relative mt-8 flex flex-col items-center text-center">
            <div className="relative h-36 w-36 overflow-hidden rounded-full border-4 border-white bg-gray-100 shadow-[0_12px_32px_rgba(0,0,0,0.10)] ring-1 ring-black/5">
              <Image
                src="/images/me2.jpeg"
                alt="Portrait of Hugo Lomba"
                fill
                sizes="128px"
                className="object-cover"
                priority
              />
            </div>

            <div className="mt-5">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-zinc-500">
                Software Developer
              </p>

              {/* <h2 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-950">
                Strong Foundations. Modern Solutions.
              </h2> */}
            </div>

            <div className="mt-4 space-y-1">
              <h2 className="uppercase text-4xl font-bold tracking-tight text-zinc-950">
                Hugo Lomba
              </h2>
              <div className="mt-4 space-y-1 text-md text-zinc-500">
                <p>🎓 Computer Science Graduate</p>
                <p>📍 Based in Dublin, Ireland</p>
              </div>
              <p className="mt-4 text-md leading-6 text-zinc-600">
                I build clean, modern, and user-focused applications with solid
                front-end and back-end foundations.
              </p>
            </div>
          </div>

          <div className="mb-5 flex items-center justify-center gap-3 mt-6 flex-col">
            <p className="text-lg font-semibold uppercase tracking-[0.24em] text-zinc-500 " >
              Tech Stack
            </p>
            <Stacks />
          </div>
          

          <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
            <a
              href="/cv/hugo-lomba-cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-zinc-950 px-5 py-3 text-sm font-medium text-white shadow-[0_10px_24px_rgba(0,0,0,0.16)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_30px_rgba(0,0,0,0.20)]"
            >
              Download CV
            </a>

            <Link
              href="/projects"
              className="inline-flex items-center justify-center rounded-full border border-gray-200 bg-white px-5 py-3 text-sm font-medium text-zinc-700 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-50 hover:text-zinc-950"
            >
              View Projects
            </Link>
          </div>

          <div className="mt-8 border-t border-gray-200 pt-6">
            <div className="mb-4 text-center">
              <h3 className="text-xs font-semibold uppercase tracking-[0.24em] text-zinc-500">
                Connect
              </h3>
            </div>

            <div className="flex items-center justify-center gap-3">
              <a
                href="https://www.linkedin.com/in/hugo-lomba"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-3 text-sm font-medium text-zinc-700 shadow-sm transition-colors hover:bg-[#0A66C2] hover:text-white"
                aria-label="LinkedIn"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.762 2.239 5 5 5h14c2.762 0 5-2.238 5-5v-14c0-2.761-2.238-5-5-5zm-11.75 19h-3v-9h3v9zm-1.5-10.25c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.25 10.25h-3v-4.5c0-1.071-.929-1.5-1.5-1.5s-1.5.429-1.5 1.5v4.5h-3v-9h3v1.25c.438-.766 1.5-1.25 2.5-1.25 2.071 0 3.5 1.429 3.5 3.5v5.5z" />
                </svg>
                LinkedIn
              </a>

              <a
                href="https://github.com/hugolomba"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-3 text-sm font-medium text-zinc-700 shadow-sm transition-colors hover:bg-zinc-900 hover:text-white"
                aria-label="GitHub"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 .5c-6.627 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.111.82-.261.82-.577 0-.285-.011-1.041-.017-2.045-3.338.724-4.042-1.611-4.042-1.611-.546-1.387-1.333-1.756-1.333-1.756-1.089-.744.083-.729.083-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.835 2.807 1.305 3.492.998.108-.775.418-1.305.76-1.605-2.665-.303-5.467-1.332-5.467-5.932 0-1.31.469-2.381 1.236-3.221-.124-.303-.536-1.521.117-3.172 0 0 1.008-.322 3.301 1.23a11.494 11.494 0 013.003-.404c1.019.004 2.045.138 3.003.404 2.291-1.552 3.297-1.23 3.297-1.23.655 1.651.243 2.869.119 3.172.77.84 1.236 1.911 1.236 3.221 0 4.609-2.807 5.625-5.479 5.921.43.371.813 1.102.813 2.222 0 1.605-.015 2.896-.015 3.289 0 .319.218.694.825.576C20.565 22.298 24 17.803 24 12.5 24 5.873 18.627.5 12 .5z" />
                </svg>
                GitHub
              </a>

              <a
                href="mailto:hugo@hugolomba.com"
                className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-3 text-sm font-medium text-zinc-700 shadow-sm transition-colors hover:bg-red-500 hover:text-white"
                aria-label="Email"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 12.713l11.985-7.713h-23.97l11.985 7.713zm0 2.574l-12-7.987v13.7h24v-13.7l-12 7.987z" />
                </svg>
                Email
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {/* <div className="rounded-[2rem] border border-gray-200/70 bg-white/85 p-5 shadow-[0_10px_30px_rgba(0,0,0,0.05)] backdrop-blur-sm">
          <GreetingWidget />
          <div className="mt-5 flex items-center justify-between gap-3">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-zinc-500">
              Live Updates
            </p>
            <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200/80 bg-white/95 px-3 py-1 text-[11px] font-medium text-zinc-600 shadow-sm">
              <span className="relative flex h-2 w-2 items-center justify-center">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60 [animation-duration:2.2s]" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              Updated now
            </div>
          </div>

          <div className="mt-5 rounded-2xl border border-gray-200/80 bg-white/90 px-4 py-4 shadow-sm">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-zinc-400">
              Right now
            </p>
            <ul className="mt-4 space-y-3 text-sm text-zinc-600">
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 rounded-full bg-zinc-400" />
                <span>
                  Studying{" "}
                  <span className="font-medium text-zinc-800">Java</span>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 rounded-full bg-zinc-400" />
                <span>
                  Strengthening foundations in{" "}
                  <span className="font-medium text-zinc-800">
                    data structures
                  </span>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 rounded-full bg-zinc-400" />
                <span>
                  Improving{" "}
                  <span className="font-medium text-zinc-800">
                    problem solving
                  </span>
                </span>
              </li>
            </ul>
          </div>
        </div> */}

        {/* <div className="rounded-[2rem] border border-gray-200/70 bg-white/85 p-5 shadow-[0_10px_30px_rgba(0,0,0,0.05)] backdrop-blur-sm">
          <div className="mb-5 flex items-center justify-between gap-3">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-zinc-500">
              Tech Stack
            </p>
            <span className="rounded-full bg-zinc-100 px-3 py-1 text-[11px] font-medium text-zinc-600">
              Core Tools
            </span>
          </div>
          <Stacks />
        </div> */}

        {/* <Link
          href="/projects"
          className="group flex min-h-[180px] flex-col justify-between rounded-[2rem] bg-zinc-950 p-6 text-white shadow-[0_16px_40px_rgba(0,0,0,0.15)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(0,0,0,0.20)]"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/60">
            Latest Projects
          </p>

          <div className="mt-8">
            <h2 className="text-3xl font-semibold tracking-tight text-white">
              Recent work
            </h2>
            <p className="mt-3 text-sm leading-6 text-white/70">
              Explore the latest projects I have been designing and building
              across front-end, back-end, and full-stack development.
            </p>
          </div>

          <div className="mt-6 inline-flex items-center text-sm font-medium text-white/90">
            View projects
            <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </div>
        </Link> */}
      </div>
    </motion.section>
  );
}
