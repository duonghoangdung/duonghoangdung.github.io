import React from 'react'
import SVGIcon from '../SVGIcon'

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string
}

const SearchInput = React.forwardRef<HTMLInputElement, Props>(
  ({ placeholder = 'Search products', ...props }, ref) => {
    return (
      <div className='flex items-center bg-[#f4f4f4] rounded-xl p-3 h-[48px]' {...props}>
        <SVGIcon name='search' w={24} h={24} className='mr-3' />
        <input
          className='grow bg-transparent focus-visible:outline-none text-sm font-semibold text-[#33383f] placeholder:text-[#9a9fa5]'
          ref={ref}
          placeholder={placeholder}
        />
      </div>
    )
  },
)

SearchInput.displayName = 'SearchInput'

export default SearchInput
