import React from 'react';
import TechList from './TechList';

const SkillContainer = () => {
	return (
		<div className="mx-auto max-w-7xl py-12 px-4 backdrop-brightness-[0.8] sm:px-6 lg:px-8">
			<h2 className="text-center font-kalam text-3xl font-extrabold text-dark dark:text-light sm:text-4xl">
				Technologies I Use
			</h2>
			<TechList />
		</div>
	);
};

export default SkillContainer;
