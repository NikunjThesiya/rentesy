"use client";
import React from "react";
import SearchInput from "../atoms/SearchInput";
import Button from "../atoms/Button";
import { CustomTable } from "../molecules/CustomTable";
import { Dropdown } from "flowbite-react";
import Typography from "../atoms/Typography";
import { TABLE_DUMMY_DATA } from "@/constants";
import {
	CalenderMonthIcon,
	DotsIcon,
	EyeIcon,
	FileExportIcon,
	FilterIcon,
	LinkIcon,
	MessageDotsIcon,
	PaperPlaneIcon,
	TrashOutlinedIcon,
} from "../atoms/theme-icons";

const CommunicationLogTable = () => {
	const communicationHeadCells = [
		{
			accessorKey: "subject",
			label: "Subject",
		},
		{
			accessorKey: "seenAt",
			label: "Seen At",
		},
		{
			accessorKey: "status",
			label: "Status",
		},
		{
			accessorKey: "action",
			label: "",
		},
	];
	const communicationRows = TABLE_DUMMY_DATA.map((data) => ({
		subject: () => (
			<div className="flex items-center gap-4">
				<div className="p-2.5 md:p-3 rounded-lg bg-theme-gray-100">
					<MessageDotsIcon className="size-5 md:size-6 text-theme-gray-800 dark:text-white" />
				</div>
				<div className="flex flex-col items-start text-nowrap">
					<Typography className="text-theme-gray-900 paragraph-1-medium">
						{data.sTitle}
					</Typography>
					<Typography className="text-theme-gray-500 paragraph-2">
						{data.sSummary}
					</Typography>
				</div>
			</div>
		),
		seenAt: () => (
			<div className="text-left flex items-start">
				<div className="text-theme-primary-800 py-1 px-2.5 bg-theme-primary-100 rounded-md flex items-center gap-1 w-auto">
					<CalenderMonthIcon className="size-4 text-theme-primary-800" />
					<Typography className="paragraph-2-medium whitespace-nowrap">
						{data.dSeenAt}
					</Typography>
				</div>
			</div>
		),
		status: () => (
			<div className="flex items-center ">
				<div className="p-3 rounded-full bg-theme-primary-100 text-theme-primary-800 overflow-hidden aspect-square">
					<PaperPlaneIcon className="size-4 md:size-5" />
				</div>
				<div className="bg-theme-primary-100 h-1.5 md:min-w-5 min-w-3" />
				<div className="p-3 rounded-full bg-theme-gray-100 text-theme-gray-500 overflow-hidden aspect-square">
					<EyeIcon className="size-4 md:size-5" />
				</div>
				<div className="bg-theme-gray-100 h-1.5 md:min-w-5 min-w-3" />
				<div className="p-3 rounded-full bg-theme-gray-100 text-theme-gray-500 overflow-hidden aspect-square">
					<LinkIcon className="size-4 md:size-5" />
				</div>
			</div>
		),
		action: () => (
			<Dropdown
				label=""
				dismissOnClick={false}
				placement="bottom-start"
				renderTrigger={() => (
					<button className="hover:bg-theme-gray-100 text-gray-800 p-1.5 rounded-lg">
						<DotsIcon className="size-6 md:size-8" />
					</button>
				)}
				className="border-none rounded-lg shadow-md"
			>
				<Dropdown.Item>
					<div className="flex items-center gap-3 text-theme-gray-700 ">
						<EyeIcon className="size-3.5" />
						<Typography className="paragraph-2-medium">View</Typography>
					</div>
				</Dropdown.Item>
				<Dropdown.Item>
					<div className="flex items-center gap-3 text-theme-red-600">
						<TrashOutlinedIcon className="size-3.5" />
						<Typography className="paragraph-2-medium">Delete</Typography>
					</div>
				</Dropdown.Item>
			</Dropdown>
		),
	}));

	return (
		<div className="w-full h-full flex flex-col items-start gap-4 py-4">
			<div className="flex items-center flex-wrap gap-x-4 gap-y-2 w-full px-4">
				<SearchInput withSearchBtn />
				<Button icon={<FilterIcon className="size-4" />} variant="filled-light">
					Filters
				</Button>
				<Button icon={<FileExportIcon className="size-4" />} variant="outlined">
					Export CSV
				</Button>
			</div>
			<div className="w-full h-full">
				<CustomTable
					headCells={communicationHeadCells}
					rows={communicationRows}
				/>
			</div>
		</div>
	);
};

export default CommunicationLogTable;
