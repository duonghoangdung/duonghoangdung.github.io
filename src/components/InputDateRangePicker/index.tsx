import React, { useState } from 'react'
import Moment from 'moment'
import { DateRangePicker } from 'react-date-range'
import ReactDOM from 'react-dom'
import { usePopper } from 'react-popper'
import useOnClickOutside from '../../hooks/useOnClickOutside'
import SVGIcon from '../SVGIcon'
import 'react-date-range/dist/styles.css'
import './default.css'

interface Props {
  className?: string
}

const InputDateRangePicker: React.FC<Props> = ({ className }) => {
  const [isActive, setIsActive] = useState(false)
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date())
  const [referenceElement, setReferenceElement] = useState<HTMLDivElement | null>(null)
  const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(null)
  const [arrowElement, setArrowElement] = useState<HTMLDivElement | null>(null)
  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement: 'bottom',
    modifiers: [
      {
        name: 'arrow',
        options: {
          element: arrowElement,
        },
      },
      {
        name: 'offset',
        options: {
          offset: [8, 8],
        },
      },
    ],
  })
  useOnClickOutside([popperElement, referenceElement], () => setIsActive(false))
  const handleSelect = (date: any) => {
    setStartDate(date?.selection?.startDate)
    setEndDate(date?.selection?.endDate)
  }
  return (
    <div
      ref={setReferenceElement}
      className={`inline-flex items-center rounded-xl text-sm font-semibold text-[#1a1d1f] bg-[#fcfcfc] border-2 border-[#efefef] h-[48px] p-3 ${className}`}
    >
      <div onClick={() => setIsActive(true)} className='grow whitespace-nowrap overflow-hidden'>
        <>
          {Moment(startDate).format('MM/DD/YYYY')} - {Moment(endDate).format('MM/DD/YYYY')}
        </>
      </div>
      <SVGIcon name='calendar' w={24} h={24} className='ml-3' />
      {isActive &&
        ReactDOM.createPortal(
          <div
            className='popper-tooltip bg-[#fcfcfc] shadow-[0px_4px_24px_rgba(0,0,0,0.25)] rounded-lg min-w-[200px] z-50 overflow-hidden p-6 max-w-full'
            ref={setPopperElement}
            style={styles.popper}
            {...attributes.popper}
          >
            <DateRangePicker
              ranges={[
                {
                  startDate,
                  endDate,
                  key: 'selection',
                },
              ]}
              onChange={handleSelect}
            />
            <div className='popper-arrow' ref={setArrowElement} style={styles.arrow} />
          </div>,
          document.querySelector('body')!,
        )}
    </div>
  )
}

export default InputDateRangePicker
