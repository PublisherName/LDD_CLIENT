import React, { useState, useEffect, useMemo } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Cookies from 'universal-cookie'

import DashboardController from './component/dashboard/controller/DashboardController'
import ForgotPasswordController from './component/auth/controller/ForgotPasswordController'
import LoginController from './component/auth/controller/LoginController'
import SignupController from './component/auth/controller/SignupController'

import ActivateAccountController from './component/auth/controller/ActivateAccountController'

import './assets/sb-admin-2/css/sb-admin-2.min.css'



function App() {

  const cookies = useMemo(() => {
    return new Cookies();
  }, []);

  const [token, setToken] = useState();

  useEffect(() => {
    if (!token) {
      setToken(cookies.get('token'));
    }
  }, [cookies, token]);

  if (!token) {
    return (
      <Router>
        <Routes>
          <Route path="/sign-up" element={<SignupController />} />
          <Route path="/forgot-password" element={<ForgotPasswordController />} />
          <Route path="/activate/:email/:code" element={<ActivateAccountController />} />
          <Route path="*" element={<LoginController setToken={setToken}/>} />          
        </Routes>
      </Router>
    )
  } else {
    cookies.set('token', token, { path: '/' });
  }

  return (
    <Router>
      <Routes>
        <Route exact path="*" element={<DashboardController setToken={setToken} />} />
      </Routes>
    </Router>
  )
}

export default App