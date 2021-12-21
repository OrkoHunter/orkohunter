import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import Seo from "../components/Seo";

export default function BlogHomePage({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const allPosts = data.allMarkdownRemark.edges;
  console.log(allPosts);
  const a = [];
  allPosts.forEach(post => {
    a.push(post.node.frontmatter.slug);
  });
  console.log(a.join("|||"));
  return (
    <Layout>
      <Seo title="Blog | Himanshu Mishra | @OrkoHunter" />
      {allPosts.map(post => (
        <Link to={post.node.frontmatter.slug}>
          <div>
            <div>{post.node.frontmatter.date}</div>
            <div>{post.node.timeToRead}</div>
            <div>{post.node.frontmatter.title}</div>
            <div>{post.node.frontmatter.subtitle}</div>
          </div>
        </Link>
      ))}
    </Layout>
  );
}

export const allBlogPostsQuery = graphql`
  query {
    allMarkdownRemark(
      filter: {
        fileAbsolutePath: { regex: "/blog/" }
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
