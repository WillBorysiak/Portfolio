import { useEffect, useState } from "react";

import { useTheme } from "next-themes";

import CloudContainer from "./clouds/CloudContainer";
import StarContainer from "./stars/StarContainer";

const ParallaxBackground = () => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // state hydration
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;

  return (
    <div className="linear bg-light-background dark:bg-dark-background fixed -z-10 h-full w-full transition duration-1000">
      {resolvedTheme === "dark" && <StarContainer />}
      {resolvedTheme === "light" && <CloudContainer />}
    </div>
  );
};

export default ParallaxBackground;
