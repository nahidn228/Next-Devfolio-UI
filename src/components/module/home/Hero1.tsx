import { Vortex } from "@/components/ui/vortex";
import React from "react";

const Hero1 = () => {
  return (
    <div className="w-[calc(100%-4rem)] mx-auto rounded-md  h-[30rem] overflow-hidden pt-24 ">
      <Vortex
        backgroundColor="black"
        className=" absolute inset-0 flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
      >
        <h2 className="text-white text-2xl md:text-6xl font-bold text-center">
          Hi, I’m Nahid Hasan
        </h2>
        <p className="text-white text-sm md:text-xl max-w-xl mt-6 text-center">
          A passionate Full Stack Developer specializing in building scalable, user-friendly web applications using modern technologies. I love turning ideas into digital experiences.
        </p>
        
      </Vortex>
    </div>
  );
};

export default Hero1;
