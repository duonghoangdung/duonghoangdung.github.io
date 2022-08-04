import SVGIcon from "../SVGIcon";

const Pagination = () => {
	return (
		<div className="flex justify-between items-center mt-5">
			<div>
				<span className="text-xs font-semibold mr-3">Show</span>
				<select
					name=""
					id=""
					className="text-xs font-semibold border-2 border-[#effefef] px-3 py-1 rounded-sm"
				>
					<option value="1">1/Page</option>
					<option value="2">2/Page</option>
					<option value="3">3/Page</option>
					<option value="4">4/Page</option>
					<option value="5">5/Page</option>
					<option value="6">6/Page</option>
					<option value="7">7/Page</option>
					<option value="8">8/Page</option>
					<option value="9">9/Page</option>
					<option value="10">10/Page</option>
				</select>
			</div>
			<div className="text-xs font-bold text-[#6f767e] flex flex-wrap justify-center gap-2 items-center">
				<div className="flex items-center justify-center border border-[#efefef] hover:border-[#1a1d1f] rounded-sm w-6 h-6 hover:text-[#1a1d1f] cursor-pointer transition">
					<SVGIcon name="arrow-left" w={16} h={16} />
				</div>
				<div className="flex items-center justify-center border border-[#efefef] hover:border-[#1a1d1f] rounded-sm w-6 h-6 hover:text-[#1a1d1f] cursor-pointer transition">
					1
				</div>
				<div className="flex items-center justify-center border border-[#efefef] hover:border-[#1a1d1f] rounded-sm w-6 h-6 hover:text-[#1a1d1f] cursor-pointer transition">
					2
				</div>
				<div className="flex items-center justify-center border border-[#efefef] hover:border-[#1a1d1f] rounded-sm w-6 h-6 hover:text-[#1a1d1f] cursor-pointer transition">
					...
				</div>
				<div className="flex items-center justify-center border border-[#efefef] hover:border-[#1a1d1f] rounded-sm w-6 h-6 hover:text-[#1a1d1f] cursor-pointer transition">
					29
				</div>
				<div className="flex items-center justify-center border border-[#efefef] hover:border-[#1a1d1f] rounded-sm w-6 h-6 hover:text-[#1a1d1f] cursor-pointer transition">
					30
				</div>
				<div className="flex items-center justify-center border border-[#efefef] hover:border-[#1a1d1f] rounded-sm w-6 h-6 hover:text-[#1a1d1f] cursor-pointer transition">
					<SVGIcon name="arrow-right" w={16} h={16} />
				</div>
			</div>
		</div>
	);
};

export default Pagination;
