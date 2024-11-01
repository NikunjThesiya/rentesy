import React from "react";
import Typography from "../atoms/Typography";

const Footer = () => {
	return (
		<footer className="w-full flex items-center justify-center sm:justify-between gap-x-5 gap-y-1 flex-wrap px-4 py-4 bg-theme-white border-t border-theme-gray-200">
			<div className="flex items-center gap-x-4 gap-y-1 flex-wrap justify-center text-center">
				<Typography as="p" className="paragraph-2 text-theme-gray-500">
					© 2025 Rentesy. All rights reserved.
				</Typography>
				<a
					href="#"
					target="_blank"
					className="paragraph-2-medium text-theme-gray-900 underline underline-offset-4"
				>
					Privacy Policy
				</a>
				<a
					href="#"
					target="_blank"
					className="paragraph-2-medium text-theme-gray-900 underline underline-offset-4"
				>
					Contact
				</a>
			</div>
			<select className="p-0 border-none focus:ring-0 outline-none paragraph-2">
				<option>English(US)</option>
				<option>English(UK)</option>
				<option>Hindi</option>
			</select>
		</footer>
	);
};

export default Footer;
