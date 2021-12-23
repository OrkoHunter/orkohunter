import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import DateTimeContainer from "./DateTimeContainer";

const AllPostsContainer = styled.div`
  font-family: Montserrat, serif;
  margin-top: 96px;
  display: flex;
  flex-direction: column;
  gap: 40px;
  max-width: calc((6 * 100vw) / 12);
  margin-left: auto;
  margin-right: auto;

  @media only screen and (max-width: 1024px) {
    max-width: calc((8 * 100vw) / 12);
  }
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const BlogListRowContainer = styled.div`
  color: black;
  text-decoration: none;
  display: flex;
  gap: 64px;
  align-items: start;
  min-height: 104px;

  @media only screen and (max-width: 1024px) {
    flex-direction: column;
    gap: 16px;
  }

  &:hover {
    /* color: rgb(63, 81, 181) !important; */
    color: rgba(0, 0, 0, 0.6) !important;
  }
`;

const StyledLink = styled(Link)`
  margin-left: auto;
  margin-right: auto;
`;

const Button = styled.button`
  margin-left: auto;
  margin-right: auto;
  width: 160px;
  height: 64px;
  border-radius: 32px;
  border: none;
  /* background-color: #356a8d; */
  background-color: rgba(0, 0, 0, 1);

  font-family: Montserrat, serif;
  font-size: 20px;
  font-weight: 700;
  color: white;

  &:hover {
    cursor: pointer;
    /* background-color: rgb(63, 81, 181); */
    background-color: rgba(0, 0, 0, 0.6);
    transition: 0.5s;
  }
`;

const PostsContainer = ({ posts, featured, letters }) => (
  <AllPostsContainer>
    {featured && <h1>Featured Posts</h1>}
    {letters && (
      <p>
        These are some of my letters and their responses which I have made
        public. Read more on the{" "}
        <Link to="/blog/letters">announcement blog post</Link>.
      </p>
    )}
    {posts.map(post => (
      <Link to={post.node.frontmatter.slug}>
        <BlogListRowContainer>
          <DateTimeContainer
            date={post.node.frontmatter.date}
            timeToRead={post.node.timeToRead}
          />
          <TitleContainer>
            <h2>{post.node.frontmatter.title}</h2>
            <h3>{post.node.frontmatter.subtitle}</h3>
          </TitleContainer>
        </BlogListRowContainer>
      </Link>
    ))}
    {featured && (
      <StyledLink to="/blog">
        <Button>
          <span>All Posts</span>
        </Button>
      </StyledLink>
    )}
  </AllPostsContainer>
);

export default PostsContainer;
