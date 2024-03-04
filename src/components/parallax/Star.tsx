import { faStar } from "@fortawesome/pro-duotone-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { AnimatedObjectProps } from "../../models/moving-object.model";

const Star = (props: AnimatedObjectProps) => {
  return (
    <span>
      <FontAwesomeIcon
        icon={faStar}
        className={`absolute ${props.location} z-0 text-white ${props.speed}`}
        size={props.size}
      />
    </span>
  );
};

export default Star;
