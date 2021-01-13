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
          <ul>
            <li>
              <Link className="link" activeClassName="active" to="/">Home</Link>
            </li>
            <li>
              <div className="drop-down" onClick={toggling}> Category 
                <i style={{paddingLeft: "20%",fontWeight: "bold"}}className="fa fa-angle-down" aria-hidden="true"></i>
              </div>
              {isOpen && (
                <div className="drop-down-content">
                  <CategoryList />
                </div>
              )}

            </li>
            <li>
              <Link className="link" activeClassName="active" to="/about">About</Link>
            </li>
            <li>
              <Link className="link" activeClassName="active" to="/contact">Contact</Link>
            </li>
            
            <div className="TopUserLink">
              <TopUserLink config={config} />
            </div>
            <div className="sidedrawer-copyright">
            {copyright}
            </div>
          </ul>
          
        </nav>
    );
};

export default SideDrawer;