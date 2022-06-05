import React from 'react';
import SectionTitle from '../../typography/SectionTitle';
import AboutContainer from './AboutContainer';

const About = () => {
	return (
		<div className="flex  w-screen flex-col items-center justify-start bg-sky-300 dark:bg-slate-700">
			<SectionTitle text="About Me" />
			<AboutContainer reverse={false} />
			<AboutContainer reverse={true} />
			<AboutContainer reverse={false} />
		</div>
	);
};

export default About;
