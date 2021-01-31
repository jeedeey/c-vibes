import React, {useState} from "react";
import { Link } from "gatsby";
import TopUserLink from "../TopUserLink";
import CategoryList from "../CategoryList";
import config from "../../../data/SiteConfig";

import "./SideDrawer.scss";

const SideDrawer = props => {
    const [isOpen, setIsOpen] = useState(false);
    const toggling = () => setIsOpen(!isOpen);
    const {copyright} = config;
    let drawerClasses = "side-drawer";
    if (props.show) {
        drawerClasses= "side-drawer open";
    }
    return (
      <nav className={drawerClasses}>
        <div>
        <ul>
          <Link className="link" activeClassName="active" to="/">Home</Link>
          <CategoryList />
        </ul>
        <div className="top-user-link">
          <TopUserLink config={config} />
        </div>
        <div className="sidedrawer-copyright">
          {copyright}
        </div>
        </div> 
      </nav>
    );
};

export default SideDrawer;