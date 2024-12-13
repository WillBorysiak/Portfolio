import { Position } from "../../../interfaces/position.interface";
import ParallaxBackground from "../../parallax/ParallaxBackground";
import SectionTitle from "../../typography/SectionTitle";
import Technologies from "./Technologies";
import WorkExperience from "./WorkExperience";

interface ExperienceProps {
  experiences: Position[];
}

const Experience = (props: ExperienceProps) => {
  const { experiences } = props;

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
