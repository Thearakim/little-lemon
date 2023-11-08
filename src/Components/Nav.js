import React from 'react';
import { useRef, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../Styles/main.css";

function Navbar() {
  const navRef = useRef();
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    // JSX
  <header>
    <div className="logo">
        <h3>LOGO</h3>
    </div>
    <nav ref={navRef} className={isOpen ? "responsive_nav" : ""}>
        <a href="/#">Home</a>
        <a href="/#">My work</a>
        <a href="/#">Blog</a>
        <a href="/#">About me</a>
        <button className="nav-btn nav-close-btn" onClick={toggleNav}>
            <FaTimes />
        </button>
    </nav>
    <button className="nav-btn" onClick={toggleNav}>
        {isOpen ? <FaTimes /> : <FaBars />}
    </button>
  </header>

  );
}

export default Navbar;
