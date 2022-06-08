import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/pro-duotone-svg-icons';
import { SizeProp } from '@fortawesome/fontawesome-svg-core';

interface CloudPropTypes {
	location: string;
	speed: string;
	size: SizeProp;
}

const Star = (props: CloudPropTypes) => {
	return (
		<div>
			<FontAwesomeIcon
				icon={faStar}
				className={`absolute ${props.location} z-0 text-white ${props.speed}`}
				size={props.size}
			/>
		</div>
	);
};

export default Star;
