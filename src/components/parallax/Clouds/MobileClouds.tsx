import React from 'react';

import Cloud from '../Cloud';

const MobileClouds = () => {
	return (
		<>
			<Cloud speed="animate-[cloudSM_8s_linear_infinite]" size="7x" location="mt-5" />
			<Cloud speed="animate-[cloudSMReverse_10s_linear_infinite]" size="7x" location="mt-60" />
			<Cloud speed="animate-[cloudSMReverse_15s_linear_infinite]" size="5x" location="mt-96" />
			<Cloud speed="animate-[cloudSM_20s_linear_infinite]" size="6x" location="mt-[500px]" />
			<Cloud speed="animate-[cloudSMReverse_14s_linear_infinite]" size="6x" location="mt-[600px]" />
		</>
	);
};

export default MobileClouds;
