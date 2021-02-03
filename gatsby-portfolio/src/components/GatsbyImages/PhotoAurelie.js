import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const PhotoAurelie = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(
        relativePath: { eq: "aurelie-mlynarz-photo.jpeg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 277) {
            ...GatsbyImageSharpFluid_tracedSVG
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
      alt="photo Aurélie Mlynarz"
      title="photo Aurélie Mlynarz"
    />
  )
}

export default PhotoAurelie
