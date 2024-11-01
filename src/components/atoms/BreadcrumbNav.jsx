"use client";
import React from "react";
import { Breadcrumb } from "flowbite-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const BreadcrumbNav = () => {
	const path = usePathname();
	const nav = path
		?.replace(/\?.+/, "")
		?.split("/")
		?.filter((x) => x);
	return (
		<Breadcrumb className="">
			{nav.length
				? nav.map((value = "-", index) => {
						const isLast = index === nav?.length - 1;
						const to = path?.split(value)[0];
						return isLast ? (
							<Breadcrumb.Item
								className="capitalize heading-5 text-theme-gray-900"
								key={value}
							>
								{value?.replace(/-/gi, " ")}
							</Breadcrumb.Item>
						) : (
							<Breadcrumb.Item
								className="capitalize heading-5 text-theme-gray-900 "
								key={value}
								href={to + value}
							>
								{value.replace(/-/gi, " ")}
							</Breadcrumb.Item>
						);
				  })
				: null}
		</Breadcrumb>
	);
};

export default BreadcrumbNav;
