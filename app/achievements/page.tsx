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
import { PiMedalFill } from "react-icons/pi";



const inter = Inter({ subsets: ["latin"] });
const roboto_mono = Roboto_Mono({ subsets: ["latin"] });

function Achievements() {
  const sertifikats = [
    // {
    //   img: "sertifikat1.jpg",
    //   medal: "🥈",
    //   skills: ['Laravel', 'HTML&CSS', 'Figma', 'Bootstrap', 'Javascript'],
    //   title: '2nd Place in the South Sumatra Provincial Student Skills Competition (LKS) 2025',
    //   description: 'Indonesian Ministry of Education (Kemendikbud)',
    //   link: 'https://elvn-blindmaze-game.vercel.app/'
    // },
    {
      img: "sertifikat8.jpg",
      skills: ['Laravel', 'React', 'Javascript', 'HTML', 'CSS'],
      medal: "🥇",
      title: '3rd Place in the National Student Skills Competition (LKS Dikmen) 2026 – Web Technologies',
      description: 'Indonesian Ministry of Education (Kemendikbud)',
      link: 'https://elvina.vercel.app/'
    },
    {
      img: "sertifikat7.jpeg",
      skills: ['Laravel', 'React', 'Bootstrap', 'Javascript', 'HTML', 'CSS'],
      medal: "🥇",
      title: '2nd Place in the South Sumatra Provincial Student Skills Competition (LKS Dikmen) 2026 – Web Technologies',
      description: 'Indonesian Ministry of Education (Kemendikbud)',
      link: 'https://elvina.vercel.app/'
    },
    {
      img: "sertifikat6.jpeg",
      skills: ['Laravel', 'React', 'Bootstrap', 'Javascript', 'HTML', 'CSS'],
      medal: "🥇",
      title: '1st Place in the Palembang City Student Skills Competition (LKS Dikmen) 2026 – Web Technologies',
      description: 'Indonesian Ministry of Education (Kemendikbud)',
      link: 'https://elvina.vercel.app/'
    },
    // {
    //   img: "sertifikat1.jpg",
    //   medal: "🥈",
    //   skills: ['Laravel', 'HTML&CSS', 'Figma', 'Bootstrap', 'Javascript'],
    //   title: '2nd Place in the South Sumatra Provincial Student Skills Competition (LKS) 2024 - Web Technology',
    //   description: 'Indonesian Ministry of Education (Kemendikbud)',
    //   link: 'https://elvn-blindmaze-game.vercel.app/'
    // },
    // {
    //   img: "sertifikat2.jpg",
    //   skills: ['Laravel', 'React', 'Bootstrap', 'Wordpress'],
    //   medal: "🥇",
    //   title: '1st Place in the Palembang City Student Skills Competition (LKS) 2024 - Web Technology',
    //   description: 'Indonesian Ministry of Education (Kemendikbud)',
    //   link: 'https://incriaysc.vercel.app/'
    // },
    {
      img: "sertifikat3.png",
      skills: ['Figma', 'Next JS', 'Shadcn UI'],
      medal: "🥈",
      title: '2nd Place in HIMIKA CUP PART-V 2024 - UI/UX Design',
      description: "Indonesian Ministry of Education (Kemendikbud)",
      link: 'https://elvina.vercel.app/'
    },
    {
      img: "sertifikat4.png",
      skills: ['Figma', "Next JS", "Shadcn UI"],
      medal: "🥉",
      title: '3rd Place in DE CODE Web Design Competition 2024 - UI/UX Design',
      description: "Indonesian Ministry of Education (Kemendikbud)",
      link: 'https://elvina.vercel.app/'
    },
    
  ]
  return (
    <main className={`flex flex-col items-center justify-between px-7 md:px-32 py-16`}>
      <div className="absolute z-[-1] left-1/4 before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-sky-300 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-sky-400 before:dark:opacity-10 after:dark:from-cyan-500 after:dark:via-[#68f0ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
      </div>
      <div className="content w-full md:w-3/4 flex flex-col gap-y-8">
        <div className="flex flex-col gap-y-2">
          <h1 className={`font-bold text-5xl tracking-tighter ${inter.className}`}>Achievements</h1>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-8 gap-x-7">
          {sertifikats.map((sertifikat, idx) => (
              <div className="rounded-xl" key={idx}>
                <div className="flex flex-col gap-2">
                  <Image src={`/assets/${sertifikat.img}`} alt={sertifikat.title} className="w-[480px] h-[305px] object-cover rounded-xl" width={480} height={305} />
                  <div className="flex flex-col gap-y-0.5">
                    <div className="flex gap-2 mt-2 flex-wrap">
                      {sertifikat.skills.map((v, idx) => (
                        <p className="dark:bg-glass bg-gray-100 text-sky-400 w-fit py-1 dark:text-sky-400 px-2.5 rounded-full font-bold text-sm" key={idx}>{v}</p>
                      ))}
                    </div>
                    <h1 className={`font-bold text-[20px] mt-1.5 tracking-tighter hover:underline hover:decoration-sky-400/70 ${inter.className}`}>{sertifikat.medal} {sertifikat.title}</h1>
                    <p className={`font-base text-base mt-1.5 tracking-tighter text-gray-300 ${inter.className}`}></p>
                  </div>
                </div>
              </div>
          ))}
        </div>
      
      </div>
    </main>
  )
}

export default Achievements;
