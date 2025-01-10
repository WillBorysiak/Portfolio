import Project from "../components/home-page/projects/Project";
import ParallaxBackground from "../components/parallax/ParallaxBackground";
import SectionTitle from "../components/typography/SectionTitle";
import { usePortfolioStore } from "../store/portfolio-store.store";

const Projects = () => {
  const { getProjects } = usePortfolioStore();

  const projects = getProjects();

  return (
    <>
      <ParallaxBackground />
      <section
        id="projects"
        className="flex w-screen flex-col items-center justify-center"
      >
        <SectionTitle text="Projects" />
        {projects.map((project, index) => (
          <Project key={index} project={project} />
        ))}
      </section>
    </>
  );
};

export default Projects;
