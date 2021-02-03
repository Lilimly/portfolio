import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const HeaderGroupomania = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "header-groupomania.jpeg" }) {
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
      title="Projet Groupomania"
      alt="Projet Groupomania"
      role="presentation"
    />
  )
}

export default HeaderGroupomania
