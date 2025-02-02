import { useLayoutEffect, useState } from "react";

import { useTheme } from "next-themes";

import { BackgroundObjectType } from "../../interfaces/background-object.interface";
import { AnimationHelper } from "../utils/animation-helper";
import { PortfolioHelper } from "../utils/portfolio-helper";
import CloudContainer from "./clouds/CloudContainer";
import StarContainer from "./stars/StarContainer";

const ParallaxBackground = () => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // state hydration
  useLayoutEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const device = PortfolioHelper.getDevice(window.innerWidth);

  const animationType =
    resolvedTheme === "dark"
      ? BackgroundObjectType.Star
      : BackgroundObjectType.Cloud;

  const backgroundObjects = AnimationHelper.generateBackgroundObjects(
    device,
    animationType,
  );

  return (
    <div className="linear bg-light-blue dark:bg-dark-grey fixed -z-10 h-full w-full overflow-x-hidden transition duration-1000">
      {resolvedTheme === "dark" && <StarContainer stars={backgroundObjects} />}

      {resolvedTheme === "light" && (
        <CloudContainer clouds={backgroundObjects} />
      )}
    </div>
  );
};

export default ParallaxBackground;
