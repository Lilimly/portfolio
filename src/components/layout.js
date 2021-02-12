import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "react-scroll"
import { MDXProvider } from "@mdx-js/react"
import "./layout.css"
import CookieConsent from "react-cookie-consent"
import { library } from "@fortawesome/fontawesome-svg-core"
import { faGlobeAmericas, faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { fab } from "@fortawesome/free-brands-svg-icons"
import Header from "./header.jsx"
import Footer from "./Footer.jsx"

library.add(fab, faGlobeAmericas, faEnvelope)

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
        <CookieConsent
          enableDeclineButton
          flipButtons
          location="bottom"
          buttonText="Accepter"
          cookieValue={true}
          declineCookieValue={false}
          sameSite="lax"
          cookieSecurity={true}
          ariaAcceptLabel="Accept cookies"
          ariaDeclineLabel="Decline cookies"
          declineButtonText="Non merci"
          cookieName="Cookie Analytics"
          buttonStyle={{
            margin: "1em",
            color: "#fcfcfc",
            fontSize: "15px",
            background: "#eb5a77",
            fontWeight: "bold",
            padding: "10px",
          }}
          declineButtonStyle={{
            margin: "1em",
            color: "#eb5a77",
            fontSize: "15px",
            background: "#fcfcfc",
            fontWeight: "bold",
            padding: "10px",
          }}
          expires={365}
        >
          Ce site utilise des cookies pour améliorer votre expérience.
        </CookieConsent>
      </div>
    </MDXProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
