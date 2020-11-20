import React, { useState} from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import image from "../images/logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTimes,
  faBars
} from '@fortawesome/free-solid-svg-icons';

export default function Navbar () {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  function scrollToTop () {
    scroll.scrollToTop();
  };

  return (
    <nav>
      <div className="header-div">
        <img
          src={image}
          className="logo"
          alt="Logo"
          role="presentation"
          onClick={scrollToTop}
          onKeyDown={scrollToTop}
        />
      <button
        className="hamburger" 
        onClick={handleClick}
        onKeyDown={handleClick}
        >
          {click ?
            <FontAwesomeIcon size="1x" icon={faTimes}/> :
            <FontAwesomeIcon size="1x" icon={faBars}/>
          }
        </button>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <Link
              activeClass="active"
              onClick={closeMobileMenu}
              to="section1"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
            >
              A propos
            </Link>
          </li>
          <li className="nav-item">
            <Link
              activeClass="active"
              onClick={closeMobileMenu}
              to="section2"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
            >
              Projets <i className='fas fa-caret-down' />
            </Link>
          </li>
          <li className="nav-item">
            <Link
              activeClass="active"
              onClick={closeMobileMenu}
              to="section3"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

