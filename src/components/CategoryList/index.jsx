import React, { Component } from "react";
import { StaticQuery, graphql } from "gatsby";
import Categorys from "./Categorys";


class CategoryList extends Component {
    render() {
      return (
        <StaticQuery
          query={graphql`
          query {
    
            categoryGroup: allMarkdownRemark(limit: 2000) {
              group(field: frontmatter___category) {
                fieldValue
                totalCount
              }
            }
          }
          `}
          render={data => (
            <Categorys categorys={data.categoryGroup.group} />
          )}
        />
      );
    }
  }

export default CategoryList;


