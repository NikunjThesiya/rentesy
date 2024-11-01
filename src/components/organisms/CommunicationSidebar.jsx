"use client";
import React, { Fragment, useEffect, useState } from "react";
import Typography from "../atoms/Typography";
import cn from "@/utils";
import Link from "next/link";
import useWindowSize from "@/hooks/useWindow";
import SideNavLink from "../molecules/SideNavLink";
import { usePathname } from "next/navigation";
import { COMNUMICATION_TABS } from "@/constants/all-navbars";

const CommunicationSidebar = () => {
	const [width] = useWindowSize();
	const pathName = usePathname();
	const [isSidebarCollapsed, setSidebarCollapsed] = useState(false);
	const toggleSidebar = () => {
		setSidebarCollapsed(!isSidebarCollapsed);
	};
	const updateSidebarCollapseState = () => {
		setSidebarCollapsed(width < 768);
	};

	useEffect(() => {
		updateSidebarCollapseState();

		const handleResize = () => {
			updateSidebarCollapseState();
		};

		window.addEventListener("resize", handleResize);
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, [width]);
	return (
		<div
			className={cn(
				`fixed md:sticky top-0 h-full overflow-x-visible self-start bg-theme-white border-r border-theme-gray-200 transition-all z-20`,
				isSidebarCollapsed
					? "w-12 sticky"
					: "w-auto md:w-[320px] pt-[54px] md:pt-0 fixed md:sticky"
			)}
		>
			<button
				className={`absolute bottom-4 shadow-xl border border-theme-gray-200 transition-all bg-theme-white p-2 rounded-lg text-xs sm:text-sm ${
					isSidebarCollapsed
						? "left-1/2 -translate-x-1/2"
						: "right-2 rotate-180"
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
			{!isSidebarCollapsed && (
				<div className="w-full h-full overflow-y-scroll no-scrollbar flex flex-col items-start px-3 py-4">
					<Typography className="paragraph-1-bold text-theme-gray-900">
						Communication
					</Typography>
					{COMNUMICATION_TABS.map((navItem, index) => {
						return (
							<div
								className="flex flex-col items-start w-full"
								key={`communication-layout-wrap-${index}`}
							>
								<hr
									className={cn("w-full", isSidebarCollapsed ? "my-2" : "my-4")}
								/>
								<Typography className="paragraph-2-medium text-theme-gray-500 uppercase">
									{navItem.title}
								</Typography>
								<div className="flex flex-col items-start gap-2 mt-4 w-full">
									{navItem.subTabs.map((subTab, index) => {
										return (
											<SideNavLink
												navItem={subTab}
												isActive={pathName === subTab?.href}
												key={`communication-layout-${index}${index}`}
												hideWhenCollapsed={isSidebarCollapsed}
											/>
										);
									})}
								</div>
							</div>
						);
					})}
				</div>
			)}
		</div>
	);
};

export default CommunicationSidebar;
