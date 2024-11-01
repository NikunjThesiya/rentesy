import CommunicationSidebar from "@/components/organisms/CommunicationSidebar";
import React from "react";

const CommunicationLayout = ({ children }) => {
	return (
		<div className="w-full h-full flex">
			<CommunicationSidebar />
			<div className="w-full h-full bg-theme-white flex flex-col justify-between overflow-x-hidden">
				<div className="main-container h-full w-full flex flex-col overflow-y-auto">
					{children}
				</div>
			</div>
		</div>
	);
};

export default CommunicationLayout;
