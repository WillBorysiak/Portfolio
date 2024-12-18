import {
  faPlanetMoon,
  faPlanetRinged,
} from "@fortawesome/pro-duotone-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { AnimatedObject } from "../../../interfaces/animated-object.interface";
import Star from "./Star";

const DesktopStars = () => {
  const stars: AnimatedObject[] = [
    {
      location: "mt-5",
      speed: "animate-[starLG_20s_linear_infinite]",
      size: "1x",
    },
    {
      location: "mt-40",
      speed: "animate-[starLGReverse_15s_linear_infinite]",
      size: "1x",
    },
    {
      location: "mt-60",
      speed: "animate-[starLGReverse_19s_linear_infinite]",
      size: "1x",
    },
    {
      location: "mt-80",
      speed: "animate-[starLG_21s_linear_infinite]",
      size: "1x",
    },
    {
      location: "mt-[400px]",
      speed: "animate-[starLG_25s_linear_infinite]",
      size: "1x",
    },
    {
      location: "mt-[550px]",
      speed: "animate-[starLGReverse_14s_linear_infinite]",
      size: "1x",
    },
    {
      location: "mt-[650px]",
      speed: "animate-[starLGReverse_19s_linear_infinite]",
      size: "1x",
    },
    {
      location: "mt-[725px]",
      speed: "animate-[starLG_26s_linear_infinite]",
      size: "1x",
    },
    {
      location: "mt-[900px]",
      speed: "animate-[starLG_30s_linear_infinite]",
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
        className="absolute left-2/3 top-40 z-0 text-light opacity-20"
      />
      <FontAwesomeIcon
        icon={faPlanetMoon}
        size="6x"
        className="absolute left-52 top-2/4 z-0 text-light opacity-20"
      />
    </>
  );
};

export default DesktopStars;
