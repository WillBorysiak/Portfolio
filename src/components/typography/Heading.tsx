import { classNames } from "../utils/classNames";

interface HeadingProps {
  content: string;
  center?: boolean;
}

const Heading = (props: HeadingProps) => {
  const { content, center = true } = props;

  return (
    <h2
      className={classNames(
        center ? "text-center" : "",
        "font-kalam text-3xl font-extrabold text-dark dark:text-light sm:text-4xl",
      )}
    >
      {content}
    </h2>
  );
};

export default Heading;
