import React from 'react'
import loginBg from '../assets/images/login-bg.png'
import Input from '../components/Input'
import SwitchBox from '../components/SwitchBox'
import { NavLink } from 'react-router-dom'
import Button from '../components/Button'

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
        <div className='p-6 min-w-[300px] md:min-w-[408px]'>
          <div className='text-5xl font-semibold text-[#1a1d1f] mb-8'>Login</div>
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
            <Button buttonStyle='primary' className='w-full' type='button'>
              Log in
            </Button>
          </div>
          <p className='text-sm font-normal text-[#1a1d1f]'>
            Need a account?&nbsp;
            <NavLink to='/register' title='Register' className='text-[#2a85ff] underline'>
              Register
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

export default Login
