import AboutCard from './AboutCard';
import ParallaxBackground from '../../parallax/ParallaxBackground';
import SectionTitle from '../../typography/SectionTitle';
import { AboutTypes as AboutModel } from '../../../models/about.model';

interface AboutTypes {
	abouts: { items: [fields: { fields: AboutModel; sys: { id: number } }] };
}

const About = (props: AboutTypes) => {
	const aboutArray = props.abouts.items;
	aboutArray.sort((a, b) => a.fields.order - b.fields.order);

	return (
		<>
			<ParallaxBackground />
			<section id="about" className="flex w-screen flex-col items-center justify-start ">
				<SectionTitle text="About Me" />
				{aboutArray.map(item => {
					return <AboutCard key={item.sys.id} content={item.fields} />;
				})}
			</section>
		</>
	);
};

export default About;
