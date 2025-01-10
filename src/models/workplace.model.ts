import { IDescription, IWorkplace } from "../interfaces/workplace.interface";

export class Workplace {
  position: string;
  company: string;
  date: string;
  descriptions: string[];
  order: number;

  _descriptions: IDescription;

  constructor(iWorkplace: IWorkplace) {
    const fields = iWorkplace.fields;

    this.position = fields.position;
    this.company = fields.company;
    this.date = fields.date;
    this.descriptions = [];
    this.order = fields.order;

    this._descriptions = fields.description;

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
