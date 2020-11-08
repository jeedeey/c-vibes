import React, {Component} from "react";
import {Link} from "gatsby";
import TopUserLink from "../TopUserLink";
import Logo from "../../../static/logos/logo-48.png";
import config from "../../../data/SiteConfig";
import DrawerToggleButton from "../SideDrawer/DrawerToggleButton";
import "./ToolBar.scss"


class Toolbar extends Component {
    state ={className:"" };
  
    componentDidMount(){
        window.addEventListener("scroll", this.handleScroll);
    }
  
    handleScroll=()=>{
        if (window.pageYOffset > 0) {
            if(!this.state.className){
                this.setState({ className: "black" });   
            }
        }else {
            if(this.state.className){
                this.setState({ className: "" });
            }
        }
    }

    render() {
      return (
        <header className={this.state.className}>
            <nav  className="toolbar_nav"  >
                <Link to="/" className="toolbar_logo">
                    <div className="logo">
                        <img src={Logo}/>
                    </div>
                    <div className="title">
                        {config.siteTitle}
                    </div>
                    
                </Link>
                <div className="spacer" />
                <div className="toolbar_nav-items">
                    <ul>
                    <li>
                        <Link activeClassName="active" to="/">Home</Link>
                    </li>
                    <li>
                        <Link activeClassName="active" to="/categorys">Category</Link>
                    </li>
                    <li>
                        <Link activeClassName="active" to="/tag">tags</Link>
                    </li>
                    <li>
                        <Link activeClassName="active" to="/contact">Contact</Link>
                    </li>
                    <li>
                        <Link activeClassName="active" to="/about">About</Link>
                    </li>
                    </ul>
                </div>
                <div className="userlinks">
                    <TopUserLink config={config} />
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
  