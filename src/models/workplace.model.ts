import { IDescription, IWorkplace } from "../interfaces/workplace.interface";

export class Workplace {
  position: string;
  company: string;
  date: string;
  descriptions: string[];
  order: number;

  _descriptions: IDescription;

  constructor(iWorkplace: IWorkplace) {
    this.position = iWorkplace.position;
    this.company = iWorkplace.company;
    this.date = iWorkplace.date;
    this.descriptions = [];
    this.order = iWorkplace.order;

    this._descriptions = iWorkplace.description;

    this.intialise();
  }

  intialise() {
    this.descriptions = this.generateDescriptions();
  }

  generateDescriptions(): string[] {
    const descriptions: string[] = [];

    const descriptionObj: { [key: string]: string } =
      this._descriptions.description[0];
    const descriptionKeys = Object.keys(descriptionObj);

    for (let key in descriptionKeys) {
      const descriptionkey: string = descriptionKeys[key];
      const description: string = descriptionObj[descriptionkey];

      descriptions.push(description);
    }

    return descriptions;
  }
}
