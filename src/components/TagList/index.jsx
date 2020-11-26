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
            <div className="md-grid md-grid--no-spacing md-cell--middle">
              <div className="md-grid md-cell--8 mobile-fix">
                <Tags tags={data.tagsGroup.group} />
              </div>
            </div>
          )}
        />
      );
    }
  }

export default All;
