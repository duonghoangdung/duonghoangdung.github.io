import React from 'react';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string
}

const Input = React.forwardRef<HTMLInputElement, Props> (({ label, id, ...props}, ref) => {
    return (
        <div>
            {label && <label htmlFor={id} className='inline-block text-sm font-semibold text-[#33383f] mb-3'>{label}</label>}
            <input 
                id={id}
                ref={ref}
                className='bg-[#f4f4f4] rounded-xl px-4 py-3 w-full focus-visible:outline-none text-sm font-semibold text-[#33383f] placeholder:text-[#9a9fa5]' 
                {...props}
            />
        </div>
    )
});

export default Input;