import React from "react";

interface IContainerProps {
	children: React.ReactNode;
	customClassName?: string;
}

const Container: React.FC<IContainerProps> = ({
	children,
	customClassName,
}) => {
	return (
		<div
			className={customClassName ? `container ${customClassName}` : "container"}
		>
			{children}
		</div>
	);
};

export default Container;
