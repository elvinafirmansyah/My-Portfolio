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
import { FaGithub, FaLink, FaDribbble  } from "react-icons/fa";
import { AiFillDribbbleCircle } from "react-icons/ai";
import { Button } from "@/components/ui/button"


const inter = Inter({ subsets: ["latin"] });
const roboto_mono = Roboto_Mono({ subsets: ["latin"] });

function Projects() {
  const projects = [
    {
      img: "project1.png",
      language: ["HTML", "CSS", "Javascript"],
      title: 'Incriaysc',
      description: 'Incriaysc is a platform for searching any word using JavaScript. It is designed to help English learners easily understand the meaning of specific words. Built with JavaScript and Tailwind.',
      link: 'https://incriaysc.vercel.app/'
    },
    {
      img: "project2.png",
      language: ["React JS"],
      title: 'ENews',
      description: 'ENews is a project implementing an API using React JS, designed to make online reading more interactive. We provide news from platforms like CNN, BBC, CNBC, and VOA, all of which offer high-quality and popular news content. We hope you enjoy reading the news, finding it both informative and useful. This project is built with React JS',
      link: 'https://vinnews.vercel.app/'
    },
    {
      img: "project3.png",
      language: ["React JS"],
      title: 'VnDribble',
      description: 'Dribble API is an implementation of the Dribble API.',
      link: 'https://dribblevin.vercel.app/'
    },
    {
      img: "project4.png",
      language: ["HTML", "CSS", "Javascript"],
      title: 'Github User Tracker',
      description: "This app is an API implementation project built with JavaScript. You can search for any users who are already logged in, and results will be automatically displayed based on the user's account presence. You can also retrieve user information such as followers, name, repositories, following count, and status. Built with JavaScript and Bootstrap.",
      link: 'https://egithubtracker.vercel.app/'
    },
    {
      img: "project5.png",
      language: ["Next JS"],
      title: 'My Portfolio',
      description: "This is my portfolio, where I showcase my projects and skills in web development and programming. If you'd like to get in touch, feel free to contact me. I'm always open to discussing new opportunities, collaborations, or simply sharing knowledge.",
      link: 'https://elvina.vercel.app/'
    },
    {
      img: "project6.png",
      language: ["HTML", "CSS", "Javascript"],
      title: 'Engxzu, English Learning Platform',
      description: 'Engxzu is an English learning platform from Indonesia owned by Ladies Of Twins. Founded in 2021 by Elvina Firmansyah with her twin sister, Elvira Firmansyah. Engxzu is an online learning application that provides a place to learn English, which will help students for solving problems in learning English. Made by Bootstrap',
      link: 'https://engxzu.netlify.app/'
    },
    {
      img: "design1.png",
      language: ["UI/UX Design"],
      title: 'ElMovie',
      description: 'This is one of my posts on Dribble.',
      link: 'https://dribbble.com/shots/18497469-ElMovie-Movie-Dashboard-Design'
    },
    {
      img: "design2.png",
      language: ["UI/UX Design"],
      title: 'Shoes App',
      description: 'This is one of my posts on Dribble. ',
      link: 'https://dribbble.com/shots/17081283-Shoes-App-Mobile-Design'
    },
    {
      img: "design2.png",
      language: ["UI/UX Design"],
      title: 'Shoes App',
      description: 'This is one of my posts on Dribble. ',
      link: 'https://dribbble.com/shots/17081283-Shoes-App-Mobile-Design'
    },
    {
      img: "design3.png",
      language: ["UI/UX Design"],
      title: 'Wallet App',
      description: 'This is one of my posts on Dribble. ',
      link: 'https://dribbble.com/shots/17081347-Wallet-App'
    },
    {
      img: "design4.png",
      language: ["UI/UX Design"],
      title: 'Online Course App',
      description: 'This is one of my posts on Dribble. ',
      link: 'https://dribbble.com/shots/20269467-Online-Course-App'
    },
    
  ]
  return (
    <main className={`flex flex-col items-center justify-between px-7  md:px-32 py-16`}>
      
      <div className="absolute z-[-1] left-1/4 before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-sky-300 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-sky-400 before:dark:opacity-10 after:dark:from-cyan-500 after:dark:via-[#68f0ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
      </div>
      <div className="content w-full md:w-3/4 flex flex-col gap-y-8">
        <div className="flex flex-col gap-y-2">
          <h1 className={`font-bold text-6xl ${inter.className}`}>Projects</h1>
        </div>
        <div className="grid grid-cols-1 gap-y-14">
          {projects.map((project, idx) => (
            <div className="hover:cursor-pointer rounded-xl" key={idx}>
              <div className="flex flex-col lg:flex-row gap-7">
                <Image src={`/assets/${project.img}`} alt={project.title} className="w-[480px] h-[280px] object-cover rounded-xl" width={700} height={700} />
                <div className="flex flex-col gap-y-0.5">
                  <div className="flex gap-2 flex-wrap">
                  {project.language.map((v, idx) => (
                    <p className="dark:bg-glass bg-gray-100 text-sky-400 w-fit py-1.5 dark:text-sky-400 px-3.5 rounded-full font-bold" key={idx}>{v}</p>
                  ))}
                  </div>
                  <h1 className={`font-black text-[30px] ${inter.className}`}>{project.title}</h1>
                  <p className="text-base">{project.description}</p>
                  <Button variant="default" className="w-fit mt-3 text-md hover:bg-sky-400 hover:text-white bg-glass text-sky-400"><Link href={project.link} target="_blank" className="flex gap-x-2 justify-center items-center"><FaLink />Demo</Link></Button>
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
