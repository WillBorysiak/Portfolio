import React from 'react';

import Cloud from '../Cloud';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlaneProp } from '@fortawesome/pro-duotone-svg-icons';
import { faClouds } from '@fortawesome/pro-duotone-svg-icons';

const DesktopClouds = () => {
	return (
		<>
			<Cloud speed="animate-[cloudLG_20s_linear_infinite]" size="5x" location="mt-5" />
			<Cloud speed="animate-[cloudLGReverse_25s_linear_infinite]" size="7x" location="mt-60" />
			<Cloud speed="animate-[cloudLGReverse_29s_linear_infinite]" size="5x" location="mt-96" />
			<Cloud speed="animate-[cloudLG_40s_linear_infinite]" size="6x" location="mt-[500px]" />
			<Cloud speed="animate-[cloudLGReverse_30s_linear_infinite]" size="6x" location="mt-[750px]" />
			<Cloud speed="animate-[cloudLG_37s_linear_infinite]" size="6x" location="mt-[900px]" />
			<FontAwesomeIcon
				icon={faPlaneProp}
				size="6x"
				className="absolute left-2/3 top-40 z-0 text-light opacity-50 transition delay-200 duration-1000 ease-in-out dark:opacity-0"
			/>
			<FontAwesomeIcon
				icon={faClouds}
				size="5x"
				className="absolute top-2/4 left-52 z-0 text-light opacity-50 transition delay-200 duration-1000 ease-in-out dark:opacity-0"
			/>
		</>
	);
};

export default DesktopClouds;
