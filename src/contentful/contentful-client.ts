import * as contentful from "contentful";

import { IPortfolio } from "../interfaces/portfolio.interface";
import { Skeleton } from "../interfaces/contentful/skeleton.interface";
import { IProject } from "../interfaces/project.interface";
import { IAbout } from "../interfaces/about.interface";
import { IWorkplace } from "../interfaces/workplace.interface";

export const getContentfulData = async (): Promise<IPortfolio> => {
  const client = contentful.createClient({
    space: process.env.CONTENTFUL_SPACE_ID!,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
  });

  const projects = await client.getEntries<Skeleton<IProject>>({
    content_type: "portfolioProjectImages",
  });

  const abouts = await client.getEntries<Skeleton<IAbout>>({
    content_type: "portfolioAbout",
  });

  const workplaces = await client.getEntries<Skeleton<IWorkplace>>({
    content_type: "portfolioExperience",
  });

  return {
    projects: projects.items.map((item) => item.fields),
    abouts: abouts.items.map((item) => item.fields),
    workplaces: workplaces.items.map((item) => item.fields),
  };
};
