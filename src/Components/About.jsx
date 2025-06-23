import { useRef } from "react";
import Card from "./Sub-Sections/Card";
import { Globe } from "./Sub-Sections/Globe";
import CopyEmail from "./Sub-Sections/CopyEmail";
import { Frameworks } from "./Sub-Sections/Frameworks";

const About = () => {
  const grid2Container = useRef();
  return (
    <section className="c-space section-spacing">
      <h2 className="text-heading">About Me</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
        <div className="flex items-end grid-default-color grid-1">
          <img
            src="assets/coding-pov.png"
            alt="Coding Image"
            className="absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5]"
          />
          <div className="z-10">
            <p className="headtext">Hi, I'm Akhilesh Jadhav</p>
            <p className="subtext">
              Over The Last 2 Years, I Developed My Frontend & Backend Skills To
              Develop & Deliver Dynamic and Responsive Web Application
            </p>
          </div>
          <div className="absolute inset-x-0 pointer-events-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo"></div>
        </div>
        <div className="grid-default-color grid-2">
          <div
            ref={grid2Container}
            className="flex items-center justify-center w-full h-full "
          >
            <p className="flex items-end text-center text-5xl text-gray-500">
              DRAG THE TAGS
            </p>
            <Card
              text="HTML5"
              title="HTML5"
              style={{ rotate: "0deg", top: "15%", left: "10%" }}
              containerRef={grid2Container}
            />
            <Card
              text="CSS3"
              title="CSS3"
              style={{ rotate: "60deg", top: "20%", left: "38%" }}
              containerRef={grid2Container}
            />
            <Card
              text="JavaScript"
              title="JavaScript"
              style={{ rotate: "75deg", top: "30%", left: "70%" }}
              containerRef={grid2Container}
            />
            <Card
              image={"assets/logos/Java.svg"}
              title="JAVA"
              style={{ rotate: "40deg", top: "70%", left: "60%" }}
              containerRef={grid2Container}
            />
            <Card
              image={"assets/logos/Vite.js.png"}
              title="Vite.js"
              style={{ rotate: "90deg", top: "70%", left: "40%" }}
              containerRef={grid2Container}
            />
            <Card
              text="Vercel Deploy"
              title="Vercel"
              style={{ rotate: "0deg", top: "70%", left: "2%" }}
              containerRef={grid2Container}
            />
            <Card
              image={"assets/logos/visualstudiocode.svg"}
              title="VSCode"
              style={{ rotate: "10deg", top: "40%", left: "2%" }}
              containerRef={grid2Container}
            />
            <Card
              image={"assets/logos/sqlite.svg"}
              title="SQLite"
              style={{ rotate: "-50deg", top: "10%", left: "65%" }}
              containerRef={grid2Container}
            />
            <Card
              image={"assets/logos/Redux.png"}
              title="Redux"
              style={{ rotate: "-20deg", top: "75%", left: "80%" }}
              containerRef={grid2Container}
            />
          </div>
        </div>
        <div className="grid-black-color grid-3">
          <div className="z-10 w-[50%]">
            <p className="headtext">Time Zone</p>
            <p className="subtext">
              I'm based in Mars, and open to remote work worldwide.
            </p>
            <figure className="absolute left-[40%] top-[20%] w-[400px] h-[400px]">
              <img src="assets/Globe.png" alt="" />
            </figure>
          </div>
        </div>
        <div className="grid-special-color grid-4">
          <div className="flex flex-col items-center justify-center gap-4 size-full">
            <p className="text-center headtext">
              Do you Want to Start a Project Together?
            </p>
            <CopyEmail />
          </div>
        </div>
        <div className="grid-default-color grid-5">
          <div className="z-10 w-[45%] md:w-[50%]">
            <p className="headtext">Tech Stacks</p>
            <p className="subtext">
              I Specialize in a variety of Languages, Frameworks, and tools that
              allow me to build Robust and Scalable Applications
            </p>
          </div>
          <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125">
            <Frameworks />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
