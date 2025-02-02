import Link from "next/link";

import { faArrowUp } from "@fortawesome/pro-duotone-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ContactNav = () => {
  const scrollToTop = () =>
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

  return (
    <Link href="#home">
      <FontAwesomeIcon
        icon={faArrowUp}
        size="4x"
        className="text-light-theme mt-10 mb-10 animate-bounce"
        onClick={scrollToTop}
      />
    </Link>
  );
};

export default ContactNav;
