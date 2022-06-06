import React from 'react';
import SectionTitle from '../../typography/SectionTitle';
import AboutContainer from './AboutContainer';

const About = () => {
	return (
		<div className="flex h-screen  w-screen flex-col items-center justify-start bg-sky-300 dark:bg-slate-700">
			<SectionTitle text="About Me" />
		</div>
	);
};

export default About;
