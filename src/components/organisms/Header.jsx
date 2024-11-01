import Image from "next/image";
import React from "react";
import SearchInput from "../atoms/SearchInput";
import Link from "next/link";
import { ROUTES } from "@/constants/routes";
import { Dropdown } from "flowbite-react";
import { BarIcon, BellIcon, SearchOutlineIcon } from "../atoms/theme-icons";

const Header = ({ setIsSidebarOpen }) => {
	return (
		<header className="w-full flex items-center bg-theme-white justify-between gap-6 px-4 py-2.5 border-b border-theme-gray-200 sticky top-0 z-50">
			<div className="flex items-center gap-6">
				<Link href={ROUTES.overview}>
					<Image
						src="/images/logo.svg"
						alt="Rentesy"
						width={32}
						height={32}
						className="size-8 object-contain"
					/>
				</Link>
				<button onClick={() => setIsSidebarOpen(true)}>
					<BarIcon className="size-6 object-contain md:hidden block cursor-pointer" />
				</button>
				<div className="md:block hidden">
					<SearchInput />
				</div>
			</div>
			<div className="flex items-center gap-3">
				<SearchOutlineIcon className="size-4 object-contain md:hidden block" />
				<BellIcon className="size-6 object-contain md:hidden block" />
				<Dropdown
					label=""
					placement="bottom-end"
					className="shadow-xl rounded-lg"
					renderTrigger={() => (
						<div className="size-8 aspect-square cursor-pointer rounded-full overflow-hidden">
							<Image
								src="/images/avatar/avatar-1.jpeg"
								alt="User Icon"
								width={32}
								height={32}
								className="size-full object-cover"
							/>
						</div>
					)}
				>
					<Dropdown.Item>Profile</Dropdown.Item>
					<Dropdown.Item>Settings</Dropdown.Item>
					<Dropdown.Divider />
					<Dropdown.Item>Logout</Dropdown.Item>
				</Dropdown>
			</div>
		</header>
	);
};

export default Header;
