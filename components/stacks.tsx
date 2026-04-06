import { IoLogoReact, IoLogoJavascript, IoLogoNodejs } from "react-icons/io5";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiTypescript, SiExpress } from "react-icons/si";
import { TbSql } from "react-icons/tb";

const stacks = [
  { icon: <RiNextjsFill />, label: "Next.js" },
  { icon: <IoLogoReact />, label: "React" },
  { icon: <SiTypescript />, label: "TypeScript" },
  { icon: <IoLogoJavascript />, label: "JavaScript" },
  { icon: <RiTailwindCssFill />, label: "Tailwind" },
  { icon: <IoLogoNodejs />, label: "Node.js" },
  { icon: <SiExpress />, label: "Express.js" },
  { icon: <TbSql />, label: "SQL" },
];

export default function Stacks() {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-2">
      {stacks.map((stack) => (
        <div
          key={stack.label}
          className="group flex items-center gap-3 rounded-2xl border border-gray-200/80 bg-white/90 px-4 py-3 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(0,0,0,0.06)]"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-50 text-2xl text-zinc-800 transition-transform duration-300 group-hover:scale-105">
            {stack.icon}
          </div>
          <div className="text-sm font-medium tracking-tight text-zinc-700">
            {stack.label}
          </div>
        </div>
      ))}
    </div>
  );
}
