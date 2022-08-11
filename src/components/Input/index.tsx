import React from 'react';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string,
    inputStyle?: string
}

const Input = React.forwardRef<HTMLInputElement, Props> (({ label, id, inputStyle, ...props}, ref) => {
    let inputStyleClass = '';

    switch (inputStyle) {
        case 'outline':
            inputStyleClass += 'bg-transparent text-[#33383f] placeholder:text-[#111315/50] border-2 border-[#efefef]';
            break;
    
        default:
            inputStyleClass += 'bg-[#f4f4f4] text-[#33383f] placeholder:text-[#9a9fa5]';
            break;
    }

    return (
        <div>
            {label && <label htmlFor={id} className='inline-block text-sm font-semibold text-[#33383f] mb-3'>{label}</label>}
            <input 
                id={id}
                ref={ref}
                className={`
                    rounded-xl 
                    p-3 
                    w-full
                    focus-visible:outline-none 
                    text-sm 
                    font-semibold 
                    h-[48px] 
                    ${inputStyleClass}
                `}
                {...props}
            />
        </div>
    )
});

export default Input;