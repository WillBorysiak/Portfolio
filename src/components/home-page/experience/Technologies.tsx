import { motion } from "framer-motion";

import Heading from "../../typography/Heading";
import { scrollAnimationVariants } from "../../utils/scroll-animation-variants";
import TechLogos from "./TechLogos";

const Technologies = () => {
  return (
    <motion.div
      id="skill-panel"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={scrollAnimationVariants}
      className="bg-transparent-background mx-auto mt-5 max-w-7xl px-3 py-8 sm:px-6 lg:px-8"
    >
      <Heading content="Technologies I Use" />
      <TechLogos />
    </motion.div>
  );
};

export default Technologies;
