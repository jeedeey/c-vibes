import React, { Component } from "react";
import Button from "react-md/lib/Buttons";
import { Link } from "gatsby";
import UserLinks from "../UserLinks";
import config from "../../../data/SiteConfig";
import "./Footer.scss";

class Footer extends Component {
  render() {
    const url = config.siteRss;
    const { userLinks } = this.props;
    const { copyright, fixedFooter } = config;
    if (!copyright) {
      return null;
    }
    return (
      <footer className={fixedFooter ? "footer footer-fixed" : "footer"}>
        <div className="notice-container">
          <div className="copyright">
            <div class="single-footer-widget">
                <h4 class="widget-title">About Us</h4>
                <p>{config.siteDescription}</p>
              <div class="copywrite-content">
                <p>
                  {copyright}
                  <a href="" target="_blank">Sam</a>
                </p>
              </div>
            </div>
          </div>
          <div className="rss">
            <Link to={url}>
              <Button flat secondary iconClassName="fa fa-rss">
                Subscribe
              </Button>
            </Link>
          </div>
          <div className="based-on">
            <div class="single-footer-widget">
              <h4 class="widget-title">Follow Us</h4>
              <p>{userLinks ? <UserLinks config={config} labeled /> : null}</p>
            </div>
          </div>
        </div>
        
      </footer>
    );
  }
}

export default Footer;
