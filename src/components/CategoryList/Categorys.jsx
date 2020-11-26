import React, { Component } from "react";
import _ from "lodash";
import { Link } from "gatsby";
import "./CategoryList.scss";
class Categorys extends Component {
  render() {
    const { categorys } = this.props;
    return (
        <div className="categorys">
            { categorys.map(category => (
                <li key={category.fieldValue} style={{ listStyle: "none" }}>
                <Link className="link" 
                to={`/categories/${_.kebabCase(category.fieldValue)}/`}
                >
                  <i className="fa fa-angle-double-right" aria-hidden="true"></i><ib> - </ib> <ia>{category.fieldValue}</ia>
                </Link>
              </li>
            ))}
        </div>  
    );
  }
}

export default Categorys;
