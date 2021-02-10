import React, { useEffect, useState } from "react"
import { animateScroll as scroll } from "react-scroll"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faRocket } from "@fortawesome/free-solid-svg-icons"

export default function Button() {
  const [isVisible, setIsVisible] = useState(false)

  function scrollToTop() {
    scroll.scrollToTop()
  }

  const toggleVisibility = () => {
    if (window.pageYOffset > 600) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility)

    return () => {
      window.removeEventListener("scroll", toggleVisibility)
    }
  }, [])

  return (
    <div className="button-top">
      {isVisible && (
        <button
          title="Go to top !"
          className="btn"
          alt="button"
          onClick={scrollToTop}
          onKeyDown={scrollToTop}
        >
          <span>
            <FontAwesomeIcon icon={faRocket} transform={{ rotate: 315 }} />
          </span>
        </button>
      )}
    </div>
  )
}
