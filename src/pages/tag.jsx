import React from "react";
import { Helmet } from "react-helmet";
import _ from "lodash";
import { Link, graphql } from "gatsby";
import Chip from "react-md/lib/Chips";
import Layout from "../layout";
import config from "../../data/SiteConfig";


class TagsPage extends React.Component {
    render() {
      const { data } = this.props
      const pageTitle = "Tags"
      const tags = data.tagsGroup.group
  
      return (
        <Layout 
        location={this.props.location}
        title={pageTitle}
        >
          <div className="tag-container">
          <Helmet>
            <title>{`Posts tagged as "${tags}" | ${config.siteTitle}`}</title>
            <link rel="canonical" href={`${config.siteUrl}/alltag/${tags}`} />
          </Helmet>
          <div>
            { tags.map(tag => (
                <li key={tag.fieldValue} style={{ listStyle: "none" }}>
                <Link 
                to={`/tags/${_.kebabCase(tag.fieldValue)}/`}
                >
                  <Chip label={tag.fieldValue} />
                </Link>
              </li>
            ))}
          </div>
          </div>
        </Layout>
      )
    }
  }
  
  export default TagsPage

export const pageQuery = graphql`
  query {
    
    tagsGroup: allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`