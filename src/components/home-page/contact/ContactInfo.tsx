import Link from "next/link";

import { faFileLines } from "@fortawesome/pro-thin-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ContactInfo = () => {
  return (
    <section
      id="contact-info"
      className="font-kalam w-screen pt-12 font-extrabold sm:pt-16"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-dark dark:text-light text-3xl font-extrabold sm:text-4xl">
            I&lsquo;m currently employed as software developer in the UK.
          </h2>
          <p className="dark:text-v text-dark dark:text-light mt-3 text-2xl sm:mt-4">
            Feel free to browse my site and see the self taught projects
            I&lsquo;ve made.
          </p>
        </div>
      </div>
      <div className="mt-10 pb-12 sm:pb-16">
        <div className="relative">
          <div className="absolute inset-0 h-1/2" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl">
              <dl className="rounded-lg bg-black/[.75] shadow-lg sm:grid sm:grid-cols-2 dark:bg-black/[.5]">
                <div className="flex flex-col border-b border-gray-100 p-6 text-center sm:border-0 sm:border-r">
                  <dt className="order-2 mt-2 leading-6">
                    <Link href="/cv.pdf" target="_blank" rel="noreferrer">
                      <FontAwesomeIcon
                        className="text-light dark:text-light"
                        icon={faFileLines}
                        size="3x"
                      />
                    </Link>
                  </dt>
                  <dd className="text-wide-light-transition order-1 text-4xl font-extrabold">
                    CV
                  </dd>
                </div>
                <div className="flex flex-col border-t border-gray-100 p-6 text-center sm:border-0 sm:border-l">
                  <dt className="text-light dark:text-light order-2 mt-5 text-2xl leading-6 font-medium">
                    Links in the footer
                  </dt>
                  <dd className="text-wide-light-transition order-1 text-4xl font-extrabold">
                    Socials
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
