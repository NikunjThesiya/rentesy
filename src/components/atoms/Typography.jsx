import React from "react";
import cn from "@/utils";

const Typography = ({ as, className, children, ...props }) => {
	const Component = as || "p";

	const baseStyles = {
		h1: "heading-1",
		h2: "heading-2",
		h3: "heading-3",
		h4: "heading-4",
		h5: "heading-5",
		p: "",
		a: "",
		span: "",
	};

	const combinedClassName = cn(baseStyles[Component], className);

	return (
		<Component className={combinedClassName} {...props}>
			{children}
		</Component>
	);
};

export default Typography;
