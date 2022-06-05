import React from 'react';

interface SectionTitlePropTypes {
	text: string;
}

const SectionTitle = (props: SectionTitlePropTypes) => {
	return (
		<h1 className="pb-3 font-amatic text-8xl font-extrabold text-gray-800 dark:text-gray-100 sm:text-9xl">
			{props.text}
		</h1>
	);
};

export default SectionTitle;
