import React from 'react';

import Cloud from '../Cloud';

const TabletClouds = () => {
	return (
		<>
			<Cloud speed="animate-cloud_M_Fast" size="10x" location="mt-0" />
			<Cloud speed="animate-cloud_M_Slow_Reverse" size="7x" location="mt-60" />
			<Cloud speed="animate-cloud_M_Med" size="7x" location="mt-96" />
			<Cloud speed="animate-cloud_M_Fast_Reverse" size="6x" location="mt-[500px]" />
			<Cloud speed="animate-cloud_M_Med_Reverse" size="6x" location="mt-[750px]" />
		</>
	);
};

export default TabletClouds;
