import React from 'react'
import { Link } from 'react-router-dom';
import Cookies from 'universal-cookie';

function Logout({setToken}) {

    const cookies = new Cookies();
    const handleLogout = () => {
        cookies.remove('token', { path: '/' });
        setToken(null);
    }
    return (
        <Link to='/' onClick={handleLogout}>Logout</Link>
    )
}

export default Logout