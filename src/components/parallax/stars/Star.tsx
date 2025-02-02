import { faStar } from "@fortawesome/pro-duotone-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { BackgroundObject } from "../../../interfaces/background-object.interface";
import { AnimationHelper } from "../../utils/animation-helper";

interface StarProps {
  star: BackgroundObject;
}

const Star = (props: StarProps) => {
  const { star } = props;

  const { type, device, location, speed, isReverse } = star;

  const animationType = AnimationHelper.getObjectKeyframe(
    type,
    device,
    isReverse,
  );

  return (
    <FontAwesomeIcon
      icon={faStar}
      className="text-light-theme absolute z-0"
      size="1x"
      style={{
        marginTop: `${location}px`,
        animation: `${animationType} ${speed}s linear infinite`,
      }}
    />
  );
};

export default Star;
