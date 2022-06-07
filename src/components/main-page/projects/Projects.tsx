import React from 'react';
import ParallaxBackground from '../../parallax/ParallaxBackground';

import SectionTitle from '../../typography/SectionTitle';

const Projects = () => {
	return (
		<>
			<ParallaxBackground />
			<div className="flex h-screen w-screen flex-col items-center justify-start ">
				<SectionTitle text="Projects" />
			</div>
		</>
	);
};

export default Projects;
