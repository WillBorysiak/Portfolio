import { AboutTypes } from './about.model';
import { JobTypes } from './job.model';
import { ProjectTypes } from './project.model';

export interface HomeTypes {
	projects: {
		items: [
			content: { fields: ProjectTypes },
			content: { fields: ProjectTypes },
			content: { fields: ProjectTypes },
			content: { fields: ProjectTypes },
		];
	};
	abouts: { items: [fields: { fields: AboutTypes; sys: { id: number } }] };
	experiences: { items: [fields: { fields: JobTypes }] };
}
