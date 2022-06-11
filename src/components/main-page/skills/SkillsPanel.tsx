import React from 'react';
import Heading from '../../typography/Heading';

import TechList from './TechList';

const SkillsPanel = () => {
	return (
		<div className="mx-auto mt-5 max-w-7xl py-12 px-4 backdrop-brightness-[0.8] sm:px-6 lg:px-8">
			<Heading content="Technologies I Use" />
			<TechList />
		</div>
	);
};

export default SkillsPanel;
