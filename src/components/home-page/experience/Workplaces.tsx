import { motion } from "framer-motion";

import { Workplace as WorkplaceModel } from "../../../models/workplace.model";
import Heading from "../../typography/Heading";
import { scrollAnimationVariants } from "../../utils/scroll-animation-variants";
import Workplace from "./Workplace";

interface WorkplaceProps {
  workplaces: WorkplaceModel[];
}

const Workplaces = (props: WorkplaceProps) => {
  const { workplaces } = props;

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
        {workplaces.map((workplace, index) => {
          return <Workplace key={index} workplace={workplace} />;
        })}
      </article>
    </motion.section>
  );
};

export default Workplaces;
