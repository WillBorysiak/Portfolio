export interface About {
	fields: {
		content: string;
		reverse: boolean;
		order: number;
		image: { fields: { file: { url: string } } };
		imageAlt: string;
	};
}
