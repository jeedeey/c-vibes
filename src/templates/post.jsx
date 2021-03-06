import React from "react";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";
import Card from "react-md/lib/Cards";
import CardText from "react-md/lib/Cards/CardText";
import Layout from "../layout";
import Breadcumb from "../components/Breadcumb";
import Advert from "../components/Advert";
import UserInfo from "../components/UserInfo";
import CategoryList from "../components/CategoryList";
import TagList from "../components/TagList";
import Disqus from "../components/Disqus";
import PostTags from "../components/PostTags";
import PostCover from "../components/PostCover";
import PostInfo from "../components/PostInfo";
import SocialLinks from "../components/SocialLinks";
import PostSuggestions from "../components/PostSuggestions";
import SEO from "../components/SEO";
import config from "../../data/SiteConfig";
import authors from "../../data/authors";
import "./b16-tomorrow-dark.css";
import "./post.scss";

export default class PostTemplate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mobile: true,
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
    const { mobile } = this.state;
    const { location, pageContext } = this.props;
    const { slug, nexttitle, nextslug, prevtitle, prevslug } = pageContext;
    const expanded = !mobile;
    const postOverlapClass = mobile ? "post-overlap-mobile" : "post-overlap";
    const postNode = this.props.data.markdownRemark;
    const post = postNode.frontmatter;
    const author = authors.find(x => x.name === post.author);

    if (!post.id) {
      post.id = slug;
    }

    const coverHeight = mobile ? 180 : 350;
    return (
      <Layout location={this.props.location} title="ConfluenceVibes">
        <div className="post-page md-grid md-grid--no-spacing">
          <Helmet>
            <title>{`${post.title} | ${config.siteTitle}`}</title>
            <link rel="canonical" href={`${config.siteUrl}${post.id}`} />
          </Helmet>
          <SEO postPath={slug} postNode={postNode} postSEO />
          <PostCover
            postNode={postNode}
            coverHeight={coverHeight}
            coverClassName="md-grid md-cell--9 post-cover"
          />
          <div
            className={`md-grid md-cell--10 post-page-contents mobile-fix ${postOverlapClass}`}
          >
            <Card className="post-content-left md-grid md-cell md-cell--12 post">
              <div className="breadcumb-after--disable"><Breadcumb/></div>
              <CardText className="post-body">
                <h1 className="md-display-2 post-header">{post.title}</h1>
                <PostInfo postNode={postNode} />
                <div dangerouslySetInnerHTML={{ __html: postNode.html }} />
              </CardText>
              <div className="post-meta">
                <PostTags tags={post.tags} />
                <SocialLinks
                  postPath={slug}
                  postNode={postNode}
                  mobile={mobile}
                />
              </div>
            </Card>
            <div className="post-content-right" >
              <div className="md-grid md-grid--no-spacing">
                <Advert />
              </div>
              <UserInfo
              className="md-grid md-cell md-cell--12"
              author={author} 
              expanded={expanded}
              />
              <Disqus postNode={postNode} expanded={expanded} />
              <CategoryList />
              <TagList/>
            </div>  
          </div>

          <PostSuggestions
            prevSlug={prevslug}
            prevTitle={prevtitle}
            nextSlug={nextslug}
            nextTitle={nexttitle}
          />
        </div>
      </Layout>
    );
  }
}

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      excerpt
      frontmatter {
        title
        cover
        date
        category
        tags
        author
      }
      fields {
        slug
        date
      }
    }
  }
`;
