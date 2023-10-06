import React from 'react'
import Logout from '../auth/logout'

function dashboard({setToken}) {
  
  return (
    <div>
      <h1>Dashboard</h1>
      <Logout setToken={setToken}/>
    </div>
  )
}

export default dashboard