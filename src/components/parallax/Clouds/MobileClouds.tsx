import React from 'react';

import Cloud from '../Cloud';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlaneProp } from '@fortawesome/pro-duotone-svg-icons';
import { faClouds } from '@fortawesome/pro-duotone-svg-icons';

const MobileClouds = () => {
	return (
		<>
			<Cloud speed="animate-[cloudSM_8s_linear_infinite]" size="5x" location="mt-5" />
			<Cloud speed="animate-[cloudSMReverse_10s_linear_infinite]" size="7x" location="mt-60" />
			<Cloud speed="animate-[cloudSMReverse_15s_linear_infinite]" size="5x" location="mt-96" />
			<Cloud speed="animate-[cloudSM_20s_linear_infinite]" size="6x" location="mt-[500px]" />
			<Cloud speed="animate-[cloudSMReverse_14s_linear_infinite]" size="6x" location="mt-[600px]" />
			<FontAwesomeIcon icon={faPlaneProp} size="6x" className="absolute z-0 ml-56 mt-32 text-light opacity-50" />
			<FontAwesomeIcon icon={faClouds} size="5x" className="absolute z-0 ml-16 mt-[450px] text-light opacity-50" />
		</>
	);
};

export default MobileClouds;
