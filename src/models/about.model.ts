import { PortfolioHelper } from "../components/utils/portfolio-helper";
import { IAbout } from "../interfaces/about.interface";

export class About {
  content: string[];
  order: number;
  reverse: boolean;
  imageUrl: string;
  imageAlt: string;

  _content: string;

  constructor(project: IAbout) {
    const fields = project.fields;

    this.content = [];
    this.order = fields.order;
    this.reverse = fields.reverse;
    this.imageUrl = fields.image.fields.file.url;
    this.imageAlt = fields.imageAlt;

    this._content = fields.content;

    this.intialise();
  }

  intialise() {
    this.content = this.generateContent();
    this.imageUrl = this.generateImageUrl();
  }

  generateContent() {
    const aboutContent = this._content.split(". ");

    return aboutContent;
  }

  generateImageUrl() {
    const imageUrl = PortfolioHelper.generateUrl(this.imageUrl);

    return imageUrl;
  }
}
