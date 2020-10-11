import React,{Component} from "react";
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
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <UserLinks config={config} />
          </ul>
        </nav>
    );
};

export default SideDrawer;