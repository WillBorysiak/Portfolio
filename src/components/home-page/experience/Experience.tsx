import { Position } from '../../../models/position.model';
import ParallaxBackground from '../../parallax/ParallaxBackground';
import SectionTitle from '../../typography/SectionTitle';
import JobsPanel from './JobsPanel';
import SkillsPanel from './SkillsPanel';

const Experience = (props: { experiences: Position[] }) => {
	const experiences = props.experiences;

	return (
		<>
			<ParallaxBackground />
			<section id="experience" className="flex w-screen flex-col items-center justify-start pb-10 md:mt-0">
				<SectionTitle text="Experience" />
				<SkillsPanel />
				<JobsPanel experiences={experiences} />
			</section>
		</>
	);
};

export default Experience;
