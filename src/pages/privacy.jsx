import React, { Component } from "react";
import Card from "react-md/lib/Cards/Card";
import { Helmet } from "react-helmet";
import Layout from "../layout";
import config from "../../data/SiteConfig";

class PrivacyPage extends Component {
  render() {
    return (
      <Layout location={this.props.location} title="Contact">
        <div className="about-container">
          <Helmet>
            <title>{`contact | ${config.siteTitle}`}</title>
            <link rel="canonical" href={`${config.siteUrl}/contact/`} />
          </Helmet>
          <div style={{paddingTop: "20px", paddingBottom: "20px"}} className="terms-container md-grid mobile-fix">
              <Card className="md-grid md-cell--7">
                  <div style={{padding: "30px 16px"}} className="">
                    <h2>Privacy Policy</h2>
                    <p>At confluencevibes, accessible at http://www.confluencevibes.com, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Website Name and how we use it.</p>
                    <p>If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us through email at confluencevibe@gmail.com</p>
                    <p>This privacy policy applies only to our online activities and is valid for visitors to our website with regards to the information that they collect in confluencevibes.</p>
                    <h2>Consent</h2>
                    <p>By using our website, you hereby consent to our Privacy Policy and agree to its terms.</p>
                    <h2>Site Discussion</h2>
                    <p>At confluencevibes.com users can join discussion by email and social media handle, to discourage user posting comments  prohibited by our term of use</p>
                    <h2>Log Files</h2>
                    <p>confluencevibes follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services' analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, number of clicks, administering the site, tracking users' movement on the website, and gathering demographic information.</p>
                    <h2>Advertising Partners Privacy Policies</h2>
                    <p>Third-party ad servers or ad networks uses technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on Website Name, which are sent directly to users' browser. They automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see on websites that you visit.</p>
                    <p>Note that confluencevibes has no access to or control over these cookies that are used by third-party advertisers.</p>
                  </div>
              </Card>
            </div>
        </div>
      </Layout>
    );
  }
}

export default PrivacyPage;