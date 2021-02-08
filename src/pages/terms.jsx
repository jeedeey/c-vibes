import React, { Component } from "react";
import Card from "react-md/lib/Cards/Card";
import { Helmet } from "react-helmet";
import Layout from "../layout";
import config from "../../data/SiteConfig";

class TermsPage extends Component {
  render() {
    return (
      <Layout location={this.props.location} title="Contact">
        <div className="about-container">
          <Helmet>
            <title>{`contact | ${config.siteTitle}`}</title>
            <link rel="canonical" href={`${config.siteUrl}/contact/`} />
          </Helmet>
          <div className="terms-container md-grid mobile-fix">
              <Card style={{margin: "30px auto"}} className="md-grid md-cell--7">
                  <div style={{padding: "30px 16px"}} className="">
                    <h2>Website Terms of Use</h2>
                    <p>www.confluencevibes.com is a copyrighted work belonging to confluencevibes. Certain features of the Site may be subject to additional guidelines, terms, or rules, which will be posted on the Site in connection with such features.</p>
                    <p>All such additional terms, guidelines, and rules are incorporated by reference into these Terms.</p> 
                    <h2>Access to the Site</h2>
                    <p><strong>Subject to these Terms.</strong> Access to the Site solely for your own personal, noncommercial use.</p>
                    <p>Excluding any User Content that you may provide, you are aware that all the intellectual property rights, including copyrights, and trademarks, in the Site and its content are owned by the site</p>
                    <h2>User Content</h2>
                    <p><strong>User Content.</strong> "User Content" means any and all information and content that a user submits to the Site. You are exclusively responsible for your User Content. You bear all risks associated with use of your User Content.  You hereby certify that your User Content does not violate our Acceptable Use Policy.  You may not represent or imply to others that your User Content is in any way provided, sponsored or endorsed by Company. Because you alone are responsible for your User Content, you may expose yourself to liability. Company is not obliged to backup any User Content that you post; also, your User Content may be deleted at any time without prior notice to you. You are solely responsible for making your own backup copies of your User Content if you desire.</p>
                    <p><strong>Acceptable Use Policy.</strong> The following terms constitute our "Acceptable Use Policy":
                    we agree not to use the Site to collect, upload, transmit, display, or distribute any User Content (i) that violates any third-party right or any intellectual property or proprietary right; (ii) that is unlawful, harassing, abusive, tortious, threatening, harmful, invasive of another’s privacy, vulgar, defamatory, false, intentionally misleading, trade libelous, pornographic, obscene, patently offensive, promotes racism, bigotry, hatred, or physical harm of any kind against any group or individual; (iii) that is harmful to minors in any way; or (iv) that is in violation of any law, regulation, or obligations or restrictions imposed by any third party.</p> 
                    <p>In addition, we agree not to: (i) upload, transmit, or distribute to or through the Site any software intended to damage or alter a computer system or data; (ii) send through the Site unsolicited or unauthorized advertising, promotional materials, junk mail, spam, chain letters, pyramid schemes, or any other form of duplicative or unsolicited messages; (iii) use the Site to harvest, collect, gather or assemble information or data regarding other users without their consent; (iv) interfere with, disrupt, or create an undue burden on servers or networks connected to the Site, or violate the regulations, policies or procedures of such networks; (v) attempt to gain unauthorized access to the Site, whether through password mining or any other means; (vi) harass or interfere with any other user’s use and enjoyment of the Site; or (vi) use software or automated agents or scripts to produce multiple accounts on the Site, or to generate automated searches, requests, or queries to the Site.</p>
                    <p>We reserve the right to review any User Content, and to investigate and/or take appropriate action against you in our sole discretion if you violate the Acceptable Use Policy or any other provision of these Terms or otherwise create liability for us or any other person. Such action may include removing or modifying your User Content, terminating your Account in accordance with law.</p>
                    <h2>Third-Party Links & Ads; Other Users</h2>
                    <p><strong>Third-Party Links & Ads.</strong> The Site may contain links to third-party websites and services, and/or display advertisements for third-parties.  Such Third-Party Links & Ads are not under the control of our site. Third-Party Links & Ads only as a convenience to you, and does not review, approve, monitor, endorse, warrant, or make any representations with respect to Third-Party Links & Ads. When you click on any of the Third-Party Links & Ads, the applicable third party’s terms and policies apply, including the third party’s privacy and data gathering practices.</p>
                    <p><strong>Other Users.</strong> Each Site user is solely responsible for any and all of its own User Content.  Because we do not control User Content, you acknowledge and agree that we are not responsible for any User Content, whether provided by you or by others. If there is a dispute between you and any Site user, we are under no obligation to become involved.</p>
                    <h2>Copyright Policy.</h2>
                    <p>Company respects the intellectual property of others and asks that users of our Site do the same.  In connection with our Site, we have adopted and implemented a policy respecting copyright law that provides for the removal of any infringing materials and for the termination of users of our online Site who are repeated infringers of intellectual property rights, including copyrights.  If you believe that one of our users is, through the use of our Site, unlawfully infringing the copyright(s) in a work, and wish to have the allegedly infringing material removed, the following information in the form of a written notification should be mailed  to confluencevibe@gmail.com:</p>
                    <ul>
                      <li>your physical or electronic signature;</li>
                      <li>identification of the copyrighted work(s) that you claim to have been infringed;</li>
                      <li>identification of the material on our services that you claim is infringing and that you request us to remove;</li>
                      <li>sufficient information to permit us to locate such material;</li>
                      <li>your address, telephone number, and e-mail address;</li>
                      <li>a statement that you have a good faith belief that use of the objectionable material is not authorized by the copyright owner, its agent, or under the law; and</li>
                      <li>a statement that the information in the notification is accurate, and under penalty of perjury, that you are either the owner of the copyright that has allegedly been infringed or that you are authorized to act on behalf of the copyright owner.</li>
                    </ul>
                    <p><strong>Your Privacy.</strong> Please read our Privacy Policy.</p>
                    <p><strong>Copyright</strong> ©. All rights reserved.  All trademarks, logos and service marks displayed on the Site are our property or the property of other third-parties. You are not permitted to use these Marks without our prior written consent or the consent of such third party which may own the Marks.</p>
                    <p><strong>Contact Information.</strong> visit our contact page.</p>
                  </div>
              </Card>
            </div>
        </div>
      </Layout>
    );
  }
}

export default TermsPage;