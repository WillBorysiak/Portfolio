export interface AboutTypes {
	content: string;
	reverse: boolean;
	image: { fields: { file: { url: string } } };
	imageAlt: string;
	order: number;
}
