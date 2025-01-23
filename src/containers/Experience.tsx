import Technologies from "../components/home-page/experience/Technologies";
import WorkExperience from "../components/home-page/experience/Workplaces";
import ParallaxBackground from "../components/parallax/ParallaxBackground";
import SectionTitle from "../components/typography/SectionTitle";
import { usePortfolioStore } from "../store/portfolio-store.store";

const Experience = () => {
  const { getWorkplaces } = usePortfolioStore();

  const workplaces = getWorkplaces();

  return (
    <>
      <section
        id="experience"
        className="flex w-full flex-col items-center justify-center"
      >
        <SectionTitle text="Experience" />
        <Technologies />
        <WorkExperience workplaces={workplaces} />
      </section>
    </>
  );
};

export default Experience;
