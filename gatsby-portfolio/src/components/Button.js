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
          alt="button"
          onClick={scrollToTop}
          onKeyDown={scrollToTop}
      >
      <FontAwesomeIcon size="2x" icon={faHandPointUp}/>
      </button>
    </div>
  )
}