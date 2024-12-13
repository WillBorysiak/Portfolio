import { motion } from "framer-motion";

import { Position } from "../../../interfaces/position.interface";
import Heading from "../../typography/Heading";
import { scrollAnimationVariants } from "../../utils/scroll-animation-variants";
import Job from "./Job";

interface WorkExperienceProps {
  experiences: Position[];
}

const WorkExperience = (props: WorkExperienceProps) => {
  const { experiences } = props;

  const experienceData = experiences.sort(
    (a, b) => a.fields.order - b.fields.order,
  );

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
        {experienceData.map((item, index) => {
          return <Job key={index} content={item} />;
        })}
      </article>
    </motion.section>
  );
};

export default WorkExperience;
