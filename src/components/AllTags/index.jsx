import React, {Component} from "react";
import _ from "lodash";
import { Link,  graphql } from "gatsby";
import Chip from "react-md/lib/Chips";
import "./AllTags.scss";


class Tags extends Component {
    render() {
      const { data } = this.props;
      const tags = data.tagsGroup.group;
  
      return (
          <div className="tag-container">
            { tags.map(tag => (
                <div key={tag.fieldValue} style={{ listStyle: "none" }}>
                <Link 
                to={`/tags/${_.kebabCase(tag.fieldValue)}/`}
                >
                  <Chip label={tag.fieldValue} className="post-preview-tags"/>
                </Link>
              </div>
            ))}
          </div>
      )
    }
  }
  
  export default Tags

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