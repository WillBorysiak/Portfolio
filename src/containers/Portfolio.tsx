"use client";

import { useEffect } from "react";

import Contact from "../components/home-page/contact/Contact";
import Transition from "../components/layout/Transition";
import { IPortfolio } from "../interfaces/portfolio.interface";
import { usePortfolioStore } from "../store/portfolio-store.store";
import AboutMe from "./AboutMe";
import Experience from "./Experience";
import Projects from "./Projects";

interface PortfolioProps {
  content: IPortfolio;
}

const Portfolio = (props: PortfolioProps) => {
  const { content } = props;

  const { projects, abouts, workplaces } = content;

  const { setProjects, setAbouts, setWorkplaces } = usePortfolioStore();

  useEffect(() => {
    setProjects(projects);
    setAbouts(abouts);
    setWorkplaces(workplaces);
  }, [projects, abouts, workplaces, setProjects, setAbouts, setWorkplaces]);

  return (
    <>
      <Projects />
      <AboutMe />
      <Experience />
      <Transition />
      <Contact />
    </>
  );
};

export default Portfolio;
