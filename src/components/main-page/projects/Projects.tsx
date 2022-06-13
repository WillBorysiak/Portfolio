import React from 'react';
import ParallaxBackground from '../../parallax/ParallaxBackground';

import SectionTitle from '../../typography/SectionTitle';
import HandcraftedByBR from './HandcraftedByBR';
import WW2EuropeanMap from './WW2EuropeanMap';

const Projects = () => {
	return (
		<>
			<ParallaxBackground />
			<div id="projects" className="flex w-screen flex-col items-center">
				<SectionTitle text="Projects" />
				<HandcraftedByBR />
				<WW2EuropeanMap />
			</div>
		</>
	);
};

export default Projects;
