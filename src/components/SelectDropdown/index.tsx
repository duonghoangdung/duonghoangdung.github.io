import React, { useState } from "react";
import SVGIcon from "../SVGIcon";

type SelectType = {
	name: string;
	value: string;
};

interface Props {
	options: Array<SelectType>;
	value?: SelectType;
	placeholder?: string;
    onSelect?: (value:SelectType) => void;
}

const SelectDropdown: React.FC<Props> = ({
	options,
	value,
	placeholder = "Please choose an option.",
    onSelect,
	...props
}) => {
	const [isActive, setIsActive] = useState(false);
	return (
		<div className="relative" {...props}>
			<div
				className="border-2 border-[#efefef] rounded-xl px-4 py-2 text-sm font-semibold text-[#6f767e] cursor-pointer"
				onClick={() => setIsActive(true)}
			>
				<span>{value ? value.name : placeholder}</span>
				<SVGIcon name="" w={16} h={16} />
			</div>
			{isActive && (
				<div className="absolute top-full left-0 cursor-pointer">
					{options.map((option) => (
						<div
							onClick={() => {
                                onSelect?.(option);
								setIsActive(false);
							}}
						>
							{option.name}
						</div>
					))}
				</div>
			)}
		</div>
	);
};
export type { SelectType };

export default SelectDropdown;
