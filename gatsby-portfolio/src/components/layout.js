import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql, Link } from "gatsby";
import { MDXProvider } from "@mdx-js/react";
import Header from "./header.jsx";
import "./layout.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCat,
    faBeer,
    faGlobeAmericas,
    faEnvelope
} from '@fortawesome/free-solid-svg-icons';

const shortcodes = { Link }

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <MDXProvider components={shortcodes}>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div className="main-div">
        <main>{children}</main>
        <footer>
          <div className="info-site">
            © {new Date().getFullYear()},
            {`  `}
            <a href="/#section">www.lilicorp.com</a>
          </div>
          <div className="button-div">
            <p>Me contacter :</p>
            <button>
              <a 
                href={"/#section3"}
                alt="mail"
              >
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
            </button>
            <button>
              <a 
                href={"https://www.linkedin.com/in/aurelie-mlynarz-1899421a1/"}
                target="_blank"
                rel="noopener noreferrer"
                alt="LinkedIn"
              >
                <FontAwesomeIcon icon={faBeer} />
              </a>
            </button>
            <button>
              <a 
                href={"https://github.com/Lilimly"}
                target="_blank"
                rel="noopener noreferrer"
                alt="GitHub"
              >
                <FontAwesomeIcon icon={faCat} />
              </a>
            </button>
            <button>
              <a 
                href={"https://www.gotripics.com/"}
                target="_blank"
                rel="noopener noreferrer"
                alt="Gotripics"
              >
                <FontAwesomeIcon icon={faGlobeAmericas} />
              </a>
            </button>
          </div>
        </footer>
      </div>
    </MDXProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
