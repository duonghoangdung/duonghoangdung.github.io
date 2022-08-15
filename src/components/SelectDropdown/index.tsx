import React, { useState, useRef } from 'react'
import useOnClickOutside from '../../hooks/useOnClickOutside'
import SVGIcon from '../SVGIcon'
import { usePopper } from 'react-popper'
import ReactDOM from 'react-dom'

type SelectType = {
  label: string
  value: unknown
}

interface Props {
  options?: Array<SelectType>
  value?: unknown
  placeholder?: string
  onChange?: (value: unknown) => void
}

const SelectDropdown: React.FC<Props> = ({
  options,
  value,
  placeholder = 'Please choose an option.',
  onChange,
  ...props
}) => {
  const ref = useRef(null)
  const [isActive, setIsActive] = useState(false)
  const optionsSelected = options?.find((option) => option.value == value)
  useOnClickOutside(ref, () => {
    setTimeout(() => {
      setIsActive(false)
    }, 300)
  })
  const [referenceElement, setReferenceElement] = useState<HTMLElement | null>(null)
  const [popperElement, setPopperElement] = useState<HTMLElement | null>(null)
  const [arrowElement, setArrowElement] = useState<HTMLElement | null>(null)
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

  return (
    <div ref={ref} className='relative' {...props}>
      <div
        className='inline-flex items-center border-2 border-[#efefef] rounded-xl p-3 text-sm font-semibold text-[#1a1d1f] cursor-pointer h-[48px] w-full'
        onClick={() => setIsActive(!isActive)}
        ref={setReferenceElement}
      >
        <span className='grow'>{optionsSelected ? optionsSelected.label : placeholder}</span>
        <SVGIcon name='arrow-down' className='ml-2' w={16} h={16} />
      </div>
      {isActive &&
        ReactDOM.createPortal(
          <div
            className='popper-tooltip bg-[#fcfcfc] shadow-[0px_4px_24px_rgba(0,0,0,0.25)] rounded-xl p-2 min-w-[200px]'
            ref={setPopperElement}
            style={styles.popper}
            {...attributes.popper}
          >
            {options
              ?.filter((option) => option.value != value)
              ?.map((option, index) => (
                <div
                  key={index}
                  onClick={() => {
                    onChange?.(option.value)
                    setIsActive(false)
                  }}
                  className='p-1 text-[#1a1d1f] hover:text-[#6f767e] cursor-pointer transition-colors'
                >
                  {option.label}
                </div>
              ))}
            <div className='popper-arrow' ref={setArrowElement} style={styles.arrow} />
          </div>,
          document.querySelector('body')!,
        )}
    </div>
  )
}

SelectDropdown.displayName = 'SelectDropdown'

export type { SelectType }

export default SelectDropdown
