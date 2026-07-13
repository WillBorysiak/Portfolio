import Hero from "../components/home-page/hero/Hero";
import Layout from "../components/layout/Layout";
import { getContentfulData } from "../contentful/contentful-client";
import Portfolio from "../containers/Portfolio";
import { IPortfolio } from "../interfaces/portfolio.interface";
import { SEOMetadata } from "./seo-metdata";

export const metadata = SEOMetadata;

const Page = async () => {
  const portfolioData = await getPortfolioData();

  return (
    <Layout>
      <Hero />
      <Portfolio content={portfolioData} />
    </Layout>
  );
};

export default Page;

const getPortfolioData = async (): Promise<IPortfolio> => {
  return getContentfulData();
};
