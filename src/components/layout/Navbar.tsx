import { useTheme } from "next-themes";
import Link from "next/link";
import { Fragment, useEffect, useState } from "react";

import { faEarthEurope } from "@fortawesome/pro-duotone-svg-icons";
import { faCloudWord } from "@fortawesome/pro-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Menu, Transition } from "@headlessui/react";

import { classNames } from "../utils/classNames";

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
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;

  return (
    <Menu id="navbar" as="div" className="relative mt-3 inline-block text-left">
      <Menu.Button className="inline-flex w-full justify-center rounded-md px-4 py-2 text-sm font-medium">
        {resolvedTheme === "dark" && (
          <FontAwesomeIcon
            className="text-light transition delay-200 duration-1000 ease-in-out hover:scale-125"
            icon={faEarthEurope}
            size="4x"
          />
        )}
        {resolvedTheme === "light" && (
          <FontAwesomeIcon
            className="text-white transition delay-200 duration-1000 ease-in-out hover:scale-125"
            icon={faCloudWord}
            size="4x"
          />
        )}
      </Menu.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-500"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-500"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 mt-2 h-[400px] w-64 origin-top-right divide-y  rounded-md bg-dark backdrop-brightness-[0.9] dark:bg-light">
          <div className="flex h-full flex-col items-center justify-around">
            {navigation.map((item, index) => {
              return (
                <Menu.Item key={index}>
                  {({ active }) => (
                    <Link
                      href={item.href}
                      className={classNames(
                        active ? "underline" : "",
                        "group flex items-center px-4 py-2 font-kalam text-5xl  text-light dark:text-dark",
                      )}
                    >
                      {item.title}
                    </Link>
                  )}
                </Menu.Item>
              );
            })}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default Navbar;
