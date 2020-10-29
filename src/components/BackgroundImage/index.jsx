import React, { Component } from "react";
import { StaticQuery, graphql } from "gatsby";
import BackgroundImage from 'gatsby-background-image';
import "./BackgroundImage.scss";

class queryBackground extends Component {
  render() {
    
    return (
      <StaticQuery
      query={graphql`
      query {
        desktop: file(relativePath: { eq: "Confluence.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
        render={data => (
          <BackgroundImage
          className="masthead"
          fluid={data.desktop.childImageSharp.fluid}
          fadeIn
        >
          <div className="black-overlay">
            <div className="content-box">
              if you consider your content fit for publication click here
            </div>
          </div>
        </BackgroundImage>
        )}
      />
    );
  }
}

export default queryBackground;

