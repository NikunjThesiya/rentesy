import cn from "@/utils";
import React from "react";
import { SearchOutlineIcon } from "./theme-icons";

const SearchInput = ({ withSearchBtn }) => {
	return (
		<div
			className={cn(
				"flex items-center gap-2.5 border border-theme-gray-300 rounded-lg w-full lg:min-w-[402px] max-w-[402px]",
				withSearchBtn ? "pl-4" : "py-2.5 px-4"
			)}
		>
			<SearchOutlineIcon className="size-5 object-contain" />
			<input
				type="text"
				placeholder="Search"
				className="paragraph-2 border-none outline-none bg-transparent w-full p-0 focus:ring-0"
			/>
			{withSearchBtn && (
				<button className="flex items-center justify-center bg-theme-primary-700 text-theme-white rounded-r-lg px-4 py-2.5 text-xs md:text-sm font-medium">
					Search
				</button>
			)}
		</div>
	);
};

export default SearchInput;
