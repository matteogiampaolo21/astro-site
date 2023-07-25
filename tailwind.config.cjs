/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			spacing:{
				100: "100vh",
				111: "7vh",
				
				380: "380px",
				500: "500px",
				760: "760px",

				320: "290px",
				768: "728px",
				1280: "1240px",
			}
		},
		screens: {
			'sm':'540px',
			'md': '768px',
      		'lg': '1024px',
			'xl': '1280px',

			'nav-xl': '1040px'
		}
		
	},
	plugins: [],
}
