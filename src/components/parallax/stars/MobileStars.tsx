import React from 'react';

import Star from '../Star';

const MobileStars = () => {
	return (
		<>
			<Star speed="animate-[starSM_10s_linear_infinite]" size="1x" location="mt-5" />
			<Star speed="animate-[starSMReverse_10s_linear_infinite]" size="1x" location="mt-40" />
			<Star speed="animate-[starSMReverse_12s_linear_infinite]" size="1x" location="mt-60" />
			<Star speed="animate-[starSM_17s_linear_infinite]" size="1x" location="mt-80" />
			<Star speed="animate-[starSM_20s_linear_infinite]" size="1x" location="mt-[400px]" />
			<Star speed="animate-[starSM_26s_linear_infinite]" size="1x" location="mt-[475px]" />
			<Star speed="animate-[starSMReverse_14s_linear_infinite]" size="1x" location="mt-[550px]" />
			<Star speed="animate-[starSM_9s_linear_infinite]" size="1x" location="mt-[600px]" />
		</>
	);
};

export default MobileStars;
