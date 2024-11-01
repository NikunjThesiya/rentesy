"use client";

import { Checkbox, Pagination, Table } from "flowbite-react";
import { useState } from "react";
import Typography from "../atoms/Typography";
import { ChevronSortIcon } from "../atoms/theme-icons";

export function CustomTable({ headCells, rows }) {
	const [currentPage, setCurrentPage] = useState(1);

	const onPageChange = (page) => setCurrentPage(page);
	return (
		<div className="flex flex-col w-full h-full gap-4">
			<div className="overflow-x-auto h-full">
				<Table hoverable className="h-full">
					<Table.Head>
						<Table.HeadCell className="p-4">
							<Checkbox color="#1A56DB" />
						</Table.HeadCell>
						{headCells?.map((cell, index) => {
							return (
								<Table.HeadCell key={index}>
									<div className="flex items-center gap-1.5">
										{cell?.label}{" "}
										{cell?.label && (
											<ChevronSortIcon className="size-3 text-theme-gray-500" />
										)}
									</div>
								</Table.HeadCell>
							);
						})}
					</Table.Head>
					<Table.Body className="divide-y">
						{rows?.map((row, rowIndex) => (
							<Table.Row
								key={rowIndex}
								className="bg-theme-white dark:border-gray-700 dark:bg-gray-800"
							>
								<Table.Cell className="p-4">
									<Checkbox color="#1A56DB" />
								</Table.Cell>
								{headCells.map((cell, cellIndex) => (
									<Table.Cell key={cellIndex}>
										{row[cell.accessorKey]()}
									</Table.Cell>
								))}
							</Table.Row>
						))}
					</Table.Body>
				</Table>
			</div>
			<div className="w-full flex items-center justify-center md:justify-between gap-4 flex-wrap px-4 mb-5">
				<Typography className="paragraph-2">
					Showing <span className="font-bold">1-10</span> of{" "}
					<span className="font-bold">1000</span>
				</Typography>
				<Pagination
					currentPage={currentPage}
					totalPages={100}
					onPageChange={onPageChange}
					previousLabel=""
					nextLabel=""
					showIcons
				/>
			</div>
		</div>
	);
}
