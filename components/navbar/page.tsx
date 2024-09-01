"use client"

import { useState, useEffect } from "react";
import NavigationBar from "./navigation-bar";
import Link from "next/link";
import Logo from './logo'

const Navbar = () => {
  const [navbar, setNavbar] = useState(false)
  const scrollNavbar = () => {
    console.log(window.scrollY);
    if(window.scrollY >= 1) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", scrollNavbar);
    return() => {
      window.addEventListener("scroll", scrollNavbar)
    }
  }, [])
  
  return (  
    <div className={`${navbar ? 'fixed' : ''} w-full bg-background z-50`}>
      <div className="flex justify-between items-center py-6 mx-auto px-4 sm:px-6 md:px-8 xl:px-0 max-w-6xl ">
        <Link href="/">
          <Logo />
        </Link>
        <NavigationBar />
      </div>
    </div>
  );
}

export default Navbar;