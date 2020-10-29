import React, { Component } from "react";
import { StaticQuery, graphql } from "gatsby";
import BackgroundImage from 'gatsby-background-image';
import "./Advert.scss";

class Advert extends Component {
  render() {
    
    return (
      <StaticQuery
      query={graphql`
      query {
        desktop: file(relativePath: { eq: "designbanner.png" }) {
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
          className="masthead-advert"
          fluid={data.desktop.childImageSharp.fluid}
          fadeIn
        >
          <div className="black-overlay-advert">
            <div className="content-box-advert">
              <p>hire a developer..</p>
            </div>
          </div>
        </BackgroundImage>
        )}
      />
    );
  }
}

export default Advert;

