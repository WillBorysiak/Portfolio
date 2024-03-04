import { motion } from "framer-motion";

import Heading from "../../typography/Heading";
import { scrollAnimationVariants } from "../../utils/scrollAnimationVariants";
import TechList from "./TechList";

const Technologies = () => {
  return (
    <motion.div
      id="skill-panel"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={scrollAnimationVariants}
      className="mx-auto mt-5 max-w-7xl bg-transparentBg px-3 py-8 sm:px-6 lg:px-8"
    >
      <Heading content="Technologies I Use" />
      <TechList />
    </motion.div>
  );
};

export default Technologies;
