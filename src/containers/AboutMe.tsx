import AboutCard from "../components/home-page/about-me/AboutCard";
import ParallaxBackground from "../components/parallax/ParallaxBackground";
import SectionTitle from "../components/typography/SectionTitle";
import { usePortfolioStore } from "../store/portfolio-store.store";

const AboutMe = () => {
  const { getAbouts } = usePortfolioStore();

  const abouts = getAbouts();

  return (
    <>
      <section
        id="about"
        className="flex w-screen flex-col items-center justify-center"
      >
        <SectionTitle text="About Me" />
        {abouts.map((about, index) => {
          return <AboutCard key={index} about={about} />;
        })}
      </section>
    </>
  );
};

export default AboutMe;
