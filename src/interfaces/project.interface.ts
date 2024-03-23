interface ScreenShot {
	fields: { file: { url: string } };
}

export interface Project {
	fields: {
		title: string;
		description: string;
		order: number;
		website: string;
		github: string;
		techStack: string;
		screenshot: ScreenShot;
	};
}
