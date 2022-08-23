import CloudContainer from './CloudContainer';
import StarContainer from './StarContainer';
import { ThemeContext } from '../context/ThemeContext';
import { useContext } from 'react';

const ParallaxBackground = () => {
	const theme = useContext(ThemeContext);

	return (
		<div className="linear fixed -z-10 h-full w-full bg-lightBackground transition duration-1000 dark:bg-darkBackground">
			{theme.isDark && <StarContainer />}
			{!theme.isDark && <CloudContainer />}
		</div>
	);
};

export default ParallaxBackground;
