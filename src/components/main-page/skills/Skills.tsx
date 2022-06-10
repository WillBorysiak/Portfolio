import React from 'react';

import SectionTitle from '../../typography/SectionTitle';
import SkillContainer from './SkillContainer';

const Skills = () => {
	return (
		<>
			<section
				id="skills"
				className="flex h-screen w-screen flex-col items-center justify-start bg-gradient-to-b from-lightBackground to-mobileLightTransition dark:bg-gradient-to-b dark:from-darkBackground dark:to-darkTransition md:to-tabletLightTransition lg:to-desktopLightTransition xl:to-wideLightTransition"
			>
				<SectionTitle text="Skills/Experience" />
				<SkillContainer />
			</section>
		</>
	);
};

export default Skills;
