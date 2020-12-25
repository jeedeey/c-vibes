import React, { Component } from "react";
import { StaticQuery, graphql } from "gatsby";
import Tags from "./Tags";


class All extends Component {
    render() {
      return (
        <StaticQuery
          query={graphql`
          query {
    
            tagsGroup: allMarkdownRemark(limit: 2000) {
              group(field: frontmatter___tags) {
                fieldValue
                totalCount
              }
            }
          }
          `}
          render={data => (
                <Tags tags={data.tagsGroup.group} />
              
          )}
        />
      );
    }
  }

export default All;
