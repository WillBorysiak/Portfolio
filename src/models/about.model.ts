import { PortfolioHelper } from "../components/utils/portfolio-helper";
import { IAbout } from "../interfaces/about.interface";

export class About {
  content: string[];
  order: number;
  reverse: boolean;
  imageUrl: string;
  imageAlt: string;

  _content: string;

  constructor(iAbout: IAbout) {
    const fields = iAbout.fields;

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

  generateContent(): string[] {
    const aboutContent: string[] = this._content.split("/");

    return aboutContent;
  }

  generateImageUrl(): string {
    const imageUrl: string = PortfolioHelper.generateUrl(this.imageUrl);

    return imageUrl;
  }
}
