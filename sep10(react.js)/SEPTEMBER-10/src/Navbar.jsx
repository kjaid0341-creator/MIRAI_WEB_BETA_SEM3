import React from "react";

function Navbar() {
  return (
    <nav className="navbar">

      <div className="logo">
        <span>MIRAI</span>
      </div>

      <ul className="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">Programs</a></li>
        <li><a href="#">Campus</a></li>
        <li><a href="#">About</a></li>
      </ul>

      <button className="apply-btn">
        Apply Now
      </button>

    </nav>
  );
}

export default Navbar;