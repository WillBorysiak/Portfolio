import { SizeProp } from '@fortawesome/fontawesome-svg-core';
import { faStar } from '@fortawesome/pro-duotone-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
