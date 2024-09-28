'use client'
import { useState } from "react";
import Image from "next/image";
import { Inter, Roboto_Mono } from "next/font/google";
import { FaLongArrowAltRight } from "react-icons/fa";
import Link from "next/link";
import { FaInstagram, FaFacebookF, FaGithub, FaDribbble, FaDiscord } from "react-icons/fa";
import { FaXTwitter, FaPhone  } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";
import { Button } from "@/components/ui/button";
import { send } from 'emailjs-com'

const inter = Inter({ subsets: ["latin"] });
const roboto_mono = Roboto_Mono({ subsets: ["latin"] });



function Contact() {
  const [sendName, setSendName] = useState('');
  const [sendEmail, setSendEmail] =  useState('');
  const [message, setMessage] = useState('');

  const [contact, setContact] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setContact({ ...contact, [name]: value });
  };
  
  

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch('https://script.google.com/macros/s/AKfycbwa0ffrn8MbCDWli408GY1vu4VhU-axxTofVl8MwsNJ/dev', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(contact),
      });

      const data = await res.json();
      if (data.status === 'success') {
        alert('Form submitted successfully!');
      } else {
        alert('Failed to submit the form.');
      }
    } catch (error) {
      console.error(error);
      alert('Error submitting the form.');
    }
  };

  // const handleName = (e) => {
  //   setSendName(e.target.value);
  // }

  // const handleEmail = (e) => {
  //     setSendEmail(e.target.value);
  // }

  // const handleMessage = (e) => {
  //     setMessage(e.target.value);
  // }

  return (
    <main className={`flex flex-col items-center justify-between px-7  md:px-32 py-24`}>
      
      <div className="absolute z-[-1] left-1/4 before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-sky-300 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-sky-400 before:dark:opacity-10 after:dark:from-cyan-500 after:dark:via-[#68f0ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
      </div>
      <div className="content w-full md:w-3/4 grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-8">
        <div className="flex flex-col gap-y-7">
          <div className="flex flex-col gap-y-2">
            <h1 className={`font-bold text-6xl ${inter.className}`}>Contact</h1>
          </div>
          <ul>
            <li className='w-fit gap-x-4 text-lg flex justify-center items-center text-wrap'><BiLogoGmail /> <p className="text-wrap">elvinafirmansyah@gmail.com</p></li>
            <li className='w-fit '><a className="gap-x-4 text-lg flex justify-center items-center hover:underline hover:text-sky-400 text-wrap" href="https://api.whatsapp.com/send?phone=6289630873931"><FaPhone /> +62 0896-3087-3931</a></li>
          </ul>
          <div className="flex gap-x-5">
            <Link target='_blank' href='https://www.instagram.com/virn_el/'><FaInstagram className='text-xl hover:text-sky-400'  /></Link>
            <Link target='_blank' href='https://m.facebook.com/elvina.firmansyah.50'><FaFacebookF className='text-xl hover:text-sky-400' /></Link>
            <Link target='_blank' href='https://twitter.com/elvina_one'><FaXTwitter  className='text-xl hover:text-sky-400'  /></Link>
            <Link target='_blank' href='https://github.com/elvinafirmansyah'><FaGithub className='text-xl hover:text-sky-400'/></Link>
            <Link target='_blank' href='https://dribbble.com/Elvina_Vin19'><FaDribbble  className='text-xl hover:text-sky-400' /></Link>
            <Link target='_blank' href='https://discordapp.com/users/902188905376415826'><FaDiscord  className='text-xl hover:text-sky-400' /></Link>
          </div>
        </div>

        <div className="">
          <form onSubmit={onSubmit} className="flex flex-col gap-y-4">
            <div>
              <p className="mb-2">Name</p>
              <input name="name" type="text" placeholder="Name" onChange={handleChange} className="focus:outline focus:outline-1 focus:outline-sky-400 px-4 py-3 rounded-xl w-full dark:bg-glass bg-gray-100 dark:text-white" />
            </div>
            <div>
              <p className="mb-2">Email</p>
              <input name="email" type="email" placeholder="Email" onChange={handleChange} className="focus:outline focus:outline-1 focus:outline-sky-400 px-4 py-3 rounded-xl w-full dark:bg-glass bg-gray-100 dark:text-white" />
            </div>
            <div>
              <p className="mb-2">Message</p>
              <textarea name="message" placeholder="Message" onChange={handleChange} className="focus:outline focus:outline-1 focus:outline-sky-400 px-4 py-3 rounded-xl w-full dark:bg-glass bg-gray-100 dark:text-white"></textarea>
            </div>
            <Button variant="default" className="bg-sky-400 text-white" type="submit">Submit</Button>
          </form>

        </div>

      </div>
    </main>
  )
}

export default Contact;
