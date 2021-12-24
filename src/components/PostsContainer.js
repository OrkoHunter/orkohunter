import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import DateTimeContainer from "./DateTimeContainer";
import { SubTitle } from "./Typography";

const AllPostsContainer = styled.div`
  font-family: Montserrat, serif;
  margin-top: 96px;
  display: flex;
  flex-direction: column;
  max-width: 80ch;
  margin-left: auto;
  margin-right: auto;
  gap: 32px;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const BlogListRowContainer = styled.div`
  color: black;
  text-decoration: none;
  display: flex;
  align-items: start;
  /* min-height: 104px; */
  flex-direction: column;

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

const PostsContainer = ({ posts, featured, letters, notes }) => (
  <AllPostsContainer>
    {featured && <h1>Featured Posts</h1>}
    {letters && (
      <p>
        These are some of my letters and their responses which I have made
        public. Read more on the{" "}
        <Link to="/blog/letters">announcement blog post</Link>.
      </p>
    )}
    {notes && (
      <p>
        Some of my notes, made public.{" "}
        <Link to="/blog/we-should-write-notes">
          We should write notes (for life lessons).
        </Link>
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
            <SubTitle>{post.node.frontmatter.subtitle}</SubTitle>
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
