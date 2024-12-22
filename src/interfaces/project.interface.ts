interface IScreenShot {
  fields: { file: { url: string } };
}

export interface IProject {
  fields: {
    title: string;
    description: string;
    order: number;
    website: string;
    github: string;
    techStack: string;
    screenshot: IScreenShot;
  };
}
