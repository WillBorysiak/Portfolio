import { faCloud } from '@fortawesome/pro-duotone-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
				className={`absolute ${props.location} z-0 text-white ${props.speed} `}
				size={props.size}
			/>
		</div>
	);
};

export default Cloud;
