import { OrbitingCircles } from "./OrbitCircle";

export function Frameworks() {
  const Skills = {
    outer: [
      "auth0",
      "AWS",
      "cplusplus",
      "css3",
      "github",
      "git",
      "html5",
      "javascript",
      "microsoft",
      "sqlite",
      "tailwindcss",
      "vitejs",
      "Java",
    ],
    inner: [
      "react",
      "node",
      "Django",
      "MongoDB",
      "MySQL",
      "Python",
      "Express",
    ],
  };

  return (
    <div className="relative flex h-[15rem] w-full flex-col items-center justify-center">
      <OrbitingCircles iconSize={40}>
        {Skills.outer.map((skill,index) => (
        <Icons key={index} src={`assets/logos/${skill}.svg`} />
        ))}
      </OrbitingCircles>
      <OrbitingCircles
        iconSize={30}
        radius={100}
        reverse
        speed={2}
      >
        {Skills.inner.reverse().map((skill,index) => (
          <Icons key={index} src={`assets/logos/${skill}.svg`} />
        ))}
      </OrbitingCircles>
    </div>
  );
}

const Icons = ({ src }) => {
  return <img src={src} className="duration-200 rounded-sm hover:scale-110" />;
};
