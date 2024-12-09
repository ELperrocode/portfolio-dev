/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode:'class',
	theme: {
		extend: {
		  colors: {
			background: '#020411',//richblack
			secondary: '#011936',//charcoal
			accent: '#9CD08F',//pistachio
			primary: '#96C5F7',//columbia blue
			foreground: '#103900',//pakistan green
			//#272635 rising black'

		  },
		},
	  },
	plugins: [],
}


