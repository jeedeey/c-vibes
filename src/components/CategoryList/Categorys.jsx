import React, { Component } from "react";
import _ from "lodash";
import { Link } from "gatsby";

class Categorys extends Component {
  render() {
    const { categorys } = this.props;
    return (
        <div>
            { categorys.map(category => (
                <li key={category.fieldValue} style={{ listStyle: "none" }}>
                <Link className="link" 
                to={`/categories/${_.kebabCase(category.fieldValue)}/`}
                >
                  <i className="fa fa-angle-double-right" style={{paddingRight: "10px"}} aria-hidden="true"></i><ib style={{padding: "8px"}}> - </ib>{category.fieldValue}
                </Link>
              </li>
            ))}
        </div>  
    );
  }
}

export default Categorys;
