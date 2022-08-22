import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './i18n'
import Home from './pages/Home'
import AccountInformation from './pages/AccountInformation'
import Addfund from './pages/Addfund'
import APIDocument from './pages/APIDocument'
import BalanceLog from './pages/BalanceLog'
import OTPHistory from './pages/OTPHistory'
import RentANumber from './pages/RentANumber'
import Login from './pages/Login'
import Register from './pages/Register'
import DefaultLayout from './layouts/DefaultLayout'
import LoginLayout from './layouts/LoginLayout'
import { useTranslation } from 'react-i18next'

function App() {
  const { t } = useTranslation()
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={
            <DefaultLayout title='Home'>
              <Home />
            </DefaultLayout>
          }
        />
        <Route
          path='/account-information'
          element={
            <DefaultLayout title={t('Account Information')}>
              <AccountInformation />
            </DefaultLayout>
          }
        />
        <Route
          path='/addfund'
          element={
            <DefaultLayout title={t('Addfund')}>
              <Addfund />
            </DefaultLayout>
          }
        />
        <Route
          path='/api-document'
          element={
            <DefaultLayout title={t('API Document')}>
              <APIDocument />
            </DefaultLayout>
          }
        />
        <Route
          path='/balance-log'
          element={
            <DefaultLayout title={t('Balance Log')}>
              <BalanceLog />
            </DefaultLayout>
          }
        />
        <Route
          path='/otp-history'
          element={
            <DefaultLayout title={t('OTP History')}>
              <OTPHistory />
            </DefaultLayout>
          }
        />
        <Route
          path='/rent-a-number'
          element={
            <DefaultLayout title={t('Rent A Number')}>
              <RentANumber />
            </DefaultLayout>
          }
        />
        <Route
          path='/login'
          element={
            <LoginLayout title={t('Login')}>
              <Login />
            </LoginLayout>
          }
        />
        <Route
          path='/register'
          element={
            <LoginLayout title={t('Register')}>
              <Register />
            </LoginLayout>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
