import React, { useState} from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import { Link as LinkTo } from "gatsby";
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
          <LinkTo to={'/#welcome'}>
            <img
              src={image}
              className="logo"
              alt="Logo"
              role="presentation"
            />
          </LinkTo>
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
              to="welcome"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
            >
              Welcome !
            </Link> :
            <LinkTo to={'/#welcome'}>
              Welcome !
            </LinkTo>
          }
          </li>
          <li className="nav-item">
            {location === "/" ?
              <Link
                activeClass="active"
                onClick={closeMobileMenu}
                to="parcours"
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
              >
                Parcours
              </Link> :
              <LinkTo to={'/#parcours'}>
                Parcours
              </LinkTo>
            }
          </li>
          <li className="nav-item">
            {location === "/" ?
              <Link
                activeClass="active"
                onClick={closeMobileMenu}
                to="projets"
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
              >
                Projets
              </Link> :
              <LinkTo to={'/#projets'}>
                Projets
              </LinkTo>
            }
          </li>
          <li className="nav-item">
            {location === "/" ?
              <Link
                activeClass="active"
                onClick={closeMobileMenu}
                to="contact"
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
              >
                Contact
              </Link> :
              <LinkTo to={'/#contact'}>
                Contact
              </LinkTo>
            }
          </li>
        </ul>
      </div>
    </nav>
  )
}

