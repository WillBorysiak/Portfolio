import ParallaxBackground from '../../parallax/ParallaxBackground';
import SectionTitle from '../../typography/SectionTitle';
import Project from './Project';

import { ProjectsTypes } from '../../../models/project.model';

const Projects = (props: ProjectsTypes) => {
	const projects = props.projects.items.sort((a, b) => a.fields.order - b.fields.order);

	return (
		<>
			<ParallaxBackground />
			<section id="projects" className="flex w-screen flex-col items-center">
				<SectionTitle text="Projects" />
				<Project
					content={projects[0]}
					website="https://strava-api-dashboard.vercel.app/"
					github="https://github.com/WillBorysiak/Strava-Dashboard"
					techStack="stravaDashboard"
				/>
				<Project
					content={projects[1]}
					website="https://www.handcrafted-by-barbara-ruth.com/"
					github="https://github.com/WillBorysiak/Handcrafted-By-BR"
					techStack="handcraftedByBarbaraRuth"
				/>
				<Project
					content={projects[2]}
					website="https://can-i-calorie.vercel.app/"
					github="https://github.com/WillBorysiak/Can-I-Calorie"
					techStack="canICalorie"
				/>
				<Project
					content={projects[3]}
					website="https://ww2-european-map.vercel.app/"
					github="https://github.com/WillBorysiak/WW2-European-Map"
					techStack="ww2EuropeanMap"
				/>
			</section>
		</>
	);
};

export default Projects;
