import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import DateTimeContainer from "./DateTimeContainer";

const AllPostsContainer = styled.div`
  margin-top: 5em;
  display: flex;
  flex-direction: column;
  max-width: 100ch;
  margin-left: auto;
  margin-right: auto;
  gap: 32px;
`;

const BlogListRowContainer = styled.div`
  color: black;
  /* text-decoration: none; */
  display: flex;
  /* align-items: start; */
  /* min-height: 104px; */
  /* flex-direction: column; */

  @media only screen and (max-width: 767px) {
    flex-direction: column;
    font-size: 1.2em;
  }
`;

const P = styled.p`
  position: relative;
  font-size: 1.2em;
  margin-top: 0.5em;
  margin-bottom: 0.5em;
  font-weight: 500;

  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px; /* Thickness of the underline */
    bottom: 0;
    left: 0;
    background-color: #000; /* Underline color */
    transform: scaleX(0);
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
  }

  &:hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
`;

const StyledLink = styled(Link)`
  margin-left: auto;
  margin-right: auto;
`;

const Button = styled.button`
  margin-left: auto;
  margin-right: auto;
  width: 200px;
  height: 64px;
  border-radius: 32px;
  border: none;
  /* background-color: #356a8d; */
  background-color: rgba(0, 0, 0, 1);

  /* font-family: Montserrat, serif; */
  font-size: 20px;
  font-weight: 700;
  color: white;

  &:hover {
    cursor: pointer;
    /* background-color: rgb(63, 81, 181); */
    /* background-color: rgba(0, 0, 0, 0.6); */
    transition: 0.5s;
  }
`;

const PostsContainer = ({ posts, featured, letters, notes }) => (
  <AllPostsContainer>
    {letters && (
      <P>
        These are some of my letters and their responses which I have made
        public. Read more on the{" "}
        <Link to="/blog/letters">announcement blog post</Link>.
      </P>
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
          <P>{post.node.frontmatter.title}</P>
        </BlogListRowContainer>
      </Link>
    ))}

    {featured && (
      <StyledLink to="/blog">
        <Button>
          <span>See All Posts</span>
        </Button>
      </StyledLink>
    )}
  </AllPostsContainer>
);

export default PostsContainer;
