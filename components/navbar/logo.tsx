"use client"
import React from 'react';
import Image from 'next/image'
interface LogoProps {
  variant?: "primary" | null;
}
const Logo: React.FC<LogoProps> = ({ variant }) => {
  return ( 
    <div className='flex items-center'>
      <p className={`text-lg font-bold ${variant === "primary" ? "text-white" : "text-foreground"}`}>Elvina<span className='text-blue-400'>F.</span></p>
    </div>
  );
}

export default Logo;