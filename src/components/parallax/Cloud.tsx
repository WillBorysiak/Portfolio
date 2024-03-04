import { faCloud } from "@fortawesome/pro-duotone-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { AnimatedObjectProps } from "../../models/moving-object.model";

const Cloud = (props: AnimatedObjectProps) => {
  return (
    <span>
      <FontAwesomeIcon
        icon={faCloud}
        className={`absolute ${props.location} z-0 text-white ${props.speed} `}
        size={props.size}
      />
    </span>
  );
};

export default Cloud;
