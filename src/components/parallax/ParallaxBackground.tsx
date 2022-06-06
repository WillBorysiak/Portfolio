import React from 'react';
import { useContext } from 'react';

import { ThemeContext } from '../context/ThemeContext';
import CloudContainer from './CloudContainer';
import StarContainer from './StarContainer';

const ParallaxBackground = () => {
	const theme = useContext(ThemeContext);

	return (
		<div className="fixed -z-10 h-full w-full bg-sky-300 dark:bg-slate-700">
			{theme.dark && <CloudContainer />}
			{theme.dark && <StarContainer />}
		</div>
	);
};

export default ParallaxBackground;
