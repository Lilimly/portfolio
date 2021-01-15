import React from "react";
import { animateScroll as scroll } from "react-scroll";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngleDoubleUp
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
        <span>
          Retour au top {' '} 
          <FontAwesomeIcon icon={faAngleDoubleUp} />
        </span>
      </button>
    </div>
  )
}