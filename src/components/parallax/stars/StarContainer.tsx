import {
  faPlanetMoon,
  faPlanetRinged,
} from "@fortawesome/pro-duotone-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { BackgroundObject } from "../../../interfaces/background-object.interface";
import Star from "./Star";

interface StarContainerProps {
  stars: BackgroundObject[];
}

const StarContainer = (props: StarContainerProps) => {
  const { stars } = props;

  return (
    <>
      {stars.map((star, index) => (
        <Star key={index} star={star} />
      ))}

      <FontAwesomeIcon
        icon={faPlanetRinged}
        size="6x"
        className="text-light-theme absolute z-0 mt-[20vh] ml-[60vw] opacity-20"
      />
      <FontAwesomeIcon
        icon={faPlanetMoon}
        size="6x"
        className="text-light-theme absolute z-0 mt-[60vh] ml-[20vw] opacity-20"
      />
    </>
  );
};

export default StarContainer;
