import { motion } from 'framer-motion';
import ThemeToggle from '../../context/ThemeToggle';
import Navbar from '../../layout/Navbar';
import ParallaxBackground from '../../parallax/ParallaxBackground';
import { scrollAnimationVariants } from '../../utils/scrollAnimationVariants';

const Hero = () => {
	return (
		<>
			<ParallaxBackground />
			<motion.div
				initial="hidden"
				animate="visible"
				variants={scrollAnimationVariants}
				className="relative overflow-hidden font-kalam"
			>
				<section id="home" className="mx-auto flex h-screen w-screen flex-col justify-evenly">
					<div className=" flex flex-row items-start justify-around">
						<ThemeToggle />
						<Navbar />
					</div>
					<div className="flex h-full flex-col items-center justify-center">
						<h1 className="pb-3 font-amatic text-7xl font-extrabold text-dark dark:text-light sm:text-9xl">
							Will Borysiak
						</h1>
						<h2 className=" font-amatic text-6xl text-dark  dark:text-light sm:text-8xl">Software Developer</h2>
						<div className="mt-20 md:mt-32">
							<p className=" mt-5 text-center font-amatic text-4xl font-extrabold text-dark  dark:text-light sm:text-5xl">
								Road, trail, mountain, computer desk, whats the difference?
							</p>
							<div className=" mt-5 flex flex-row justify-around">
								<p className="text-4xl sm:text-5xl">🚴</p>
								<p className="text-4xl sm:text-5xl">⛰️</p>
								<p className="text-4xl sm:text-5xl">💻</p>
							</div>
						</div>
					</div>
				</section>
			</motion.div>
		</>
	);
};

export default Hero;
