import { motion } from 'framer-motion';

import { Position } from '../../../models/position.model';
import Heading from '../../typography/Heading';
import { scrollAnimationVariants } from '../../utils/scrollAnimationVariants';
import Job from './Job';

const JobsPanel = (props: { experiences: Position[] }) => {
	const experiences = props.experiences;

	return (
		<motion.section
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true }}
			variants={scrollAnimationVariants}
			className="mt-10 overflow-hidden rounded-md font-kalam"
		>
			<div className="relative mx-auto max-w-7xl bg-transparentBg py-8 text-dark dark:text-light sm:px-2 lg:px-2 lg:py-8">
				<Heading content="Work Experience" />
				{experiences.map((item, index) => {
					return <Job key={index} content={item} />;
				})}
			</div>
		</motion.section>
	);
};

export default JobsPanel;
