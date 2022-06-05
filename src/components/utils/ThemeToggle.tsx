import React, { useContext, useState } from 'react';
import { ThemeContext } from '../context/ThemeContext';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/pro-duotone-svg-icons';
import { faSun } from '@fortawesome/pro-duotone-svg-icons';

const ThemeToggle = () => {
	const theme = useContext(ThemeContext);
	const [night, setNight] = useState(false);

	return (
		<button
			type="button"
			className="mt-5"
			onClick={() => {
				const root = window.document.documentElement;

				if (theme.dark === false) {
					theme.dark = true;
					root.classList.add('dark');
					setNight(true);
					return;
				}
				if (theme.dark === true) {
					theme.dark = false;
					root.classList.remove('dark');
					setNight(false);
					return;
				}
			}}
		>
			{!night && (
				<FontAwesomeIcon
					className="text-black transition-all duration-500 ease-in-out hover:text-gray-100"
					icon={faMoon}
					size="5x"
				/>
			)}
			{night && (
				<FontAwesomeIcon
					className="text-black transition duration-500 ease-in-out hover:text-yellow-300"
					icon={faSun}
					size="5x"
				/>
			)}
		</button>
	);
};

export default ThemeToggle;