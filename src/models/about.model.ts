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
    this.content = [];
    this.order = iAbout.order;
    this.reverse = iAbout.reverse;
    this.imageUrl = iAbout.image.fields.file.url;
    this.imageAlt = iAbout.imageAlt;

    this._content = iAbout.content;

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
