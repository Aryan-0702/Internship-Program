import React, { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <h2>MyPortfolio</h2>

      <button className="menu-btn" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </button>

      <ul className={isOpen ? "nav-links active" : "nav-links"}>
        <li>Home</li>
        <li>About</li>
        <li>Skills</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Header;