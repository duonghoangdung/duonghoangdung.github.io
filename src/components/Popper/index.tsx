import React, { useState } from 'react'
import * as PopperJS from '@popperjs/core'
import { usePopper } from 'react-popper'

interface Props {
  children: React.ReactNode
  content: string
  placement?: PopperJS.Placement
}

const Popper: React.FC<Props> = ({ children, content, placement }) => {
  const [show, setShow] = useState<boolean>(false)
  const [referenceElement, setReferenceElement] = useState<HTMLElement | null>(null)
  const [popperElement, setPopperElement] = useState<HTMLElement | null>(null)
  const [arrowElement, setArrowElement] = useState<HTMLElement | null>(null)
  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement: placement || 'top',
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
    <div
      ref={setReferenceElement}
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      {children}
      {show && (
        <div
          className='popper-tooltip text-xs font-semibold text-[#1a1d1f] bg-white rounded px-4 py-2 shadow-[0px_4px_24px_rgba(0,0,0,0.25)]'
          ref={setPopperElement}
          style={styles.popper}
          {...attributes.popper}
        >
          {content}
          <div className='popper-arrow' ref={setArrowElement} style={styles.arrow} />
        </div>
      )}
    </div>
  )
}

export default Popper
