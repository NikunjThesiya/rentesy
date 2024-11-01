"use client";
import React, { Fragment, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Typography from "../atoms/Typography";
import Button from "../atoms/Button";
import cn from "@/utils";
import useWindowSize from "@/hooks/useWindow";
import { Drawer } from "flowbite-react";
import SideNavLink from "../molecules/SideNavLink";
import { usePathname } from "next/navigation";
import { SIDEBAR_NAV } from "@/constants/all-navbars";
import { CartPlusIcon } from "../atoms/theme-icons";

const SidebarContent = ({
	isSidebarCollapsed,
	setIsSidebarOpen,
	toggleSidebar,
}) => {
	const pathName = usePathname();
	return (
		<>
			<div className="flex items-center justify-between gap-6 px-3 py-2.5 sticky top-0 bg-theme-white md:hidden">
				<Image
					src="/images/logo.svg"
					alt="Rentesy"
					width={32}
					height={32}
					className="size-8 object-contain"
				/>
				<button
					onClick={() => setIsSidebarOpen(false)}
					className="bg-theme-primary-800/10 text-theme-primary-800 p-1.5 rounded-full aspect-square"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						fill="currentColor"
						className="size-5"
					>
						<path
							fillRule="evenodd"
							d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
							clipRule="evenodd"
						/>
					</svg>
				</button>
			</div>
			<button
				className={`absolute -right-4 top-20 shadow-xl border border-theme-gray-200 transition-all bg-theme-white p-2 rounded-full text-xs sm:text-sm md:block hidden ${
					isSidebarCollapsed ? "" : "rotate-180"
				}`}
				onClick={toggleSidebar}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth={1.5}
					stroke="currentColor"
					className="size-4"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="m8.25 4.5 7.5 7.5-7.5 7.5"
					/>
				</svg>
			</button>
			<div className="h-full w-full flex flex-col items-start gap-2 px-3 pb-6 overflow-y-scroll no-scrollbar">
				<Button
					icon={isSidebarCollapsed ? null : <CartPlusIcon className="size-4" />}
					className={cn(
						"w-full mt-2 md:mt-6 mb-4",
						isSidebarCollapsed ? " !p-3.5" : ""
					)}
				>
					{isSidebarCollapsed ? (
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
							className="size-4"
						>
							<path
								fillRule="evenodd"
								d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z"
								clipRule="evenodd"
							/>
						</svg>
					) : (
						"Create New"
					)}
				</Button>
				{SIDEBAR_NAV.map((navItem, index) => {
					return (
						<SideNavLink
							navItem={navItem}
							isActive={
								pathName === navItem.href ||
								(navItem.href !== "/" && pathName.startsWith(navItem.href))
							}
							key={index}
							isCollapsed={isSidebarCollapsed}
						/>
					);
				})}
			</div>
		</>
	);
};

const Sidebar = ({ isSidebarOpen, setIsSidebarOpen }) => {
	const [isSidebarCollapsed, setSidebarCollapsed] = useState(false);
	const [width] = useWindowSize();
	const toggleSidebar = () => {
		setSidebarCollapsed(!isSidebarCollapsed);
	};

	if (width < 768) {
		return (
			<Drawer
				className="z-50 h-full no-scrollbar p-0 max-w-full"
				open={isSidebarOpen}
				onClose={() => setIsSidebarOpen(false)}
			>
				<SidebarContent
					isSidebarCollapsed={isSidebarCollapsed}
					setIsSidebarOpen={setIsSidebarOpen}
					toggleSidebar={toggleSidebar}
				/>
			</Drawer>
		);
	} else {
		return (
			<>
				<div
					className={cn(
						`sticky top-0 h-full overflow-x-visible self-start bg-theme-white border-r border-theme-gray-200 transition-all md:block hidden z-50`,
						isSidebarCollapsed ? "lg:w-20" : "w-auto md:w-[320px]"
					)}
				>
					<SidebarContent
						isSidebarCollapsed={isSidebarCollapsed}
						setIsSidebarOpen={setIsSidebarOpen}
						toggleSidebar={toggleSidebar}
					/>
				</div>
			</>
		);
	}
};

export default Sidebar;
