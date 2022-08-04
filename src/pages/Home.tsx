import React from "react";
import Card from "../components/Card";
import Table, { ColumnType, RowType } from "../components/Table";
import { Chart as ChartJS, ArcElement, Tooltip } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import Pagination from "../components/Pagination";

ChartJS.register(ArcElement, Tooltip);

const Home = () => {
	const columns:ColumnType[] = [
        {
            label: "#",
            accessor: "stt"
        },
        {
            label: "App",
            accessor: "app"
        },
        {
            label: "Done",
            accessor: "done"
        },
        {
            label: "Expired",
            accessor: "expired"
        }
    ]; 
    const data:RowType[] = [
        {
			stt: "1",
			app: 'Tinder',
			done: '100.000',
			expired: '123'
		}
    ]; 
	const dataChart = {
		labels: ['Facebook', 'Tinder', 'Tinder', 'Tinder', 'Tinder', 'Microsoft/hotmail/outlook'],
		datasets: [
		  {
			label: '# of Votes',
			data: [12, 19, 3, 5, 2, 3],
			backgroundColor: [
			  'rgba(24, 144, 255, 1)',
			  'rgba(19, 194, 194, 1)',
			  'rgba(82, 196, 26, 1)',
			  'rgba(250, 219, 20, 1)',
			  'rgba(255, 77, 79, 1)',
			  'rgba(114, 46, 209, 1)',
			],
			borderColor: [
			  'rgba(24, 144, 255, 1)',
			  'rgba(19, 194, 194, 1)',
			  'rgba(82, 196, 26, 1)',
			  'rgba(250, 219, 20, 1)',
			  'rgba(255, 77, 79, 1)',
			  'rgba(114, 46, 209, 1)',
			],
			borderWidth: 1,
		  },
		],
	};
	return (
		<div className="grid grid-cols-1 md:grid-cols-3 gap-2">
			<div className="col-span-1">
				<Card
					title="Account information"
					cardStyle="cabdff"
				>
					<div className="mb-6">
						<div className="text-sm font-semibold text-[#6f767e] mb-2">
							Full Name
						</div>
						<div className="text-sm font-semibold text-[#1a1d1f]">
							VO THI PHUONG
						</div>
					</div>
					<div className="mb-6">
						<div className="text-sm font-semibold text-[#6f767e] mb-2">
							Phone number
						</div>
						<div className="text-sm font-semibold text-[#1a1d1f]">
							0399900661
						</div>
					</div>
					<div className="mb-6">
						<div className="text-sm font-semibold text-[#6f767e] mb-2">
							Balance
						</div>
						<div className="text-sm font-semibold text-[#1a1d1f]">
							1,673.51 đ
						</div>
					</div>
				</Card>
			</div>
			<div className="col-span-1 md:col-span-2">
				<Card
					title="OTP"
					cardStyle="ffbc99"
				>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						<div className="col-span-1 flex items-center justify-center">
							<Doughnut data={dataChart} className="max-w-[250px]"/>
						</div>
						<div className="col-span-1 overflow-x-auto">
							<table className="text-sm font-medium text-[#1a1d1f] w-full">
								<tr>
									<td className="font-semibold text-left px-1 py-2">
										<div className="flex items-center">
											<span className="w-[8px] h-[8px] rounded-full bg-[#1890ff] mr-2"></span>
											Facebook
										</div>
									</td>
									<td className="text-right text-[#6f767e] px-1 py-2">
										28.79%
									</td>
									<td className="text-right px-1 py-2">
										1,000
									</td>
								</tr>
								<tr>
									<td className="font-semibold text-left px-1 py-2">
										<div className="flex items-center">
											<span className="w-[8px] h-[8px] rounded-full bg-[#13c2c2] mr-2"></span>
											Tinder
										</div>
									</td>
									<td className="text-right text-[#6f767e] px-1 py-2">
										28.79%
									</td>
									<td className="text-right px-1 py-2">
										1,000
									</td>
								</tr>
								<tr>
									<td className="font-semibold text-left px-1 py-2">
										<div className="flex items-center">
											<span className="w-[8px] h-[8px] rounded-full bg-[#52c41a] mr-2"></span>
											Tinder
										</div>
									</td>
									<td className="text-right text-[#6f767e] px-1 py-2">
										28.79%
									</td>
									<td className="text-right px-1 py-2">
										1,000
									</td>
								</tr>
								<tr>
									<td className="font-semibold text-left px-1 py-2">
										<div className="flex items-center">
											<span className="w-[8px] h-[8px] rounded-full bg-[#fadb14] mr-2"></span>
											Tinder
										</div>
									</td>
									<td className="text-right text-[#6f767e] px-1 py-2">
										28.79%
									</td>
									<td className="text-right px-1 py-2">
										1,000
									</td>
								</tr>
								<tr>
									<td className="font-semibold text-left px-1 py-2">
										<div className="flex items-center">
											<span className="w-[8px] h-[8px] rounded-full bg-[#ff4d4f] mr-2"></span>
											Tinder
										</div>
									</td>
									<td className="text-right text-[#6f767e] px-1 py-2">
										28.79%
									</td>
									<td className="text-right px-1 py-2">
										1,000
									</td>
								</tr>
								<tr>
									<td className="font-semibold text-left px-1 py-2">
										<div className="flex items-center">
											<span className="w-[8px] h-[8px] rounded-full bg-[#722ed1] mr-2"></span>
											Microsoft/hotmail/outlook
										</div>
									</td>
									<td className="text-right text-[#6f767e] px-1 py-2">
										28.79%
									</td>
									<td className="text-right px-1 py-2">
										1,000
									</td>
								</tr>
							</table>
						</div>
					</div>
				</Card>
				<Card
					title="Detail"
					cardStyle="ffbc99"
				>
					<div className="overflow-x-auto">
						<Table columns={columns} data={data} />
						<Pagination />
					</div>
				</Card>
			</div>
		</div>
	);
};
export default Home;
