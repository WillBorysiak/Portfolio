import { faClouds, faPlaneProp } from "@fortawesome/pro-duotone-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { BackgroundObject } from "../../../interfaces/background-object.interface";
import Cloud from "./Cloud";

interface CloudContainerProps {
  clouds: BackgroundObject[];
}

const CloudContainer = (props: CloudContainerProps) => {
  const { clouds } = props;

  return (
    <>
      {clouds.map((cloud, index) => (
        <Cloud key={index} cloud={cloud} />
      ))}

      <FontAwesomeIcon
        icon={faPlaneProp}
        size="6x"
        className="text-light-theme absolute z-0 mt-[20vh] ml-[60vw] opacity-20"
      />
      <FontAwesomeIcon
        icon={faClouds}
        size="6x"
        className="text-light-theme absolute z-0 mt-[60vh] ml-[20vw] opacity-20"
      />
    </>
  );
};

export default CloudContainer;
