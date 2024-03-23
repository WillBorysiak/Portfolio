import type { NextPage } from "next";

import AboutMe from "../components/home-page/about-me/AboutMe";
import Contact from "../components/home-page/contact/Contact";
import Experience from "../components/home-page/experience/Experience";
import Hero from "../components/home-page/hero/Hero";
import Projects from "../components/home-page/projects/Projects";
import Layout from "../components/layout/Layout";
import SEO from "../components/layout/SEO";
import Transition from "../components/layout/Transition";
import { getContentfulData } from "../helpers/getContentfulData";
import { About } from "../interfaces/about.interface";
import { Position } from "../interfaces/position.interface";
import { Project } from "../interfaces/project.interface";

export interface HomeProps {
  projects: Project[];
  abouts: About[];
  experiences: Position[];
}

const Home: NextPage<HomeProps> = (props) => {
  const { projects, abouts, experiences } = props;

  return (
    <Layout>
      <SEO />
      <Hero />
      <Projects projects={projects} />
      <AboutMe abouts={abouts} />
      <Experience experiences={experiences} />
      <Transition />
      <Contact />
    </Layout>
  );
};

export default Home;

export async function getStaticProps() {
  const { projects, abouts, experiences } = await getContentfulData();

  return {
    props: {
      projects,
      abouts,
      experiences,
    },
  };
}
