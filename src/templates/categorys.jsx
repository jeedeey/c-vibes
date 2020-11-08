import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "gatsby";
import Layout from "../layout";
import Background from "../components/BackgroundImage";
import Breadcumb from "../components/Breadcumb";
import config from "../../data/SiteConfig";
import _ from "lodash";
import Chip from "react-md/lib/Chips";

export default class categoryTemplate extends React.Component {
  render() {
    const { category } = this.props.pageContext;

    return (
      <Layout
        location={this.props.location}
        title={`categorys`}
      >
          <Helmet>
            <title>{`All category | ${config.siteTitle}`}</title>
          </Helmet>
          <Background />
          <Breadcumb />
          <ul>
          {category.map(tag => (
              <li key={category} style={{ textDecoration: "none", marginBottom: "10px"}}>
                <Link to={`/categories/${_.kebabCase(tag)}`}>
                    <Chip label={category} className="post-preview-tags" />
                </Link>
              </li>
            
          ))}
          </ul>
      </Layout>
    );
  }
}