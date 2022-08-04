import React from "react";
import AppCard from "../components/AppCard";
import Card from "../components/Card";
import Input from "../components/Input";
import SearchInput from "../components/SearchInput";
import SVGIcon from "../components/SVGIcon";

const RentANumber = () => {
	const apps = [
		{
			name: 'Tinder',
			image: '//via.placeholder.com/40x40.png',
			description: '1.1/sim'
		},
		{
			name: 'Tinder',
			image: '//via.placeholder.com/40x40.png',
			description: '1.1/sim'
		},
		{
			name: 'Tinder',
			image: '//via.placeholder.com/40x40.png',
			description: '1.1/sim'
		},
		{
			name: 'Tinder',
			image: '//via.placeholder.com/40x40.png',
			description: '1.1/sim'
		},
		{
			name: 'Tinder',
			image: '//via.placeholder.com/40x40.png',
			description: '1.1/sim'
		},
		{
			name: 'Tinder',
			image: '//via.placeholder.com/40x40.png',
			description: '1.1/sim'
		}
	]

	return (
		<div className="grid grid-cols-1 md:grid-cols-3 gap-2">
			<div className="col-span-1">
				<Card
					title="Application list"
				>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-2">
						<div className="col-span-1">
							<label htmlFor="">Carrier</label>
						</div>
						<div className="col-span-1">
							<label htmlFor="">Prefix</label>
							<Input placeholder="Ex:0399,0935"></Input>
						</div>
						<div className="col-span-1 md:col-span-2">
							<SearchInput />
						</div>
					</div>
					<div className="text-sm font-medium text-[#6f767e] mb-3">Select to buy</div>
					<div className="grid grid-cols-2 gap-2">
						{apps.map(({ name, image, description}, index) => <AppCard key={index} name={name} image={image} description={description} />)}
					</div>
				</Card>
			</div>
			<div className="col-span-1 md:col-span-2">
				<Card
					title="Codes"
				>
					<div className="overflow-x-auto">
						<table className="w-full">
							<thead className="text-sm font-semibold text-[#6f767e]">
								<tr>
									<th className="p-4 text-center"></th>
									<th className="p-4 text-center">#</th>
									<th className="p-4 text-left">App</th>
									<th className="p-4 text-center">Status</th>
									<th className="p-4 text-center">
										Phone Number
									</th>
									<th className="p-4 text-center">Code</th>
									<th className="p-4 text-center">Time</th>
								</tr>
							</thead>
							<tbody className="text-sm font-normal text-[#1a1d1f]">
								<tr>
									<td className="border-b border-[#efefef] p-4 text-center">
										<a
											className="flex items-center justify-center text-[#6f767e] border border-[#efefef] rounded w-[32px] h-[32px]"
											href="#12312"
										>
											<SVGIcon
												name="table-expand-arrow-left"
												w={24}
												h={24}
											/>
										</a>
									</td>
									<td className="border-b border-[#efefef] p-4 text-center">
										1
									</td>
									<td className="border-b border-[#efefef] p-4 text-left">
										<AppCard name="Tinder" image="//via.placeholder.com/40x40.png" description="1.1/sim" className="bg-transparent p-0"/>
									</td>
									<td className="border-b border-[#efefef] p-4 text-center">
										<span className="font-semibold text-[#83bf6e] px-2 py-1 bg-[#eafae4] rounded">
											Active
										</span>
									</td>
									<td className="border-b border-[#efefef] p-4 text-center">
										098779736
									</td>
									<td className="border-b border-[#efefef] p-4 text-center">
										8884642
									</td>
									<td className="border-b border-[#efefef] p-4 text-center">
										2022-06-29 09:29:55
									</td>
								</tr>
							</tbody>
						</table>
					</div>
					<div className="text-center">
						<SVGIcon name="nodata"/>
					</div>
				</Card>
			</div>
		</div>
	);
};
export default RentANumber;
