import React from "react";
import "./Navbar.css";
import carLogo from "../../utils/images/carlogo.jpg";
function Navbar() {
  return (
    <div className="navbar">
      <img src={carLogo} alt="" className="logo" />
    </div>
  );
}

export default Navbar;
