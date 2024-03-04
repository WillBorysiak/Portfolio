import { Position } from "../../../models/position.model";
import ParallaxBackground from "../../parallax/ParallaxBackground";
import SectionTitle from "../../typography/SectionTitle";
import Technologies from "./Technologies";
import WorkExperience from "./WorkExperience";

const Experience = (props: { experiences: Position[] }) => {
  const experiences = props.experiences;

  return (
    <>
      <ParallaxBackground />
      <section
        id="experience"
        className="flex w-full flex-col items-center justify-center"
      >
        <SectionTitle text="Experience" />
        <Technologies />
        <WorkExperience experiences={experiences} />
      </section>
    </>
  );
};

export default Experience;
