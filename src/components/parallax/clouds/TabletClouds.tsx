import { faClouds, faPlaneProp } from "@fortawesome/pro-duotone-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Cloud from "../Cloud";

const TabletClouds = () => {
  return (
    <>
      <Cloud
        speed="animate-[cloudMD_14s_linear_infinite]"
        size="5x"
        location="mt-5"
      />
      <Cloud
        speed="animate-[cloudMDReverse_20s_linear_infinite]"
        size="7x"
        location="mt-60"
      />
      <Cloud
        speed="animate-[cloudMDReverse_23s_linear_infinite]"
        size="5x"
        location="mt-96"
      />
      <Cloud
        speed="animate-[cloudMD_30s_linear_infinite]"
        size="6x"
        location="mt-[500px]"
      />
      <Cloud
        speed="animate-[cloudMDReverse_19s_linear_infinite]"
        size="6x"
        location="mt-[750px]"
      />
      <Cloud
        speed="animate-[cloudMDReverse_25s_linear_infinite]"
        size="6x"
        location="mt-[900px]"
      />
      <FontAwesomeIcon
        icon={faPlaneProp}
        size="6x"
        className="absolute z-0 ml-[500px] mt-36 text-light opacity-50"
      />
      <FontAwesomeIcon
        icon={faClouds}
        size="5x"
        className="absolute z-0 ml-16 mt-[600px] text-light opacity-50"
      />
    </>
  );
};

export default TabletClouds;
