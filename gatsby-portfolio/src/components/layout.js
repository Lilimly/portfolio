import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import { Link } from "react-scroll";
import { MDXProvider } from "@mdx-js/react";
import Header from "./header.jsx";
import "./layout.css";
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faGlobeAmericas,
    faEnvelope
} from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(
  fab, 
  faGlobeAmericas,
  faEnvelope)

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
            <Link
                to="section"
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
              >
                www.lilicorp.com
              </Link>
          </div>
          <div className="button-div">
            <p>Mes contacts :</p>
            <button>        
              <Link
                to="section3"
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
              >
                <FontAwesomeIcon icon={faEnvelope} />
              </Link>
            </button>
            <button>
              <a 
                href={"https://www.linkedin.com/in/aurelie-mlynarz-1899421a1/"}
                target="_blank"
                rel="noopener noreferrer"
                alt="LinkedIn"
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
