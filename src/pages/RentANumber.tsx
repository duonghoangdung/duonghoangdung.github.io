import React from "react";
import AppCard from "../components/AppCard";
import Card from "../components/Card";
import Input from "../components/Input";
import Popper from "../components/Popper";
import SearchInput from "../components/SearchInput";
import Select from "../components/Select";
import SVGIcon from "../components/SVGIcon";
import CodesTableRow from "../components/Table/CodesTableRow"
import CodesTableRowAlt from "../components/Table/CodesTableRowAlt";

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
		<div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
			<div className="col-span-1">
				<Card
					title="Application list"
				>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-3">
						<div className="col-span-1">
							<label className="inline-block text-sm font-semibold text-[#33383f] mb-3">Carrier</label>
							<Select className="w-full">
								<option>All</option>
							</Select>
						</div>
						<div className="col-span-1">
							<Input label="Prefix" placeholder="Ex:0399,0935" inputStyle="outline"/>
						</div>
						<div className="col-span-1 md:col-span-2">
							<SearchInput />
						</div>
					</div>
					<div className="text-sm font-medium text-[#6f767e] mb-3">Select to buy</div>
					<div className="grid grid-cols-2 gap-2">
						{apps.map(({ name, image, description}, index) => (
							<Popper content={name} key={index}><a href="#"><AppCard name={name} image={image} description={description}/></a></Popper>
						))}
					</div>
				</Card>
			</div>
			<div className="col-span-1 lg:col-span-2">
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
								<CodesTableRow />
								<CodesTableRowAlt />
							</tbody>
						</table>
					</div>
					<div className="text-center">
						<SVGIcon name="nodata" w={224} h={251}/>
					</div>
				</Card>
			</div>
		</div>
	);
};
export default RentANumber;
