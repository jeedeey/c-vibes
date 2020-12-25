import React, { Component } from "react";
import _ from "lodash";
import Card from "react-md/lib/Cards/Card";
import CardTitle from "react-md/lib/Cards/CardTitle";
import CardText from "react-md/lib/Cards/CardText";
import { Link } from "gatsby";
import "./TagList.scss";

class AllTags extends Component {
  render() {
    const { tags } = this.props;
    return (
      <Card raise className="md-grid md-cell md-cell--12">
        <CardTitle className="title-heading">
          <h2>Tags</h2>
        </CardTitle>
        <CardText className="tags-list">
          { tags.map(tag => (
                <li  key={tag.fieldValue} style={{ listStyle: "none" }}>
                <Link
                to={`/tag/${_.kebabCase(tag.fieldValue)}/`}
                >
                  {tag.fieldValue}
                </Link>
              </li>
            ))}
        </CardText>
        <h5  className="widget-title"></h5>
        <div  >
            
        </div>
      </Card>
    );
  }
}

export default AllTags;
