import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import CloudContainer from './CloudContainer';
import StarContainer from './StarContainer';

const ParallaxBackground = () => {
	const { theme } = useTheme();
	const [mounted, setMounted] = useState(false);

	// state hydration
	useEffect(() => {
		setMounted(true);
	}, []);
	if (!mounted) {
		return null;
	}
	return (
		<div className="linear fixed -z-10 h-full w-full bg-lightBackground transition duration-1000 dark:bg-darkBackground">
			{theme === 'dark' && <StarContainer />}
			{theme === 'light' && <CloudContainer />}
		</div>
	);
};

export default ParallaxBackground;
