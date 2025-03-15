import { orange } from 'tailwindcss/colors';
import defaultTheme from 'tailwindcss/defaultTheme'
const baseConfig = require('./tailwind.config');

module.exports = {
	...baseConfig,
	theme: {
		...baseConfig.theme,
		extend: {
			...baseConfig.theme.extend,
			colors: {
				...baseConfig.theme.extend.colors,
				'light-gray': '#F9FAFB',
				'dark-gray': '#E5E5E5',
				red: {
					500: '#D90429',
				},
				orange: {
					500: 'F59E0B',
				},
				gray: {
					400: '#F9FAFB',
					500: '#E5E5E5',
				},
				accent: {
					400: '#D90429',
					500: '#1F1F1F',
				},
			},
      fontFamily: {
				'sans': ['Montserrat', ...defaultTheme.fontFamily.sans],
			},
		},
	},
}