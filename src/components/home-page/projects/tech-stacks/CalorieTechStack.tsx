import angular from "../../../../../public/tech-logos/angular.svg";
import material from "../../../../../public/tech-logos/material.svg";
import ngrx from "../../../../../public/tech-logos/ngrx.svg";
import rxjs from "../../../../../public/tech-logos/rxjs.svg";
import sass from "../../../../../public/tech-logos/sass.svg";
import TechLogo from "../../experience/TechLogo";

const CalorieTechStack = () => {
  return (
    <div
      id="calorie-tech-stack"
      className="mt-5 flex flex-wrap gap-x-3 xs:flex-nowrap"
    >
      {/* Angular */}
      <TechLogo iconPath={angular.src} size="Small" />
      {/* SASS */}
      <TechLogo iconPath={sass.src} size="Small" />
      {/* Material */}
      <TechLogo iconPath={material.src} size="Small" />
      {/* RxJS */}
      <TechLogo iconPath={rxjs.src} size="Small" />
      {/* NgRx */}
      <TechLogo iconPath={ngrx.src} size="Small" />
    </div>
  );
};

export default CalorieTechStack;
