interface SectionTitleProps {
  text: string;
}

const SectionTitle = (props: SectionTitleProps) => {
  const { text } = props;

  return (
    <h1 className="mb-5 mt-5 text-center font-amatic text-7xl font-extrabold text-gray-800 dark:text-gray-100 sm:text-8xl md:mb-10 md:mt-10">
      {text}
    </h1>
  );
};

export default SectionTitle;
