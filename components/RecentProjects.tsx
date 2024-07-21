// RecentProjects.tsx

import React from "react";
import { projects } from "@/data";
import { ThreeDCardDemo } from "./ui/PinContainer";

const RecentProjects = () => {
  return (
    <div className="py-10">
      <h1 className="heading">
        Something I've <span className="text-purple">worked on</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-x-14 gap-y-0 mt-10">
        {projects.map(({ id, title, des, img, LiveSitehref, repohref }) => (
          <div
            key={id}
            className="flex items-center justify-center w-full sm:w-[36rem] mb-8"
          >
            <ThreeDCardDemo
              title={title}
              des={des}
              LiveSitehref={LiveSitehref || "#"}
              repohref={repohref || "#"}
              imgSrc={img}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
