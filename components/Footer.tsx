"use client";
import { BsChatDots } from "react-icons/bs";
import Image from "next/image";
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
      />
    </div>
  );
}

const Footer = () => {
  return (
    <footer className="relative w-full pt-5 pb-10" id="contact">
      {/* Background Grid */}
      <div className="absolute left-0 top-0 w-full h-auto min-h-[14rem] sm:min-h-[20rem] md:min-h-[28rem] lg:min-h-[36rem]">
        <Image
          src="/footer-grid.svg"
          alt="Background grid pattern"
          className="w-full h-full object-cover opacity-90"
          width={1200} // Replace with actual width of the image
          height={600} // Replace with actual height of the image
        />
      </div>

      <div className="relative z-10 flex flex-col items-center">
        <TextRevealCardPreview />

        <a href="mailto:khantasmiia@outlook.com">
          <MagicButton
            title="Let's get in touch"
            icon={<BsChatDots />}
            position="right"
          />
        </a>
      </div>

      <div className="relative z-10 flex mt-16 md:flex-row flex-col justify-between items-center w-full px-6">
        <p className="md:text-base text-sm font-light flex items-center">
          Crafted with{" "}
          <Image
            className="w-6 h-6 ml-1"
            src="/love.png"
            alt="Love icon"
            width={24} // Replace with actual width of the image
            height={24} // Replace with actual height of the image
          />
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <a
              key={info.id}
              href={info.link}
              target="_blank"
              rel="noopener noreferrer"
              // aria-label={`Link to ${info.name}`}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-100 rounded-full border border-black-300"
            >
              <Image
                src={info.img}
                alt="dw"
                width={20} // Replace with actual width of the image
                height={20} // Replace with actual height of the image
              />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
