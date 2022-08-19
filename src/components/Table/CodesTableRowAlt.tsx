import React, { useState } from 'react'
import AppCard from '../AppCard'
import SVGIcon from '../SVGIcon'
import { CSSTransition } from 'react-transition-group'

const CodesTableRowAlt = () => {
  const [isShow, setIsShow] = useState<boolean>(false)
  return (
    <>
      <tr>
        <td className='p-4 text-center'>
          <a
            className='flex items-center justify-center text-[#6f767e] border border-[#efefef] rounded w-[32px] h-[32px]'
            href='#12312'
            onClick={() => setIsShow(!isShow)}
          >
            <SVGIcon
              name='arrow-right'
              className={`transition ease-in-out duration-300 ${isShow && 'rotate-90'}`}
              w={24}
              h={24}
            />
          </a>
        </td>
        <td className='p-4 text-center'>1</td>
        <td className='p-4 text-left'>
          <AppCard
            name='Tinder'
            image='//via.placeholder.com/40x40.png'
            description='1.1/sim'
            className='bg-transparent p-0'
          />
        </td>
        <td className='p-4 text-center'>
          <span className='font-semibold text-[#83bf6e] px-2 py-1 bg-[#eafae4] rounded'>
            Active
          </span>
        </td>
        <td className='p-4 text-center'>098779736</td>
        <td className='p-4 text-center'>8884642</td>
        <td className='p-4 text-right'>2022-06-29 09:29:55</td>
      </tr>
      <tr>
        <td className='border-b border-[#efefef] text-center' colSpan={2}></td>
        <td className='border-b border-[#efefef] text-left'>
          <CSSTransition in={isShow} timeout={300} classNames='slide-x' unmountOnExit>
            <div className='p-4 pt-0'>
              <div>Cost</div>
              <div>1.1</div>
            </div>
          </CSSTransition>
        </td>
        <td className='border-b border-[#efefef]' colSpan={4}>
          <CSSTransition in={isShow} timeout={300} classNames='slide-x' unmountOnExit>
            <div className='p-4 pt-0'>
              <audio controls>
                <source src='horse.ogg' type='audio/ogg' />
                <source src='horse.mp3' type='audio/mpeg' />
                Your browser does not support the audio element.
              </audio>
            </div>
          </CSSTransition>
        </td>
      </tr>
    </>
  )
}

export default CodesTableRowAlt
