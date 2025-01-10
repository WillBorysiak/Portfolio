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
    const fields = iProject.fields;

    this.title = fields.title;
    this.description = fields.description;
    this.order = fields.order;
    this.website = fields.website;
    this.github = fields.github;
    this.techStack = fields.techStack;
    this.screenshotUrl = fields.screenshot.fields.file.url;

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
