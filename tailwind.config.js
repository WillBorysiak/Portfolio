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
				// Mobile Animations
				floatSM_Slow: 'floatingSM 30s linear infinite',
				floatSM_Slow_Reverse: 'floatingSMReverse 30s linear infinite',
				floatSM_Med: 'floatingSM 20s linear infinite',
				floatSM_Med_Reverse: 'floatingSMReverse 20s linear infinite',
				floatSM_Fast: 'floatingSM 5s linear infinite',
				floatSM_Fast_Reverse: 'floatingSMReverse 5s linear infinite',
				// Tablet Animations
				floatMD_Slow: 'floatingMD 25s linear infinite',
				floatMD_Slow_Reverse: 'floatingMDReverse 25s linear infinite',
				floatMD_Med: 'floatingMD 20s linear infinite',
				floatMD_Med_Reverse: 'floatingMDReverse 20s linear infinite',
				floatMD_Fast: 'floatingMD 10s linear infinite',
				floatMD_Fast_Reverse: 'floatingMDReverse 10s linear infinite',
				// Desktop Animations
				floatLG_Slow: 'floatingLG 35s linear infinite',
				floatLG_Slow_Reverse: 'floatingLGReverse 35s linear infinite',
				floatLG_Med: 'floatingLG 25s linear infinite',
				floatLG_Med_Reverse: 'floatingLGReverse 25s linear infinite',
				floatLG_Fast: 'floatingLG 20s linear infinite',
				floatLG_Fast_Reverse: 'floatingLGReverse 20s linear infinite',
			},
			keyframes: {
				// Mobile
				floatingSM: {
					'0%': { left: '0%', opacity: '0' },
					'50%': { left: '20%', opacity: '0.8' },
					'100%': { left: '45%', opacity: '0' },
				},
				// Mobile Reverse
				floatingSMReverse: {
					'0%': { left: '45%', opacity: '0' },
					'50%': { left: '20%', opacity: '0.8' },
					'100%': { left: '0%', opacity: '0' },
				},
				// Tablet
				floatingMD: {
					'0%': { left: '0%', opacity: '0' },
					'50%': { left: '35%', opacity: '0.8' },
					'100%': { left: '75%', opacity: '0' },
				},
				// Tablet Reverse
				floatingMDReverse: {
					'0%': { left: '75%', opacity: '0' },
					'50%': { left: '35%', opacity: '0.8' },
					'100%': { left: '0%', opacity: '0' },
				},
				// Desktop
				floatingLG: {
					'0%': { left: '0%', opacity: '0' },
					'50%': { left: '50%', opacity: '0.8' },
					'100%': { left: '85%', opacity: '0' },
				},
				// Desktop Reverse
				floatingLGReverse: {
					'0%': { left: '85%', opacity: '0' },
					'50%': { left: '50%', opacity: '0.8' },
					'100%': { left: '0%', opacity: '0' },
				},
			},
		},
	},
	plugins: [require('@tailwindcss/aspect-ratio')],
};
