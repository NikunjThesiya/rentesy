"use client";

import React from "react";
import Header from "../../organisms/Header";
import Footer from "../../organisms/Footer";
import Sidebar from "../../organisms/Sidebar";
import { Flowbite } from "flowbite-react";

const customTheme = {
	pagination: {
		pages: {
			previous: {
				base: "ml-0 rounded-l-lg border border-gray-300 bg-white px-2 md:px-3 py-2 leading-tight text-gray-500 enabled:hover:bg-gray-100 enabled:hover:text-gray-700",
				icon: "size-4 md:size-5",
			},
			next: {
				base: "rounded-r-lg border border-gray-300 bg-white px-2 md:px-3 py-2 leading-tight text-gray-500 enabled:hover:bg-gray-100 enabled:hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 enabled:dark:hover:bg-gray-700 enabled:dark:hover:text-white",
				icon: "size-4 md:size-5",
			},
			selector: {
				base: "w-10 md:w-12 border border-gray-300 bg-white py-2 leading-tight text-gray-500 enabled:hover:bg-gray-100 text-xs md:text-sm enabled:hover:text-gray-700",
				active:
					"bg-theme-primary-100 text-theme-primary-700 hover:text-cyan-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white",
				disabled: "cursor-not-allowed opacity-50",
			},
		},
	},
};

const AppLayout = ({ children }) => {
	const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);
	return (
		<Flowbite theme={{ theme: { ...customTheme } }}>
			<Header setIsSidebarOpen={setIsSidebarOpen} />
			<main className="h-[calc(100vh-52px)] md:h-[calc(100vh-68px)]">
				<div className="w-full h-full flex">
					<Sidebar
						isSidebarOpen={isSidebarOpen}
						setIsSidebarOpen={setIsSidebarOpen}
					/>
					<div className="w-full h-full bg-theme-white flex flex-col justify-between overflow-x-hidden">
						<div className="main-container h-full w-full flex flex-col gap-6 overflow-y-auto">
							{children}
						</div>
						<Footer />
					</div>
				</div>
			</main>
		</Flowbite>
	);
};

export default AppLayout;
