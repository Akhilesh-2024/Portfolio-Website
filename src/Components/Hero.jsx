import { Canvas } from "@react-three/fiber";
import HeroText from "./Sub-Sections/HeroText";
import ParallexBackground from "./Sub-Sections/ParallexBackground";
import { Astronaut } from "./Sub-Sections/Astronaut";
import { useMediaQuery } from "react-responsive";
import { motion } from "motion/react";
import { animate } from "motion/mini"
import { spring } from "motion"

const Hero = () => {
  const ismobile = useMediaQuery({maxWidth : 853});
  return (
    <section className="flex items-start justify-center md:items-start md:justify-start min-h-screen overflow-hidden c-space">
      <HeroText />
      <ParallexBackground />
      <motion.figure
        className="absolute inset-0"
        style={{ height: "100vh", width: "100vw" }}
        initial={{ opacity: 0, y: -500 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }}
      >
        <Canvas camera={{ position: [1, 1, 3] }}> 
          <Astronaut scale={ismobile && 0.23} position={ismobile && [0, -1.5, 0]} />
        </Canvas>
      </motion.figure>
    </section>
  );
};

export default Hero;
