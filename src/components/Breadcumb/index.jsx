import React, { Component } from "react";
import {Link} from "gatsby";
import "./Breadcumb.scss";

class Breadcumb extends Component {
  render() {
    const title  = this.props.title;
    return (
          <div className="breadcumb--con md-grid">
            <nav aria-current="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><Link to="/"><i className="fa fa-home"></i> Home</Link></li>
                <li className="breadcrumb-item active" aria-current="page">{title}</li>
              </ol>
            </nav>
          </div>
    );
  }
}

export default Breadcumb;
