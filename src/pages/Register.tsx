import React from 'react'
import loginBg from '../assets/images/login-bg.png'
import Input from '../components/Input'
import SwitchBox from '../components/SwitchBox'
import { NavLink } from 'react-router-dom'
import Button from '../components/Button'
import { useTranslation } from 'react-i18next'

const Register = () => {
  const { t } = useTranslation()
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 w-full h-full'>
      <div
        className='col-span-1 bg-bottom bg-no-repeat bg-cover'
        style={{
          backgroundImage: `url("${loginBg}")`,
        }}
      ></div>
      <div className='col-span-1 flex flex-col items-center justify-between bg-white rounded-t-2xl md:rounded-none overflow-hidden mt-[-20px] md:mt-0'>
        <div></div>
        <div className='p-6 min-w-[408px]'>
          <div className='text-5xl font-semibold text-[#1a1d1f] mb-8'>{t('Register')}</div>
          <div className='mb-6'>
            <Input
              label={t('Full name')}
              type='text'
              name='mame'
              id='name'
              placeholder={t('Your name')}
            />
          </div>
          <div className='mb-6'>
            <Input
              label={t('Phone number')}
              type='tel'
              name='phone_number'
              id='phone_number'
              placeholder={t('Your phone number')}
            />
          </div>
          <div className='mb-6'>
            <Input
              label={t('Password')}
              type='password'
              name='password'
              id='password'
              placeholder={t('Your password')}
            />
          </div>
          <div className='mb-6'>
            <Input
              label={t('Retype password')}
              type='password'
              name='re_password'
              id='re_password'
              placeholder={t('Retype your password')}
            />
          </div>
          <div className='mb-6'>
            <Button buttonStyle='primary' className='w-full' type='button'>
              {t('Register')}
            </Button>
          </div>
          <p className='text-sm font-normal text-[#1a1d1f]'>
            {t('Already have an account?')}&nbsp;
            <NavLink to='/login' title='Login' className='text-[#2a85ff] underline'>
              {t('Login now')}
            </NavLink>
          </p>
        </div>
        <div className='p-6'>
          <SwitchBox />
        </div>
      </div>
    </div>
  )
}

export default Register
