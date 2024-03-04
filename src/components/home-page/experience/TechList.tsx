import cssIcon from "../../../../public/tech-logos/css3.svg";
import htmlIcon from "../../../../public/tech-logos/html5.svg";
import jsIcon from "../../../../public/tech-logos/javascript.svg";
import tsIcon from "../../../../public/tech-logos/typescript.svg";
import react from "../../../../public/tech-logos/react.svg";
import gatsby from "../../../../public/tech-logos/gatsby.svg";
import angular from "../../../../public/tech-logos/angular.svg";
import nodejs from "../../../../public/tech-logos/nodejs.svg";
import sass from "../../../../public/tech-logos/sass.svg";
import tailwindcss from "../../../../public/tech-logos/tailwindcss.svg";
import jest from "../../../../public/tech-logos/jest.svg";
import jasmine from "../../../../public/tech-logos/jasmine.svg";
import cypress from "../../../../public/tech-logos/cypress.svg";
import material from "../../../../public/tech-logos/material.svg";
import ngrx from "../../../../public/tech-logos/ngrx.svg";
import rxjs from "../../../../public/tech-logos/rxjs.svg";
import graphql from "../../../../public/tech-logos/graphql.svg";
import docker from "../../../../public/tech-logos/docker.svg";
import vscode from "../../../../public/tech-logos/vscode.svg";
import vstudio from "../../../../public/tech-logos/vstudio.svg";
import git from "../../../../public/tech-logos/git.svg";
import azure from "../../../../public/tech-logos/azure.svg";
import github from "../../../../public/tech-logos/github.svg";
import chatgpt from "../../../../public/tech-logos/chatgpt.svg";
import google from "../../../../public/tech-logos/google.svg";

import TechLogo from "./TechLogo";

const TechList = () => {
  return (
    <div
      id="tech-list"
      className="mt-6 grid grid-cols-3 gap-8 md:grid-cols-6 lg:grid-cols-5"
    >
      {/* HTML */}
      <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
        <TechLogo iconPath={htmlIcon.src} size="Medium" />
      </div>

      {/* CSS */}
      <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
        <TechLogo iconPath={cssIcon.src} size="Medium" />
      </div>

      {/* JavaScript */}
      <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
        <TechLogo iconPath={jsIcon.src} size="Medium" />
      </div>

      {/* Typescript */}
      <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
        <TechLogo iconPath={tsIcon.src} size="Medium" />
      </div>

      {/* React */}
      <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
        <TechLogo iconPath={react.src} size="Medium" />
      </div>

      {/* Gatsby */}
      <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
        <TechLogo iconPath={gatsby.src} size="Medium" />
      </div>

      {/* Angular */}
      <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
        <TechLogo iconPath={angular.src} size="Medium" />
      </div>

      {/* NodeJS */}
      <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
        <TechLogo iconPath={nodejs.src} size="Medium" />
      </div>

      {/* SASS */}
      <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
        <TechLogo iconPath={sass.src} size="Medium" />
      </div>

      {/* Tailwind */}
      <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
        <TechLogo iconPath={tailwindcss.src} size="Medium" />
      </div>

      {/* Material */}
      <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
        <TechLogo iconPath={material.src} size="Medium" />
      </div>

      {/* Jest */}
      <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
        <TechLogo iconPath={jest.src} size="Medium" />
      </div>

      {/* Jasmine */}
      <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
        <TechLogo iconPath={jasmine.src} size="Medium" />
      </div>

      {/* Cypress */}
      <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
        <TechLogo iconPath={cypress.src} size="Medium" />
      </div>

      {/* NgRx */}
      <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
        <TechLogo iconPath={ngrx.src} size="Medium" />
      </div>

      {/* RxJS */}
      <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
        <TechLogo iconPath={rxjs.src} size="Medium" />
      </div>

      {/* Graphql */}
      <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
        <TechLogo iconPath={graphql.src} size="Medium" />
      </div>

      {/* Docker */}
      <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
        <TechLogo iconPath={docker.src} size="Medium" />
      </div>

      {/* VS Code */}
      <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
        <TechLogo iconPath={vscode.src} size="Medium" />
      </div>

      {/* Visual Studio */}
      <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
        <TechLogo iconPath={vstudio.src} size="Medium" />
      </div>

      {/* Git */}
      <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
        <TechLogo iconPath={git.src} size="Medium" />
      </div>

      {/* Azure */}
      <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
        <TechLogo iconPath={azure.src} size="Medium" />
      </div>

      {/* Github */}
      <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
        <TechLogo iconPath={github.src} size="Medium" />
      </div>

      {/* ChatGPT */}
      <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
        <TechLogo iconPath={chatgpt.src} size="Medium" />
      </div>

      {/* Google */}
      <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
        <TechLogo iconPath={google.src} size="Medium" />
      </div>
    </div>
  );
};

export default TechList;
