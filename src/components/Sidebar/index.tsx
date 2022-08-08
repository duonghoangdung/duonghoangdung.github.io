import React, { useContext } from "react";
import { CSSTransition } from "react-transition-group";
import { SidebarContext } from './context';
import { SidebarActionKind } from './reducer';
import SwitchBox from "../SwitchBox";
import SidebarMenu from "./SidebarMenu";
import SVGIcon from "../SVGIcon";

const Sidebar = ({ ...props}) => {
	const { state, dispatch } = useContext(SidebarContext);

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
		<CSSTransition
			in={state.active}
			timeout={300}
			classNames="sidebar"
		>
			<div className={`${ state.active ? 'flex' : 'hidden'} md:flex flex-col bg-[#fcfcfc] fixed top-0 left-0 z-30 h-full w-full md:w-80`} {...props}>
				<div className="md:hidden px-6 shadow-[inset_0_-1px_0_#f4f4f4]">
					<button className="flex items-center justify-center text-[#6f767e] p-3" onClick={() => dispatch({type: SidebarActionKind.TOGGLE})}>
						<SVGIcon name="close" w={24} h={24} />
					</button>
				</div>
				<div className="flex flex-col p-6 h-full w-full overflow-y-auto">
					<div className="mb-12 hidden md:block">
						<a href="/">
							<div className="w-[48px] h-[48px] overflow-hidden relative">
								<img
									className="absolute top-0 left-0 w-full h-full object-contain"
									src="https://via.placeholder.com/48x48.png"
									alt=""
								/>
							</div>
						</a>
					</div>
					{menu && <SidebarMenu menu={menu}/>}
					<div className="mt-auto mb-0">
						<div className="flex items-center md:hidden p-3 bg-[#f4f4f4] rounded-xl mb-4">
							<div className="mr-3">
								<img src="//via.placeholder.com/48x48.png" alt="" className="rounded-full w-12 h-12 object-cover"/>
							</div>
							<div>VO THI PHUONG</div>
						</div>
						<SwitchBox />
					</div>
				</div>
			</div>
		</CSSTransition>
	);
};

export default Sidebar;
