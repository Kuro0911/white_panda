import React from "react";
import "./Footer.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import EmailIcon from "@mui/icons-material/Email";

function Footer() {
  return (
    <div className="footer">
      <h1>Rent Vroom</h1>
      <h5>Rent Vroom Pvt. Ltd</h5>
      <br />
      <p>
        No: 296, 3rd Cross Rd, Jakkasandra, 1st Block,
        <br />
        Koramangla Bangaluru, Karnataka
      </p>
      <div className="icon-wrap">
        <InstagramIcon />
        <FacebookIcon />
        <EmailIcon />
      </div>
    </div>
  );
}

export default Footer;
