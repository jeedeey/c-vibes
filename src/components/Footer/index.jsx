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
          <div className="footer-user--link">
            {userLinks ? <UserLinks config={config} labeled /> : null}
          </div>
          <div className="based-on">
            <h5>
              Site based on {" "}
              publishing articles on entertainment, history, Lifestyle, news, and sport.
            </h5>
          </div>
          <div className="copyright">
            <h6>{copyright}</h6>
          </div>
        </div>
        <div className="footer-link">
          <Link className="privacy" to="/privacy">privacy</Link>
          <Link className="terms" to="/terms">terms</Link>
          <Link to="/contact">contact</Link>
        </div>
          
      </footer>
    );
  }
}

export default Footer;