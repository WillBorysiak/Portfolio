import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { IGatsbyImageData } from 'gatsby-plugin-image';

import ParallaxBackground from '../../parallax/ParallaxBackground';
import SectionTitle from '../../typography/SectionTitle';
import AboutContainer from './AboutContainer';

interface SectionTypes {
	contentful_id: string;
	reverse: boolean;
	content: {
		content: string;
	};
	image: {
		gatsbyImageData: IGatsbyImageData;
	};
}

const About = () => {
	const data = useStaticQuery(query);
	const sections = data.allContentfulPortfolioAbout.nodes;

	return (
		<>
			<ParallaxBackground />
			<section className=" z-10 flex  w-screen flex-col items-center justify-start ">
				<SectionTitle text="About Me" />
				{sections.map((section: SectionTypes) => {
					return (
						<AboutContainer
							key={section.contentful_id}
							reverse={section.reverse}
							content={section.content.content}
							image={section.image.gatsbyImageData}
						/>
					);
				})}
			</section>
		</>
	);
};

export default About;

const query = graphql`
	{
		allContentfulPortfolioAbout(sort: { order: ASC, fields: createdAt }) {
			nodes {
				contentful_id
				reverse
				content {
					content
				}
				image {
					gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
				}
			}
		}
	}
`;
