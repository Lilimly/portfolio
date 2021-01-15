import React, { useEffect, useState } from "react";
import { animateScroll as scroll } from "react-scroll";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faRocket
} from '@fortawesome/free-solid-svg-icons';

export default function Button () {

  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scorlled upto given distance
  const toggleVisibility = () => {
    if (window.pageYOffset > 1000) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };


  function scrollToTop () {
    scroll.scrollToTop();
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="button-top">
      {
        isVisible && 
        <button
          className="btn"
          alt="button"
          onClick={scrollToTop}
          onKeyDown={scrollToTop}
        >
          <span>
            <FontAwesomeIcon icon={faRocket} transform={{ rotate: 315 }}  />
          </span>
        </button>
      }
    </div>
  )
}