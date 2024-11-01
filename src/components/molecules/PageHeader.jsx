import React from "react";
import BreadcrumbNav from "../atoms/BreadcrumbNav";
import Typography from "../atoms/Typography";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeftIcon } from "../atoms/theme-icons";

const PageHeader = ({ title, description }) => {
	return (
		<div className="w-full">
			<div className="block md:hidden w-full px-4 py-2 bg-theme-gray-100">
				<BreadcrumbNav />
			</div>
			<div className="w-full flex flex-col px-4 items-start">
				<div className="flex w-full items-center gap-4 py-4 md:border-b border-theme-gray-100">
					<Link href="/" className="md:block hidden">
						<ArrowLeftIcon className="size-5" />
					</Link>
					<div className="flex w-full flex-col items-start gap-1">
						<Typography className="heading-5 text-theme-gray-900">
							{title}
						</Typography>
						<Typography className="text-theme-gray-500 paragraph-2">
							{description}
						</Typography>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PageHeader;
