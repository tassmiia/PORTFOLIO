import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import SparklesText from "./ui/sparkles.text";
import { PiMouseSimpleThin } from "react-icons/pi";

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="blue"
        />
        <Spotlight className="top-10 left-full h-[80vh] w-[50vw]" fill="blue" />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="purple" />
      </div>
      <div
        className="h-screen w-full dark:bg-black bg-white dark:bg-grid-white/[0.01] bg-grid-black-100/[0.01]
        absolute top-0 left-0 flex items-center justify-center"
      >
        <div
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
          bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>
      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80"></p>
          <TextGenerateEffect
            words="The Web is My Canvas, Where Art Meets Innovation"
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
          />
          <p className="text-center md:tracking-wider my-5 mb-4 text-sm md:text-lg lg:text-2xl">
            Hi{" "}
            <img
              className="w-7 h-7 mb-2 inline-block"
              src="/wave.png"
              alt="wave icon"
            />{" "}
            I'm Tasmia,{" "}
            <SparklesText
              text="Developer"
              colors={{ first: "#9E7AFF", second: "#FE8BBB" }}
              className="text-lg md:text-2xl lg:text-3xl font-normal inline-block text-purple"
              sparklesCount={8}
            />{" "}
            based in India.
          </p>

          <div className="flex flex-col items-center mt-20">
            <PiMouseSimpleThin className="text-3xl md:text-4xl text-purple animate-bounce" />
            <span className="mt-2 text-xs md:text-sm lg:text-base text-purple opacity-80">
              Scroll Down
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
