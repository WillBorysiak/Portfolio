interface IScreenShot {
  fields: { file: { url: string } };
}

export interface IProject {
  title: string;
  description: string;
  order: number;
  website: string;
  github: string;
  techStack: string;
  screenshot: IScreenShot;
}
