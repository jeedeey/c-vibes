import React, {Component} from "react";
import {Link} from "gatsby";
import CategoryList from "../CategoryList";
import TopUserLink from "../TopUserLink";
import Logo from "../../../static/logos/logo-192.png";
import config from "../../../data/SiteConfig";
import DrawerToggleButton from "../SideDrawer/DrawerToggleButton";
import "./ToolBar.scss"


class Toolbar extends Component {
    render() {
      return (
        <header >
          <nav> 
            <div className="logo">
              <Link to="/"><img src={Logo}/></Link>
            </div>            
            <div className="title">
              <Link to="/">
                <h2 > {config.siteTitle} </h2> 
              </Link>
            </div>
            
            <ul>
                <li>
                    <Link className="link" activeClassName="active" to="/">Home</Link>
                 </li> 
                 <CategoryList  />
            </ul>       
                  <div className="userlinks">
                    <TopUserLink config={config} />
                  </div> 
                  <div className="toggle-button--con">
                    <DrawerToggleButton click={this.props.drawerClickHandler} />
                  </div>
          </nav> 
        </header>
      );
    }
  }
  
  export default Toolbar;
  