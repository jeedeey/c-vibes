import React from "react";
import Card from "react-md/lib/Cards/Card";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../layout";
import Background from "../components/BackgroundImage";
import FeaturedListing from "../components/FeaturedListing";
import PostListing from "../components/PostListing";
import PaginationLinks from "../components/PaginationLinks";
import Advert from "../components/Advert";
import CategoryList from "../components/CategoryList";
import TagList from "../components/TagList";
import SEO from "../components/SEO";
import config from "../../data/SiteConfig";

class Index extends React.Component {
  render() {
    const postsPerPage = 6;
    const numPages = Math.ceil(this.props.data.allMarkdownRemark.totalCount / postsPerPage)
    const postEdges = this.props.data.allMarkdownRemark.edges;
    return (
      <Layout location={this.props.location} title="home">
        <div className="index-container">
          <Helmet>
            <title>{config.siteTitle}</title>
            <link rel="canonical" href={`${config.siteUrl}`} />
          </Helmet>
          <SEO postEdges={postEdges} />
          <div className="full-screen-fix">
            <div className="fix-left">
              <FeaturedListing postEdges={postEdges} />
              <PostListing postEdges={postEdges} />
              <PaginationLinks currentPage={1} numPages={numPages} />
            </div>
            <div className="fix-right">
              <Advert />
              <CategoryList  /> 
              <TagList />
            </div>
            
          </div>
          
        </div>
      </Layout>
    );
  }
}

export default Index;

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      limit: 6
      sort: { fields: [fields___date], order: DESC }
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
            featured
          }
        }
      }
    }
  }
`;
