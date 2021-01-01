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
        desktop: file(relativePath: { eq: "new-year-2021.jpg" }) {
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
            <div className="masthead-content-box">
              <marquee behavior="alternate"><div className="rainbow-text">Happy New Year</div></marquee>
              <p>Want to share news, adert, content for publiation or join C-Vibe's Team <Link className="link" to="/contact">contact us</Link></p>
              
            </div>
            
          </div>
        </BackgroundImage>
        )}
      />
    );
  }
}

export default queryBackground;

