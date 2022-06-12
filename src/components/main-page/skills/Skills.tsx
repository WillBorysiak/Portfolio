import React from 'react';

import ParallaxBackground from '../../parallax/ParallaxBackground';
import SectionTitle from '../../typography/SectionTitle';
import SkillsContainer from './SkillsContainer';

const Skills = () => {
	return (
		<>
			<ParallaxBackground />
			<section id="skills" className=" flex w-screen flex-col items-center justify-start pb-10 md:mt-0">
				<SectionTitle text="Skills/Experience" />
				<SkillsContainer />
			</section>
		</>
	);
};

export default Skills;

// bg-gradient-to-b from-lightBackground to-mobileLightTransition  dark:bg-gradient-to-b dark:from-darkBackground dark:to-mobileDarkTransition md:to-tabletLightTransition dark:md:to-desktopDarkTransition lg:to-desktopLightTransition xl:to-wideLightTransition
