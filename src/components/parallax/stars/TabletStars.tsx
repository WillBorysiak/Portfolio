import {
  faPlanetMoon,
  faPlanetRinged,
} from "@fortawesome/pro-duotone-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { AnimatedObject } from "../../../interfaces/animated-object.interface";
import Star from "./Star";

const TabletStars = () => {
  const stars: AnimatedObject[] = [
    {
      location: "mt-5",
      speed: "animate-[starMD_10s_linear_infinite]",
      size: "1x",
    },
    {
      location: "mt-40",
      speed: "animate-[starMDReverse_10s_linear_infinite]",
      size: "1x",
    },
    {
      location: "mt-60",
      speed: "animate-[starMDReverse_12s_linear_infinite]",
      size: "1x",
    },
    {
      location: "mt-80",
      speed: "animate-[starMD_17s_linear_infinite]",
      size: "1x",
    },
    {
      location: "mt-[400px]",
      speed: "animate-[starMD_20s_linear_infinite]",
      size: "1x",
    },
    {
      location: "mt-[550px]",
      speed: "animate-[starMDReverse_14s_linear_infinite]",
      size: "1x",
    },
    {
      location: "mt-[650px]",
      speed: "animate-[starMDReverse_19s_linear_infinite]",
      size: "1x",
    },
    {
      location: "mt-[725px]",
      speed: "animate-[starMD_26s_linear_infinite]",
      size: "1x",
    },
    {
      location: "mt-[900px]",
      speed: "animate-[starMD_21s_linear_infinite]",
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
        className="absolute z-0 ml-[500px] mt-36 text-light opacity-20"
      />
      <FontAwesomeIcon
        icon={faPlanetMoon}
        size="6x"
        className="absolute z-0 ml-16 mt-[600px] text-light opacity-20"
      />
    </>
  );
};

export default TabletStars;
