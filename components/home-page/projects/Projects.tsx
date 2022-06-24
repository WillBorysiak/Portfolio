import ParallaxBackground from '../../parallax/ParallaxBackground';
import SectionTitle from '../../typography/SectionTitle';
import HandcraftedByBR from './HandcraftedByBR';
import WW2EuropeanMap from './WW2EuropeanMap';

const Projects = (props: { projects: { items: any } }) => {
	return (
		<>
			<ParallaxBackground />
			<section id="projects" className="flex w-screen flex-col items-center">
				<SectionTitle text="Projects" />
				<HandcraftedByBR content={props.projects.items[0]} />
				<WW2EuropeanMap content={props.projects.items[1]} />
			</section>
		</>
	);
};

export default Projects;
