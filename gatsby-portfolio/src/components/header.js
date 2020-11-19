import React, { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import image from "../images/logo.png";

export default class Navbar extends Component {

  scrollToTop = () => {
    scroll.scrollToTop();
  };

  render() {
    return (
      <header>
        <div className="header-div">
          <img
            src={image}
            className="logo"
            alt="Logo"
            role="presentation"
            onClick={this.scrollToTop}
            onKeyDown={this.scrollToTop}
          />
          <ul className="nav-items">
            <li className="nav-item">
              <Link
                activeClass="active"
                to="section1"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                A propos
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="section2"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                Projets
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="section3"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                Contact
              </Link>
            </li>
          </ul>
          <div className="hamburger">
            <button className="menu-toggle">
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
            </button>
          </div>
        </div>
      </header>
    )
  }
}

