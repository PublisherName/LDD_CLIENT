import React from 'react'
import Cookies from 'universal-cookie';

import DashboardView from '../view/DashboardView';

function DashboardController({setToken}) {
  
    const cookies = new Cookies();
    const handleLogout = () => {
        cookies.remove('token', { path: '/' });
        setToken(null);
    }

  return (
    <>
      <DashboardView handleLogout={handleLogout} />
    </>
  )
}

export default DashboardController