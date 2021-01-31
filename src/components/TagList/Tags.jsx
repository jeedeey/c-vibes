import React, { Component } from "react";
import _ from "lodash";
import Card from "react-md/lib/Cards/Card";
import { Link } from "gatsby";
import "./TagList.scss";

class AllTags extends Component {
  render() {
    const { tags } = this.props;
    return (
      <div className="tags-list mobile-fix"> 
        { tags.map(tag => (
                <li  key={tag.fieldValue} style={{ listStyle: "none" }}>
                <Link
                to={`/tag/${_.kebabCase(tag.fieldValue)}/`}
                >
                  {tag.fieldValue}
                </Link>
              </li>
            ))}
          
      </div>
    );
  }
}

export default AllTags;
