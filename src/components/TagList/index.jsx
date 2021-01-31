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
            <div className="">
              <div className="">
                <Tags tags={data.tagsGroup.group} />
              </div>
            </div>
            
                
              
          )}
        />
      );
    }
  }

export default All;
