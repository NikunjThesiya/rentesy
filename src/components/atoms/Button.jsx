import cn from "@/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Button = ({
	children,
	variant = "default",
	icon,
	className,
	as = "button",
	...rest
}) => {
	const commonClasses = cn(
		"py-2.5 lg:py-3 px-4 lg:px-5 rounded-lg flex items-center justify-center gap-2 font-semibold transition-all font-bold text-center paragraph-2-medium",
		variant === "filled-light"
			? "text-theme-primary-700 border border-theme-gray-200 bg-theme-gray-50 hover:bg-theme-primary-100 hover:border-theme-primary-100"
			: variant === "outlined"
			? "bg-transparent hover:bg-theme-yellow-400 border border-theme-gray-200 hover:bg-theme-gray-200 text-theme-gray-900"
			: "text-theme-white bg-theme-primary-700 hover:bg-theme-primary-700/80 hover:text-theme-white",
		className
	);

	if (as === "button") {
		return (
			<button {...rest} className={commonClasses}>
				{icon}
				{children}
			</button>
		);
	}

	if (as === "link") {
		const { href, ...linkProps } = rest;
		return (
			<Link href={href} {...linkProps} className={commonClasses}>
				{icon && (
					<Image
						src={icon}
						alt="icon"
						width={12}
						height={12}
						className="size-3"
					/>
				)}
				{children}
			</Link>
		);
	}

	if (as === "anchor") {
		const { href, ...anchorProps } = rest;
		return (
			<a href={href} {...anchorProps} className={commonClasses}>
				{icon && (
					<Image
						src={icon}
						alt="icon"
						width={12}
						height={12}
						className="size-3"
					/>
				)}
				{children}
			</a>
		);
	}

	return null;
};

export default Button;
