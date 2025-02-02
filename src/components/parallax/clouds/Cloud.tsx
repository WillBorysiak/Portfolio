import { faCloud } from "@fortawesome/pro-duotone-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { BackgroundObject } from "../../../interfaces/background-object.interface";
import { AnimationHelper } from "../../utils/animation-helper";

interface CloudProps {
  cloud: BackgroundObject;
}

const Cloud = (props: CloudProps) => {
  const { cloud } = props;

  const { type, device, location, speed, isReverse } = cloud;

  const animationType = AnimationHelper.getObjectKeyframe(
    type,
    device,
    isReverse,
  );

  return (
    <span>
      <FontAwesomeIcon
        icon={faCloud}
        className="text-light-theme absolute z-0"
        size="5x"
        style={{
          marginTop: `${location}px`,
          animation: `${animationType} ${speed}s linear infinite`,
        }}
      />
    </span>
  );
};

export default Cloud;
