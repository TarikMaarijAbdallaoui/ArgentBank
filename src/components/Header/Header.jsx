import React from 'react'
import Login from '../Login/Login'
import Logo from '../Logo/Logo'
import '../../main.css'

const Header = () => {
  return (
    <nav className="main-nav">
        <Logo />
        <Login />
    </nav>
  )
}

export default Header
