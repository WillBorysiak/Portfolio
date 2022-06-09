import React from 'react';

import Star from '../Star';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlanetRinged } from '@fortawesome/pro-duotone-svg-icons';
import { faPlanetMoon } from '@fortawesome/pro-duotone-svg-icons';

const TabletStars = () => {
	return (
		<>
			<Star speed="animate-[starMD_10s_linear_infinite]" size="1x" location="mt-5" />
			<Star speed="animate-[starMDReverse_10s_linear_infinite]" size="1x" location="mt-40" />
			<Star speed="animate-[starMDReverse_12s_linear_infinite]" size="1x" location="mt-60" />
			<Star speed="animate-[starMD_17s_linear_infinite]" size="1x" location="mt-80" />
			<Star speed="animate-[starMD_20s_linear_infinite]" size="1x" location="mt-[400px]" />
			<Star speed="animate-[starMDReverse_14s_linear_infinite]" size="1x" location="mt-[550px]" />
			<Star speed="animate-[starMDReverse_19s_linear_infinite]" size="1x" location="mt-[650px]" />
			<Star speed="animate-[starMD_26s_linear_infinite]" size="1x" location="mt-[725px]" />
			<Star speed="animate-[starMD_21s_linear_infinite]" size="1x" location="mt-[900px]" />
			<FontAwesomeIcon
				icon={faPlanetRinged}
				size="6x"
				className="absolute z-0 ml-[500px] mt-24 text-lightText opacity-20"
			/>
			<FontAwesomeIcon
				icon={faPlanetMoon}
				size="6x"
				className="absolute z-0 ml-16 mt-[600px] text-lightText opacity-20"
			/>
		</>
	);
};

export default TabletStars;
