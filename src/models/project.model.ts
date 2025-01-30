import { PortfolioHelper } from "../components/utils/portfolio-helper";
import { IProject } from "../interfaces/project.interface";

export class Project {
  title: string;
  description: string;
  order: number;
  website: string;
  github: string;
  techStack: string;
  screenshotUrl: string;

  constructor(iProject: IProject) {
    this.title = iProject.title;
    this.description = iProject.description;
    this.order = iProject.order;
    this.website = iProject.website;
    this.github = iProject.github;
    this.techStack = iProject.techStack;
    this.screenshotUrl = iProject.screenshot.fields.file.url;

    this.intialise();
  }

  intialise() {
    this.screenshotUrl = this.generateScreenshotUrl();
  }

  generateScreenshotUrl(): string {
    const screenshotUrl: string = PortfolioHelper.generateUrl(
      this.screenshotUrl,
    );

    return screenshotUrl;
  }
}
