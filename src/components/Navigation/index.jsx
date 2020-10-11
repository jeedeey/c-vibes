import React, { Component } from "react";
import SideDrawer from "../SideDrawer";
import Toolbar from "../ToolBar";
import Backdrop from "../Backdrop";
import Footer from "../Footer";
import GetNavList from "./NavList";
import "./Navigation.scss";

class Navigation extends Component {
  state ={
    sideDrawerOpen: false
  };

  drawerToggleClickHandler = () =>{
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen};
    });
  };
  
  backdropClickHandler = () => {
    this.setState({sideDrawerOpen: false});
  }; 
  
  render() { 
    const { children, config, LocalTitle } = this.props;
    const footerLinks = LocalTitle !== "About";
    
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />
    }
    return (
      <div
        drawerTitle={config.siteTitle}
        toolbarTitle={LocalTitle}
        contentClassName="main-content"
        navItems={GetNavList(config)}
        
      >
        <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
        <SideDrawer show={this.state.sideDrawerOpen}/>
        {backdrop}
        <div style={{marginTop: "56px"}} className="main-container">{children}</div>
        <Footer userLinks={footerLinks} />
      </div>
    );
  }
}

export default Navigation;
