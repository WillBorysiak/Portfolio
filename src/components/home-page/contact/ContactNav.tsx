"use client";

import { faArrowUp } from "@fortawesome/pro-duotone-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ContactNav = () => {
  const scrollToTop = () =>
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

  return (
    <button
      type="button"
      className="text-light-theme mt-10 mb-10 animate-bounce cursor-pointer"
      onClick={scrollToTop}
    >
      <FontAwesomeIcon icon={faArrowUp} size="4x" />
    </button>
  );
};

export default ContactNav;
