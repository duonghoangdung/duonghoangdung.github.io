import React, { useState } from 'react'
import copy from 'copy-to-clipboard'
import { usePopper } from 'react-popper'

interface ChildProps {
  copy: (content: string) => void
  setReferenceElement: (referenceElement: HTMLDivElement) => void
}
interface Props {
  children: (props: ChildProps) => React.ReactElement
}

const CopyToClipboard: React.FC<Props> = ({ children }) => {
  const [showTooltip, setShowTooltip] = useState(false)
  const [referenceElement, setReferenceElement] = useState<HTMLDivElement | null>(null)
  const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(null)
  const [arrowElement, setArrowElement] = useState<HTMLDivElement | null>(null)
  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    strategy: 'fixed',
    placement: 'top',
    modifiers: [
      {
        name: 'arrow',
        options: {
          element: arrowElement,
          padding: 20,
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

  const onCopy = (content: string) => {
    copy(content)
    setShowTooltip(true)
    setTimeout(() => setShowTooltip(false), 3000)
  }

  return (
    <>
      {children({ copy: onCopy, setReferenceElement })}
      {showTooltip && (
        <div
          className='popper-tooltip text-xs font-semibold text-[#1a1d1f] bg-white rounded px-3 py-1 shadow'
          ref={setPopperElement}
          style={styles.popper}
          {...attributes.popper}
        >
          Copied!
          <div className='popper-arrow' ref={setArrowElement} style={styles.arrow} />
        </div>
      )}
    </>
  )
}

export default CopyToClipboard
