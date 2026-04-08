import { IoLogoReact, IoLogoJavascript, IoLogoNodejs } from "react-icons/io5";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiTypescript, SiExpress, SiSpringboot } from "react-icons/si";
import { TbSql } from "react-icons/tb";
import { FaJava } from "react-icons/fa";
import { BiLogoSpringBoot } from "react-icons/bi";

const stackGroups = [
  {
    title: "Frontend",
    accent: "text-sky-500/80",
    items: [
      { icon: <RiNextjsFill />, label: "Next.js" },
      { icon: <IoLogoReact />, label: "React" },
      { icon: <SiTypescript />, label: "TypeScript" },
      { icon: <IoLogoJavascript />, label: "JavaScript" },
      { icon: <RiTailwindCssFill />, label: "Tailwind" },
    ],
  },
  {
    title: "Backend",
    accent: "text-emerald-500/80",
    items: [
      { icon: <IoLogoNodejs />, label: "Node.js" },
      { icon: <SiExpress />, label: "Express.js" },
      { icon: <FaJava />, label: "Java" },
      { icon: <BiLogoSpringBoot />, label: "Spring Boot" },
      { icon: <TbSql />, label: "SQL" },
    ],
  },
];

export default function Stacks() {
  return (
    <div className="space-y-4">
      {stackGroups.map((group) => (
        <div key={group.title} className="space-y-2">
          <div className="flex items-center gap-2">
            <span
              className={`h-1.5 w-1.5 rounded-full ${group.accent} bg-current`}
            />
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-zinc-400">
              {group.title}
            </p>
          </div>

          <div className="grid w-full grid-cols-3 gap-3">
            {group.items.map((stack) => (
              <div
                key={stack.label}
                className="group relative overflow-hidden rounded-[1.35rem] border border-white/70 bg-white/95 p-2 shadow-[0_10px_30px_rgba(0,0,0,0.045)] ring-1 ring-black/[0.03] backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_34px_rgba(0,0,0,0.07)]"
              >
                {/* <div
                  className={`absolute inset-x-0 top-0 h-[1px]  bg-current opacity-40`}
                /> */}
                <div className="relative flex flex-col items-center justify-center gap-3">
                  <span className="flex items-center justify-center text-[1.2rem] leading-none [&>svg]:block [&>svg]:shrink-0 [&>svg]:align-middle">
                    {stack.icon}
                  </span>

                  <div className="min-w-0 flex-1 text-center">
                    <p className="text-sm font-medium leading-tight tracking-[-0.01em] text-zinc-800 break-words">
                      {stack.label}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
