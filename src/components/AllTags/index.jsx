import React, { Component } from "react";
import _ from "lodash";
import { Link, StaticQuery, graphql } from "gatsby";
import Chip from "react-md/lib/Chips";


class AllTags extends Component {
  render() {
    const { data } = this.props;
    const postsEdges = data.allMarkdownRemark.edges;

    let tags = []
  _.each(postsEdges, edge => {
    if(_.get(edge, 'node.frontmatter.tags')){
      tags = tags.concat(edge.node.frontmatter.tags)
    }
  })

    return (
      <div className="post-tag-container">
        {tags &&
          tags.map(tag => (
            <Link
              key={tag}
              style={{ textDecoration: "none" }}
              to={`/tag/${_.kebabCase(tag)}`}
            >
              <Chip label={tag} className="post-preview-tags" />
            </Link>
          ))}
      </div>
    );
  }
}


const QueryResult =  graphql
    `
      {
        allMarkdownRemark {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
                tags
                category
                date
                author
              }
            }
          }
        }
      }
    `

   


export default AllTags;