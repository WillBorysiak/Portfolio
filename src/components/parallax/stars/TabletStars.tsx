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
      speed: "animate-[star-tablet_10s_linear_infinite]",
      size: "1x",
    },
    {
      location: "mt-40",
      speed: "animate-[star-tablet-reverse_10s_linear_infinite]",
      size: "1x",
    },
    {
      location: "mt-60",
      speed: "animate-[star-tablet-reverse_12s_linear_infinite]",
      size: "1x",
    },
    {
      location: "mt-80",
      speed: "animate-[star-tablet_17s_linear_infinite]",
      size: "1x",
    },
    {
      location: "mt-[400px]",
      speed: "animate-[star-tablet_20s_linear_infinite]",
      size: "1x",
    },
    {
      location: "mt-[550px]",
      speed: "animate-[star-tablet-reverse_14s_linear_infinite]",
      size: "1x",
    },
    {
      location: "mt-[650px]",
      speed: "animate-[star-tablet-reverse_19s_linear_infinite]",
      size: "1x",
    },
    {
      location: "mt-[725px]",
      speed: "animate-[star-tablet_26s_linear_infinite]",
      size: "1x",
    },
    {
      location: "mt-[900px]",
      speed: "animate-[star-tablet_21s_linear_infinite]",
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
        className="text-light absolute z-0 mt-36 ml-[500px] opacity-20"
      />
      <FontAwesomeIcon
        icon={faPlanetMoon}
        size="6x"
        className="text-light absolute z-0 mt-[600px] ml-16 opacity-20"
      />
    </>
  );
};

export default TabletStars;
