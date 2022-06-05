import React from 'react';
import { Link } from 'gatsby';

import ThemeToggle from '../../utils/ThemeToggle';

const Hero = () => {
	return (
		<div className="mx-auto flex h-screen w-screen flex-col justify-evenly bg-sky-300 dark:bg-slate-700">
			<div className="flex flex-row justify-center">
				<ThemeToggle />
			</div>
			<div className="flex h-full flex-col items-center justify-center">
				<h1 className="pb-3 font-amatic text-8xl font-extrabold text-gray-800 dark:text-gray-100 sm:text-9xl">
					Will Borysiak
				</h1>
				<h2 className=" font-amatic text-7xl text-gray-800 dark:text-gray-100 sm:text-8xl">Web Developer</h2>
			</div>
		</div>
	);
};

export default Hero;
