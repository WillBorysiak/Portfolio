import { motion } from 'framer-motion';
import { JobTypes } from '../../../models/job.model';
import Heading from '../../typography/Heading';
import { scrollAnimationVariants } from '../../utils/scrollAnimationVariants';
import Job from './Job';

interface JobPanelTypes {
	experiences: { items: [fields: { fields: JobTypes }] };
}

const JobsPanel = (props: JobPanelTypes) => {
	const experienceArray = props.experiences.items;

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
				{experienceArray.map((item, index: number) => {
					return <Job key={index} content={item.fields} />;
				})}
			</div>
		</motion.section>
	);
};

export default JobsPanel;
