import { IAbout } from "./about.interface";
import { IProject } from "./project.interface";
import { IWorkplace } from "./workplace.interface";

export interface IPortfolio {
  projects: IProject[];
  abouts: IAbout[];
  workplaces: IWorkplace[];
}
