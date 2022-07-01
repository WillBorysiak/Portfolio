import { ProjectTypes as ProjectModel } from '../../../models/project.model';
import ParallaxBackground from '../../parallax/ParallaxBackground';
import SectionTitle from '../../typography/SectionTitle';
import HandcraftedByBR from './HandcraftedByBR';
import WW2EuropeanMap from './WW2EuropeanMap';

interface ProjectsTypes {
	projects: { items: [content: { fields: ProjectModel }, content: { fields: ProjectModel }] };
}

const Projects = (props: ProjectsTypes) => {
	const projectArray = props.projects.items;

	return (
		<>
			<ParallaxBackground />
			<section id="projects" className="flex w-screen flex-col items-center">
				<SectionTitle text="Projects" />
				<HandcraftedByBR content={projectArray[0]} />
				<WW2EuropeanMap content={projectArray[1]} />
			</section>
		</>
	);
};

export default Projects;
