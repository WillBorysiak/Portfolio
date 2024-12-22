export interface IDescription {
  description: [
    {
      one: string;
      two: string;
      three: string;
      four: string;
    },
  ];
}

export interface IWorkplace {
  fields: {
    position: string;
    company: string;
    date: string;
    description: IDescription;
    order: number;
  };
}
