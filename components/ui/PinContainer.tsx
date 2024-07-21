// ./ui/PinContainer.tsx

"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./3d-card";
import Link from "next/link";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { BsCodeSlash } from "react-icons/bs";


interface ThreeDCardDemoProps {
  title: string;
  des: string;
  LiveSitehref: string;
  repohref: string;
  imgSrc: string;
}

export function ThreeDCardDemo({
  title,
  des,
  LiveSitehref,
  imgSrc,
  repohref,
}: ThreeDCardDemoProps) {
  return (
    <CardContainer className="inter-var w-full">
      <CardBody className="relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:border-white/[0.2] border-black/[0.1] w-full sm:w-[36rem] h-auto rounded-xl p-6 border">
        <CardItem
          translateZ="50"
          className="text-2xl font-bold text-neutral-600 dark:text-white mb-4"
        >
          {title}
        </CardItem>
        <CardItem translateZ="100" className="w-full mb-4">
          <Image
            src={imgSrc}
            height="500"
            width="1000"
            className="h-auto w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt={title}
          />
        </CardItem>
        <CardItem
          translateZ="100"
          className="text-base text-neutral-500 mb-4 dark:text-neutral-300"
        >
          {des}
        </CardItem>
        <div className="flex justify-between">
          <CardItem
            translateZ={20}
            as={Link}
            href={repohref}
            target="__blank"
            className="flex lg:text-xl md:text-xs text-sm text-purple"
          >
            Repo
            <BsCodeSlash className="ms-2 mt-1" color="#CBACF9" />
          </CardItem>
          <CardItem
            translateZ={20}
            as={Link}
            href={LiveSitehref}
            target="__blank"
            className="flex lg:text-xl md:text-xs text-sm text-purple"
          >
            Live Site
            <FaArrowUpRightFromSquare className="ms-2" color="#CBACF9" />
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
