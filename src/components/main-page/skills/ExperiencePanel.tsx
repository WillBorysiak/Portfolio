import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Heading from '../../typography/Heading';
import Experience from './Experience';

const ExperiencePanel = () => {
	const data = useStaticQuery(query);
	const jobs = data.allContentfulPortfolioExperience.nodes;

	return (
		<section className="mt-10 overflow-hidden rounded-md font-kalam">
			<div className="relative mx-auto max-w-7xl py-8 text-dark backdrop-brightness-[0.8] dark:text-light sm:px-2 lg:px-2 lg:py-8">
				<Heading content="Work Experience" />
				{jobs.map((job: any, index: number) => {
					return <Experience key={index} job={job} />;
				})}
			</div>
		</section>
	);
};

export default ExperiencePanel;

const query = graphql`
	{
		allContentfulPortfolioExperience(sort: { fields: date, order: DESC }) {
			nodes {
				position
				company
				date
				contentful_id
				description {
					description {
						one
						two
						three
						four
						five
					}
				}
			}
		}
	}
`;
