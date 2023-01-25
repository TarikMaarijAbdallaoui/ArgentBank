import React, { useState } from "react";
import { LoggedIn, LoggedOut } from "../Login/Login";
import Logo from "../Logo/Logo";
import "../../main.css";
import { useSelector } from "react-redux";

const Header = () => {
  
  const status = useSelector(state => state.user.status)
  return (
    <nav className="main-nav">
      <Logo />
      {status == "success" ? <LoggedIn /> : <LoggedOut />}
    </nav>
  );
};

export default Header;
