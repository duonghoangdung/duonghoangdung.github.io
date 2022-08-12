import React from 'react';

type Props = React.InputHTMLAttributes<HTMLSelectElement>

const Input = React.forwardRef<HTMLSelectElement, Props> (({children, className, ...props}, ref) => {
    return (
        <select className={`text-sm font-semibold text-[#1a1d1f] border-2 border-[#efefef] rounded-xl bg-[#fcfcfc] p-3 h-[48px] ${className}`} ref={ref} {...props}>
            {children}
        </select>
    )
});

Input.displayName = 'Input';

export default Input;