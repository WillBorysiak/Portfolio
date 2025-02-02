import { classNames } from "../utils/class-names";

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
        "font-kalam text-dynamic-theme text-3xl font-extrabold sm:text-4xl",
      )}
    >
      {content}
    </h2>
  );
};

export default Heading;
