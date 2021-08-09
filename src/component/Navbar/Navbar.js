import { faPhone, faSearch, faUserMd } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../../src/Images/doctor.png";
import "./Navbar.css";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const changeBackground = () => {
    if (window.scrollY > 40) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", changeBackground);

  return (
    //////////////////////
    <nav
      class={
        navbar
          ? "navbar navbar-expand-lg navbar-light sticky grybg fixed-top"
          : "navbar navbar-expand-lg navbar-light sticky  fixed-top"
      }
    >
      <div class="container-fluid px-5">
        <a class="navbar-brand" href="#">
          <a class="navbar-brand" href="#">
            <span>
              {" "}
              <FontAwesomeIcon icon={faUserMd} />
            </span>
          </a>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse navbar-end-item" id="navbarNav">
          <ul class="navbar-nav ml-auto our-primary-menu ">
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/service">Services</Link>
            </li>
            <li>
              <Link to="/service">Blog</Link>
            </li>

            <li>
              <Link to="/">Contact</Link>
            </li>
            <li>
              <Link to="/">Dashboard</Link>
            </li>
          </ul>
          <div class="header-info d-flex align-items-center">
            <div class="header-search">
              <span>
                {" "}
                <FontAwesomeIcon icon={faSearch} />{" "}
              </span>
            </div>
            <div class="header-call clearfix text-center">
              <div class="header-call-icon float-left  h-100">
                <span>
                  {" "}
                  <FontAwesomeIcon icon={faPhone} />{" "}
                </span>
              </div>
              <div class="header-call-info">
                <span class="d-block">Call Now</span>
                <a class="d-block" href="tel:+15143125678">
                  +1 (514) 312-5678
                </a>
              </div>
            </div>
          </div>
          {/* <div class="header-button class-for-visibility text-center">
            <Link to="/service">Apply Now</Link>
          </div> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
