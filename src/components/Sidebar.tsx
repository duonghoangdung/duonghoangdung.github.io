import React from "react";
import SwitchBox from "./SwitchBox";
import SidebarMenu from "./SidebarMenu";
import SVGIcon from "./SVGIcon";

const Sidebar = () => {
	const menu = [
		{
			text: "Home",
			link: "/",
			icon: "home",
		},
		{
			text: "OTP",
			link: "/otp",
			icon: "sim",
			children: [
				{
					text: "Rent A Number",
					link: "/rent-a-number",
				},
				{
					text: "OTP History",
					link: "/otp-history",
				},
			],
		},
		{
			text: "Account Infomation",
			link: "/account-information",
			icon: "profile",
		},
		{
			text: "Addfund",
			link: "/addfund",
			icon: "bank",
		},
		{
			text: "Balance Log",
			link: "/balance-log",
			icon: "wallet",
		},
		{
			text: "API Document",
			link: "/api-document",
			icon: "web-development",
		},
	];
	return (
		<div className="hidden md:flex flex-col bg-[#fcfcfc] fixed top-0 left-0 z-50 h-full w-full md:w-80">
			<div className="md:hidden px-6 shadow-[inset_0_-1px_0_#f4f4f4]">
				<button className="flex items-center justify-center text-[#6f767e] p-3">
					<SVGIcon name="close" w={24} h={24} />
				</button>
			</div>
			<div className="flex flex-col p-6 h-full w-full">
				<div className="mb-12 hidden md:block">
					<a href="/">
						<div className="w-[48px] h-[48px] overflow-hidden relative">
							<img
								className="absolute top-0 left-0 w-full h-full object-contain"
								src="//via.placeholder.com/48x48.png"
								alt=""
							/>
						</div>
					</a>
				</div>
				{menu && <SidebarMenu menu={menu} />}
				<div className="mt-auto mb-0">
					<SwitchBox />
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
