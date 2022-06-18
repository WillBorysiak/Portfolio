import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';

import HandcraftedTechStack from './HandcraftedTechStack';
import ProjectLinks from './ProjectLinks';

const HandcraftedByBR = () => {
	const data = useStaticQuery(query);
	const { title, description, screenshot } = data.contentfulPortfolioProjects;

	return (
		<article className="relative overflow-hidden font-kalam">
			<div className="mb-5 mt-5 rounded-md backdrop-brightness-[0.8] lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:pl-8">
				<div className="mx-auto max-w-xl px-4 sm:px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0">
					<div>
						<div className="mt-5">
							<h2 className="pt-5 text-3xl font-extrabold tracking-tight text-dark dark:text-light md:pt-5 md:text-4xl">
								{title}
							</h2>
							<p className="mt-4 text-lg font-bold text-dark dark:text-light md:text-xl">{description}</p>
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
				<div className="mt-5 sm:mt-5 lg:mt-0">
					<div className="lg:relative lg:m-0 lg:h-full lg:px-0">
						<GatsbyImage
							image={screenshot.gatsbyImageData}
							alt={title}
							objectFit={'cover'}
							className="h-96 w-full md:h-[475px] md:w-full"
						/>
					</div>
				</div>
			</div>
		</article>
	);
};

export default HandcraftedByBR;

const query = graphql`
	{
		contentfulPortfolioProjects(title: { eq: "Handcrafted by BarbaraRuth" }) {
			title
			description
			screenshot {
				gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
			}
		}
	}
`;
