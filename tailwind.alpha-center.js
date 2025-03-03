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
				'light-gray': '#bacad2',
				'dark-gray': '#6c6d70',
				red: {
					500: '#df202a',
				}
			},
      fontFamily: {
				'sans': ['Montserrat', ...defaultTheme.fontFamily.sans],
			},
		},
	},
}