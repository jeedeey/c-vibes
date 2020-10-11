import React from "react"
import {StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"


const LogoImage = () => (
    <StaticQuery
        query={graphql`
          query {
            placeholderImage: file(relativePath: {eq: "logo-48.png"}) {
                childImageSharp {
                    fluid(maxWidth: 100) {
                      ...GatsbyImageSharpFluid
                    }
                }
            }
          }
        `}
        render={data => <Img fluid={data.placeholderImage.childImageSharp.fluid} />}
        
    />
)

export default LogoImage