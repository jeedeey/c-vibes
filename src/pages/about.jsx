import React, { Component } from "react";
import { Helmet } from "react-helmet";
import Layout from "../layout";
import BackgroundImage from "../components/BackgroundImage";
import About from "../components/About";
import config from "../../data/SiteConfig";

class AboutPage extends Component {
  render() {
    return (
      <Layout location={this.props.location} title="About">
        <div className="about-container">
          <Helmet>
            <title>{`About | ${config.siteTitle}`}</title>
            <link rel="canonical" href={`${config.siteUrl}/about/`} />
          </Helmet>
          <BackgroundImage />
          <About />
        </div>
      </Layout>
    );
  }
}

export default AboutPage;
