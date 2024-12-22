import * as contentful from "contentful";

let client = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
});

export const getContentfulData = async () => {
  const projects = await client.getEntries({
    content_type: "portfolioProjectImages",
  });

  const abouts = await client.getEntries({
    content_type: "portfolioAbout",
  });

  const workplaces = await client.getEntries({
    content_type: "portfolioExperience",
  });

  return {
    projects: projects.items,
    abouts: abouts.items,
    workplaces: workplaces.items,
  };
};
