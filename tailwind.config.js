/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				valorant: ['"Valorant"'],
			  },
			backgroundImage: {
				'custom-gradient': 'linear-gradient(180deg, rgba(255, 255, 255, 1) 0%, rgba(196, 131, 0, 1) 100%)',
			  },
			backgroundSize: {
				'full': '100% 100%', 
			  },
			spacing: {
				small1: '4px',
				small2: '8px',
				small3: '12px',
				default: '16px',
				medium1: '20px',
				medium2: '24px',
				medium3: '32px',
				large1: '40px',
				large2: '48px',
				large3: '56px'
			},
			animation: {
				'reverse-bounce': 'reverse-bounce 1s infinite '
			},
			keyframes: {
				// 'reverse-bounce': {
				// 	'0%, 20%, 50%, 80%, 100%': { transform: 'translateY(0)' },
				// 	'40%': { transform: 'translateY(30px)' },
				// 	'60%': { transform: 'translateY(15px)' }
				// }
				'reverse-bounce': {
					'0%, 100%': {
						transform: 'translateY(0) ',
						animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)'
					},
					'50%': {
						transform: 'translateY(-25%)',
						animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)'
					}
				}
			}
		},
		screens: {
			tablet: { max: '1023px' },
			phone: { max: '767px' }
		}
	},
	
};
