import React, { Component } from "react";
import Card from "react-md/lib/Cards/Card";
import CardText from "react-md/lib/Cards/CardText";
import UserLinks from "../UserLinks";
import config from "../../../data/SiteConfig";
import "./About.scss";

class About extends Component {
  render() {
    const { expanded } = this.props;
    return (
      <div className="md-grid mobile-fix">
        <Card className="md-grid md-cell--8">
          <div className="about-wrapper">
            <img
              src={config.siteLogo}
              className="about-img"
              alt={config.userName}
            />
            <CardText className="about-text md-body-1">
              <p >{config.siteDescription}</p>
            </CardText>
            <UserLinks labeled={expanded} config={config} />
          </div>
        </Card>
      </div>
    );
  }
}

export default About;
