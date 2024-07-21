"use client";
import { BsChatDots } from "react-icons/bs";
import { socialMedia } from "@/data";
import MagicButton from "@/components/ui/MagicButton";
import React from "react";
import {
  TextRevealCard,
  TextRevealCardDescription,
  TextRevealCardTitle,
} from "./ui/text-reveal-card";

export function TextRevealCardPreview() {
  return (
    <div className="flex items-center md:flex-row justify-center">
      <TextRevealCard
        text="Looking to bring fresh energy and skills to your team?"
        revealText=""
      ></TextRevealCard>
    </div>
  );
}

const Footer = () => {
  return (
    <footer className="w-full  pt-5 pb-10 " id="contact">
      {/* background grid */}
      <div className="absolute left-0 w-full h-auto min-h-[14rem] sm:min-h-[20rem] md:min-h-[28rem] lg:min-h-[36rem]">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-90"
        />
      </div>
      <div className="flex flex-col items-center">
        {/* <h2 className="heading lg:max-w-[45vw] mb-10">
          Looking to bring fresh <span className="text-purple">energy</span> and{" "}
          <span className="text-purple">skills</span> to your team?
        </h2> */}

        <TextRevealCardPreview />

        <a href="mailto:khantasmiia@outlook.com">
          <MagicButton
            title="Let's get in touch"
            icon={<BsChatDots />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center w-full px-6">
        <p className="md:text-base text-sm md:font-light font-light inline-flex items-center">
          Crafted with{" "}
          <img className="w-6 h-6 ml-1" src="/love.png" alt="love icon" />
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <a
              key={info.id}
              href={info.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-100 rounded-full border border-black-300"
            >
              <img src={info.img} alt="icons" width={20} height={20} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
