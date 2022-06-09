import React from 'react';

import Cloud from '../Cloud';

const DesktopClouds = () => {
	return (
		<>
			<Cloud speed="animate-[cloudLG_20s_linear_infinite]" size="7x" location="mt-5" />
			<Cloud speed="animate-[cloudLGReverse_25s_linear_infinite]" size="7x" location="mt-60" />
			<Cloud speed="animate-[cloudLGReverse_29s_linear_infinite]" size="5x" location="mt-96" />
			<Cloud speed="animate-[cloudLG_40s_linear_infinite]" size="6x" location="mt-[500px]" />
			<Cloud speed="animate-[cloudLGReverse_30s_linear_infinite]" size="6x" location="mt-[750px]" />
			<Cloud speed="animate-[cloudLG_37s_linear_infinite]" size="6x" location="mt-[900px]" />
		</>
	);
};

export default DesktopClouds;
