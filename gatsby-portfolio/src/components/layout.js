import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import { Link } from "react-scroll";
import { MDXProvider } from "@mdx-js/react";
import Header from "./header.jsx";
import Footer from "./Footer.jsx";
import "./layout.css";
import { library } from '@fortawesome/fontawesome-svg-core';
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
        <Footer />
      </div>
    </MDXProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
