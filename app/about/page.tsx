import Image from "next/image";
import { Inter, Roboto_Mono } from "next/font/google";
import { FaLongArrowAltRight } from "react-icons/fa";
import Link from "next/link";
import { FaInstagram, FaFacebookF, FaGithub, FaDribbble } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const inter = Inter({ subsets: ["latin"] });
const roboto_mono = Roboto_Mono({ subsets: ["latin"] });

function About() {

  return (
    <main className={`flex flex-col items-center justify-between px-7  md:px-32 py-24`}>
      
      <div className="absolute z-[-1] left-1/4 before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-sky-300 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-sky-400 before:dark:opacity-10 after:dark:from-cyan-500 after:dark:via-[#68f0ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
      </div>
      <div className="content w-3/4 flex flex-col gap-y-7">
        <div className="flex flex-col gap-y-2">
          <h1 className={`font-bold text-6xl ${inter.className}`}>Hello, I am Elvina</h1>
          <h3 className={`font-semibold text-2xl text-sky-400 ${inter.className}`}>Full-Stack Developer & UI/UX Designer</h3>
        </div>
        <p className={`w-full text-lg`}>I&apos;m Elvina Firmansyah. I&apos;m a Full-Stack Developer and UI/UX Designer based in Indonesia. I&apos;m passionate about coding, developing and designing various websites as well as working on projects related to web development and UI/UX design. I&apos;ve been coding for the past 2 years and have enjoyed every moment of it. My main focus is to create accessible knowledge and digital experiences both in my career and for the future.</p>
          <Link href='/projects' className='flex gap-x-2 items-center hover:underline hover:underline-offset-4'>
            See More Projects
            <FaLongArrowAltRight className='animation-link' />
          </Link>
        <div className="flex gap-x-5">
          <Link target='_blank' href='https://www.instagram.com/virn_el/'><FaInstagram className='text-xl hover:text-sky-400'  /></Link>
          <Link target='_blank' href='https://m.facebook.com/elvina.firmansyah.50'><FaFacebookF className='text-xl hover:text-sky-400' /></Link>
          <Link target='_blank' href='https://twitter.com/elvina_one'><FaXTwitter  className='text-xl hover:text-sky-400'  /></Link>
          <Link target='_blank' href='https://github.com/elvinafirmansyah'><FaGithub className='text-xl hover:text-sky-400'/></Link>
          <Link target='_blank' href='/'><FaDribbble  className='text-xl hover:text-sky-400' /></Link>
        </div>
      </div>
    </main>
  )
}

export default About;
