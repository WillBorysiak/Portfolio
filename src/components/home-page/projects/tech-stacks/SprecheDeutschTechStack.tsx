import nextjs from "../../../../../public/tech-logos/nextjs.svg";
import postgresql from "../../../../../public/tech-logos/postgresql.svg";
import python from "../../../../../public/tech-logos/python.svg";
import react from "../../../../../public/tech-logos/react.svg";
import tailwindcss from "../../../../../public/tech-logos/tailwindcss.svg";
import TechLogo from "../../experience/TechLogo";

const SprecheDeutschTechStack = () => {
  return (
    <div
      id="spreche-deutsch-tech-stack"
      className="mt-5 flex flex-wrap gap-x-3 xs:flex-nowrap"
    >
      {/* React */}
      <TechLogo iconPath={react.src} size="Small" />
      {/* Next JS */}
      <TechLogo iconPath={nextjs.src} size="Small" />
      {/* Tailwind */}
      <TechLogo iconPath={tailwindcss.src} size="Small" />
      {/* Python */}
      <TechLogo iconPath={python.src} size="Small" />
      {/* Postgresql */}
      <TechLogo iconPath={postgresql.src} size="Small" />
    </div>
  );
};

export default SprecheDeutschTechStack;
