import React, { useState } from 'react'
import SVGIcon from '../SVGIcon'

type perPageOptionType = {
  value: number
  name: string
}

interface Props {
  currentPage?: number
  total: number
  onCurrentPageChange?: (currentPage: number) => void
  onPrevClick?: () => void
  onNextClick?: () => void
  className?: string
  perPageOptions?: Array<perPageOptionType>
}

const Pagination: React.FC<Props> = ({
  currentPage = 1,
  total,
  perPageOptions,
  onCurrentPageChange,
  onPrevClick,
  onNextClick,
  className,
  ...props
}) => {
  const [perPage, setPerPage] = useState<number>(10)
  const totalPage = Math.ceil(total / perPage)
  return (
    <div className={`flex justify-between items-center mt-5 w-full ${className}`} {...props}>
      {!!perPageOptions?.length && (
        <div>
          <span className='text-xs font-semibold mr-3'>Show</span>
          <select
            className='text-xs font-semibold border-2 border-[#effefef] px-3 py-1 rounded-sm'
            value={perPage}
            onChange={(e) => setPerPage(Number(e.currentTarget.value))}
          >
            {perPageOptions?.map(({ value, name }) => (
              <option value={value} key={value} selected={perPage == value}>
                {name}
              </option>
            ))}
          </select>
        </div>
      )}
      <div className='text-xs font-bold text-[#6f767e] flex flex-wrap justify-center gap-2 items-center'>
        <div
          className={`flex items-center justify-center border border-[#efefef] rounded-sm w-6 h-6 transition${
            currentPage <= 1 ? '' : ' cursor-pointer hover:border-[#1a1d1f] hover:text-[#1a1d1f]'
          }`}
          onClick={onNextClick}
        >
          <SVGIcon name='arrow-left' w={16} h={16} />
        </div>
        {Array.from(Array(totalPage), (e, i) => (
          <div
            className={`flex items-center justify-center border border-[#efefef] hover:border-[#1a1d1f] rounded-sm w-6 h-6 hover:text-[#1a1d1f] transition${
              currentPage == i + 1 ? ' text-[#1a1d1f] border-[#1a1d1f]' : ' cursor-pointer'
            }`}
            onClick={() => currentPage != i + 1 && onCurrentPageChange?.(i + 1)}
          >
            {i + 1}
          </div>
        ))}
        <div
          className={`flex items-center justify-center border border-[#efefef] rounded-sm w-6 h-6 transition${
            currentPage >= totalPage
              ? ''
              : ' cursor-pointer hover:border-[#1a1d1f] hover:text-[#1a1d1f]'
          }`}
          onClick={onPrevClick}
        >
          <SVGIcon name='arrow-right' w={16} h={16} />
        </div>
      </div>
    </div>
  )
}

export default Pagination
