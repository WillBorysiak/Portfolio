interface IImage {
  fields: { file: { url: string } };
}

export interface IAbout {
  content: string;
  reverse: boolean;
  order: number;
  image: IImage;
  imageAlt: string;
}
