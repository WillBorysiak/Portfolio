import React from 'react';

import Star from '../Star';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlanetRinged } from '@fortawesome/pro-duotone-svg-icons';
import { faPlanetMoon } from '@fortawesome/pro-duotone-svg-icons';

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
			<FontAwesomeIcon
				icon={faPlanetRinged}
				size="6x"
				className="absolute left-2/3 top-24 z-0 text-lightText opacity-20"
			/>
			<FontAwesomeIcon
				icon={faPlanetMoon}
				size="6x"
				className="absolute left-52 top-2/4 z-0 text-lightText opacity-20"
			/>
		</>
	);
};

export default DesktopStars;
