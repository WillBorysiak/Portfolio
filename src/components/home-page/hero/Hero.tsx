"use client";

import {
  faBicycle,
  faComputer,
  faMountain,
} from "@fortawesome/pro-duotone-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";

import Navbar from "../../layout/Navbar";
import ParallaxBackground from "../../parallax/ParallaxBackground";
import ThemeToggle from "../../theme/ThemeToggle";
import { scrollAnimationVariants } from "../../utils/scroll-animation-variants";

const Hero = () => {
  return (
    <>
      <ParallaxBackground />
      <motion.div
        initial="hidden"
        animate="visible"
        variants={scrollAnimationVariants}
        className="font-amatic relative overflow-hidden"
      >
        <section
          id="hero"
          className="mx-auto flex h-screen w-screen flex-col justify-evenly"
        >
          <div className="flex flex-row items-start justify-around">
            <ThemeToggle />
            <Navbar />
          </div>

          <div className="flex h-full flex-col items-center justify-center">
            <h1 className="text-dark dark:text-light pb-3 text-7xl font-extrabold sm:text-9xl">
              Will Borysiak
            </h1>

            <h2 className="text-dark dark:text-light text-6xl sm:text-8xl">
              Software Developer
            </h2>

            <div className="mt-20 md:mt-32">
              <p className="text-dark dark:text-light mt-5 text-center text-4xl font-extrabold sm:text-5xl">
                Road, trail, mountain, computer, whats the difference?
              </p>

              <div className="mt-10 flex flex-row justify-around">
                <p className="text-4xl sm:text-5xl">
                  <FontAwesomeIcon
                    className="text-dark dark:text-light"
                    icon={faBicycle}
                    size="1x"
                  />
                </p>
                <p className="text-4xl sm:text-5xl">
                  <FontAwesomeIcon
                    className="text-dark dark:text-light"
                    icon={faMountain}
                    size="1x"
                  />
                </p>
                <p className="text-4xl sm:text-5xl">
                  <FontAwesomeIcon
                    className="text-dark dark:text-light"
                    icon={faComputer}
                    size="1x"
                  />
                </p>
              </div>
            </div>
          </div>
        </section>
      </motion.div>
    </>
  );
};

export default Hero;
