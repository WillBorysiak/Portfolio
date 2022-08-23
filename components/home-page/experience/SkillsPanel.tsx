import Heading from '../../typography/Heading';
import TechList from './TechList';
import { motion } from 'framer-motion';
import { scrollAnimationVariants } from '../../utils/scrollAnimationVariants';

const SkillsPanel = () => {
	return (
		<motion.div
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true }}
			variants={scrollAnimationVariants}
			className="mx-auto mt-5 max-w-7xl bg-transparentBg py-8 px-4 sm:px-6 lg:px-8"
		>
			<Heading content="Technologies I Use" />
			<TechList />
		</motion.div>
	);
};

export default SkillsPanel;
