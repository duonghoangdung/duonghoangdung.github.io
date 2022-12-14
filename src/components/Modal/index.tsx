import React from 'react'
import Button from '../Button'
import SVGIcon from '../SVGIcon'
import { CSSTransition } from 'react-transition-group'
import { useTranslation } from 'react-i18next'

interface Props {
  title: string
  open?: boolean
  onClose?: () => void
  onConfirm?: () => void
  children?: React.ReactNode
}

const Modal: React.FC<Props> = ({ title, children, open, onClose, onConfirm }) => {
  const { t } = useTranslation()
  return (
    <>
      <CSSTransition in={open} timeout={300} classNames='modal-backdrop-transition' unmountOnExit>
        <div className='fixed inset-0 bg-black/40 z-40 transition' onClick={onClose}></div>
      </CSSTransition>
      <CSSTransition in={open} timeout={300} classNames='modal-transition' unmountOnExit>
        <div className='inline-flex items-center justify-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 overflow-x-auto max-h-screen transition w-11/12 sm:w-auto'>
          <div className='bg-[#fcfcfc] p-6 shadow rounded-2xl w-full max-w-[340px]'>
            <div className='border-b border-[#efefef] pb-6 mb-6'>
              <div className='flex items-center relative text-lg md:text-xl font-semibold text-[#1a1d1f] pl-8 '>
                <div className={'absolute top-0 left-0 h-full w-4 bg-[#ffbc99] rounded'}></div>
                <span className='grow'>{title}</span>
                <button type='button' onClick={onClose}>
                  <SVGIcon className='ml-6' name='modal-close' w={36} h={36}></SVGIcon>
                </button>
              </div>
            </div>
            <div>{children}</div>
            <div className='flex items-center justify-end gap-3'>
              <Button onClick={onClose}>{t('Cancel')}</Button>
              <Button buttonStyle='primary' onClick={onConfirm}>
                {t('Update')}
              </Button>
            </div>
          </div>
        </div>
      </CSSTransition>
    </>
  )
}

export default Modal
