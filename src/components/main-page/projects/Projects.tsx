import React from 'react';
import ParallaxBackground from '../../parallax/ParallaxBackground';

import SectionTitle from '../../typography/SectionTitle';
import ProjectContainer from './ProjectContainer';

const Projects = () => {
	return (
		<>
			<ParallaxBackground />
			<div id="projects" className="flex w-screen flex-col items-center justify-start ">
				<SectionTitle text="Projects" />
				<ProjectContainer />
			</div>
		</>
	);
};

export default Projects;
