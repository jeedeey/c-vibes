import React, { Component } from "react";
import { Helmet } from "react-helmet";
import Layout from "../layout";
import Background from "../components/BackgroundImage";
import Breadcumb from "../components/Breadcumb";
import Contact from "../components/Contact";
import config from "../../data/SiteConfig";

class ContactPage extends Component {
  render() {
    return (
      <Layout location={this.props.location} title="Contact">
        <div className="about-container">
          <Helmet>
            <title>{`contact | ${config.siteTitle}`}</title>
            <link rel="canonical" href={`${config.siteUrl}/contact/`} />
          </Helmet>
          <Background />
          <Breadcumb title="Contact"/>
          <Contact />
        </div>
      </Layout>
    );
  }
}

export default ContactPage;
