import React from "react";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";
import Background from "../components/BackgroundImage";
import FeaturedListing from "../components/FeaturedListing";
import Breadcumb from "../components/Breadcumb";
import PostListing from "../components/PostListing";
import Advert from "../components/Advert";
import CategoryList from "../components/CategoryList";
import TagList from "../components/TagList";
import Layout from "../layout";
import config from "../../data/SiteConfig";


export default class CategoryTemplate extends React.Component {
  render() {
    const { category } = this.props.pageContext;
    const postEdges = this.props.data.allMarkdownRemark.edges;
    return (
      <Layout
        location={this.props.location}
        title={category.charAt(0).toUpperCase() + category.slice(1)}
      >
        <div className="category-container">
          <Helmet>
            <title>
              {`Posts in category "${category}" | ${config.siteTitle}`}
            </title>
            <link
              rel="canonical"
              href={`${config.siteUrl}/categories/${category}`}
            />
          </Helmet>
          <div className="full-screen-fix">
            <div className="fix-left">
            <FeaturedListing postEdges={postEdges} />
              <Breadcumb title={category.charAt(0).toUpperCase() + category.slice(1)} />
              <PostListing postEdges={postEdges} />
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
  query CategoryPage($category: String) {
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [fields___date], order: DESC }
      filter: { frontmatter: { category: { eq: $category } } }
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
