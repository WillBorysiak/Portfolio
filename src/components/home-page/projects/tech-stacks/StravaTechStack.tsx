import chartjs from '../../../../../public/tech-logos/chartjs.svg';
import nextjs from '../../../../../public/tech-logos/nextjs.svg';
import react from '../../../../../public/tech-logos/react.svg';
import strava from '../../../../../public/tech-logos/strava.svg';
import tailwindcss from '../../../../../public/tech-logos/tailwindcss.svg';
import TechLogo from '../../experience/TechLogo';

const StravaTechStack = () => {
	return (
		<div id="strava-tech-stack" className="mt-5 flex flex-wrap gap-x-3 xs:flex-nowrap">
			{/* React */}
			<TechLogo iconPath={react.src} size="Small" />

			{/* Next JS */}
			<TechLogo iconPath={nextjs.src} size="Small" />

			{/* Tailwind */}
			<TechLogo iconPath={tailwindcss.src} size="Small" />

			{/* Strava */}
			<TechLogo iconPath={strava.src} size="Small" />

			{/* Chart JS */}
			<TechLogo iconPath={chartjs.src} size="Small" />
		</div>
	);
};

export default StravaTechStack;
