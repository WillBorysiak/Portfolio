import {
  faPlanetMoon,
  faPlanetRinged,
} from "@fortawesome/pro-duotone-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { AnimatedObject } from "../../../interfaces/animated-object.interface";
import Star from "./Star";

const MobileStars = () => {
  const stars: AnimatedObject[] = [
    {
      location: "mt-5",
      speed: "animate-[starSM_10s_linear_infinite]",
      size: "1x",
    },
    {
      location: "mt-40",
      speed: "animate-[starSMReverse_10s_linear_infinite]",
      size: "1x",
    },
    {
      location: "mt-60",
      speed: "animate-[starSMReverse_12s_linear_infinite]",
      size: "1x",
    },
    {
      location: "mt-80",
      speed: "animate-[starSM_17s_linear_infinite]",
      size: "1x",
    },
    {
      location: "mt-[400px]",
      speed: "animate-[starSM_20s_linear_infinite]",
      size: "1x",
    },
    {
      location: "mt-[475px]",
      speed: "animate-[starSM_26s_linear_infinite]",
      size: "1x",
    },
    {
      location: "mt-[550px]",
      speed: "animate-[starSMReverse_14s_linear_infinite]",
      size: "1x",
    },
    {
      location: "mt-[600px]",
      speed: "animate-[starSM_9s_linear_infinite]",
      size: "1x",
    },
  ];

  return (
    <>
      {stars.map((star, index) => (
        <Star key={index} star={star} />
      ))}

      <FontAwesomeIcon
        icon={faPlanetRinged}
        size="6x"
        className="text-lightT absolute z-0 ml-56 mt-32 opacity-20"
      />
      <FontAwesomeIcon
        icon={faPlanetMoon}
        size="6x"
        className="absolute z-0 ml-16 mt-96 text-light opacity-20"
      />
    </>
  );
};

export default MobileStars;
