import React from 'react';

interface ExperiencePropTypes {
	job: {
		position: string;
		company: string;
		date: string;
		description: {
			description: {
				0: {};
			};
		};
	};
}

const Experience = (props: ExperiencePropTypes) => {
	const { position, company, date, description } = props.job;
	const descriptions: any = description.description[0];
	const descriptionArr = [];
	for (let job in descriptions) {
		descriptionArr.push(descriptions[job]);
	}

	return (
		<div className="mt-5 flex flex-col border-b border-solid border-light px-8 pb-5 md:flex-row md:px-0">
			<div className="md:mt-0 md:pr-10">
				<h2 className="text-2xl md:text-3xl">{company}</h2>
			</div>
			<div className="mt-5 text-xl md:text-2xl">
				<h2 className="font-bold">{position}</h2>
				<h4 className="italic">{date}</h4>
				<div className="mx-auto w-40 border-b-2 border-solid border-dark pt-3  dark:border-light" />
				<ul className="mt-5 list-disc">
					{descriptionArr.map((desc: string, index: number) => {
						return (
							<li className="mb-2 text-lg font-bold text-dark dark:text-light md:text-xl" key={index}>
								{desc}
							</li>
						);
					})}
				</ul>
			</div>
		</div>
	);
};

export default Experience;
