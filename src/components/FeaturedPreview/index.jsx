import React, { Component } from "react";
import Card from "react-md/lib/Cards/Card";
import CardTitle from "react-md/lib/Cards/CardTitle";
import { Link } from "gatsby";
import Media, { MediaOverlay } from "react-md/lib/Media";
import PostCover from "../PostCover";

class FeaturedPreview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mobile: true
    };
    this.handleResize = this.handleResize.bind(this);
  }
  componentDidMount() {
    this.handleResize();
    window.addEventListener("resize", this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }

  handleResize() {
    if (window.innerWidth >= 640) {
      this.setState({ mobile: false });
    } else {
      this.setState({ mobile: true });
    }
  }
  render() {
    const { postInfo } = this.props;
    const { mobile } = this.state;
    /* eslint no-undef: "off" */
    const coverHeight = mobile ? 162 : 225;
    return (
      <Card key={postInfo.path}  className="featured-card">
        
        <Link style={{ textDecoration: "none" }} to={postInfo.path}>
          <Media style={{ height: coverHeight, padding: "0px" }}>
            <PostCover postNode={postInfo} coverHeight={coverHeight} />
            <MediaOverlay>
              <CardTitle>
                <h2 style={{lineHeight: "1.3", marginBottom: "0", whiteSpace: "normal"}} className="md-card-title--large md-cell--center md-text">{postInfo.title}</h2>
              </CardTitle>
            </MediaOverlay>
          </Media>
        </Link>
      </Card>
    );
  }
}

export default FeaturedPreview;
