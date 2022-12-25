import * as contentful from 'contentful';
import type { NextPage } from 'next';
import About from '../components/home-page/about/About';
import Contact from '../components/home-page/contact/Contact';
import Experience from '../components/home-page/experience/Experience';
import Hero from '../components/home-page/hero/Hero';
import Projects from '../components/home-page/projects/Projects';
import Layout from '../components/layout/Layout';
import SEO from '../components/layout/SEO';
import Transition from '../components/layout/Transition';
import { HomeTypes } from '../models/home.model';

let client = contentful.createClient({
	space: process.env.CONTENTFUL_SPACE_ID!,
	accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
});

const Home: NextPage<HomeTypes> = props => {
	return (
		<>
			<Layout>
				<SEO />
				<Hero />
				<Projects projects={props.projects} />
				<About abouts={props.abouts} />
				<Experience experiences={props.experiences} />
				<Transition />
				<Contact />
			</Layout>
		</>
	);
};

export default Home;

export async function getStaticProps() {
	// Projects
	const projects = await client.getEntries({
		content_type: 'portfolioProjectImages',
	});

	const abouts = await client.getEntries({
		content_type: 'portfolioAbout',
	});

	const experiences = await client.getEntries({
		content_type: 'portfolioExperience',
	});

	return {
		props: {
			projects: projects,
			abouts: abouts,
			experiences: experiences,
		},
	};
}
