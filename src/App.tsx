import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

import Home from './pages/Home';
import AccountInformation from './pages/AccountInformation';
import Addfund from './pages/Addfund';
import APIDocument from './pages/APIDocument';
import BalanceLog from './pages/BalanceLog';
import OTPHistory from './pages/OTPHistory';
import RentANumber from './pages/RentANumber';
import Login from './pages/Login';
import DefaultLayout from './layouts/DefaultLayout';
import LoginLayout from './layouts/LoginLayout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultLayout title="Home"><Home /></DefaultLayout>}/>
        <Route path="/account-information" element={<DefaultLayout title="Account Information"><AccountInformation/></DefaultLayout>} />
        <Route path="/addfund" element={<DefaultLayout title="Addfund"><Addfund/></DefaultLayout>} />
        <Route path="/api-document" element={<DefaultLayout title="API Document"><APIDocument/></DefaultLayout>} />
        <Route path="/balance-log" element={<DefaultLayout title="Balance Log"><BalanceLog/></DefaultLayout>} />
        <Route path="/otp-history" element={<DefaultLayout title="OTP History"><OTPHistory/></DefaultLayout>} />
        <Route path="/rent-a-number" element={<DefaultLayout title="Rent A Number"><RentANumber/></DefaultLayout>} />
        <Route path="/login" element={<LoginLayout title="Login"><Login /></LoginLayout>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
