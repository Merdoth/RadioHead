import React, { useEffect } from "react";

import './Navbar.css';
import RadioHead from '../../assets/radiohead.svg';

const Navbar = () => {
  useEffect(() => {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".navbar-details");
    const closeNavMenu = document.querySelector(".closeMenu");
    const navLink = document.querySelectorAll(".nav-items");

    hamburger.addEventListener("click", mobileMenu);
    closeNavMenu.addEventListener("click", closeMenu);
    navLink.forEach((n) => n.addEventListener("click", closeMenu));

    function mobileMenu() {
      hamburger.classList.toggle("active");
      navMenu.classList.toggle("active");
    }
    function closeMenu() {
      hamburger.classList.toggle("active");
      navMenu.classList.remove("active");
    }
  }, []);

  return (
    <div className="navbar">
      <div className="navbar-content">
        <div className="navbar-img">
          <img src={RadioHead} alt="RadioHead Logo" />
        </div>

        <div className="navbar-details">
          <div className="closeMenu">
              <div>
                <span className="bar"></span>
                <span className="bar"></span>
              </div>
            </div>
          <a href="#contact" className="nav-link nav-items">Contact</a>
          <a href="#plan" className="nav-link nav-items">Plans</a>
          <a href="#blog" className="nav-link nav-items">Blog</a>
          <button className="btn1 nav-items">Sign In</button>
          <button className="btn2 nav-items">Sign Up</button>
        </div>
        <div className="hamburger">
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
      </div>
    </div>
  )
}

export default Navbar;
