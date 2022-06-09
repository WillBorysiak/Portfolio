import React from 'react';

interface SectionTitlePropTypes {
	text: string;
}

const SectionTitle = (props: SectionTitlePropTypes) => {
	return (
		<h1 className="mt-5 mb-5 font-amatic text-7xl font-extrabold text-gray-800 dark:text-gray-100 sm:text-8xl">
			{props.text}
		</h1>
	);
};

export default SectionTitle;
