import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import PostsContainer from "../components/PostsContainer";

export default function NotesHomePage({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const allNotes = data.allMarkdownRemark.edges;
  return (
    <Layout>
      <Seo title="Notes | Himanshu Mishra | @OrkoHunter" />
      <PostsContainer posts={allNotes} notes />
    </Layout>
  );
}

export const allPostsQuery = graphql`
  query {
    allMarkdownRemark(
      filter: {
        fileAbsolutePath: { regex: "/content/notes/" }
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
