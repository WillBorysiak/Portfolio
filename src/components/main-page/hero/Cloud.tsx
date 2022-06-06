import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloud } from '@fortawesome/pro-duotone-svg-icons';
import { SizeProp } from '@fortawesome/fontawesome-svg-core';

interface CloudPropTypes {
	location: string;
	speed: string;
	size: SizeProp;
}

const Cloud = (props: CloudPropTypes) => {
	return (
		<div>
			<FontAwesomeIcon
				icon={faCloud}
				className={`absolute top-${props.location} z-0 ${props.speed} text-white md:${props.speed}`}
				size={props.size}
			/>
		</div>
	);
};

export default Cloud;
