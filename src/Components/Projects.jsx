import { myProjects } from "./Constant/index";
import { useState } from "react";
import ProjectCard from "./Sub-Sections/ProjectCard";
import { useMotionValue, useSpring, motion } from "motion/react";

const Projects = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { damping: 10, stiffness: 50 });
  const springY = useSpring(y, { damping: 10, stiffness: 50 });
  const handelMouse = (e) => {
    x.set(e.clientX + 20);
    y.set(e.clientY + 20);
  };
  const [preview, setPreview] = useState(null);

  return (
    <section onMouseMove={handelMouse} className="relative c-space section-spacing">
      <h2 className="text-heading">My Selected Projects</h2>
      <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent mt-12 h-[1px] w-full"></div>
      {myProjects.map((project) => (
        <ProjectCard key={project.id} {...project} setPreview={setPreview} />
      ))}
      {preview && <motion.img
        src={preview}
        className="fixed top-0 left-0 z-50 object-cover h-56 rounded-lg shadow-lg pointer-events-none w-80"
        style={{ x: springX, y: springY }}
      />}
    </section>
  );
};

export default Projects;
