import React from 'react'
import { Link } from 'react-router-dom';
import Cookies from 'universal-cookie';

function DashboardController({setToken}) {
  
    const cookies = new Cookies();
    const handleLogout = () => {
        cookies.remove('token', { path: '/' });
        setToken(null);
    }

  return (
    <>
    <div>
      <h1>Dashboard</h1>
      <Link to='/' onClick={handleLogout} className='btn btn-danger'>Logout</Link>
    </div>
    </>
  )
}

export default DashboardController