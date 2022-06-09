import React from 'react';

import Cloud from '../Cloud';

const TabletClouds = () => {
	return (
		<>
			<Cloud speed="animate-[cloudMD_14s_linear_infinite]" size="7x" location="mt-5" />
			<Cloud speed="animate-[cloudMDReverse_20s_linear_infinite]" size="7x" location="mt-60" />
			<Cloud speed="animate-[cloudMDReverse_23s_linear_infinite]" size="5x" location="mt-96" />
			<Cloud speed="animate-[cloudMD_30s_linear_infinite]" size="6x" location="mt-[500px]" />
			<Cloud speed="animate-[cloudMDReverse_19s_linear_infinite]" size="6x" location="mt-[750px]" />
			<Cloud speed="animate-[cloudMDReverse_25s_linear_infinite]" size="6x" location="mt-[900px]" />
		</>
	);
};

export default TabletClouds;
