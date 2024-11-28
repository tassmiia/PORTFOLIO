interface GridItem {
  id: number;
  title: string;
  description: string;
  className: string;
  imgClassName: string;
  titleClassName: string;
  img: string;
  spareImg: string;
}

export const gridItems: GridItem[] = [
  // {
  //   id: 1,
  //   title: "",
  //   description: "",
  //   className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
  //   imgClassName: "absolute right-0 bottom-0 md:w-96 w-40 opacity-40",
  //   titleClassName: "justify-start",
  //   img: "/freinds.svg",
  //   spareImg: "",
  // },

  {
    id: 2,
    title: "Time zone flexibility for seamless collaboration.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1 ",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  // {
  //   id: 3,
  //   title: "My tech stack",
  //   description: "I constantly try to improve",
  //   className: "lg:col-span-2 md:col-span-3 md:row-span-3",
  //   imgClassName: "",
  //   titleClassName: "justify-center",
  //   img: "",
  //   spareImg: "",
  // },
  // {
  //   id: 4,
  //   title: "fgrg",
  //   description: "",
  //   className: "lg:col-span-2 md:col-span-3 md:row-span-1",
  //   imgClassName: "",
  //   titleClassName: "justify-start",
  //   img: "/grid.svg",
  //   spareImg: "/b4.svg",
  // },
  {
    id: 5,
    title: "Currently building an exciting project",
    description: "H A C K ! F Y",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Have a project in mind let's build together?🚀",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Tokyo Town ",
    des: "Animated website that brings your favorite Japanese dishes to life, wrapped in a smooth and stylish design.",
    img: "/TT_cover.png",
    LiveSitehref: "https://tokyo-town.netlify.app/",
    repohref: "https://github.com/tassmiia/TOKYO-TOWN",
  },
  {
    id: 2,
    title: "INNOVA",
    des: "Developing a B2B platform in collaboration with a firm, featuring advanced admin tools using React and Node.js.",
    img: "/innova.png",
    LiveSitehref: "",
    repohref: "",
  },
  {
    id: 3,
    title: "My Personal Portfolio",
    des: "You're likely checking this out now...",
    img: "/portfolio_cover.png",
    LiveSitehref: "#",
    repohref: "https://github.com/tassmiia/portfolio",
  },
  {
    id: 4,
    title: "Gesture Pong - Hand Controlled Game",
    des: "Immersive and interactive gaming experience by moving your hands, using Python, OpenCV, cvzone, and MediaPipe",
    img: "/pong_cover.png",
    LiveSitehref: "https://github.com/tassmiia/Gesture-Pong",
    repohref: "https://github.com/tassmiia/Gesture-Pong",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/tassmiia",
  },
  {
    id: 2,
    img: "/twit.png",
    link: "https://x.com/Tassmiia",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/tasmiia-khan?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
];
