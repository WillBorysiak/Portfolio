import React from 'react';

import ThemeToggle from '../../utils/ThemeToggle';
import ParallaxBackground from '../../parallax/ParallaxBackground';

const Hero = () => {
	return (
		<>
			<ParallaxBackground />
			<section className=" z-10 mx-auto flex h-screen w-screen flex-col justify-evenly ">
				<div className=" flex flex-row justify-center">
					<ThemeToggle />
				</div>
				<div className="flex h-full flex-col items-center justify-center">
					<h1 className="pb-3 font-amatic text-8xl font-extrabold text-darkText dark:text-lightText sm:text-9xl">
						Will Borysiak
					</h1>
					<h2 className=" font-amatic text-7xl text-darkText  dark:text-lightText sm:text-8xl">Web Developer</h2>

					<div className="mt-20 md:mt-32">
						<p className=" mt-5 text-center font-amatic text-4xl font-extrabold text-darkText  dark:text-lightText sm:text-5xl">
							Road, trail, mountain, computer desk, whats the difference?
						</p>
						<div className=" mt-5 flex flex-row justify-around">
							<p className="text-4xl sm:text-5xl">🚴</p>
							<p className="text-4xl sm:text-5xl">🏃‍♂️</p>
							<p className="text-4xl sm:text-5xl">💻</p>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Hero;
