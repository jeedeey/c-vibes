import React from "react";
import { Link } from "gatsby";
import TopUserLink from "../TopUserLink";
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
              <Link className="link" activeClassName="active" to="/categorys">Category</Link>
            </li>
            <li>
              <Link className="link" activeClassName="active" to="/tags">Tags</Link>
            </li>
            <li>
              <Link className="link" activeClassName="active" to="/contact">Contact</Link>
            </li>
            <li>
              <Link className="link" activeClassName="active" to="/about">About</Link>
            </li>
            
            <div className="TopUserLink">
            <TopUserLink config={config} />
            </div>
            <div className="sidedrawer-copyright">
            {copyright} <a href="">Sam</a>
            </div>
          </ul>
          
        </nav>
    );
};

export default SideDrawer;