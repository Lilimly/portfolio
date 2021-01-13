import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const TestPage = () => (
  <Layout>
    <SEO title="Page test" />
    <h1>Merci !</h1>
    <p>Votre message m'a bien été transmit.</p>
    <p>Je vous répondrai au plus vite !</p>
    <button>
      <Link to="/">Retour à la page d'accueil</Link>
    </button>
  </Layout>
)

export default TestPage