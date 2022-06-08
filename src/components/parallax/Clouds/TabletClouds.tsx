import React from 'react';

import Cloud from '../Cloud';

const TabletClouds = () => {
	return (
		<>
			<Cloud speed="animate-floatMD_Fast" size="10x" location="mt-0" />
			<Cloud speed="animate-floatMD_Slow_Reverse" size="7x" location="mt-60" />
			<Cloud speed="animate-floatMD_Med" size="7x" location="mt-96" />
			<Cloud speed="animate-floatMD_Fast_Reverse" size="6x" location="mt-[500px]" />
			<Cloud speed="animate-floatMD_Med_Reverse" size="6x" location="mt-[750px]" />
		</>
	);
};

export default TabletClouds;
