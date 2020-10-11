import React, {Component} from "react";
import UserLinks from "../UserLinks";
import config from "../../../data/SiteConfig";
import DrawerToggleButton from "../SideDrawer/DrawerToggleButton";
import "./ToolBar.scss"


class Toolbar extends Component {
    render() {
      return (
        <header className="toolbar">
            <nav className="toolbar_nav">
                <div className="toolbar_logo">
                    <a href="/"><img src={config.siteLogo}/></a>
                    <a href="/">{config.siteTitle}</a>
                    
                </div>
                <div className="spacer" />
                <div className="toolbar_nav-items">
                    <ul>
                        <li><a href="/">About</a></li>
                        <li><a href="/">Tags</a></li>
                    </ul>
                </div>
                <div className="userlinks-container">
                    <UserLinks config={config} />
                </div> 
                <div className="toolbar_toggle-button">
                    <DrawerToggleButton click={this.props.drawerClickHandler} />
                </div>     
            </nav>
        </header>
      );
    }
  }
  
  export default Toolbar;
  