import React, { Component } from "react";
import FontIcon from "react-md/lib/FontIcons";
import { Link } from "gatsby";
import "./PostSuggestions.scss";

export default class PostSuggestions extends Component {
  render() {
    const { prevSlug, prevTitle, nextSlug, nextTitle } = this.props;

    return (
      <div className="post-suggestions md-grid md-cell--12">
        <Link to={prevSlug} className="post-suggestion">
          <FontIcon
            forceFontSize
            forceSize={35}
            className="arrow-nav secondary-color"
          >
            arrow_back
          </FontIcon>
          <div className="headline-container hide-on-mobile">
            <h2 className="md-body-2">Previous</h2>
            <h6 className="md-headline">{prevTitle}</h6>
          </div>
        </Link>
        <Link to={nextSlug} className="post-suggestion">
          <div className="headline-container">
            <h2 className="md-body-2">Next</h2>
            <h6 className="md-headline">{nextTitle}</h6>
          </div>
          <FontIcon
            forceFontSize
            forceSize={35}
            className="arrow-nav secondary-color"
          >
            arrow_forward
          </FontIcon>
        </Link>
      </div>
    );
  }
}