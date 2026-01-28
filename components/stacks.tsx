import { IoLogoReact, IoLogoJavascript, IoLogoNodejs } from "react-icons/io5";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiTypescript, SiExpress } from "react-icons/si";
import { TbSql } from "react-icons/tb";

const stacks = [
  {
    icon: <RiNextjsFill />,
    label: "Next.js",
  },
  {
    icon: <IoLogoReact />,
    label: "React",
  },
  {
    icon: <SiTypescript />,
    label: "TypeScript",
  },
  {
    icon: <IoLogoJavascript />,
    label: "JavaScript",
  },
  {
    icon: <RiTailwindCssFill />,
    label: "Tailwind",
  },
  {
    icon: <IoLogoNodejs />,
    label: "Node.js",
  },
  {
    icon: <SiExpress />,
    label: "Express.js",
  },
  {
    icon: <TbSql />,
    label: "SQL",
  },
];

export default function Stacks() {
  return (
    <div className="flex flex-row flex-wrap gap-2 justify-center ">
      {stacks.map((stack) => (
        <div
          key={stack.label}
          className="flex rounded-full  items-center gap-2 p-2 e"
        >
          <div className="text-4xl">{stack.icon}</div>
          <div className="text-md">{stack.label}</div>
        </div>
      ))}

      <div>
        {/* <div className="flex flex-wrap rounded-full  items-center gap-2 p-2 e">
          <p className="text-lg font-bold">#Frontend</p>
          <p className="text-lg font-bold">#Backend</p>
          <p className="text-lg font-bold">#FullStack</p>
        </div> */}
      </div>
    </div>
  );
}
