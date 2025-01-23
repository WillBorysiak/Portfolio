import { faClouds, faPlaneProp } from "@fortawesome/pro-duotone-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { AnimatedObject } from "../../../interfaces/animated-object.interface";
import Cloud from "./Cloud";

const DesktopClouds = () => {
  const clouds: AnimatedObject[] = [
    {
      location: "mt-5",
      speed: "animate-[cloud-desktop_20s_linear_infinite]",
      size: "5x",
    },
    {
      location: "mt-60",
      speed: "animate-[cloud-desktop-reverse_25s_linear_infinite]",
      size: "7x",
    },
    {
      location: "mt-96",
      speed: "animate-[cloud-desktop-reverse_29s_linear_infinite]",
      size: "5x",
    },
    {
      location: "mt-[500px]",
      speed: "animate-[cloud-desktop_40s_linear_infinite]",
      size: "6x",
    },
    {
      location: "mt-[750px]",
      speed: "animate-[cloud-desktop-reverse_30s_linear_infinite]",
      size: "6x",
    },
    {
      location: "mt-[900px]",
      speed: "animate-[cloud-desktop_37s_linear_infinite]",
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
        className="text-light absolute top-40 left-2/3 z-0 opacity-50 transition delay-200 duration-1000 ease-in-out dark:opacity-0"
      />
      <FontAwesomeIcon
        icon={faClouds}
        size="5x"
        className="text-light absolute top-2/4 left-52 z-0 opacity-50 transition delay-200 duration-1000 ease-in-out dark:opacity-0"
      />
    </>
  );
};

export default DesktopClouds;
