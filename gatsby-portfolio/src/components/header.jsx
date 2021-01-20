import React, { useState} from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import image from "../images/logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTimes,
  faBars
} from '@fortawesome/free-solid-svg-icons';

export default function Header () {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const location = window.location.pathname;

  function scrollToTop () {
    scroll.scrollToTop();
  };

  return (
    <nav>
      <div className="header-div">
        {location === "/" ?
          <img
            src={image}
            className="logo"
            alt="Logo"
            role="presentation"
            onClick={scrollToTop}
            onKeyDown={scrollToTop}
          /> :
          <a href="/">
            <img
              src={image}
              className="logo"
              alt="Logo"
              role="presentation"
            />
          </a>
        }
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
          {location === "/" ?
            <Link
              activeClass="active"
              onClick={closeMobileMenu}
              to="section"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
            >
              Welcome !
            </Link> :
            <a href="/">Welcome !</a>
          }
          </li>
          <li className="nav-item">
            {location === "/" ?
              <Link
                activeClass="active"
                onClick={closeMobileMenu}
                to="section1"
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
              >
                Parcours
              </Link> :
              <a href="/#section1">Parcours</a>
            }
          </li>
          <li className="nav-item">
            {location === "/" ?
              <Link
                activeClass="active"
                onClick={closeMobileMenu}
                to="section2"
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
              >
                Projets
              </Link> :
              <a href="/#section2">Projets</a>
            }
          </li>
          <li className="nav-item">
            {location === "/" ?
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
              </Link> :
              <a href="/#section3">Contact</a>
            }
          </li>
        </ul>
      </div>
    </nav>
  )
}

