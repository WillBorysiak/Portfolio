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
      speed: "animate-[star-desktop-reverse_10s_linear_infinite]",
      size: "1x",
    },
    {
      location: "mt-40",
      speed: "animate-[star-desktop-reverse_15s_linear_infinite]",
      size: "1x",
    },
    {
      location: "mt-60",
      speed: "animate-[star-desktop-reverse_19s_linear_infinite]",
      size: "1x",
    },
    {
      location: "mt-80",
      speed: "animate-[star-desktop_21s_linear_infinite]",
      size: "1x",
    },
    {
      location: "mt-[400px]",
      speed: "animate-[star-desktop_25s_linear_infinite]",
      size: "1x",
    },
    {
      location: "mt-[550px]",
      speed: "animate-[star-desktop-reverse_14s_linear_infinite]",
      size: "1x",
    },
    {
      location: "mt-[650px]",
      speed: "animate-[star-desktop-reverse_19s_linear_infinite]",
      size: "1x",
    },
    {
      location: "mt-[725px]",
      speed: "animate-[star-desktop_26s_linear_infinite]",
      size: "1x",
    },
    {
      location: "mt-[900px]",
      speed: "animate-[star-desktop_30s_linear_infinite]",
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
        className="text-light absolute top-40 left-2/3 z-0 opacity-20"
      />
      <FontAwesomeIcon
        icon={faPlanetMoon}
        size="6x"
        className="text-light absolute top-2/4 left-52 z-0 opacity-20"
      />
    </>
  );
};

export default DesktopStars;
