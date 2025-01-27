import { faCloud } from "@fortawesome/pro-duotone-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { AnimatedObject } from "../../../interfaces/animated-object.interface";

interface CloudProps {
  cloud: AnimatedObject;
}

const Cloud = (props: CloudProps) => {
  const { cloud } = props;

  const { location, speed, size } = cloud;

  return (
    <span>
      <FontAwesomeIcon
        icon={faCloud}
        className={`absolute ${location} text-light z-0 ${speed} `}
        size={size}
      />
    </span>
  );
};

export default Cloud;
