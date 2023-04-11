import { About } from './about.model';
import { Position } from './position.model';
import { Project } from './project.model';

export interface HomeProps {
	projects: Project[];
	abouts: About[];
	experiences: Position[];
}
