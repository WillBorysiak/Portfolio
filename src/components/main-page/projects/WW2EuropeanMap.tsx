import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import ProjectLinks from './ProjectLinks';
import WW2TechStack from './WW2TechStack';

const WW2EuropeanMap = () => {
	return (
		<article className="relative overflow-hidden font-kalam">
			<div className="mb-5 mt-5 rounded-md backdrop-brightness-[0.8] lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:pl-8">
				<div className="mx-auto max-w-xl px-4 sm:px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0">
					<div>
						<div className="mt-5">
							<h2 className="pt-5 text-3xl font-extrabold tracking-tight text-dark dark:text-light md:pt-5 md:text-4xl">
								WW2 European Map
							</h2>
							<p className="mt-4 text-lg font-bold text-dark dark:text-light md:text-xl">
								This project was created to highlight some of the key battles during WW2. The data is shown using the
								leaflet map library via HTML, SCSS and JS.
							</p>
							<ProjectLinks
								github="https://github.com/WillBorysiak/WW2-European-Map"
								website="https://ww2-european-map.netlify.app/"
							/>
						</div>
					</div>
					<div className="mt-5 border-t border-gray-200">
						<WW2TechStack />
					</div>
				</div>
				<div className=" mt-5 sm:mt-5 lg:mt-0 ">
					<div className="-mr-48 pl-4 sm:pl-6 md:-mr-16 lg:relative lg:m-0 lg:h-full lg:px-0">
						{}
						<StaticImage
							className="w-full shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
							src="../../../assets/images/WW2Screen.png"
							alt="Image of my WW2 interactive map project"
						/>
					</div>
				</div>
			</div>
		</article>
	);
};

export default WW2EuropeanMap;
