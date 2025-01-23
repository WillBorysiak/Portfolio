import Link from "next/link";

import FooterLinks from "./FooterLinks";

const Footer = () => {
  return (
    <footer
      id="footer"
      className="bg-light-background font-kalam dark:bg-dark-background w-screen font-extrabold"
    >
      <div className="flex max-w-full flex-col items-center px-4 py-3 sm:px-6 md:flex md:flex-row md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          <FooterLinks />
        </div>
        <div className="mt-8 flex flex-col items-center md:order-1 md:mt-0">
          <p className="text-dark dark:text-light text-lg">
            &copy; Will Borysiak - 2024. All rights reserved.
          </p>
          <Link
            className="text-dark dark:text-light text-lg"
            href="https://nextjs.org/"
            target="_blank"
            rel="noreferrer"
          >
            Powered by <span className="bg-white text-black">NextJS</span>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
