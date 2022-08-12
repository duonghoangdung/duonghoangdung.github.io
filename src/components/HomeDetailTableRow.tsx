const CodesTableRowAlt = () => {
  return (
      <tr>
        <td className='border-b border-[#efefef] hidden md:table-cell text-left p-5'>1</td>
        <td className='border-b border-[#efefef] text-left p-5'>
          <div className='flex items-center'>
            <img src="//via.placeholder.com/44x44.png" className='w-[80px] h-[80px] md:w-[40px] md:h-[40px] rounded-full object-cover mr-5 md:mr-3' />
            <div className="grow">
              <div className='text-lg md:text-sm font-semibold text-[#1d1a1f]'>Tiner</div>
              <div className='flex md:hidden flex-col gap-2text-xs font-semibold mt-2'>
                <div className="grid grid-cols-2 gap-x-5 gap-2">
                  <div className='text-[#6f767e]'>Done</div>
                  <div className='text-[#1d1a1f]'>100,000</div>
                  <div className='text-[#6f767e]'>Expired</div>
                  <div className='text-[#1d1a1f]'>123</div>
                </div>
              </div>
            </div>
          </div>
        </td>
        <td className='border-b border-[#efefef] hidden md:table-cell p-5 text-center'>8884642</td>
        <td className='border-b border-[#efefef] hidden md:table-cell p-5 text-right'>2022-06-29 09:29:55</td>
      </tr>
  )
}

export default CodesTableRowAlt
