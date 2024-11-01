"use client";

import useWindowSize from "@/hooks/useWindow";
import { Accordion } from "flowbite-react";

export function CustomAccordian({ title, index, children }) {
	const [width] = useWindowSize();
	return (
		<Accordion
			collapseAll={width < 768}
			alwaysOpen={width >= 768}
			className="w-full border-x-0 border-t-0 md:border-t-0 rounded-none"
		>
			<Accordion.Panel collapseAll={width < 768}>
				<Accordion.Title className="heading-5 text-theme-gray-900 px-0 py-3 bg-transparent focus:bg-transparent hover:bg-transparent outline-none focus:ring-0 custom-accordion-title">
					<div className="flex items-center gap-2">
						<div className="paragraph-2 flex md:hidden items-center justify-center bg-theme-gray-500 text-theme-white size-5 aspect-square rounded-full">
							{index}
						</div>
						<p>{title}</p>
					</div>
				</Accordion.Title>
				<Accordion.Content className="px-0">{children}</Accordion.Content>
			</Accordion.Panel>
		</Accordion>
	);
}
