import React from 'react';

import Layout from '../layout/Layout';
import Hero from '../components/main-page/hero/Hero';
import About from '../components/main-page/about/About';
import Skills from '../components/main-page/skills/Skills';
import Projects from '../components/main-page/projects/Projects';
import Contact from '../components/main-page/contact/Contact';
import Transition from '../layout/Transition';
import SEO from '../layout/SEO';

const HomePage = () => {
	return (
		<Layout>
			<SEO
				title="Will Borysiak | Portfolio"
				description={`Welcome to my web dev portfolio site. Here you will find out more about me, my projects and my experience.`}
			/>
			<Hero />
			<Projects />
			<About />
			<Skills />
			<Transition />
			<Contact />
		</Layout>
	);
};

export default HomePage;
