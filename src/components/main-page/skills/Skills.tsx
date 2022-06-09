import React from 'react';

import SectionTitle from '../../typography/SectionTitle';

const Skills = () => {
	return (
		<>
			<section className="flex h-screen w-screen flex-col items-center justify-start bg-gradient-to-b from-lightBackground to-lightTransition dark:bg-gradient-to-b dark:from-darkBackground dark:to-darkTransition">
				<SectionTitle text="Skills" />
			</section>
		</>
	);
};

export default Skills;
