import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

interface Props {
	children?: React.ReactNode;
	title?: string;
}

const DefaultLayout: React.FC<Props> = ({ children, title, ...props }) => {

	const [isMenuActive, setIsMenuActive] = useState(false);

	useEffect(() => {
		document.title = title || "";
	}, [title]);

	return (
		<div className="w-full h-full" {...props}>
			<Sidebar isMenuActive={isMenuActive} onMenuToggle={() => setIsMenuActive(!isMenuActive)}/>
			<div className="md:pl-80">
				<Topbar onMenuToggle={() => setIsMenuActive(!isMenuActive)}/>
				<div className="px-4 py-6 md:p-10">
					{title && (
						<div className="text-[32px] md:text-[40px] font-semibold text-[#272b30] mb-4 md:mb-6">
							{title}
						</div>
					)}
					{children}
				</div>
			</div>
		</div>
	);
};
export default DefaultLayout;
