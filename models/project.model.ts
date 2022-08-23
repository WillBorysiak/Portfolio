export interface ProjectTypes {
	title: string;
	order: number;
	description: string;
	screenshot: { fields: { file: { url: string } } };
}

export interface ProjectsTypes {
	projects: {
		items: [
			content: { fields: ProjectTypes },
			content: { fields: ProjectTypes },
			content: { fields: ProjectTypes },
			content: { fields: ProjectTypes },
		];
	};
}
