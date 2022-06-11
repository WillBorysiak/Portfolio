import React from 'react';

import SectionTitle from '../../typography/SectionTitle';
import SkillsContainer from './SkillsContainer';

const Skills = () => {
	return (
		<>
			<section
				id="skills"
				className="flex w-screen flex-col items-center justify-start bg-gradient-to-b from-lightBackground to-mobileLightTransition pb-10 dark:bg-gradient-to-b dark:from-darkBackground dark:to-darkTransition md:to-tabletLightTransition lg:to-desktopLightTransition xl:to-wideLightTransition"
			>
				<SectionTitle text="Skills/Experience" />
				<SkillsContainer />
			</section>
		</>
	);
};

export default Skills;
