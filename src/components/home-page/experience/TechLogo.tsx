import Image from 'next/image';

interface TechLogoProps {
	iconPath: string;
	size: 'Small' | 'Medium' | 'Large';
}

const TechLogo = (props: TechLogoProps) => {
	const { iconPath, size } = props;

	const sizeClass = {
		Small: 'w-14',
		Medium: 'w-20',
		Large: 'w-30',
	}[size];

	return (
		<div className={` flex justify-center items-center ${sizeClass}`}>
			<Image src={iconPath} alt={'HTML'} height={100} width={100} quality={100} priority={true} />
		</div>
	);
};

export default TechLogo;
