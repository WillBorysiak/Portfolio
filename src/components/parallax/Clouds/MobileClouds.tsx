import React from 'react';

import Cloud from '../Cloud';

const MobileClouds = () => {
	return (
		<>
			<Cloud speed="animate-floatSM_Fast" size="10x" location="mt-0" />
			<Cloud speed="animate-floatSM_Slow_Reverse" size="7x" location="mt-60" />
			<Cloud speed="animate-floatSM_Med" size="5x" location="mt-96" />
			<Cloud speed="animate-floatSM_Fast_Reverse" size="6x" location="mt-[500px]" />
			<Cloud speed="animate-floatSM_Slow" size="6x" location="mt-[600px]" />
		</>
	);
};

export default MobileClouds;
