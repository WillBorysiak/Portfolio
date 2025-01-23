import Image from "next/image";

import { motion } from "framer-motion";

import { About } from "../../../models/about.model";
import { scrollAnimationVariants } from "../../utils/scroll-animation-variants";

interface AboutCardProps {
  about: About;
}

const AboutCard = (props: AboutCardProps) => {
  const { about } = props;

  const { content, reverse, imageUrl, imageAlt } = about;

  return (
    <motion.article
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={scrollAnimationVariants}
      className="font-kalam relative overflow-hidden"
    >
      <div className="mx-2 max-w-7xl py-5 text-center">
        <div
          className={
            reverse
              ? "bg-transparent-background w-full flex-row-reverse rounded-xs p-5 md:flex md:flex-row-reverse md:items-center"
              : "bg-transparent-background w-full rounded-xs p-5 md:flex md:flex-row md:items-center"
          }
        >
          {/* large image */}
          <div className="hidden w-1/3 md:block md:shrink-0">
            <div>
              <Image
                src={imageUrl}
                alt={imageAlt}
                height={550}
                width={550}
                quality={100}
                priority={true}
              />
            </div>
          </div>

          <div className="relative lg:ml-10">
            <div className="text-dark dark:text-light text-xl leading-9 font-bold lg:text-2xl">
              {content.map((content, index) => {
                return (
                  <p
                    key={index}
                    className={reverse ? "mb-5 md:pr-5" : "mb-5 md:pl-5"}
                  >
                    {content}
                  </p>
                );
              })}
            </div>

            {/* small image */}
            <div className="mt-3 flex justify-center">
              <div className="w-3/5 shrink-0 md:hidden md:w-1/2">
                <Image
                  src={imageUrl}
                  alt={imageAlt}
                  height={550}
                  width={550}
                  quality={100}
                  priority={true}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
};

export default AboutCard;
