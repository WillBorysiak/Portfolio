import React from 'react';

import SectionTitle from '../../typography/SectionTitle';
import CloudBackground from '../../parallax/ParallaxBackground';

const Skills = () => {
	return (
		<>
			<div className="flex h-screen w-screen flex-col items-center justify-start bg-gradient-to-b from-sky-300 to-lightTransition dark:bg-slate-700 dark:bg-gradient-to-b dark:from-slate-700 dark:to-darkTransition">
				<SectionTitle text="Skills" />
			</div>
		</>
	);
};

export default Skills;
