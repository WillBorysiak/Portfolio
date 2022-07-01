import { JobTypes } from '../../../models/job.model';
import Heading from '../../typography/Heading';
import Job from './Job';

interface JobPanelTypes {
	experiences: { items: [fields: { fields: JobTypes }] };
}

const JobsPanel = (props: JobPanelTypes) => {
	const experienceArray = props.experiences.items;

	return (
		<section className="mt-10 overflow-hidden rounded-md font-kalam">
			<div className="relative mx-auto max-w-7xl py-8 text-dark backdrop-brightness-[0.8] dark:text-light sm:px-2 lg:px-2 lg:py-8">
				<Heading content="Work Experience" />
				{experienceArray.map((item, index: number) => {
					return <Job key={index} content={item.fields} />;
				})}
			</div>
		</section>
	);
};

export default JobsPanel;
