/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			spacing:{
				500: "500px",
				1280: "1280px",
			}
		},
	},
	plugins: [],
}
