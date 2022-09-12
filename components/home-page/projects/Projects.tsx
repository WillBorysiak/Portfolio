import CanICalorie from './canICalorie/CanICalorie';
import StravaDashboard from './stravaDashboard/StravaDashboard';
import HandcraftedByBR from './handcraftedByBarbaraRuth/HandcraftedByBR';
import ParallaxBackground from '../../parallax/ParallaxBackground';
import SectionTitle from '../../typography/SectionTitle';
import WW2EuropeanMap from './ww2EuropeanMap/WW2EuropeanMap';
import { ProjectsTypes } from '../../../models/project.model';

const Projects = (props: ProjectsTypes) => {
	const projects = props.projects.items.sort((a, b) => a.fields.order - b.fields.order);

	return (
		<>
			<ParallaxBackground />
			<section id="projects" className="flex w-screen flex-col items-center">
				<SectionTitle text="Projects" />
				<StravaDashboard content={projects[0]} />
				<HandcraftedByBR content={projects[1]} />
				<CanICalorie content={projects[2]} />
				<WW2EuropeanMap content={projects[3]} />
			</section>
		</>
	);
};

export default Projects;
