import React from "react";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	children?: React.ReactNode,
	buttonStyle?: string,
	buttonSize?: string,
	className?: string
}

const Button = React.forwardRef<HTMLButtonElement, Props>(
	({ children, buttonStyle, buttonSize, className, ...props }, ref) => {
		let btnClass = 'font-bold transition';
		switch (buttonStyle) {
			case 'primary':
				btnClass += ' text-[#fcfcfc] bg-[#2a85ff] hover:bg-opacity-75';
				break;
			default:
				btnClass += ' text-[#1a1d1f] bg-[#fcfcfc] border-2 border-[#efefef] hover:border-[#efefef] hover:bg-[#efefef]';
				break;
		}
		switch (buttonSize) {
			case 'sm':
				btnClass += ' text-[13px] px-4 py-2 rounded-lg';
				break;
			default:
				btnClass += ' text-[15px] px-5 py-3 rounded-xl';
				break;
		}
		return (
			<button 
                ref={ref} 
                className={`${btnClass} ${className}`}
                {...props}
            >
				{children}
			</button>
		);
	}
);

export default Button;
