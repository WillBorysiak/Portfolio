import { About } from "../../../interfaces/about.interface";
import ParallaxBackground from "../../parallax/ParallaxBackground";
import SectionTitle from "../../typography/SectionTitle";
import AboutCard from "./AboutCard";

interface AboutMeProps {
  abouts: About[];
}

const AboutMe = (props: AboutMeProps) => {
  const { abouts } = props;

  const aboutData = abouts.sort((a, b) => a.fields.order - b.fields.order);

  return (
    <>
      <ParallaxBackground />
      <section
        id="about"
        className="flex w-screen flex-col items-center justify-center"
      >
        <SectionTitle text="About Me" />
        {aboutData.map((item, index) => {
          return <AboutCard key={index} content={item} />;
        })}
      </section>
    </>
  );
};

export default AboutMe;
