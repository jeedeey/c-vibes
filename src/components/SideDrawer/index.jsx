import React from "react";
import { Link } from "gatsby";
import UserLinks from "../UserLinks";
import config from "../../../data/SiteConfig";

import "./SideDrawer.scss";

const SideDrawer = props => {
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
              <Link className="link" activeClassName="active" to="/tag">tags</Link>
            </li>
            <li>
              <Link className="link" activeClassName="active" to="/contact">Contact</Link>
            </li>
            <li>
              <Link className="link" activeClassName="active" to="/about">About</Link>
            </li>
            <UserLinks config={config} />
          </ul>
        </nav>
    );
};

export default SideDrawer;