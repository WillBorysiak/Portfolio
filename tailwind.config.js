module.exports = {
	content: ['./src/**/*.tsx'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				lightTransition: '#4C92D2',
				darkTransition: '#000F29',
			},
			fontFamily: {
				bebas: ['Bebas Neue', 'san-serif'],
			},
		},
	},
	plugins: [require('@tailwindcss/aspect-ratio')],
};
