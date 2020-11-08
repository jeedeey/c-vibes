import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "gatsby";
import Layout from "../layout";
import Background from "../components/BackgroundImage";
import Breadcumb from "../components/Breadcumb";
import config from "../../data/SiteConfig";
import _ from "lodash";
import Chip from "react-md/lib/Chips";

export default class TagTemplate extends React.Component {
  render() {
    const { tags } = this.props.pageContext;

    return (
      <Layout
        location={this.props.location}
        title={`posts tags`}
      >
          <Helmet>
            <title>{`All tags | ${config.siteTitle}`}</title>
          </Helmet>
          <Background />
          <Breadcumb title="tags"/>
          <ul>
          {tags.map(tag => (
              <li key={tag} style={{ textDecoration: "none", marginBottom: "10px"}}>
                <Link to={`/tag/${_.kebabCase(tag)}`}>
                    <Chip label={tag} className="post-preview-tags" />
                </Link>
              </li>
            
          ))}
          </ul>
      </Layout>
    );
  }
}