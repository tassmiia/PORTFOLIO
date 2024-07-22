import { IconCloudDemo } from "./cloud";

const About = () => {
  return (
    <section className="min-h-screen flex items-center bg-black text-white py-16">
      <div className="container mx-auto px-6 lg:px-20 flex flex-col md:flex-row items-center">
        {/* Left Text */}
        <div className="w-full md:w-1/2 md:pr-8">
          <h3 className="text-2xl md:text-4xl font-light mb-4 font-mono">
            Hello World,
          </h3>
          <p className="text-lg md:text-xl font-mono text-zinc-400 leading-8 mb-8">
            As a final-year Engineering student with a passion for{" "}
            <span className="relative inline-block">
              front-end
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 50 6"
                fill="none"
                preserveAspectRatio="none"
                className="absolute w-full block overflow-visible stroke-current h-[6px] text-fuchsia-700 left-0 bottom-0 -z-1"
              >
                <path
                  strokeLinecap="round"
                  strokeWidth="2"
                  d="M1 4.034c8 .5 15.05-2.66 25-3 8.836-.302 22.5 1.5 22.5 1.5"
                ></path>
              </svg>
            </span>{" "}
            development, I enjoy bringing designs to life using several
            programming languages and frameworks, including{" "}
            <span className="relative inline-block">
              React, Typescript and Next.js,
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 120 6"
                fill="none"
                preserveAspectRatio="none"
                className="absolute w-full block overflow-visible stroke-current h-[7px] text-emerald-400 left-0 bottom-0 -z-1"
              >
                <path
                  strokeLinecap="round"
                  strokeWidth="2"
                  d="M1 2l4.935 1.763c1.261.45 2.669.133 7.615-.813v0a3.464 4.464 0 014.9 0l.8.8a4.596 4.596 0 006.5 0v0a4.596 4.596 0 016.5 0l.75.75a3.536 3.536 0 005 0v0a3.536 3.536 0 015 0v0a3.536 3.536 0 005 0v0a3.536 3.536 0 015 0v0a3.536 3.536 0 005 0v0a3.536 0.536 0 015 0v0a3.536 3.536 0 005 0v0a3.536 3.536 0 015 0v0a3.536 3.536 0 005 0v0a3.536 4.537 0 015 0v0a3.536 3.536 0 005 0l.285-.285a3.938 3.938 0 014.872-.555l1.988 1.243A6.885 6.885 0 0098 5.157l2.454-1.291a11.712 11.712 0 017.49-1.17l4.555.804"
                ></path>
              </svg>
            </span>{" "}
            while also exploring the versatile world of{" "}
            <span className="relative inline-block">
              Python
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 50 6"
                fill="none"
                preserveAspectRatio="none"
                className="absolute w-full block overflow-visible stroke-current h-[6px] text-violet-700 left-0 bottom-0 -z-1"
              >
                <path
                  strokeLinecap="round"
                  strokeWidth="2"
                  d="M1 4.034c8 .5 15.05-2.66 25-3 8.836-.302 22.5 1.5 22.5 1.5"
                ></path>
              </svg>
            </span>
            . When I&apos;m not immersed in the world of pixels, you&apos;ll
            find me adoring cats.😽
          </p>
          <p className="text-lg md:text-xl font-mono text-zinc-500 mb-8">
            Just like any other dev, I also spend countless hours exploring new
            technology and frameworks rather than actually coding something
            meaningful.😼
          </p>
        </div>

        {/* Right Div: IconCloudDemo */}
        <div className="w-full md:w-1/2 flex items-center justify-center mt-8 md:mt-0">
          <IconCloudDemo />
        </div>
      </div>
    </section>
  );
};

export default About;
