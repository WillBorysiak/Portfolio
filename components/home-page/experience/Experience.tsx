import ParallaxBackground from '../../parallax/ParallaxBackground';
import SectionTitle from '../../typography/SectionTitle';
import SkillsPanel from './SkillsPanel';
import JobsPanel from './JobsPanel';

interface ExperienceTypes {
	experiences: any;
}

const Experience = (props: ExperienceTypes) => {
	return (
		<>
			<ParallaxBackground />
			<section id="skills" className="flex w-screen flex-col items-center justify-start pb-10 md:mt-0">
				<SectionTitle text="Experience" />
				<SkillsPanel />
				<JobsPanel experiences={props.experiences} />
			</section>
		</>
	);
};

export default Experience;
