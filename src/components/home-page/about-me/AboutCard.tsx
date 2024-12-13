import Image from "next/image";

import { motion } from "framer-motion";

import { About } from "../../../interfaces/about.interface";
import { scrollAnimationVariants } from "../../utils/scroll-animation-variants";
import { TextHelper } from "../../utils/text-helper";

interface AboutCardProps {
  content: About;
}

const AboutCard = (props: AboutCardProps) => {
  const { fields } = props.content;

  const { content, reverse, image, imageAlt } = fields;

  const aboutData: string[] = TextHelper.parseAbout(content);

  return (
    <motion.article
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={scrollAnimationVariants}
      className="relative overflow-hidden font-kalam"
    >
      <div className="mx-2 max-w-7xl py-5 text-center">
        <div
          className={
            reverse
              ? "w-full flex-row-reverse rounded-sm bg-transparentBg p-5 md:flex md:flex-row-reverse md:items-center"
              : "w-full rounded-sm bg-transparentBg p-5 md:flex md:flex-row md:items-center"
          }
        >
          {/* large image */}
          <div className="hidden w-1/3 md:block md:flex-shrink-0">
            <div>
              <Image
                src={"https:" + image.fields.file.url}
                alt={imageAlt}
                height={550}
                width={550}
                quality={100}
                priority={true}
              />
            </div>
          </div>

          <div className="relative lg:ml-10">
            <div className="text-xl font-bold leading-9 text-dark dark:text-light lg:text-2xl">
              {aboutData.map((content, index) => {
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
              <div className="w-3/5 flex-shrink-0 md:hidden md:w-1/2">
                <Image
                  src={"https:" + image.fields.file.url}
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
