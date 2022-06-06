import React from 'react';

import SectionTitle from '../../typography/SectionTitle';
import CloudBackground from '../../parallax/ParallaxBackground';

const Skills = () => {
	return (
		<>
			<CloudBackground />
			<div className="flex h-screen w-screen flex-col items-center justify-start ">
				<SectionTitle text="Skills" />
			</div>
		</>
	);
};

export default Skills;
