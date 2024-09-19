import type { Config } from "tailwindcss";

import defaultTheme from 'tailwindcss/defaultTheme';

const config: Config = {
	darkMode: ["class"],
	content: [
		'./pages/**/*.{ts,tsx}',
		'./components/**/*.{ts,tsx}',
		'./app/**/*.{ts,tsx}',
		'./src/**/*.{ts,tsx}'
	],
	theme: {
		screens: {
			'xs': '390px',
			...defaultTheme.screens,
		},
		container: {
			center: true,
			padding: '1rem',
			screens: {
				'lg': '1112px',
				'xl': '1112px',
				'2xl': '1112px',
			},
		},
		extend: {
			colors: {
				background: 'var(--background)',
				foreground: 'var(--foreground)',
				primary: '#F2D76F',
				secondary: '#e97f96',
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			}
		},
	},
	plugins: [require("tailwindcss-animate")],
};
export default config;
