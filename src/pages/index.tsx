import * as contentful from "contentful";
import type { NextPage } from "next";

import AboutMe from "../components/home-page/about-me/AboutMe";
import Contact from "../components/home-page/contact/Contact";
import Experience from "../components/home-page/experience/Experience";
import Hero from "../components/home-page/hero/Hero";
import Projects from "../components/home-page/projects/Projects";
import Layout from "../components/layout/Layout";
import SEO from "../components/layout/SEO";
import Transition from "../components/layout/Transition";
import { HomeProps } from "../models/home.model";

const Home: NextPage<HomeProps> = (props) => {
  return (
    <Layout>
      <SEO />
      <Hero />
      <Projects projects={props.projects} />
      <AboutMe abouts={props.abouts} />
      <Experience experiences={props.experiences} />
      <Transition />
      <Contact />
    </Layout>
  );
};

export default Home;

let client = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
});

export async function getStaticProps() {
  const projects = await client.getEntries({
    content_type: "portfolioProjectImages",
  });

  const abouts = await client.getEntries({
    content_type: "portfolioAbout",
  });

  const experiences = await client.getEntries({
    content_type: "portfolioExperience",
  });

  return {
    props: {
      projects: projects.items,
      abouts: abouts.items,
      experiences: experiences.items,
    },
  };
}
