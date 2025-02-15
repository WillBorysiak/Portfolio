import { Fragment, useLayoutEffect, useState } from "react";

import { useTheme } from "next-themes";
import Link from "next/link";

import { faEarthEurope } from "@fortawesome/pro-duotone-svg-icons";
import { faCloudWord } from "@fortawesome/pro-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from "@headlessui/react";

const navigation = [
  { title: "Home", href: "#" },
  { title: "Projects", href: "#projects" },
  { title: "About", href: "#about" },
  { title: "Experience", href: "#experience" },
  { title: "Contact", href: "#contact" },
];

const Navbar = () => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // state hydration
  useLayoutEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <Menu id="navbar" as="div" className="relative mt-3 inline-block text-left">
      <MenuButton className="inline-flex w-full justify-center rounded-md px-4 py-2 text-sm font-medium">
        {resolvedTheme === "dark" && (
          <FontAwesomeIcon
            className="text-light-theme transition delay-100 duration-500 ease-in-out hover:scale-110 hover:cursor-pointer"
            icon={faEarthEurope}
            size="4x"
          />
        )}
        {resolvedTheme === "light" && (
          <FontAwesomeIcon
            className="text-light-theme transition delay-100 duration-500 ease-in-out hover:scale-110 hover:cursor-pointer"
            icon={faCloudWord}
            size="4x"
          />
        )}
      </MenuButton>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-500"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-500"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <MenuItems className="bg-dark-theme dark:bg-light-theme absolute right-0 mt-2 h-[400px] w-64 origin-top-right divide-y rounded-md backdrop-brightness-[0.9]">
          <div className="flex h-full flex-col items-center justify-around">
            {navigation.map((item, index) => {
              return (
                <MenuItem key={index}>
                  {() => (
                    <Link
                      href={item.href}
                      className="group font-kalam text-light-theme dark:text-dark-theme flex items-center px-4 py-2 text-4xl hover:underline"
                    >
                      {item.title}
                    </Link>
                  )}
                </MenuItem>
              );
            })}
          </div>
        </MenuItems>
      </Transition>
    </Menu>
  );
};

export default Navbar;
