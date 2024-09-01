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

function Projects() {
  const projects = [
    {
      img: "project4",
      title: 'Incriaysc',
      description: 'Incriaysc is the platform to search any words by JavaScript. Incriaysc is made to make easier all learners, english learners exactly to be more understand what the meaning all words which you need. Made by JavaScript and Tailwind',
      link: 'https://dictionorycdn.vercel.app/'
    },
    {
      img: "project9",
      title: 'Dribble API',
      description: 'Driible API is made by the feature of Dribble itself, i made it by applying the feature of dribble itself. it could be accessed by taking your own token instead of by just taking automatically. I made it for just filling my emptyness as both good as well as knowing how the dribble api is taken immediately on your own web by react itself.',
      link: 'https://dribblevin.vercel.app/'
    },
    {
      img: "project2",
      title: 'News API',
      description: 'Vin News is the project of Implementation API by React JS, that is made for online reader to be interactive within reading those news platforms, and we have CNN News, BBC News, CNBC, VOA. we provide all of those to be used because those platforms have the great news and included the most popular platform of news. hopefully you all will be pleased for reading all as both good as well as adding the useful news, Made by React JS',
      link: 'https://dictionorycdn.vercel.app/'
    },
  ]
  return (
    <main className={`flex flex-col items-center justify-between px-7  md:px-32 py-16`}>
      
      <div className="absolute z-[-1] left-1/4 before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-sky-300 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-sky-400 before:dark:opacity-10 after:dark:from-cyan-500 after:dark:via-[#68f0ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
      </div>
      <div className="content flex flex-col gap-y-8">
        <div className="flex flex-col gap-y-2">
          <h1 className={`font-bold text-6xl ${inter.className}`}>Projects</h1>
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

export default Projects;
