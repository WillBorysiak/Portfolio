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
			animation: {
				floatLG: 'floatingLG linear infinite',
				floatMD: 'floatingMD linear infinite',
				floatSM_Slow: 'floatingSM 30s linear infinite',
				floatSM_Med: 'floatingSM 20s linear infinite',
				floatSM_Fast: 'floatingSM 10s linear infinite',
				floatMD_Slow: 'floatingMD 45s linear infinite',
				floatMD_Med: 'floatingMD 35s linear infinite',
				floatMD_Fast: 'floatingMD 25s linear infinite',
				floatLG_Slow: 'floatingLG 60s linear infinite',
				floatLG_Med: 'floatingLG 45s linear infinite',
				floatLG_Fast: 'floatingLG 30s linear infinite',
			},
			keyframes: {
				floatingLG: {
					'0%': { left: '0%', opacity: '0' },
					'50%': { left: '50%', opacity: '0.8' },
					'100%': { left: '85%', opacity: '0' },
				},
				floatingMD: {
					'0%': { left: '0%', opacity: '0' },
					'50%': { left: '35%', opacity: '1' },
					'100%': { left: '75%', opacity: '0' },
				},
				floatingSM: {
					'0%': { left: '0%', opacity: '0' },
					'50%': { left: '20%', opacity: '0.8' },
					'100%': { left: '45%', opacity: '0' },
				},
			},
		},
	},
	plugins: [require('@tailwindcss/aspect-ratio')],
};
