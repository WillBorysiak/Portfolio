import { faStar } from "@fortawesome/pro-duotone-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { AnimatedObject } from "../../../interfaces/animated-object.interface";

interface StarProps {
  star: AnimatedObject;
}

const Star = (props: StarProps) => {
  const { star } = props;

  const { location, speed, size } = star;

  return (
    <span>
      <FontAwesomeIcon
        icon={faStar}
        className={`absolute ${location} z-0 text-white ${speed}`}
        size={size}
      />
    </span>
  );
};

export default Star;
