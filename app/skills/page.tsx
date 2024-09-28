import Image from "next/image";
import { Inter, Roboto_Mono } from "next/font/google";
import { FaLongArrowAltRight } from "react-icons/fa";
import Link from "next/link";

import { FaReact, FaPhp, FaHtml5, FaCss3Alt, FaBootstrap, FaFigma, FaGitSquare } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";
import { TbBrandLaravel } from "react-icons/tb";
import { SiAdobexd, SiAdobephotoshop, SiPhotobucket } from "react-icons/si";
import { Icon } from '@iconify/react';
import { FaGit } from "react-icons/fa6";


const inter = Inter({ subsets: ["latin"] });
const roboto_mono = Roboto_Mono({ subsets: ["latin"] });

function Skills() {
  const skills = [
    {
      icon: <FaReact size={30} color="61DBFB"/>,
      title: 'React',
    },
    {
      icon: <IoLogoJavascript size={30} color="F0DB4F"/>,
      title: 'Javascript',
    },
    {
      icon: <TbBrandLaravel  size={30} color="F05340"/>,
      title: 'Laravel',
    },
    {
      icon: <FaPhp size={30} color="6C78AF"/>,
      title: 'PHP',
    },
    {
      icon: <FaHtml5 size={30} color="E34C26"/>,
      title: 'HTML 5',
    },
    {
      icon: <FaCss3Alt size={30} color="3C99DC"/>,
      title: 'CSS',
    },
    {
      icon: <Icon icon="devicon-plain:csharp" fontSize={30} color="68217a" />,
      title: 'C#',
    },
    {
      icon: <FaBootstrap size={30} color="7811f7" />,
      title: 'Bootstrap',
    },
    {
      icon: <RiTailwindCssFill size={30} color="38bdf8" />,
      title: 'Tailwind',
    },
    {
      icon: <FaFigma size={30} color="ea4c1d" />,
      title: 'Figma',
    },
    {
      icon: <FaGitSquare size={30} color="E2432A" />,
      title: 'Git',
    },
    {
      icon: <SiAdobexd size={30} color="ff66f6" />,
      title: 'Adobe XD',
    },
    {
      icon: <SiAdobephotoshop size={30} color="37abff" />,
      title: 'Photoshop',
    },
  ]
  return (
    <main className={`flex flex-col items-center justify-between px-7  md:px-32 py-16`}>
      
      <div className="absolute z-[-1] left-1/4 before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-sky-300 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-sky-400 before:dark:opacity-10 after:dark:from-cyan-500 after:dark:via-[#68f0ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
      </div>
      <div className="content w-full md:w-3/4 flex flex-col gap-y-8">
        <div className="flex flex-col gap-y-2">
          <h1 className={`font-bold text-6xl ${inter.className}`}>Skills</h1>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {skills.map((skill, idx) => (
            <div className="bg-glass p-5 rounded-xl" key={idx}>
              <div className="flex flex-col gap-y-2">
              {skill.icon}
              <p className="font-semibold text-lg">{skill.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}

export default Skills;
