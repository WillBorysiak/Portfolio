import { motion } from 'framer-motion';
import SectionTitle from '../../typography/SectionTitle';
import { scrollAnimationVariants } from '../../utils/scrollAnimationVariants';
import ContactInfo from './ContactInfo';
import ContactNav from './ContactNav';
import Footer from './Footer';

const Contact = () => {
	return (
		<section id="contact" className=" flex w-screen flex-col bg-daySky bg-cover bg-center dark:bg-nightSky">
			<SectionTitle text="Contact Me" />
			<motion.div
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true }}
				variants={scrollAnimationVariants}
				className="flex flex-col items-center justify-center"
			>
				<ContactInfo />
				<ContactNav />
				<Footer />
			</motion.div>
		</section>
	);
};

export default Contact;
