/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");

module.exports = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/constants/*.{js,ts,jsx,tsx,mdx}",
		"./src/utils/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
		flowbite.content(),
	],
	theme: {
		extend: {
			colors: {
				theme: {
					primary: {
						100: "#E1EFFE",
						700: "#1A56DB",
						800: "#1E429F",
					},
					gray: {
						50: "#F9FAFB",
						100: "#F3F4F6",
						200: "#E5E7EB",
						300: "#D1D5DB",
						400: "#9CA3AF",
						500: "#6B7280",
						700: "#374151",
						800: "#1F2A37",
						900: "#111928",
					},
					red: {
						600: "#E02424",
					},
					white: "#FFFFFF",
				},
			},
		},
	},
	plugins: [flowbite.plugin()],
};
