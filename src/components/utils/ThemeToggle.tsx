import React, { useContext, useState } from 'react';
import { ThemeContext } from '../context/ThemeContext';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/pro-duotone-svg-icons';
import { faSunBright } from '@fortawesome/pro-duotone-svg-icons';

const ThemeToggle = () => {
	const theme = useContext(ThemeContext);

	return (
		<button
			type="button"
			className="mt-3"
			onClick={() => {
				const root = window.document.documentElement;

				if (!theme.isDark) {
					theme.setIsDark(true);
					root.classList.add('dark');
					return;
				}
				if (theme.isDark) {
					theme.setIsDark(false);
					root.classList.remove('dark');
					return;
				}
			}}
		>
			{theme.isDark && (
				<FontAwesomeIcon
					className="text-black opacity-50 transition delay-200 duration-1000 ease-in-out hover:text-yellow-300 hover:opacity-100"
					icon={faSunBright}
					size="4x"
				/>
			)}
			{!theme.isDark && (
				<FontAwesomeIcon
					className="text-black opacity-50 transition-all delay-200 duration-1000 ease-in-out hover:text-gray-100 hover:opacity-100"
					icon={faMoon}
					size="4x"
				/>
			)}
		</button>
	);
};

export default ThemeToggle;
