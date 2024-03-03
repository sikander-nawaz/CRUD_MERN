import React from "react";
import "./Footer.css";
function Footer() {
  const d = new Date();
  let year = d.getFullYear();
  return (
    <div id="footer">
      <p className="text-muted">All Rights Reserved {year} || Sikander Nawaz</p>
    </div>
  );
}

export default Footer;
