import { create } from "zustand";

import { IProject } from "../interfaces/project.interface";
import { IWorkplace } from "../interfaces/workplace.interface";
import { Project } from "../models/project.model";
import { Workplace } from "../models/workplace.model";
import { IAbout } from "../interfaces/about.interface";
import { About } from "../models/about.model";

interface PortfolioStore {
  projects: Project[];
  abouts: About[];
  workplaces: Workplace[];

  setProjects: (projects: IProject[]) => void;
  setAbouts: (abouts: IAbout[]) => void;
  setWorkplaces: (jobs: IWorkplace[]) => void;

  getProjects: () => Project[];
  getAbouts: () => About[];
  getWorkplaces: () => Workplace[];
}

export const usePortfolioStore = create<PortfolioStore>((set, get) => ({
  projects: [],
  abouts: [],
  workplaces: [],

  setProjects: (iProjects: IProject[]) => {
    const projects = iProjects.map((project) => new Project(project));
    const sortedProjects = projects.sort((a, b) => a.order - b.order);

    set({ projects: sortedProjects });
  },
  setAbouts: (iAbouts: IAbout[]) => {
    const abouts = iAbouts.map((about) => new About(about));
    const sortedAbouts = abouts.sort((a, b) => a.order - b.order);

    set({ abouts: sortedAbouts });
  },
  setWorkplaces: (iJobs: IWorkplace[]) => {
    const workplaces = iJobs.map((job) => new Workplace(job));
    const sortedWorkplaces = workplaces.sort((a, b) => a.order - b.order);

    set({ workplaces: sortedWorkplaces });
  },

  getProjects: () => get().projects,
  getAbouts: () => get().abouts,
  getWorkplaces: () => get().workplaces,
}));
