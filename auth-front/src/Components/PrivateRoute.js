import React from 'react'
import { useSelector } from 'react-redux'
import {Navigate} from 'react-router-dom'
function PrivateRoute({children}) {
    const token = localStorage.getItem('token')
  return (
    <div>
        {token ?  children: <Navigate to='/login'></Navigate>}
    </div>
  )
}

export default PrivateRoute