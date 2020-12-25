import React, { Component } from "react";
import Card from "react-md/lib/Cards/Card";
import { StaticQuery, graphql } from "gatsby";
import BackgroundImage from 'gatsby-background-image';
import "./Advert.scss";

class Advert extends Component {
  render() {
    
    return (
      <Card raise className="md-grid md-cell md-cell--12">
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
              
            </div>
          </div>
        </BackgroundImage>
        )}
      />
      </Card>
      
    );
  }
}

export default Advert;

