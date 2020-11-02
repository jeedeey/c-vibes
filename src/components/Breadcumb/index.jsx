import React, { Component } from "react";
import {Link} from "gatsby";
import "./Breadcumb.scss";

class Breadcumb extends Component {
  render() {
    return (
      <div className="breadcumb-con">
          <div className="breadcumb-container">
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb">
                <li class="breadcrumb-item"><Link to="/"><i class="fa fa-home"></i> Home</Link></li>
                <li class="breadcrumb-item active" aria-current="page">Contact</li>
              </ol>
            </nav>
          </div>
      </div>
    );
  }
}

export default Breadcumb;
