import { ProjectTypes as ProjectModel } from '../../../models/project.model';
import ParallaxBackground from '../../parallax/ParallaxBackground';
import SectionTitle from '../../typography/SectionTitle';
import CyclingDashboard from './cyclingDashboard/CyclingDashboard';
import HandcraftedByBR from './handcraftedByBarbaraRuth/HandcraftedByBR';
import WW2EuropeanMap from './ww2EuropeanMap/WW2EuropeanMap';

interface ProjectsTypes {
	projects: {
		items: [content: { fields: ProjectModel }, content: { fields: ProjectModel }, content: { fields: ProjectModel }];
	};
}

const Projects = (props: ProjectsTypes) => {
	const projectArray = props.projects.items;

	return (
		<>
			<ParallaxBackground />
			<section id="projects" className="flex w-screen flex-col items-center">
				<SectionTitle text="Projects" />
				<CyclingDashboard content={projectArray[0]} />
				<HandcraftedByBR content={projectArray[1]} />
				<WW2EuropeanMap content={projectArray[2]} />
			</section>
		</>
	);
};

export default Projects;
