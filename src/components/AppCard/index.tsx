import React from "react";

interface Props {
    name: string,
	image: string,
    description?: string,
    className?: string
}

const Button: React.FC<Props> = ({name, image, description, className, ...props }) => {
	return (
		<div className={`flex items-center bg-[#f4f4f4] p-2 rounded-xl ${className || ''}`} {...props}>
			<img className="w-[40px] h-[40px] rounded-full object-cover mr-3" src={image} alt={name} />
			<div>
				<div className="text-sm font-semibold text-[#1a1d1f]">{name}</div>
				{description && <div className="text-xs font-semibold text-[#6f767e] mt-1">{description}</div>}
			</div>
		</div>
	);
};

export default Button;
