import React from "react";
import Card from "../components/Card";
import Pagination from "../components/Pagination";

const Addfund = () => {
	return (
		<div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
			<div className="col-span-1 lg:col-span-2">
				<Card
					title="Addfund infomation"
					cardStyle="b5e4ca"
				>
					<div>
						<div className="bg-[#47a361] px-6 py-7 rounded-lg mb-6">
							<div className="relative text-xl font-semibold text-[#ffffff] mb-6 pl-8">
								<div className="absolute top-0 left-0 h-full w-4 bg-[#ffbc99] rounded"></div>
								<span>Vietcombank</span>
							</div>
							<div className="text-sm font-semibold text-[#ffffff]">
								<div className="mb-6">
									<div className="text-[#efefef] mb-2">
										Bank
									</div>
									<div>Vietcombank</div>
								</div>
								<div className="flex items-center mb-6">
									<div className="grow me-6">
										<div className="text-[#efefef] mb-2">
											Account number
										</div>
										<div>1019556601</div>
									</div>
									<div className="ml-auto mr-0">
										<button className="font-bold text-[#1a1d1f] bg-[#fcfcfc] rounded-xl px-5 py-3">
											Copy
										</button>
									</div>
								</div>
								<div className="flex items-center mb-6">
									<div className="grow me-6">
										<div className="text-[#efefef] mb-2">
											Account owner's name
										</div>
										<div>HA TRI TAM</div>
									</div>
									<div className="ml-auto mr-0">
										<button className="font-bold text-[#1a1d1f] bg-[#fcfcfc] rounded-xl px-5 py-3">
											Copy
										</button>
									</div>
								</div>
								<div className="flex items-center mb-6">
									<div className="grow me-6">
										<div className="text-[#efefef] mb-2">
											Transaction content
										</div>
										<div>CTSC 0399900661</div>
									</div>
									<div className="ml-auto mr-0">
										<button className="font-bold text-[#1a1d1f] bg-[#fcfcfc] rounded-xl px-5 py-3">
											Copy
										</button>
									</div>
								</div>
							</div>
						</div>

						<div className="bg-[#f4f4f4] rounded-lg px-4 py-6">
							<div className="text-lg font-semibold text-[#1d1e1f] mb-2">
								Lưu ý
							</div>
							<ul className="list-disc text-sm font-medium text-[#1a1d1f] pl-4 mb-2">
								<li className="mb-2">
									<p>
										Nội dung CK : CTSC+&lt;khoảng
										cách&gt;+sdt
									</p>
								</li>
								<li className="mb-2">
									<p>
										Khi chuyển khoản quý khách vui lòng ghi
										đúng nội dung ck mà web cung cấp để auto
										nạp số dư.
									</p>
								</li>
								<li className="mb-2">
									<p>
										Nếu quý khách ghi nhầm nội dung ck vui
										lòng chụp ảnh bill chi tiết gửi vào zalo
										hỗ trợ kèm theo nội dung ck đúng.
									</p>
								</li>
								<li>
									<p>Số tiền nạp tối thiểu là 30,000</p>
								</li>
							</ul>
							<p className="text-sm font-medium text-[#ff6a55]">
								*Hệ thống không chịu trách nhiệm nếu nội dung
								nạp không đúng CTSC 0399900661
							</p>
						</div>
					</div>
				</Card>
				<Card
					title="Addfund List"
					cardStyle="ffbc99"
				>
					<table className="table-auto w-full">
						<thead className="text-sm font-semibold text-[#6f767e]">
							<tr>
								<th className="p-4 text-center">#</th>
								<th className="p-4 text-left">Amount</th>
								<th className="p-4 text-left">Content</th>
								<th className="p-4 text-center">Time</th>
							</tr>
						</thead>
						<tbody className="text-sm font-normal text-[#1a1d1f]">
							<tr>
								<td className="border-b border-[#efefef] p-4 text-center">
									1
								</td>
								<td className="border-b border-[#efefef] p-4 text-left">
									100.000
								</td>
								<td className="border-b border-[#efefef] p-4 text-left">
									CTSC 083721389
								</td>
								<td className="border-b border-[#efefef] p-4 text-center">
									2022-06-29 09:29:55
								</td>
							</tr>
							<tr>
								<td className="border-b border-[#efefef] p-4 text-center">
									1
								</td>
								<td className="border-b border-[#efefef] p-4 text-left">
									100.000
								</td>
								<td className="border-b border-[#efefef] p-4 text-left">
									CTSC 083721389
								</td>
								<td className="border-b border-[#efefef] p-4 text-center">
									2022-06-29 09:29:55
								</td>
							</tr>
							<tr>
								<td className="border-b border-[#efefef] p-4 text-center">
									1
								</td>
								<td className="border-b border-[#efefef] p-4 text-left">
									100.000
								</td>
								<td className="border-b border-[#efefef] p-4 text-left">
									CTSC 083721389
								</td>
								<td className="border-b border-[#efefef] p-4 text-center">
									2022-06-29 09:29:55
								</td>
							</tr>
							<tr>
								<td className="border-b border-[#efefef] p-4 text-center">
									1
								</td>
								<td className="border-b border-[#efefef] p-4 text-left">
									100.000
								</td>
								<td className="border-b border-[#efefef] p-4 text-left">
									CTSC 083721389
								</td>
								<td className="border-b border-[#efefef] p-4 text-center">
									2022-06-29 09:29:55
								</td>
							</tr>
							<tr>
								<td className="border-b border-[#efefef] p-4 text-center">
									1
								</td>
								<td className="border-b border-[#efefef] p-4 text-left">
									100.000
								</td>
								<td className="border-b border-[#efefef] p-4 text-left">
									CTSC 083721389
								</td>
								<td className="border-b border-[#efefef] p-4 text-center">
									2022-06-29 09:29:55
								</td>
							</tr>
							<tr>
								<td className="border-b border-[#efefef] p-4 text-center">
									1
								</td>
								<td className="border-b border-[#efefef] p-4 text-left">
									100.000
								</td>
								<td className="border-b border-[#efefef] p-4 text-left">
									CTSC 083721389
								</td>
								<td className="border-b border-[#efefef] p-4 text-center">
									2022-06-29 09:29:55
								</td>
							</tr>
							<tr>
								<td className="border-b border-[#efefef] p-4 text-center">
									1
								</td>
								<td className="border-b border-[#efefef] p-4 text-left">
									100.000
								</td>
								<td className="border-b border-[#efefef] p-4 text-left">
									CTSC 083721389
								</td>
								<td className="border-b border-[#efefef] p-4 text-center">
									2022-06-29 09:29:55
								</td>
							</tr>
							<tr>
								<td className="border-b border-[#efefef] p-4 text-center">
									1
								</td>
								<td className="border-b border-[#efefef] p-4 text-left">
									100.000
								</td>
								<td className="border-b border-[#efefef] p-4 text-left">
									CTSC 083721389
								</td>
								<td className="border-b border-[#efefef] p-4 text-center">
									2022-06-29 09:29:55
								</td>
							</tr>
							<tr>
								<td className="border-b border-[#efefef] p-4 text-center">
									1
								</td>
								<td className="border-b border-[#efefef] p-4 text-left">
									100.000
								</td>
								<td className="border-b border-[#efefef] p-4 text-left">
									CTSC 083721389
								</td>
								<td className="border-b border-[#efefef] p-4 text-center">
									2022-06-29 09:29:55
								</td>
							</tr>
						</tbody>
					</table>
					<Pagination />
				</Card>
			</div>
			<div className="col-span-1">
				<Card
					title="Note"
					cardStyle="note"
				>
					<div>
						<ul className="list-disc text-sm font-medium text-[#1a1d1f] pl-4">
							<li className="mb-2">
								<p>
									If you enter correct deposit information,
									your account will be automatically added
									after the transaction is successful.
								</p>
							</li>
							<li>
								<p>Minimum deposit amount is 30,000 VND</p>
							</li>
						</ul>
					</div>
				</Card>
			</div>
		</div>
	);
};
export default Addfund;
