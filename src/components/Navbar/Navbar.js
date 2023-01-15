import React from "react";
import "./Navbar.css";
import carLogo from "../../utils/images/carlogo.jpg";
function Navbar() {
  return (
    <div className="navbar">
      <a href="/">
        <img src={carLogo} alt="" className="logo" />
      </a>
    </div>
  );
}

export default Navbar;
