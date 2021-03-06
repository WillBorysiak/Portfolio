import { JobTypes } from '../../../models/job.model';
import ParallaxBackground from '../../parallax/ParallaxBackground';
import SectionTitle from '../../typography/SectionTitle';
import SkillsPanel from './SkillsPanel';
import JobsPanel from './JobsPanel';

interface ExperienceTypes {
	experiences: { items: [fields: { fields: JobTypes }] };
}

const Experience = (props: ExperienceTypes) => {
	const experienceArray = props.experiences;
	return (
		<>
			<ParallaxBackground />
			<section id="skills" className="flex w-screen flex-col items-center justify-start pb-10 md:mt-0">
				<SectionTitle text="Experience" />
				<SkillsPanel />
				<JobsPanel experiences={experienceArray} />
			</section>
		</>
	);
};

export default Experience;
