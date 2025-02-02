import Image from "next/image";

import { motion } from "framer-motion";

import { Project as ProjectModel } from "../../../models/project.model";
import { scrollAnimationVariants } from "../../utils/scroll-animation-variants";
import ProjectLinks from "./ProjectLinks";
import CalorieTechStack from "./tech-stacks/CalorieTechStack";
import HandcraftedTechStack from "./tech-stacks/HandcraftedTechStack";
import SprecheDeutschTechStack from "./tech-stacks/SprecheDeutschTechStack";
import StravaTechStack from "./tech-stacks/StravaTechStack";
import WW2TechStack from "./tech-stacks/WW2TechStack";

interface ProjectProps {
  project: ProjectModel;
}

const Project = (props: ProjectProps) => {
  const { project } = props;

  const { title, description, website, github, techStack, screenshotUrl } =
    project;

  return (
    <motion.article
      id="project"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={scrollAnimationVariants}
      className="font-kalam relative overflow-hidden"
    >
      <div className="bg-very-light mx-3 mt-5 mb-5 max-w-xl rounded-xs px-3 pb-5 lg:grid lg:h-[550px] lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-0 lg:pb-0 lg:pl-8">
        <div id="project-info" className="px-5 lg:px-0 lg:py-16">
          <div className="text-dynamic-theme mt-5">
            <h2 className="pt-5 text-3xl font-extrabold tracking-tight md:text-4xl">
              {title}
            </h2>

            <p className="mt-5 text-lg font-bold md:text-xl">{description}</p>

            <ProjectLinks website={website} github={github} />
          </div>

          <div className="mt-5 border-t border-gray-200" />

          {techStack === "sprecheDeutsch" && <SprecheDeutschTechStack />}
          {techStack === "stravaDashboard" && <StravaTechStack />}
          {techStack === "canICalorie" && <CalorieTechStack />}
          {techStack === "handcraftedByBarbaraRuth" && <HandcraftedTechStack />}
          {techStack === "ww2EuropeanMap" && <WW2TechStack />}
        </div>

        <div
          id="project-image"
          className="flex justify-center pt-3 lg:items-center lg:justify-end lg:pt-0"
        >
          <Image
            src={screenshotUrl}
            alt={title}
            height={550}
            width={550}
            quality={100}
            priority={true}
          />
        </div>
      </div>
    </motion.article>
  );
};

export default Project;
