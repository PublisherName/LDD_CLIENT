import React, { useState, useEffect, useMemo } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Dashboard from './component/dashboard/dashboard'
import Cookies from 'universal-cookie'

import SignUpForm from './component/auth/view/SignupForm'
import ForgotPasswordForm from './component/auth/view/ForgotPasswordForm'

import './assets/sb-admin-2/css/sb-admin-2.min.css'
import LoginController from './component/auth/controller/LoginController'


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
          <Route path="/sign-up" element={<SignUpForm />} />
          <Route path="/forgot-password" element={<ForgotPasswordForm />} />
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
        <Route exact path="/" element={<Dashboard setToken={setToken} />} />
      </Routes>
    </Router>
  )
}

export default App