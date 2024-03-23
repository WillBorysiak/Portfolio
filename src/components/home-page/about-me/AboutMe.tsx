import { About } from "../../../interfaces/about.interface";
import ParallaxBackground from "../../parallax/ParallaxBackground";
import SectionTitle from "../../typography/SectionTitle";
import AboutCard from "./AboutCard";

const AboutMe = (props: { abouts: About[] }) => {
  const abouts = props.abouts.sort((a, b) => a.fields.order - b.fields.order);

  return (
    <>
      <ParallaxBackground />
      <section
        id="about"
        className="flex w-screen flex-col items-center justify-center"
      >
        <SectionTitle text="About Me" />
        {abouts.map((item, index) => {
          return <AboutCard key={index} content={item} />;
        })}
      </section>
    </>
  );
};

export default AboutMe;
