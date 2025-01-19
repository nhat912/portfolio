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
			'3xl': '1920px',
		},
		container: {
			center: true,
			padding: '1rem',
			screens: {
				lg: '1072px',
				xl: '1072px',
				'2xl': '1072px',
				'3xl': '1072px',
				'4xl': '1072px',
				'5xl': '1072px'
			}
		},
		extend: {
			colors: {
				background: 'var(--background)',
				foreground: 'var(--foreground)',
				primary: 'var(--primary)',
				secondary: 'var(--secondary)',
				accent: 'var(--accent)',
				'24': '#242427',
				'd9': '#D9D9DE',
				'f7': '#F7F7F8',
				'5e': '#5E5E6B',
				'3a': '#3A3A40',
				'39': '#39393C',
				'92': '#92929E',
				'0f': '#0f0f10',
				'26': '#26262B',
				'4b': '#4B4B53',
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'caret-blink': {
					'0%,70%,100%': {
						opacity: '1'
					},
					'20%,50%': {
						opacity: '0'
					}
				},
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				}
			},
			animation: {
				'caret-blink': 'caret-blink 1.25s ease-out infinite',
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out'
			},
			"washUp-container": {
				center: true,
				padding: '1rem',
				screens: {
					lg: '1272px',
					xl: '1272px',
					'2xl': '1272px',
					'3xl': '1272px',
					'4xl': '1272px',
					'5xl': '1272px'
				}
			},
			fontSize: {
				'2xs': '10px',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
};
export default config;
