import type { NextPage } from "next";
import { useEffect } from "react";

import Contact from "../components/home-page/contact/Contact";
import Hero from "../components/home-page/hero/Hero";
import Layout from "../components/layout/Layout";
import SEO from "../components/layout/SEO";
import Transition from "../components/layout/Transition";
import AboutMe from "../containers/AboutMe";
import Experience from "../containers/Experience";
import Projects from "../containers/Projects";
import { getContentfulData } from "../contentful/contentful-client";
import { IAbout } from "../interfaces/about.interface";
import { IProject } from "../interfaces/project.interface";
import { IWorkplace } from "../interfaces/workplace.interface";
import { usePortfolioStore } from "../store/portfolio-store";

export interface HomeProps {
  projects: IProject[];
  abouts: IAbout[];
  workplaces: IWorkplace[];
}

const Home: NextPage<HomeProps> = (props) => {
  const { projects, abouts, workplaces } = props;

  const { setProjects, setAbouts, setWorkplaces } = usePortfolioStore();

  useEffect(() => {
    setProjects(projects);
    setAbouts(abouts);
    setWorkplaces(workplaces);
  }, [projects, abouts, workplaces, setProjects, setAbouts, setWorkplaces]);

  return (
    <Layout>
      <SEO />
      <Hero />
      <Projects />
      <AboutMe />
      <Experience />
      <Transition />
      <Contact />
    </Layout>
  );
};

export default Home;

export async function getStaticProps() {
  const { projects, abouts, workplaces } = await getContentfulData();

  return {
    props: {
      projects,
      abouts,
      workplaces,
    },
  };
}
