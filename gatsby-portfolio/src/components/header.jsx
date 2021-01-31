import React, { useState} from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import image from "../images/logo.jpg";
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
            title="Logo Aurélie Mlynarz"
            src={image}
            className="logo"
            alt="Logo"
            role="presentation"
            onClick={scrollToTop}
            onKeyDown={scrollToTop}
          /> :
          <AnchorLink to="/#welcome" title="Logo Aurélie Mlynarz">
            <img
              src={image}
              className="logo"
              alt="Logo"
              role="presentation"
            />
          </AnchorLink>
        }
        <button
          className="hamburger" 
          title="Menu"
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
              title="Bienvenue"
              activeClass="active"
              onClick={closeMobileMenu}
              to="welcome"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
            >
              Bienvenue !
            </Link> :
            <AnchorLink to="/#welcome" title="Bienvenue">
              Bienvenue !
            </AnchorLink>
          }
          </li>
          <li className="nav-item">
            {location === "/" ?
              <Link
                title="Parcours"
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
              <AnchorLink to="/#parcours" title="Parcours">
                Parcours
              </AnchorLink>
            }
          </li>
          <li className="nav-item">
            {location === "/" ?
              <Link
              title="Projets"
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
              <AnchorLink to="/#projets" title="Projets">
                Projets
              </AnchorLink>
            }
          </li>
          <li className="nav-item">
            {location === "/" ?
              <Link
                title="contact"
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
              <AnchorLink to="/#contact" title="Contact">
                Contact
              </AnchorLink>
            }
          </li>
        </ul>
      </div>
    </nav>
  )
}

