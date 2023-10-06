import React, { useState, useEffect, useMemo } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './component/auth/login'
import SignUp from './component/auth/signup'
import Dashboard from './component/dashboard/dashboard'
import Cookies from 'universal-cookie'

import './index.css'

function App() {

  const cookies = useMemo(() => {
    return new Cookies();
  },[]);

  const [token, setToken] = useState();

  useEffect(() => {
    if (!token) {
      setToken(cookies.get('token'));
    }
  }, [cookies, token]);
  
  if (!token) {
    return (
      <Router>
      <div className="App">
        <div className="auth-wrapper">
          <div className="auth-inner">
            <Routes>
              <Route exact path="/" element={<Login setToken={setToken} />} />
              <Route path="/sign-in" element={<Login setToken={setToken} />} />
              <Route path="/sign-up" element={<SignUp />} />
              <Route path="*" element={<Login setToken={setToken} />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
    )
  }else{
    cookies.set('token', token, { path: '/' });
  }

  return (
    <Router>
            <Routes>
              <Route exact path="/" element={<Dashboard />} />
            </Routes>
    </Router>
  )
}

export default App