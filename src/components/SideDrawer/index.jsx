import React from "react";
import { Link } from "gatsby";
import UserLinks from "../UserLinks";
import config from "../../../data/SiteConfig";

import "./SideDrawer.scss";

const SideDrawer = props => {
    const {copyright} = config;
    let drawerClasses = "side-drawer";
    if (props.show) {
        drawerClasses= "side-drawer open";
    }
    return (
        <nav className={drawerClasses}>
          <ul>
            <li>
              <Link className="link" activeClassName="active" to="/">Home</Link>
            </li>
            <li>
              <Link className="link" activeClassName="active" to="/category">Category</Link>
            </li>
            <li>
              <Link className="link" activeClassName="active" to="/tag">Tags</Link>
            </li>
            <li>
              <Link className="link" activeClassName="active" to="/contact">Contact</Link>
            </li>
            <li>
              <Link className="link" activeClassName="active" to="/about">About</Link>
            </li>
            <li><UserLinks config={config} /></li>
            <div className="sidedrawer-copyright">
            {copyright} <a href="">Sam</a>
            </div>
          </ul>
          
        </nav>
    );
};

export default SideDrawer;