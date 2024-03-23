import css from "../../../../../public/tech-logos/css3.svg";
import html from "../../../../../public/tech-logos/html5.svg";
import javascript from "../../../../../public/tech-logos/javascript.svg";
import sass from "../../../../../public/tech-logos/sass.svg";
import webpack from "../../../../../public/tech-logos/webpack.svg";
import TechLogo from "../../experience/TechLogo";

const WW2TechStack = () => {
  return (
    <div className="mt-5 flex flex-wrap gap-x-3 xs:flex-nowrap">
      {/* HTML */}
      <TechLogo iconPath={html.src} size="Small" />

      {/* CSS */}
      <TechLogo iconPath={css.src} size="Small" />

      {/* JavaScript */}
      <TechLogo iconPath={javascript.src} size="Small" />

      {/* SASS */}
      <TechLogo iconPath={sass.src} size="Small" />

      {/* Webpack */}
      <TechLogo iconPath={webpack.src} size="Small" />
    </div>
  );
};

export default WW2TechStack;
