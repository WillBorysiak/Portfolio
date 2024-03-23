import contentful from "../../../../../public/tech-logos/contentful.svg";
import gatsby from "../../../../../public/tech-logos/gatsby.svg";
import react from "../../../../../public/tech-logos/react.svg";
import tailwindcss from "../../../../../public/tech-logos/tailwindcss.svg";
import TechLogo from "../../experience/TechLogo";

const HandcraftedTechStack = () => {
  return (
    <div
      id="handcrafted-tech-stack"
      className="mt-5 flex flex-wrap gap-x-3 xs:flex-nowrap"
    >
      {/* React */}
      <TechLogo iconPath={react.src} size="Small" />

      {/* Gatsby */}
      <TechLogo iconPath={gatsby.src} size="Small" />

      {/* Tailwind */}
      <TechLogo iconPath={tailwindcss.src} size="Small" />

      {/* Contentful */}
      <TechLogo iconPath={contentful.src} size="Small" />
    </div>
  );
};

export default HandcraftedTechStack;
