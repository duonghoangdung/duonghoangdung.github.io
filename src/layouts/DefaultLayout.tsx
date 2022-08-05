import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import { SidebarProvider } from "../components/Sidebar/context";
import Topbar from "../components/Topbar";

interface Props {
	children?: React.ReactNode;
	title?: string;
}

const DefaultLayout: React.FC<Props> = ({ children, title, ...props }) => {

	useEffect(() => {
		document.title = title || "";
	}, [title]);

	return (
		<SidebarProvider>
			<div className="w-full h-full" {...props}>
				<Sidebar/>
				<div className="md:pl-80">
					<Topbar />
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
		</SidebarProvider>
	);
};
export default DefaultLayout;
