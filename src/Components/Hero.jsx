import { Canvas } from "@react-three/fiber";
import HeroText from "./Sub-Sections/HeroText";
import { Astronaut } from "./Sub-Sections/Astronaut";
import { useMediaQuery } from "react-responsive";
import { motion } from "motion/react";

const Hero = () => {
  const ismobile = useMediaQuery({ maxWidth: 853 });

  return (
    <>
      <div className="absolute top-0 left-0 w-full h-full -z-10 opacity-30">
        <video
          className="w-full h-full object-cover"
          preload="false"
          playsInline
          loop
          muted
          autoPlay
        >
          <source src="/Videos/skills-bg.webm" type="video/webm" />
        </video>
      </div>

      <section className="relative min-h-screen flex items-start justify-center md:items-start md:justify-start c-space">
        <HeroText />

        <motion.figure
          className="absolute inset-0"
          style={{ height: "100vh", width: "100vw" }}
          initial={{ opacity: 0, y: -500 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
        >
          <Canvas camera={{ position: [1, 1, 3] }}>
            <Astronaut
              scale={ismobile ? 0.23 : 0.3}
              position={ismobile ? [0, -1.5, 0] : [0, -1, 0]}
            />
          </Canvas>
        </motion.figure>
      </section>
    </>
  );
};

export default Hero;
