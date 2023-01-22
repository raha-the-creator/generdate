import React from "react";
import Image from "next/image";
import src from "../public/hero-home.jpg";

const Hero = () => {
  return (
    <div class="relative w-screen h-1/2 p-20">
      <div class="-z-1">
        <Image 
            priority 
            src={src} 
            layout="fill" 
            objectFit="cover"
            objectPosition="center"
            alt="hero image" 
        />
      </div>

      <div class="relative flex flex-col items-center">
        <h1 class='text-white text-1xl font-roboto-mono font-extralight'>Plan your dates easier</h1>
        <p class="text-white text-5xl font-medium font-roboto-mono">GenerDate</p>
      </div>
    </div>
  );
};

export default Hero;
