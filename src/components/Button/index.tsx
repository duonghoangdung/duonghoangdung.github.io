import React from "react";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	children?: React.ReactNode,
	buttonStyle?: string
}

const Button = React.forwardRef<HTMLButtonElement, Props>(
	({ children, ...props }, ref) => {
		return (
			<button 
                ref={ref} 
                className="text-base font-semibold text-[#1a1d1f] border-[#efefef] border-2 border-solid rounded-xl px-5 py-3 hover:border-[#efefef] hover:bg-[#efefef] transition"
                {...props}
            >
				{children}
			</button>
		);
	}
);

export default Button;
