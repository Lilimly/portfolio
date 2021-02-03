import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const HeaderPortfolio = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "header-portfolio.jpeg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  if (!data?.placeholderImage?.childImageSharp?.fluid) {
    return <div>Picture not found</div>
  }

  return (
    <Img
      fluid={data.placeholderImage.childImageSharp.fluid}
      title="Projet Portfolio"
      alt="Projet Portfolio"
      role="presentation"
    />
  )
}

export default HeaderPortfolio
