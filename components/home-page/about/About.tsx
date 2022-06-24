import ParallaxBackground from '../../parallax/ParallaxBackground';
import SectionTitle from '../../typography/SectionTitle';
import AboutCard from './AboutCard';

const About = (props: { abouts: { items: any } }) => {
	const aboutArray = props.abouts.items;
	aboutArray.sort(
		(a: { fields: { order: number } }, b: { fields: { order: number } }) => a.fields.order - b.fields.order,
	);

	return (
		<>
			<ParallaxBackground />
			<section id="about" className="flex w-screen flex-col items-center justify-start ">
				<SectionTitle text="About Me" />

				{aboutArray.map((item: { fields: {}; sys: { id: string } }) => {
					return <AboutCard key={item.sys.id} content={item.fields} />;
				})}
			</section>
		</>
	);
};

export default About;
