import React from 'react'
import '../../main.css'
import ArgentBankLogo from '../../assets/img/argentBankLogo.png'

const Logo = () => {
  return (
        <a className="main-nav-logo" href="./index.html">
        <img
          className="main-nav-logo-image"
          src={ArgentBankLogo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </a>
  )
}

export default Logo