import React from "react";
import { Helmet } from "react-helmet";
import { graphql, Link } from "gatsby";
import Breadcumb from "../components/Breadcumb";
import PostListing from "../components/PostListing";
import PaginationLinks from "../components/PaginationLinks";
import Advert from "../components/Advert";
import CategoryList from "../components/CategoryList";
import TagList from "../components/TagList";
import Layout from "../layout";
import config from "../../data/SiteConfig";


class PostList extends React.Component {
  render() {
    const { currentPage, numPages } = this.props.pageContext
    const postEdges = this.props.data.allMarkdownRemark.edges;
    return (
      <Layout location={this.props.location} title={`Page: ${currentPage}`}>
        <div className="postlist-container">
          <Helmet>
          {`Page "${currentPage}" | ${config.siteTitle}`}
            <link rel="canonical" href={`${config.siteUrl}/page/${currentPage}`} />
          </Helmet>
          <div className="full-screen-fix">
            <div className="fix-left">
            <div><Breadcumb title={`${currentPage}`}/></div>
              <PostListing postEdges={postEdges} />
              <PaginationLinks currentPage={currentPage} numPages={numPages} />
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

export default PostList;

export const pageQuery = graphql`
  query PostListQuery ($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: [fields___date], order: DESC }
      limit: $limit
      skip: $skip
      ) {
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
