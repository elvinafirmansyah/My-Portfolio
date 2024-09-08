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
import { FaGithub, FaLink } from "react-icons/fa";
import { Button } from "@/components/ui/button"


const inter = Inter({ subsets: ["latin"] });
const roboto_mono = Roboto_Mono({ subsets: ["latin"] });

function Projects() {
  const projects = [
    {
      img: "project4.png",
      language: ["Javascript"],
      title: 'Incriaysc',
      description: 'Incriaysc is the platform to search any words by JavaScript. Incriaysc is made to make easier all english learners to understand the meaning of a spesific word. Made by JavaScript and Tailwind',
      link: 'https://incriaysc.vercel.app/'
    },
    {
      img: "project2.png",
      language: ["React JS"],
      title: 'ENews',
      description: 'Vin News is the project of Implementation API by React JS, that is made for online reader to be interactive within reading those news platforms, and we have CNN News, BBC News, CNBC, VOA. we provide all of those to be used because those platforms have the great news including the most popular platform of news. hopefully you all will be pleased for reading all as both good as well as adding the useful news, Made by React JS',
      link: 'https://vinnews.vercel.app/'
    },
    {
      img: "project9.png",
      language: ["React JS"],
      title: 'VnDribble',
      description: 'Driible API is made by the feature of Dribble itself, i made it by applying the feature of dribble itself. it could be accessed by taking your own token instead of by just taking automatically.',
      link: 'https://dribblevin.vercel.app/'
    },
    {
      img: "project2.png",
      language: ["Javascript"],
      title: 'Github User Tracker',
      description: 'This App is the implementation of API project by JavaScript. You are able to search any users who are already logged in. the result will be found automatically, depends on an user account presence and be able to get the information of the user such as the follower, name, repo, following and the status. Made by JavaScript and Bootstrap',
      link: 'https://egithubtracker.vercel.app/'
    },
    {
      img: "project2.png",
      language: ["Next JS"],
      title: 'My Portfolio',
      description: 'Engxzu is an English learning platform from Indonesia owned by Ladies Of Twins. Founded in 2021 by Elvina Firmansyah with her twin sister, Elvira Firmansyah. Engxzu is an online learning application that provides a place to learn English, which will help students for solving problems in learning English. Made by Bootstrap',
      link: 'https://engxzu.netlify.app/'
    },
    {
      img: "project2.png",
      language: ["HTML"],
      title: 'Engxzu, English Learning Platform',
      description: 'Engxzu is an English learning platform from Indonesia owned by Ladies Of Twins. Founded in 2021 by Elvina Firmansyah with her twin sister, Elvira Firmansyah. Engxzu is an online learning application that provides a place to learn English, which will help students for solving problems in learning English. Made by Bootstrap',
      link: 'https://engxzu.netlify.app/'
    },
    {
      img: "project2.png",
      language: ["UI/UX Design"],
      title: 'ElMovie | Movie Dashboard Design',
      description: 'This is my new post on Dribble, i made a dashboard for a movie app platform like Netflix, honestly im inspired by Hulu. ',
      link: 'https://engxzu.netlify.app/'
    },
    {
      img: "project2.png",
      language: ["UI/UX Design"],
      title: 'Shoes App | Mobile Design',
      description: 'This is one of my posts on Dribble. ',
      link: 'https://engxzu.netlify.app/'
    },
    {
      img: "project2.png",
      language: ["UI/UX Design"],
      title: 'Wallet App | Mobile Design',
      description: 'This is one of my posts on Dribble. ',
      link: 'https://engxzu.netlify.app/'
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
        <div className="grid grid-cols-1 gap-8">
          {projects.map((project, idx) => (
            <div className="hover:cursor-pointer rounded-xl" key={idx}>
              <div className="flex flex-col lg:flex-row gap-7">
                <Image src={`/assets/${project.img}`} alt={project.title} className="w-[520px] h-full object-fit rounded-xl" width={650} height={650} />
                <div className="flex flex-col gap-y-0.5">
                  {project.language.map((v, idx) => (
                    <p className="bg-glass w-fit py-1.5 text-sky-400 px-3.5 rounded-full font-bold" key={idx}>{v}</p>
                  ))}
                  <h1 className={`font-black text-[30px] ${inter.className}`}>{project.title}</h1>
                  <p>{}</p>
                  <p className="text-base">{project.description}</p>
                  <div className="flex gap-x-3 mt-3">
                  <Button variant="default" className="flex gap-x-2 text-md hover:bg-sky-400 hover:text-white bg-glass text-sky-400"><FaGithub />{project.language[0] == "UI/UX Design" ? "Dribble" : "Github"}</Button>
                  <Button variant="default" className="flex gap-x-2 text-md hover:bg-sky-400 hover:text-white bg-glass text-sky-400"><FaLink />Demo</Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      
      </div>
    </main>
  )
}

export default Projects;
