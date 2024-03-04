import { Project as ProjectModel } from "../../../models/project.model";
import ParallaxBackground from "../../parallax/ParallaxBackground";
import SectionTitle from "../../typography/SectionTitle";
import Project from "./Project";

const Projects = (props: { projects: ProjectModel[] }) => {
  const projects = props.projects.sort(
    (a, b) => a.fields.order - b.fields.order,
  );

  return (
    <>
      <ParallaxBackground />
      <section
        id="projects"
        className="flex w-screen flex-col items-center justify-center"
      >
        <SectionTitle text="Projects" />
        {projects.map((project, index) => (
          <Project key={index} content={project} />
        ))}
      </section>
    </>
  );
};

export default Projects;
