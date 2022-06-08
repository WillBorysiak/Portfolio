import React from 'react';

import Cloud from '../Cloud';

const DesktopClouds = () => {
	return (
		<>
			<Cloud speed="animate-cloud_L_Fast" size="10x" location="mt-0" />
			<Cloud speed="animate-cloud_L_Slow_Reverse" size="7x" location="mt-60" />
			<Cloud speed="animate-cloud_L_Med" size="5x" location="mt-96" />
			<Cloud speed="animate-cloud_L_Fast_Reverse" size="6x" location="mt-[500px]" />
			<Cloud speed="animate-cloud_L_Med_Reverse" size="6x" location="mt-[600px]" />
			<Cloud speed="animate-cloud_L_Slow" size="6x" location="mt-[750px]" />
		</>
	);
};

export default DesktopClouds;
