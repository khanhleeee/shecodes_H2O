/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				// primary colors
				'primary-500': '#FE480D',
				'primary-400': '#FF5F2C',
				'primary-600': '#B33309',
				// secondary colors
				'secondary-200': '#FFA486',
				'secondary-100': '#FFD2C3',
				// main blues
				'main-blue': '#1877F2',
				// grays
				'gray-dark': '#979797',
				'gray-light': '#D9D9D9',
			},
			fontFamily: {
				'sf': 'SF Pro Display',
				'inter': 'Inter',
			},
			backgroundImage: {
				'home-about': 'url("./src/assets/backgrounds/about_bg.png")',
				'home-partners': 'url("./src/assets/backgrounds/pnofmonth_bg.png")',
				'feedback-tag': 'url("./src/assets/imgs/feedback-tag.png")',
			},
			keyframes: {
				scroll: {
					'0%': { 'transform': 'translateX(0)' },
					'100%': { 'transform': 'translateX(calc(-250px * 6))' },
				},
				scrollFoward: {
					'0%': { 'transform': 'translateX(0)' },
					'100%': { 'transform': 'translateX(calc(250px * 3))' },
				},
			},
			animation: {
				scroll: 'scroll 28s linear infinite',
				scrollFoward: 'scrollFoward 10s linear infinite',
			},
		},
	},
	plugins: [],
}
