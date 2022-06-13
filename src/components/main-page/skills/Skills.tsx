import React from 'react';

import ParallaxBackground from '../../parallax/ParallaxBackground';
import SectionTitle from '../../typography/SectionTitle';

import SkillsPanel from './SkillsPanel';
import ExperiencePanel from './ExperiencePanel';

const Skills = () => {
	return (
		<>
			<ParallaxBackground />
			<section id="skills" className=" flex w-screen flex-col items-center justify-start pb-10 md:mt-0">
				<SectionTitle text="Skills/Experience" />
				<SkillsPanel />
				<ExperiencePanel />
			</section>
		</>
	);
};

export default Skills;
