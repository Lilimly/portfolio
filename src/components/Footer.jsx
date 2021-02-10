import React from "react"
import { Link } from "react-scroll"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGlobeAmericas, faEnvelope } from "@fortawesome/free-solid-svg-icons"

export default function Footer() {
  let pathname = typeof window !== "undefined" ? window.location.pathname : ""

  return (
    <footer>
      <div className="button-div">
        <button>
          {pathname === "/" ? (
            <Link
              title="Me contacter"
              to="contact"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
            >
              <FontAwesomeIcon icon={faEnvelope} />
            </Link>
          ) : (
            <AnchorLink to="/#contact" title="Me contacter">
              <FontAwesomeIcon icon={faEnvelope} />
            </AnchorLink>
          )}
        </button>
        <button>
          <a
            href={"https://www.linkedin.com/in/aurelie-mlynarz-1899421a1/"}
            target="_blank"
            rel="noopener noreferrer"
            alt="LinkedIn"
            title="LinkedIn"
          >
            <FontAwesomeIcon icon={["fab", "linkedin"]} />
          </a>
        </button>
        <button>
          <a
            href={"https://github.com/Lilimly"}
            target="_blank"
            rel="noopener noreferrer"
            alt="GitHub"
            title="GitHub"
          >
            <FontAwesomeIcon icon={["fab", "github"]} />
          </a>
        </button>
        <button>
          <a
            href={"https://www.gotripics.com/"}
            target="_blank"
            rel="noopener noreferrer"
            alt="Gotripics"
            title="Gotripics"
          >
            <FontAwesomeIcon icon={faGlobeAmericas} />
          </a>
        </button>
        <button id="cv">
          <a
            href={"https://lilimly.github.io/cv_aurelie_mlynarz/"}
            target="_blank"
            rel="noopener noreferrer"
            alt="CV"
            title="CV"
          >
            cv
          </a>
        </button>
      </div>
      <div className="info-site">
        © {new Date().getFullYear()}
        {`  `}
        Aurélie Mlynarz, Développeuse web freelance.
      </div>
    </footer>
  )
}
