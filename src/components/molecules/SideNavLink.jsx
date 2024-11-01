import cn from "@/utils";
import Link from "next/link";
import React from "react";
import Typography from "../atoms/Typography";

const SideNavLink = ({ navItem, isCollapsed, hideWhenCollapsed, isActive }) => {
	if (hideWhenCollapsed) {
		return null;
	}
	return (
		<>
			<Link
				href={navItem.href}
				className={cn(
					"flex items-center gap-3 px-2 rounded-lg hover:bg-theme-gray-100 text-theme-gray-900 transition-all w-full",
					isCollapsed ? "justify-center py-3" : "justify-start py-1.5",
					isActive ? "bg-theme-gray-100" : ""
				)}
			>
				{navItem?.icon && (
					<div
						className={` ${
							isActive ? "text-theme-gray-900" : "text-theme-gray-500"
						}`}
					>
						{navItem?.icon}
					</div>
				)}
				{!isCollapsed && (
					<Typography as="p" className="paragraph-1-medium">
						{navItem.title}
					</Typography>
				)}
			</Link>
			{navItem?.divide && (
				<hr className={cn("w-full", isCollapsed ? "my-2" : "my-2 md:my-6")} />
			)}
		</>
	);
};

export default SideNavLink;
