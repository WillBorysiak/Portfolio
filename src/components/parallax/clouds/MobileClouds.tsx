import { faClouds, faPlaneProp } from "@fortawesome/pro-duotone-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Cloud from "./Cloud";
import { AnimatedObject } from "../../../interfaces/animated-object.interface";

const MobileClouds = () => {
  const clouds: AnimatedObject[] = [
    {
      location: "mt-5",
      speed: "animate-[cloud-mobile_8s_linear_infinite]",
      size: "5x",
    },
    {
      location: "mt-60",
      speed: "animate-[cloud-mobile-reverse_10s_linear_infinite]",
      size: "7x",
    },
    {
      location: "mt-96",
      speed: "animate-[cloud-mobile-reverse_15s_linear_infinite]",
      size: "5x",
    },
    {
      location: "mt-[500px]",
      speed: "animate-[cloud-mobile_20s_linear_infinite]",
      size: "6x",
    },
    {
      location: "mt-[600px]",
      speed: "animate-[cloud-mobile-reverse_14s_linear_infinite]",
      size: "6x",
    },
  ];

  return (
    <>
      {clouds.map((cloud, index) => (
        <Cloud key={index} cloud={cloud} />
      ))}

      <FontAwesomeIcon
        icon={faPlaneProp}
        size="6x"
        className="text-light absolute z-0 mt-32 ml-56 opacity-50"
      />
      <FontAwesomeIcon
        icon={faClouds}
        size="5x"
        className="text-light absolute z-0 mt-[450px] ml-16 opacity-50"
      />
    </>
  );
};

export default MobileClouds;
