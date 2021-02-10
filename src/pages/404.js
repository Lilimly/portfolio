import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>404: Page non trouvée </h1>
    <p>Cette page n'existe malheureusement pas...</p>
    <button>
      <Link to="/">Retour à la page d'accueil</Link>
    </button>
  </Layout>
)

export default NotFoundPage
