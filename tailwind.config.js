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
				// Clouds

				// Mobile
				cloud_S_Slow: 'cloudSM 30s linear infinite',
				cloud_S_Slow_Reverse: 'cloudSMReverse 30s linear infinite',
				cloud_S_Med: 'cloudSM 20s linear infinite',
				cloud_S_Med_Reverse: 'cloudSMReverse 20s linear infinite',
				cloud_S_Fast: 'cloudSM 5s linear infinite',
				cloud_S_Fast_Reverse: 'cloudSMReverse 5s linear infinite',
				// Tablet
				cloud_M_Slow: 'cloudMD 25s linear infinite',
				cloud_M_Slow_Reverse: 'cloudMDReverse 25s linear infinite',
				cloud_M_Med: 'cloudMD 20s linear infinite',
				cloud_M_Med_Reverse: 'cloudMDReverse 20s linear infinite',
				cloud_M_Fast: 'cloudMD 10s linear infinite',
				cloud_M_Fast_Reverse: 'cloudMDReverse 10s linear infinite',
				// Desktop
				cloud_L_Slow: 'cloudLG 35s linear infinite',
				cloud_L_Slow_Reverse: 'cloudLGReverse 35s linear infinite',
				cloud_L_Med: 'cloudLG 25s linear infinite',
				cloud_L_Med_Reverse: 'cloudLGReverse 25s linear infinite',
				cloud_L_Fast: 'cloudLG 20s linear infinite',
				cloud_L_Fast_Reverse: 'cloudLGReverse 20s linear infinite',

				// Stars

				// Mobile
				star_S_Fast: 'starSM 2s linear infinite',
				star_S_Fast_Reverse: 'starSMReverse 2s linear infinite',
			},

			keyframes: {
				// Clouds

				// Mobile
				cloudSM: {
					'0%': { left: '0%', opacity: '0' },
					'50%': { left: '20%', opacity: '0.8' },
					'100%': { left: '45%', opacity: '0' },
				},
				// Mobile Reverse
				cloudSMReverse: {
					'0%': { left: '45%', opacity: '0' },
					'50%': { left: '20%', opacity: '0.8' },
					'100%': { left: '0%', opacity: '0' },
				},
				// Tablet
				cloudMD: {
					'0%': { left: '0%', opacity: '0' },
					'50%': { left: '35%', opacity: '0.8' },
					'100%': { left: '75%', opacity: '0' },
				},
				// Tablet Reverse
				cloudMDReverse: {
					'0%': { left: '75%', opacity: '0' },
					'50%': { left: '35%', opacity: '0.8' },
					'100%': { left: '0%', opacity: '0' },
				},
				// Desktop
				cloudLG: {
					'0%': { left: '0%', opacity: '0' },
					'50%': { left: '50%', opacity: '0.8' },
					'100%': { left: '85%', opacity: '0' },
				},
				// Desktop Reverse
				cloudLGReverse: {
					'0%': { left: '85%', opacity: '0' },
					'50%': { left: '50%', opacity: '0.8' },
					'100%': { left: '0%', opacity: '0' },
				},

				// Stars

				// Mobile
				starSM: {
					'0%': { left: '0%', opacity: '0' },
					'50%': { left: '50%', opacity: '0.8' },
					'100%': { left: '100%', opacity: '0' },
				},
				// Mobile Reverse
				starSMReverse: {
					'0%': { left: '100%', opacity: '0' },
					'50%': { left: '50%', opacity: '0.8' },
					'100%': { left: '0%', opacity: '0' },
				},
			},
		},
	},
	plugins: [require('@tailwindcss/aspect-ratio')],
};
