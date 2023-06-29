/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			spacing:{
				320: "320px",
				380: "380px",
				500: "500px",
				760: "760px",
				1280: "1240px",
			}
		},
	},
	plugins: [],
}
