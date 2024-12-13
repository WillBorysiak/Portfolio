import { faClouds, faPlaneProp } from "@fortawesome/pro-duotone-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { AnimatedObject } from "../../../interfaces/animated-object.interface";
import Cloud from "./Cloud";

const DesktopClouds = () => {
  const clouds: AnimatedObject[] = [
    {
      location: "mt-5",
      speed: "animate-[cloudLG_20s_linear_infinite]",
      size: "5x",
    },
    {
      location: "mt-60",
      speed: "animate-[cloudLGReverse_25s_linear_infinite]",
      size: "7x",
    },
    {
      location: "mt-96",
      speed: "animate-[cloudLGReverse_29s_linear_infinite]",
      size: "5x",
    },
    {
      location: "mt-[500px]",
      speed: "animate-[cloudLG_40s_linear_infinite]",
      size: "6x",
    },
    {
      location: "mt-[750px]",
      speed: "animate-[cloudLGReverse_30s_linear_infinite]",
      size: "6x",
    },
    {
      location: "mt-[900px]",
      speed: "animate-[cloudLG_37s_linear_infinite]",
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
        className="absolute left-2/3 top-40 z-0 text-light opacity-50 transition delay-200 duration-1000 ease-in-out dark:opacity-0"
      />
      <FontAwesomeIcon
        icon={faClouds}
        size="5x"
        className="absolute left-52 top-2/4 z-0 text-light opacity-50 transition delay-200 duration-1000 ease-in-out dark:opacity-0"
      />
    </>
  );
};

export default DesktopClouds;
