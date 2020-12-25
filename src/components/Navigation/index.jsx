import React, { Component } from "react";
import SideDrawer from "../SideDrawer";
import Card from "react-md/lib/Cards/Card";
import CardTitle from "react-md/lib/Cards/CardTitle";
import CardText from "react-md/lib/Cards/CardText";
import Toolbar from "../ToolBar";
import CategoryList from "../CategoryList";
import TagList from "../TagList";
import Advert from "../Advert";
import Backdrop from "../Backdrop";
import Footer from "../Footer";
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
    const { children, LocalTitle } = this.props;
    const footerLinks = LocalTitle !== "About";
    
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />
    }
    return (
      <div
        
      toolbarTitle={LocalTitle}
        
        
      >
        <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
        <SideDrawer show={this.state.sideDrawerOpen}/>
        {backdrop}
        
        <div style={{marginTop: "56px"}} className="main-container">
          {children}
          <div className="md-grid md-grid--no-spacing md-cell--middle">
            <div className="md-grid md-cell--8 mobile-fix">
            <Card className="md-grid md-cell md-cell--12">
              <CardTitle className="title-heading">
                <h2>Categories</h2>
              </CardTitle>
              <CardText className="catagories-list">
                <CategoryList />
              </CardText>
            </Card>
            </div>
          
          </div>
          <div className="md-grid md-grid--no-spacing md-cell--middle">
            <div className="md-grid md-cell--8 mobile-fix">
            <Advert />
            </div>
          </div>
          <div className="md-grid md-grid--no-spacing md-cell--middle">
            <div className="md-grid md-cell--8 mobile-fix">
            <TagList />
            </div>
          </div>
          
        </div>
        <Footer userLinks={footerLinks} />
      </div>
    );
  }
}

export default Navigation;
