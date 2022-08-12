import Card from '../components/Card';
import CopyToClipboard from '../components/CopyToClipboard';
import Pagination from '../components/Pagination';

const Addfund = () => {
	return (
		<div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
			<div className="col-span-1 lg:col-span-2">
				<Card
					title="Addfund infomation"
					cardStyle="b5e4ca"
				>
						<div className="bg-[#f4f4f4] p-6 rounded-lg mb-6 text-sm font-semibold">
							<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
								<div>
									<div className="text-[#6f767e] mb-2">Bank</div>
									<div className="text-[#1a1d1f]">Vietcombank</div>
								</div>
								<div>
									<div className="text-[#6f767e] mb-2">Account number</div>
									<div className="text-[#1a1d1f]">1019556601 
										<CopyToClipboard>
											{({ copy, setReferenceElement }) => <button ref={setReferenceElement} onClick={() => copy('1019556601')} className="text-[#2a85ff] hover:opacity-75 transition-opacity ml-2">Copy</button>}
										</CopyToClipboard>
									</div>
								</div>
								<div>
									<div className="text-[#6f767e] mb-2">Account owner&apos;s name</div>
									<div className="text-[#1a1d1f]">HA TRI TAM
										<CopyToClipboard>
											{({ copy, setReferenceElement }) => <button ref={setReferenceElement} onClick={() => copy('HA TRI TAM')} className="text-[#2a85ff] hover:opacity-75 transition-opacity ml-2">Copy</button>}
										</CopyToClipboard>
									</div>
								</div>
								<div>
									<div className="text-[#6f767e] mb-2">Transaction content</div>
									<div className="text-[#1a1d1f]">CTSC 0399900661 
										<CopyToClipboard>
											{({ copy, setReferenceElement }) => <button ref={setReferenceElement} onClick={() => copy('1019556601')} className="text-[#2a85ff] hover:opacity-75 transition-opacity ml-2">Copy</button>}
										</CopyToClipboard>
									</div>
								</div>
							</div>
						</div>

						<div className="text-lg font-semibold text-[#ff6a55] mb-2">Lưu ý</div>
						<ul className="list-disc text-sm leading-6 font-normal text-[#1a1d1f] pl-4 mb-4">
							<li>Nội dung CK : CTSC+&lt;khoảng cách&gt;+sdt</li>
							<li>Khi chuyển khoản quý khách vui lòng ghi đúng nội dung ck mà web cung cấp để auto nạp số dư.</li>
							<li>Nếu quý khách ghi nhầm nội dung ck vui lòng chụp ảnh bill chi tiết gửi vào zalo hỗ trợ kèm theo nội dung ck đúng.</li>
							<li>Số tiền nạp tối thiểu là 30,000</li>
						</ul>
						<p className="text-sm font-semibold text-[#111315]">*Hệ thống không chịu trách nhiệm nếu nội dung nạp không đúng CTSC 0399900661</p>
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
					<Pagination total={40}/>
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
