import { Project as IProject } from "../../../interfaces/project.interface";
import ParallaxBackground from "../../parallax/ParallaxBackground";
import SectionTitle from "../../typography/SectionTitle";
import Project from "./Project";

interface ProjectsProps {
  projects: IProject[];
}

const Projects = (props: ProjectsProps) => {
  const { projects } = props;

  const projectData = projects.sort((a, b) => a.fields.order - b.fields.order);

  return (
    <>
      <ParallaxBackground />
      <section
        id="projects"
        className="flex w-screen flex-col items-center justify-center"
      >
        <SectionTitle text="Projects" />
        {projectData.map((project, index) => (
          <Project key={index} content={project} />
        ))}
      </section>
    </>
  );
};

export default Projects;
