import { FlipWords } from "./FlipWords";
import { motion } from "motion/react";

const HeroText = () => {
  const words = ["Mordern", "Secure", "Scalable"];

  const variant_1 = {
    hidden:{opacity: 0, x: -50},
    visible:{opacity: 1, x: 0},
  }

  const variant_2 = {
    hidden:{opacity: 0, y: -50},
    visible:{opacity: 1, y: 0},
  }

  return (
    <div className="z-10 mt-20 text-center md:mt-40 md:text-start rounded-3xl bg-clip-text">
      {/* Desktop View */}
      <div className="flex-col hidden md:flex c-space">
        <motion.h1
          variants={variant_1}
          initial="hidden"
          animate="visible"
          transition={{ duration:1, delay:0.5 }}
          className="text-4xl font-medium"
        >
          Hello, I'm Akhilesh
        </motion.h1>
        <div className="flex flex-col items-start">
          <motion.p
            variants={variant_1}
            initial="hidden"
            animate="visible"
            transition={{ duration: 1, delay:0.7 }}
            className="text-5xl font-medium text-neutral-300"
          >
            A Developer <br /> Dedicated to Crafting
          </motion.p>
          <motion.div
            variants={variant_1}
            initial="hidden"
            animate="visible"
            transition={{ duration: 1, delay:0.9 }}
            className="font-black text-white text-8xl"
          >
            <FlipWords words={words} />
          </motion.div>
          <motion.p
            variants={variant_1}
            initial="hidden"
            animate="visible"
            transition={{ duration: 1, delay:1.1 }}
            className="text-4xl font-medium text-neutral-300"
          >
            Web Application
          </motion.p>
        </div>
      </div>
      {/* Mobile View */}
      <div className="flex flex-col space-y-6 md:hidden">
        <motion.p
          variants={variant_2}
          initial="hidden"
          animate="visible"
          transition={{ duration:1, delay:0.5 }}
          className="text-4xl font-medium "
        >
          Hello, I'm Akhilesh
        </motion.p>
        <motion.p
          variants={variant_2}
          initial="hidden"
          animate="visible"
          transition={{ duration:1, delay:0.7 }}
          className="text-5xl font-medium"
        >
          Building
        </motion.p>
        <motion.div
          variants={variant_2}
          initial="hidden"
          animate="visible"
          transition={{ duration:1, delay:0.9 }}
          className="font-black text-white text-6xl"
        >
          <FlipWords words={words} />
        </motion.div>
        <motion.p
          variants={variant_2}
          initial="hidden"
          animate="visible"
          transition={{ duration:1, delay:1.1 }}
          className="text-4xl font-medium text-neutral-300"
        >
          Web Application
        </motion.p>
      </div>
    </div>
  );
};

export default HeroText;