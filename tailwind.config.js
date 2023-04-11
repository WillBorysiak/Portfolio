/** @type {import('tailwindcss').Config} */

module.exports = {
	content: ['./src/**/*.{js,ts,jsx,tsx}'],
	darkMode: 'class',
	theme: {
		extend: {
			screens: {
				xs: '360px',
			},
			colors: {
				light: '#f3f4f6',
				dark: '#1f2937',
				lightBackground: '#7dd3fc',
				darkBackground: '#334155',
				mobileLightTransition: '#488FD1',
				tabletLightTransition: '#4D94D6',
				desktopLightTransition: '#5195D6',
				wideLightTransition: '#63A1DE',
				extraWideLightTransition: '#84B9E9',
				mobileDarkTransition: '#000F29',
				desktopDarkTransition: '#001431',
				transparentBg: 'rgba(0, 0, 0, 0.2)',
			},
			fontFamily: {
				amatic: ['Amatic SC', 'san-serif'],
				kalam: ['Kalam', 'san-serif'],
			},
			backgroundImage: {
				nightSky: "url('/backgrounds/DarkBackground.jpg')",
				daySky: "url('/backgrounds/LightBackground.jpg')",
			},

			keyframes: {
				// Clouds

				// Mobile
				cloudSM: {
					'0%': { left: '0%', opacity: '0' },
					'50%': { left: '30%', opacity: '0.9' },
					'100%': { left: '60%', opacity: '0' },
				},
				// Mobile Reverse
				cloudSMReverse: {
					'0%': { left: '60%', opacity: '0' },
					'50%': { left: '30%', opacity: '0.9' },
					'100%': { left: '0%', opacity: '0' },
				},
				// Tablet
				cloudMD: {
					'0%': { left: '0%', opacity: '0' },
					'50%': { left: '40%', opacity: '0.9' },
					'100%': { left: '80%', opacity: '0' },
				},
				// Tablet Reverse
				cloudMDReverse: {
					'0%': { left: '80%', opacity: '0' },
					'50%': { left: '40%', opacity: '0.9' },
					'100%': { left: '0%', opacity: '0' },
				},
				// Desktop
				cloudLG: {
					'0%': { left: '0%', opacity: '0' },
					'50%': { left: '50%', opacity: '0.9' },
					'100%': { left: '90%', opacity: '0' },
				},
				// Desktop Reverse
				cloudLGReverse: {
					'0%': { left: '90%', opacity: '0' },
					'50%': { left: '50%', opacity: '0.9' },
					'100%': { left: '0%', opacity: '0' },
				},

				// Stars

				// Mobile
				starSM: {
					'0%': { left: '0%', opacity: '0' },
					'50%': { left: '50%', opacity: '0.9' },
					'100%': { left: '100%', opacity: '0' },
				},
				// Mobile Reverse
				starSMReverse: {
					'0%': { left: '100%', opacity: '0' },
					'50%': { left: '50%', opacity: '0.9' },
					'100%': { left: '0%', opacity: '0' },
				},
				// Tablet
				starMD: {
					'0%': { left: '0%', opacity: '0' },
					'50%': { left: '50%', opacity: '0.9' },
					'100%': { left: '100%', opacity: '0' },
				},
				// Tablet Reverse
				starMDReverse: {
					'0%': { left: '100%', opacity: '0' },
					'50%': { left: '50%', opacity: '0.9' },
					'100%': { left: '0%', opacity: '0' },
				},
				// Desktop
				starLG: {
					'0%': { left: '0%', opacity: '0' },
					'50%': { left: '50%', opacity: '0.9' },
					'100%': { left: '100%', opacity: '0' },
				},
				// Desktop Reverse
				starLGReverse: {
					'0%': { left: '100%', opacity: '0' },
					'50%': { left: '50%', opacity: '0.9' },
					'100%': { left: '0%', opacity: '0' },
				},
			},
		},
	},
	plugins: [],
};
