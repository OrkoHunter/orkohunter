import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import PostsContainer from "../components/PostsContainer";

export default function BlogHomePage({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const allPosts = data.allMarkdownRemark.edges;

  return (
    <Layout>
      <Seo title="Blog | Himanshu Mishra (@OrkoHunter)" />
      <PostsContainer posts={allPosts} />
    </Layout>
  );
}

export const allBlogPostsQuery = graphql`
  {
    allMarkdownRemark(
      filter: {
        fileAbsolutePath: { regex: "/content/blog/" }
        frontmatter: { draft: { ne: true } }
      }
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
