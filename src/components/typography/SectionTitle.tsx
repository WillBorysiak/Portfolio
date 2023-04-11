interface SectionTitleProps {
	text: string;
}

const SectionTitle = (props: SectionTitleProps) => {
	return (
		<h1 className="mb-5 mt-5 text-center font-amatic text-7xl font-extrabold text-gray-800 dark:text-gray-100 sm:text-8xl md:mb-10 md:mt-10">
			{props.text}
		</h1>
	);
};

export default SectionTitle;
