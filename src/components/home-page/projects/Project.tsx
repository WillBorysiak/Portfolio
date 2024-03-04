import { motion } from "framer-motion";
import Image from "next/image";

import { Project as ProjectModel } from "../../../models/project.model";
import Heading from "../../typography/Heading";
import { scrollAnimationVariants } from "../../utils/scrollAnimationVariants";
import ProjectLinks from "./ProjectLinks";
import CalorieTechStack from "./tech-stacks/CalorieTechStack";
import HandcraftedTechStack from "./tech-stacks/HandcraftedTechStack";
import StravaTechStack from "./tech-stacks/StravaTechStack";
import WW2TechStack from "./tech-stacks/WW2TechStack";

const Project = (props: { content: ProjectModel }) => {
  const content = props.content.fields;
  const { title, description, website, github, techStack, screenshot } =
    content;

  return (
    <motion.article
      id="project"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={scrollAnimationVariants}
      className="relative overflow-hidden font-kalam"
    >
      <div className="mx-3 mb-5 mt-5 max-w-xl rounded-sm bg-transparentBg px-3 pb-5 lg:grid lg:h-[550px] lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-0 lg:pb-0 lg:pl-8">
        <div id="project-info" className="px-5 lg:px-0 lg:py-16">
          <div className="mt-5">
            <h2 className="pt-5 text-3xl font-extrabold tracking-tight text-dark dark:text-light md:text-4xl">
              <Heading content={title} center={false} />
            </h2>

            <p className="mt-5 text-lg font-bold text-dark dark:text-light md:text-xl">
              {description}
            </p>

            <ProjectLinks website={website} github={github} />
          </div>

          <div className="mt-5 border-t border-gray-200" />

          {techStack === "stravaDashboard" && <StravaTechStack />}
          {techStack === "handcraftedByBarbaraRuth" && <HandcraftedTechStack />}
          {techStack === "canICalorie" && <CalorieTechStack />}
          {techStack === "ww2EuropeanMap" && <WW2TechStack />}
        </div>

        <div
          id="project-image"
          className="flex justify-center pt-3 lg:items-center lg:justify-end lg:pt-0"
        >
          <Image
            src={"https:" + screenshot.fields.file.url}
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
