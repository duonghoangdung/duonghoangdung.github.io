import React from "react";
import Marquee from "react-fast-marquee";

const Topbar = () => {
	return (
		<div className="flex items-center gap-6 bg-[#fcfcfc] px-10 py-6 w-full">
			<div className="grow min-w-0">
				<div className="rounded-xl bg-[#ffd88d] text-[#1a1d1f] w-full max-w-full p-2">
					<Marquee gradient={false} className="overflow-hidden">
						<p className="text-sm font-semibold">
							This aggregator is just a tool designed to make your
							trading easier, be aware that DEXTools does not endorse
							or verify any token listed here.
						</p>
					</Marquee>
				</div>
			</div>
			<div className="flex-none flex items-center justify-items-center gap-6">
				<div>
					<a href="#">
						<div className="w-[48px] h-[48px] relative overflow-hidden rounded-full">
							<img
								className="absolute top-0 left-0 right-0 w-full h-full object-cover"
								src="//via.placeholder.com/48x48.png"
								alt=""
							/>
						</div>
					</a>
				</div>
			</div>
		</div>
	);
};
export default Topbar;
