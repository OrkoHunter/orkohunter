import * as React from "react";
import styled from "styled-components";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import About from "../components/About";
import PostsContainer from "../components/PostsContainer";

const Divider = styled.hr`
  margin-top: 40px;
`;

const IndexPage = ({ data }) => {
  const posts = data.allMarkdownRemark.edges;

  return (
    <Layout>
      <Seo />
      <PostsContainer posts={posts} featured />
      <Divider />
      <About />
    </Layout>
  );
};

export const allFeaturedPostsQuery = graphql`
  {
    allMarkdownRemark(
      filter: { frontmatter: { draft: { ne: true }, featured: { eq: true } } }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      edges {
        node {
          id
          frontmatter {
            categories
            date(formatString: "MMM YYYY")
            draft
            slug
            subtitle
            summary
            title
          }
          html
          timeToRead
        }
      }
      totalCount
    }
  }
`;

export default IndexPage;
