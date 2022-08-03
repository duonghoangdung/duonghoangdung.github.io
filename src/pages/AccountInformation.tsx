import React from "react";
import Button from "../components/Button";
import Input from "../components/Input";

const AccountInformation = () => {
	return (
		<div className="bg-[#fcfcfc] p-6 rounded-lg mb-2">
			<div className="mb-8">
				<div className="relative text-xl font-semibold text-[#1a1d1f] mb-6 pl-8">
					<div className="absolute top-0 left-0 h-full w-4 bg-[#b5e4ca] rounded"></div>
					<span>Information</span>
				</div>
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
					<div className="col-span-1">
						<div className="text-sm font-semibold text-[#6f767e] mb-2">
							Full Name
						</div>
						<div className="text-sm font-semibold text-[#1a1d1f]">
							VO THI PHUONG
						</div>
					</div>
					<div className="col-span-1">
						<div className="text-sm font-semibold text-[#6f767e] mb-2">
							Phone number
						</div>
						<div className="text-sm font-semibold text-[#1a1d1f]">
							0399900661
						</div>
					</div>
					<div className="col-span-1">
						<div className="text-sm font-semibold text-[#6f767e] mb-2">
							Balance
						</div>
						<div className="text-sm font-semibold text-[#1a1d1f]">
							1,673.51 đ
						</div>
					</div>
					<div className="col-span-1"></div>
				</div>
			</div>
			<div>
				<div className="relative text-xl font-semibold text-[#1a1d1f] mb-6 pl-8">
					<div className="absolute top-0 left-0 h-full w-4 bg-[#cabdff] rounded"></div>
					<span>Password</span>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
					<div className="col-span-1">
						<Input id="old_password" name="old_password" type="password" label="Old password"/>
					</div>
					<div className="hidden md:block col-span-1"></div>
					<div className="col-span-1">
						<Input id="new_password" name="new_password" type="password" label="New password"/>
					</div>
					<div className="col-span-1">
						<Input id="confirm_new_password" name="confirm_new_password" type="password" label="Confirm new password"/>
					</div>
					<div className="col-span-1">
						<Button type="button">Update password</Button>
					</div>
				</div>
			</div>
		</div>
	);
};
export default AccountInformation;
