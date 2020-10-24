import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"


export default ({ data }) => {
  const sources = data.placeholderImage.childImageSharp.fluid

  return (
    <div>
      <h1>Hello art-directed gatsby-image</h1>
      <Img fluid={sources} />
    </div>
  )
}

export const query = graphql`
query {
  placeholderImage: file(relativePath: {eq: "8.jpg"}) {
      childImageSharp {
          fluid(maxWidth: 1800) {
            ...GatsbyImageSharpFluid
          }
      }
  }
}
`;