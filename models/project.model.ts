export interface ProjectTypes {
	title: string;
	order: number;
	description: string;
	screenshot: { fields: { file: { url: string } } };
}
