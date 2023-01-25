import React from 'react'
import '../../main.css'
import ArgentBankLogo from '../../assets/img/argentBankLogo.png'
import { Link } from 'react-router-dom'

const Logo = () => {
  return (
        <Link className="main-nav-logo" to="/">
        <img
          className="main-nav-logo-image"
          src={ArgentBankLogo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
  )
}

export default Logo