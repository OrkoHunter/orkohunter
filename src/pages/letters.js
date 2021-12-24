import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import PostsContainer from "../components/PostsContainer";

export default function LettersHomePage({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const allLetters = data.allMarkdownRemark.edges;
  return (
    <Layout>
      <Seo title="Letters | Himanshu Mishra | @OrkoHunter" />
      <PostsContainer posts={allLetters} letters />
    </Layout>
  );
}

export const allPostsQuery = graphql`
  query {
    allMarkdownRemark(
      filter: {
        fileAbsolutePath: { regex: "/content/letters/" }
        frontmatter: { draft: { ne: true } }
      }
    ) {
      edges {
        node {
          id
          frontmatter {
            categories
            date
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
