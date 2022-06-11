import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Heading from '../../typography/Heading';

const ExperiencePanel = () => {
	const data = useStaticQuery(query);
	const experience = data.allContentfulPortfolioExperience.nodes;
	const { company, position, date, description, contentful_id } = experience[0];
	console.log(experience);
	console.log(description.description[0].one);

	return (
		<section className="mx-5 mt-5 overflow-hidden rounded-md font-kalam">
			<div className="relative mx-auto max-w-7xl text-dark backdrop-brightness-[0.8] dark:text-light sm:px-2 lg:px-2 lg:py-2">
				<Heading content="Work Experience" />
				<div className="mt-5 flex flex-col md:flex-row">
					<div className="mb-5 md:mt-0 md:pr-10">
						<h2 className="text-2xl md:text-3xl">{company}</h2>
					</div>
					<div className="text-xl md:text-2xl">
						<h2 className="font-bold">{position}</h2>
						<h4 className="italic">{date}</h4>
						<div>{description.description[0].one}</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ExperiencePanel;

const query = graphql`
	{
		allContentfulPortfolioExperience {
			nodes {
				position
				company
				date
				contentful_id
				description {
					description {
						one
						two
					}
				}
			}
		}
	}
`;
