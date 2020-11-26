import React, { Component } from "react";

import "./TopUserLink.scss"

class TopUserLink extends Component {
  getLinkElements() {
    const { userLinks } = this.props.config;
    return userLinks.map(link => (
        <div class="top-social-area">
          <a href={link.url} className={link.iconClassName} aria-hidden="true"></a>
        </div>
      
    ));
  }
  render() {
    const { userLinks } = this.props.config;
    if (!userLinks) {
      return null;
    }
    return <div className="user-links">{this.getLinkElements()}</div>;
  }
}

export default TopUserLink;
