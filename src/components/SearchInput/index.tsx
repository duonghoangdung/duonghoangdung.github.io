import React from 'react';
import SVGIcon from '../SVGIcon';

interface Props extends React.InputHTMLAttributes<HTMLInputElement>{
    placeholder?: string,
}

const SearchInput = React.forwardRef<HTMLInputElement, Props>(({ placeholder = 'Search products', ...props}, ref) => {
    return (
        <div className="flex items-center bg-[#f4f4f4] rounded-xl p-2" {...props}>
            <SVGIcon name="search" w={24} h={24} className="mr-4"/>
            <input className='grow bg-transparent focus-visible:outline-none text-sm font-semibold text-[#33383f] placeholder:text-[#9a9fa5]' ref={ref} placeholder={placeholder}/>
        </div>
    )
});

export default SearchInput;