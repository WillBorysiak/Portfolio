import React from 'react';

import Layout from '../layout/Layout';
import Hero from '../components/main-page/hero/Hero';
import About from '../components/main-page/about/About';
import Skills from '../components/main-page/skills/Skills';
import Projects from '../components/main-page/projects/Projects';
import Contact from '../components/main-page/contact/Contact';

const HomePage = () => {
	return (
		<Layout>
			<Hero />
			<Projects />
			<About />
			<Skills />
			<Contact />
		</Layout>
	);
};

export default HomePage;
