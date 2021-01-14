import React from "react";
import { animateScroll as scroll } from "react-scroll";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHandPointUp
} from '@fortawesome/free-solid-svg-icons';

export default function Navbar () {

  function scrollToTop () {
    scroll.scrollToTop();
  };

  return (
    <div className="button-top">
      <button
        className="btn"
        alt="button"
        onClick={scrollToTop}
        onKeyDown={scrollToTop}
      >
        <span>Retour au top {' '} <FontAwesomeIcon icon={faHandPointUp} /></span>

      </button>
    </div>
  )
}