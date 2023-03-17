import React from "react";
import Image from "next/image";
import src from "../public/hero-home.jpg";

const Hero = (props) => {
  return (
    <div class="flex justify-center items-center relative w-full h-96 p-20">
      <div class="-z-1">
        <Image 
            priority 
            src={props.img} 
            layout="fill" 
            objectFit="cover"
            objectPosition="center"
            alt="hero image" 
        />
      </div>

      <div class="relative flex flex-col items-center">
        <h1 class='text-white text-1xl font-roboto-mono font-extralight'>{props.topText}</h1>
        <p class="text-white text-5xl font-medium font-roboto-mono">{props.header}</p>
      </div>
    </div>
  );
};

export default Hero;
