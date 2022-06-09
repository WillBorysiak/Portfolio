import React from 'react';

import Star from '../Star';

const DesktopStars = () => {
	return (
		<>
			<Star speed="animate-[starLG_20s_linear_infinite]" size="1x" location="mt-5" />
			<Star speed="animate-[starLGReverse_15s_linear_infinite]" size="1x" location="mt-40" />
			<Star speed="animate-[starLGReverse_19s_linear_infinite]" size="1x" location="mt-60" />
			<Star speed="animate-[starLG_21s_linear_infinite]" size="1x" location="mt-80" />
			<Star speed="animate-[starLG_25s_linear_infinite]" size="1x" location="mt-[400px]" />
			<Star speed="animate-[starLGReverse_14s_linear_infinite]" size="1x" location="mt-[550px]" />
			<Star speed="animate-[starLGReverse_19s_linear_infinite]" size="1x" location="mt-[650px]" />
			<Star speed="animate-[starLG_26s_linear_infinite]" size="1x" location="mt-[725px]" />
			<Star speed="animate-[starLG_30s_linear_infinite]" size="1x" location="mt-[900px]" />
		</>
	);
};

export default DesktopStars;
