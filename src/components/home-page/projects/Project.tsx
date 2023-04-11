import { motion } from 'framer-motion';
import Image from 'next/image';

import { Project as ProjectModel } from '../../../models/project.model';
import { scrollAnimationVariants } from '../../utils/scrollAnimationVariants';
import ProjectLinks from './ProjectLinks';
import CalorieTechStack from './tech-stacks/CalorieTechStack';
import HandcraftedTechStack from './tech-stacks/HandcraftedTechStack';
import StravaTechStack from './tech-stacks/StravaTechStack';
import WW2TechStack from './tech-stacks/WW2TechStack';

const Project = (props: { content: ProjectModel }) => {
	const content = props.content.fields;
	const { title, description, website, github, techStack, screenshot } = content;

	return (
		<motion.article
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true }}
			variants={scrollAnimationVariants}
			className="relative overflow-hidden font-kalam"
		>
			<div className="mb-5 mt-5 max-w-xl rounded-sm bg-transparentBg lg:mx-auto lg:grid lg:h-[550px] lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:pl-8">
				<div className="mx-auto max-w-xl px-4 sm:px-6 lg:mx-0 lg:px-0 lg:py-16">
					<div className="mt-5">
						<h2 className="pt-5 text-3xl font-extrabold tracking-tight text-dark dark:text-light md:pt-5 md:text-4xl">
							{title}
						</h2>
						<p className="mt-4 text-lg font-bold text-dark dark:text-light md:text-xl">{description}</p>
						<ProjectLinks website={website} github={github} />
					</div>

					<div className="mt-5 border-t border-gray-200">
						{techStack === 'stravaDashboard' && <StravaTechStack />}
						{techStack === 'handcraftedByBarbaraRuth' && <HandcraftedTechStack />}
						{techStack === 'canICalorie' && <CalorieTechStack />}
						{techStack === 'ww2EuropeanMap' && <WW2TechStack />}
					</div>
				</div>

				<div className="flex justify-center pt-5 lg:relative lg:m-0 lg:h-full lg:items-center lg:justify-end lg:pt-0">
					<Image
						src={'https:' + screenshot.fields.file.url}
						alt={title}
						height={550}
						width={550}
						quality={100}
						priority={true}
					/>
				</div>
			</div>
		</motion.article>
	);
};

export default Project;
