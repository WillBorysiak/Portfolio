import { motion } from "framer-motion";

import SectionTitle from "../../typography/SectionTitle";
import { scrollAnimationVariants } from "../../utils/scroll-animation-variants";
import ContactInfo from "./ContactInfo";
import ContactNav from "./ContactNav";
import Footer from "./Footer";

const Contact = () => {
  return (
    <section
      id="contact"
      className="flex w-screen flex-col bg-daySky bg-cover bg-center dark:bg-nightSky"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={scrollAnimationVariants}
        className="flex flex-col items-center justify-center"
      >
        <SectionTitle text="Contact Me" />
        <ContactInfo />
        <ContactNav />
        <Footer />
      </motion.div>
    </section>
  );
};

export default Contact;
