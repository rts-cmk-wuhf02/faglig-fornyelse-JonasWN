import React from "react";
import "./Header.scss";
import logo from "../../core/images/Logo.png"

const Header = () => {
  return (
    <header className="App-header">
      <div className="logo-container">
        <h1 className="left-header-title"> Ta</h1>
        <img src={logo} alt="Logo" className="logo" />
        <h1 className="right-header-title"> sk</h1>
      </div>
    </header>
  );
};

export default Header;
