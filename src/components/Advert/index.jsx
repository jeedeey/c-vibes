import React, { Component } from "react";
import Card from "react-md/lib/Cards/Card";
import { StaticQuery, graphql, Link } from "gatsby";
import BackgroundImage from 'gatsby-background-image';
import "./Advert.scss";

class Advert extends Component {
  render() {
    
    return (
        <StaticQuery
      query={graphql`
      query {
        desktop: file(relativePath: { eq: "advert.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
        render={data => (
            <div className="md-grid md-cell md-cell--12 mobile-fix">
            <BackgroundImage
              className="masthead-advert"
              fluid={data.desktop.childImageSharp.fluid}
              fadeIn
            >
              <div className="black-overlay">
                <div className="content-box">
                  <h1>Advertise here!</h1>
                  <Link to="/contact"><button>contact us</button></Link>
                </div>
              </div>
        </BackgroundImage>
        </div>
          
        )}
      />
      
      
    );
  }
}

export default Advert;

