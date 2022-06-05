module.exports = {
	content: ['./src/**/*.tsx'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				lightBackground: '#7dd3fc',
				darkBackground: '#334155',
				lightTransition: '#4C92D2',
				darkTransition: '#000F29',
			},
			fontFamily: {
				amatic: ['Amatic SC', 'san-serif'],
				kalam: ['Kalam', 'san-serif'],
			},
		},
	},
	plugins: [require('@tailwindcss/aspect-ratio')],
};
