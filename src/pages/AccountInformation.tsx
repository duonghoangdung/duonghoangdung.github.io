import React, { useState } from 'react'
import Button from '../components/Button'
import Input from '../components/Input'
import Modal from '../components/Modal'
import { useTranslation } from 'react-i18next'

const AccountInformation = () => {
  const { t } = useTranslation()
  const [showModal, setShowModal] = useState<boolean>(true)
  return (
    <>
      <div className='bg-[#fcfcfc] p-6 rounded-lg mb-2'>
        <div className='mb-8'>
          <div className='relative text-xl font-semibold text-[#1a1d1f] mb-6 pl-8'>
            <div className='absolute top-0 left-0 h-full w-4 bg-[#b5e4ca] rounded'></div>
            <span>Information</span>
          </div>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6'>
            <div className='col-span-1'>
              <div className='text-sm font-semibold text-[#6f767e] mb-2'>{t('Full name')}</div>
              <div className='text-sm font-semibold text-[#1a1d1f]'>VO THI PHUONG</div>
            </div>
            <div className='col-span-1'>
              <div className='text-sm font-semibold text-[#6f767e] mb-2'>{t('Phone number')}</div>
              <div className='text-sm font-semibold text-[#1a1d1f]'>0399900661</div>
            </div>
            <div className='col-span-1'>
              <div className='text-sm font-semibold text-[#6f767e] mb-2'>{t('Balance')}</div>
              <div className='text-sm font-semibold text-[#1a1d1f]'>1,673.51 đ</div>
            </div>
            <div className='col-span-1'></div>
            <div className='col-span-1 sm:col-span-2 md:col-span-4 mt-3'>
              <Button type='button' onClick={() => setShowModal(true)}>
                {t('Update password')}
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Modal
        title={t('Update password')}
        open={showModal}
        onClose={() => setShowModal(false)}
        onConfirm={() => setShowModal(false)}
      >
        <div className='grid grid-cols-1 gap-6 mb-6'>
          <div className='col-span-1'>
            <Input
              id='old_password'
              name='old_password'
              type='password'
              label={t('Old password')}
            />
          </div>
          <div className='col-span-1'>
            <Input
              id='new_password'
              name='new_password'
              type='password'
              label={t('New password')}
            />
          </div>
          <div className='col-span-1'>
            <Input
              id='confirm_new_password'
              name='confirm_new_password'
              type='password'
              label={t('Confirm new password')}
            />
          </div>
        </div>
      </Modal>
    </>
  )
}
export default AccountInformation
