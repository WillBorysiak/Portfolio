import { motion } from "framer-motion";

import { Position } from "../../../models/position.model";
import Heading from "../../typography/Heading";
import { scrollAnimationVariants } from "../../utils/scrollAnimationVariants";
import Job from "./Job";

const WorkExperience = (props: { experiences: Position[] }) => {
  const experiences = props.experiences.reverse();

  return (
    <motion.section
      id="job-panel"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={scrollAnimationVariants}
      className="relative overflow-hidden font-kalam"
    >
      <article className="mx-2 mt-10 max-w-7xl rounded-sm bg-transparentBg py-5 text-dark dark:text-light lg:py-8">
        <Heading content="Work Experience" />
        {experiences.map((item, index) => {
          return <Job key={index} content={item} />;
        })}
      </article>
    </motion.section>
  );
};

export default WorkExperience;
