import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import HandcraftedTechStack from './HandcraftedTechStack';
import ProjectLinks from './ProjectLinks';

const HandcraftedByBR = () => {
	return (
		<article className="relative overflow-hidden font-kalam">
			<div className="mb-5 mt-5 rounded-md backdrop-brightness-[0.8] lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:pl-8">
				<div className="mx-auto max-w-xl px-4 sm:px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0">
					<div>
						<div className="mt-5">
							<h2 className="pt-5 text-3xl font-extrabold tracking-tight text-dark dark:text-light md:pt-5 md:text-4xl">
								Handcrafted by BarbaraRuth
							</h2>
							<p className="mt-4 text-lg font-bold text-dark dark:text-light md:text-xl">
								This project was created to serve as a marketing website for my mothers business. The UI and state was
								managed by Gatsby with Tailwind CSS for styling. I also used the Contentful CMS to display data using
								Graphql.
							</p>
							<ProjectLinks
								github="https://github.com/WillBorysiak/Handcrafted-By-BR"
								website="https://www.handcrafted-by-barbara-ruth.com/"
							/>
						</div>
					</div>
					<div className="mt-5 border-t border-gray-200">
						<HandcraftedTechStack />
					</div>
				</div>
				<div className=" mt-5 sm:mt-5 lg:mt-0 ">
					<div className="-mr-48 pl-4 sm:pl-6 md:-mr-16 lg:relative lg:m-0 lg:h-full lg:px-0">
						<StaticImage
							className="w-full shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
							src="../../../assets/images/HCScreen.png"
							alt="Image of my the handcrafted by barbara ruth marketing website"
							layout="constrained"
						/>
					</div>
				</div>
			</div>
		</article>
	);
};

export default HandcraftedByBR;
