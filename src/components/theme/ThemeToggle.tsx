import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import { faMoon, faSunBright } from "@fortawesome/pro-duotone-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ThemeToggle = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // state hydration
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;

  return (
    <button id="theme-toggle" type="button" className="mt-3">
      {resolvedTheme === "dark" && (
        <FontAwesomeIcon
          className="text-black opacity-50 transition delay-200 duration-1000 ease-in-out hover:text-yellow-300 hover:opacity-100 md:hover:scale-125"
          icon={faSunBright}
          size="4x"
          onClick={() => setTheme("light")}
        />
      )}
      {resolvedTheme === "light" && (
        <FontAwesomeIcon
          className="text-black opacity-50 transition-all delay-200 duration-1000 ease-in-out hover:text-gray-100 hover:opacity-100 md:hover:scale-125"
          icon={faMoon}
          size="4x"
          onClick={() => setTheme("dark")}
        />
      )}
    </button>
  );
};

export default ThemeToggle;
