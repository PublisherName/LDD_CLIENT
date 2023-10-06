import React from 'react'
import { Link } from 'react-router-dom';

function dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <Link to='/logout'>Logout</Link>
    </div>
  )
}

export default dashboard