import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import  { logout } from '../../store/slices/userSlice'
import '../../main.css'

export const LoggedOut = () => {
  return (
        <div>
        <Link className="main-nav-item" to="/login">
          <i className="fa fa-user-circle"></i>
          Sign In
        </Link>
      </div>
  )
}

export const LoggedIn = () => {
  const  {firstName} = useSelector(state => state.user.info)
  const dispatch = useDispatch()

  const handleLogout = () =>{
    console.log("tratando de cerrar la sesion")
    dispatch(logout())
  }

  return (
    <div>
        <Link className="main-nav-item" to="/profile">
          <i className="fa fa-user-circle"></i>
          {firstName}
        </Link>
        <Link className="main-nav-item" to="/" onClick={handleLogout}>
          <i className="fa fa-sign-out"></i>
          Sign Out
        </Link>
      </div>
  )
}
