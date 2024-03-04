import { faArrowUp } from "@fortawesome/pro-duotone-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

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
        className="mb-10 mt-10 animate-bounce text-light dark:text-light"
        onClick={scrollToTop}
      />
    </Link>
  );
};

export default ContactNav;
