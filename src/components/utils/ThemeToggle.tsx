import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const ThemeToggle = () => {
	const theme = useContext(ThemeContext);

	return (
		<button
			type="button"
			className="mb-5 inline-flex items-center rounded-md border border-transparent bg-gray-700 px-6 py-3 text-base font-medium text-white"
			onClick={() => {
				const root = window.document.documentElement;

				if (theme.dark === false) {
					theme.dark = true;
					root.classList.add('dark');
					return;
				}
				if (theme.dark === true) {
					theme.dark = false;
					root.classList.remove('dark');
					return;
				}
			}}
		>
			Toggle Dark Mode
		</button>
	);
};

export default ThemeToggle;
