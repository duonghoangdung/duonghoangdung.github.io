import React from 'react'
import loginBg from '../assets/images/login-bg.png'
import Input from '../components/Input'
import SwitchBox from '../components/SwitchBox'

const Login = () => {
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
        <div className='p-6 mw-[408px]'>
          <div className='text-5xl font-semibold text-[#1a1d1f] mb-8'>Log in</div>
          <div className='mb-6'>
            <Input
              label='Phone number'
              type='tel'
              name='phone_number'
              id='phone_number'
              placeholder='Your phone number'
            />
          </div>
          <div className='mb-6'>
            <Input
              label='Password'
              type='password'
              name='password'
              id='password'
              placeholder='Your password'
            />
          </div>
          <div className='mb-6'>
            <button className='text-base font-semibold text-[#fcfcfc] bg-[#cadbff] rounded-xl px-5 py-3 hover:border-[#efefef] hover:bg-[#efefef] transition w-full'>
              Log in
            </button>
          </div>
          <div className='text-center'>
            <p className='text-sm font-normal text-[#1a1d1f]'>
              Need a account? <a href='#3232'>Register now</a>
            </p>
          </div>
        </div>
        <div className='p-6'>
          <SwitchBox />
        </div>
      </div>
    </div>
  )
}

export default Login
