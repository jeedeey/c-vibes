import React from "react";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../layout";
import Background from "../components/BackgroundImage";
import FeaturedListing from "../components/FeaturedListing";
import Breadcumb from "../components/Breadcumb";
import PostListing from "../components/PostListing";
import Advert from "../components/Advert";
import CategoryList from "../components/CategoryList";
import TagList from "../components/TagList";
import config from "../../data/SiteConfig";

export default class TagTemplate extends React.Component {
  render() {
    const { tag } = this.props.pageContext;
    const postEdges = this.props.data.allMarkdownRemark.edges;

    return (
      <Layout
        location={this.props.location}
        title={`Tagged in ${tag.charAt(0).toUpperCase() + tag.slice(1)}`}
      >
        <div className="tag-container">
          <Helmet>
            <title>{`Posts tagged as "${tag}" | ${config.siteTitle}`}</title>
            <link rel="canonical" href={`${config.siteUrl}/tag/${tag}`} />
          </Helmet>
          <div className="full-screen-fix">
            <div className="fix-left">
              <FeaturedListing postEdges={postEdges} />
              <Breadcumb title={`Tagged in ${tag.charAt(0).toUpperCase() + tag.slice(1)}`} />
              <PostListing postEdges={postEdges}/>
            </div>
            <div className="fix-right">
              <Advert />
              <CategoryList/>
              <TagList/>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export const pageQuery = graphql`
  query TagPage($tag: String) {
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [fields___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
            date
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            cover
            date
          }
        }
      }
    }
  }
`;
