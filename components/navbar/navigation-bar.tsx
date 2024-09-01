"use client"

import * as React from "react"
import { FaMoon } from "react-icons/fa6";
import { IoIosSunny } from "react-icons/io";
import { useTheme } from "next-themes"
import { usePathname } from 'next/navigation'


import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose
} from "@/components/ui/sheet"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
} from "@/components/ui/dropdown-menu"

import { Button } from "@/components/ui/button"
import Link from 'next/link'
import { IoMenu } from "react-icons/io5";
import { FaChevronDown } from "react-icons/fa";

const NavigationBar = () => {
  const { setTheme } = useTheme()
  const isWindowDefined = typeof window !== 'undefined';
  if (isWindowDefined && window.localStorage.getItem("theme") === undefined) {
    window.localStorage.setItem("theme", "dark");
  }
  const storedTheme = isWindowDefined ? window.localStorage.getItem("theme") : "dark";
  const [position, setPosition] = React.useState<string>(storedTheme || "dark");

  const nav_link = [
    {
      title: "about",
      link: "/"
    },
    {
      title: "skills",
      link: "/skills"
    },
    {
      title: "projects",
      link: "/projects"
    },
    {
      title: "contact",
      link: "/contact"
    }
  ]

  const pathname = usePathname()

  return (
    <div>
      <div className="md:hidden">
        <Sheet >
          <SheetTrigger><IoMenu size="32px" /></SheetTrigger>
            <SheetContent >
              <SheetHeader>
                <SheetDescription>
                  <div className="flex flex-col space-y-7 items-start w-full text-lg mt-10">
                    
                    {nav_link.map((data, idx) => (
                      <SheetClose asChild key={idx}>
                        <Link href={data.link} className={`font-medium  ${pathname == data.link ? 'text-sky-400' : ''}`}><span>{idx + 1}.</span>{data.title}</Link>
                      </SheetClose>
                    ))}
                  
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="outline" className="rounded-xl w-10 h-10">
                          <IoIosSunny className="absolute w-[1rem] h-[1rem] transition-all text-primary rotate-90 scale-100 dark:rotate-0 dark:scale-100" />
                          <FaMoon className="absolute w-[1rem] h-[1rem] text-primary rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                          <span className="sr-only">Toggle theme</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
                          <DropdownMenuRadioItem value="light" onClick={() => setTheme("light")}>Light</DropdownMenuRadioItem>
                          <DropdownMenuRadioItem value="dark" onClick={() => setTheme("dark")}>Dark</DropdownMenuRadioItem>
                          <DropdownMenuRadioItem value="system" onClick={() => setTheme("system")}>System</DropdownMenuRadioItem>
                        </DropdownMenuRadioGroup>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          
        </Sheet>
      </div>
      <div className="hidden md:flex">
        <div className="flex items-center text-foreground space-x-7">
          
          {nav_link.map((data, idx) => (
            <Link href={data.link} className={`font-medium  ${pathname == data.link ? 'text-sky-400' : ''}`} key={idx}><span>0{idx + 1}.</span> {data.title}</Link>
          ))}

          <DropdownMenu>
            <DropdownMenuTrigger  asChild>
              <Button variant="outline" className="rounded-xl w-10 h-10">
                <IoIosSunny className="absolute w-[1rem] h-[1rem] transition-all text-primary rotate-90 scale-100 dark:rotate-0 dark:scale-100" />
                <FaMoon className="absolute w-[1rem] h-[1rem] text-primary rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
                <DropdownMenuRadioItem value="light" onClick={() => setTheme("light")}>Light</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="dark" onClick={() => setTheme("dark")}>Dark</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="system" onClick={() => setTheme("system")}>System</DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
}

export default NavigationBar;