import React from 'react';

import Cloud from '../Cloud';

const DesktopClouds = () => {
	return (
		<>
			<Cloud speed="animate-floatLG_Fast" size="10x" location="mt-0" />
			<Cloud speed="animate-floatLG_Slow_Reverse" size="7x" location="mt-60" />
			<Cloud speed="animate-floatLG_Med" size="5x" location="mt-96" />
			<Cloud speed="animate-floatLG_Fast_Reverse" size="6x" location="mt-[500px]" />
			<Cloud speed="animate-floatLG_Med_Reverse" size="6x" location="mt-[600px]" />
			<Cloud speed="animate-floatLG_Slow" size="6x" location="mt-[750px]" />
		</>
	);
};

export default DesktopClouds;
