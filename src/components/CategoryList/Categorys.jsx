import React, { Component } from "react";
import _ from "lodash";
import { Link } from "gatsby";
import "./CategoryList.scss";

class Categorys extends Component {
  render() {
    const { categorys } = this.props;
    return (
        <div className="catagory-list">
            { categorys.map(category => (
              <li key={category.fieldValue} style={{ listStyle: "none" }}>
                <Link className="link" 
                to={`/categories/${_.kebabCase(category.fieldValue)}/`}
                >
                {category.fieldValue}
                </Link>
              </li>
            ))}
        </div>  
    );
  }
}

export default Categorys;
