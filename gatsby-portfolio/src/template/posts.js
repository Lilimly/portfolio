import React from "react"
import { graphql } from "gatsby"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import Img from "gatsby-image"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/Button.jsx"

const Posts = ({ data }) => {
  const post = data.mdx

  return (
    <Layout>
      <SEO title={post.frontmatter.title} />
      <article className="project-page">
        {post.frontmatter.img && (
          <Img fluid={post.frontmatter.img.childImageSharp.fluid} />
        )}
        <div className="project-content">
          <p className="date">Projet réalisé le {post.frontmatter.date}</p>
          <h1>{post.frontmatter.title}</h1>
          <MDXRenderer>{post.body}</MDXRenderer>
          <AnchorLink to="/#projets" title="Retour aux projets">
            <button>
              <span>Retour aux projets</span>
            </button>
          </AnchorLink>
          <p className="center-p">
            Besoin d'aide pour réaliser votre projet ?<br />
            N'hésitez pas à{" "}
            <AnchorLink to="/#contact" title="contact">
              me contacter
            </AnchorLink>{" "}
            !
          </p>
        </div>
        <Button />
      </article>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      frontmatter {
        title
        date(formatString: "DD/MM/YYYY")
        img {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

export default Posts
