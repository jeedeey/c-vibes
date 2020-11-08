import React, { Component } from "react";
import {Link, StaticQuery, graphql } from "gatsby";
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
          <div className="masthead-black-overlay">
            <p className="masthead-content-box">
              send us your advert, content for publication contact us <Link className="link" to="/contact">click here</Link>
            </p>
            
          </div>
        </BackgroundImage>
        )}
      />
    );
  }
}

export default queryBackground;

