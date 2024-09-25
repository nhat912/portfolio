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
				'lg': '1072px',
				'xl': '1072px',
				'2xl': '1072px',
				'3xl': '1072px',
				'4xl': '1072px',
				'5xl': '1072px',
			},
		},
		extend: {
			colors: {
				background: 'var(--background)',
				foreground: 'var(--foreground)',
				primary: 'var(--primary)',
				secondary: 'var(--secondary)',
				accent: 'var(--accent)',
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
