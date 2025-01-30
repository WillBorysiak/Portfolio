import Hero from "../components/home-page/hero/Hero";
import Layout from "../components/layout/Layout";
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
  const res = await fetch(`${process.env.API_URL}/api/contentful`, {
    cache: "no-store",
  });

  if (!res.ok) throw new Error("Failed to fetch static data");

  return res.json();
};
