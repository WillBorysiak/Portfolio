import { useLayoutEffect, useState } from "react";

import { useTheme } from "next-themes";

import { faMoon, faSunBright } from "@fortawesome/pro-duotone-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ThemeToggle = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // state hydration
  useLayoutEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <button id="theme-toggle" type="button" className="mt-3">
      {resolvedTheme === "dark" && (
        <FontAwesomeIcon
          className="text-light-theme opacity-50 transition delay-100 duration-500 ease-in-out hover:cursor-pointer hover:text-yellow-300 hover:opacity-100 md:hover:scale-110"
          icon={faSunBright}
          size="4x"
          onClick={() => setTheme("light")}
        />
      )}
      {resolvedTheme === "light" && (
        <FontAwesomeIcon
          className="text-dark-theme hover:text-light-theme opacity-50 transition-all delay-100 duration-500 ease-in-out hover:cursor-pointer hover:opacity-100 md:hover:scale-110"
          icon={faMoon}
          size="4x"
          onClick={() => setTheme("dark")}
        />
      )}
    </button>
  );
};

export default ThemeToggle;
