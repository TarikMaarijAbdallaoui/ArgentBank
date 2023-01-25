import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import  logout from '../../store/slices/userSlice'
import '../../main.css'

export const LoggedOut = () => {
  return (
        <div>
        <Link className="main-nav-item" to="/signin">
          <i className="fa fa-user-circle"></i>
          Sign In
        </Link>
      </div>
  )
}

export const LoggedIn = () => {
  const  {firstName} = useSelector(state => state.user.info)
  const dispatch = useDispatch()

  return (
    <div>
        <Link className="main-nav-item" to="/user">
          <i className="fa fa-user-circle"></i>
          {firstName}
        </Link>
        <Link className="main-nav-item" to="/" onClick={() => dispatch(logout)}>
          <i className="fa fa-sign-out"></i>
          Sign Out
        </Link>
      </div>
  )
}
