import { faClouds, faPlaneProp } from "@fortawesome/pro-duotone-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Cloud from "./Cloud";
import { AnimatedObject } from "../../../interfaces/animated-object.interface";

const MobileClouds = () => {
  const clouds: AnimatedObject[] = [
    {
      location: "mt-5",
      speed: "animate-[cloudSM_8s_linear_infinite]",
      size: "5x",
    },
    {
      location: "mt-60",
      speed: "animate-[cloudSMReverse_10s_linear_infinite]",
      size: "7x",
    },
    {
      location: "mt-96",
      speed: "animate-[cloudSMReverse_15s_linear_infinite]",
      size: "5x",
    },
    {
      location: "mt-[500px]",
      speed: "animate-[cloudSM_20s_linear_infinite]",
      size: "6x",
    },
    {
      location: "mt-[600px]",
      speed: "animate-[cloudSMReverse_14s_linear_infinite]",
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
        className="absolute z-0 ml-56 mt-32 text-light opacity-50"
      />
      <FontAwesomeIcon
        icon={faClouds}
        size="5x"
        className="absolute z-0 ml-16 mt-[450px] text-light opacity-50"
      />
    </>
  );
};

export default MobileClouds;
