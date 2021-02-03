import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const HeaderOhmyfood = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "header-ohmyfood.jpeg" }) {
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
      title="Projet Ohmyfood"
      alt="Projet Ohmyfood"
      role="presentation"
    />
  )
}

export default HeaderOhmyfood
