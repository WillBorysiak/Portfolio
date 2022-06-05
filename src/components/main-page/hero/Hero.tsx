import React from 'react';
import { Link } from 'gatsby';

import ThemeToggle from '../../utils/ThemeToggle';

const Hero = () => {
	return (
		<div className="flex h-screen w-screen flex-col justify-evenly bg-sky-300 dark:bg-slate-700">
			<div className="flex flex-row justify-center">
				<ThemeToggle />
			</div>
			<div className=" flex h-full flex-col items-center justify-center  dark:bg-slate-700">
				<h2 className="font-B p-5 text-9xl text-black dark:text-white">Portfolio</h2>
			</div>
		</div>
	);
};

export default Hero;
