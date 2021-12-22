import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { FaCalendarAlt, FaRegClock } from "react-icons/fa";

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
    color: rgb(63, 81, 181) !important;
  }
`;

const DateTimeContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  min-width: 240px;
  margin-top: 4px;
  font-size: 20px;
`;

const CalendarContainer = styled.div`
  display: flex;
  align-items: center;
  min-width: 128px;
  gap: 8px;
`;

const ClockContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Title = styled.span`
  font-size: 32px;
`;

const SubTitle = styled.span`
  font-size: 20px;
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
  background-color: #356a8d;

  font-family: Montserrat, serif;
  font-size: 20px;
  font-weight: 700;
  color: white;

  &:hover {
    cursor: pointer;
    background-color: rgb(63, 81, 181);
    transition: 0.5s;
  }
`;

const PostsContainer = ({ posts, featured }) => (
  <AllPostsContainer>
    {featured && <h1>Featured Posts</h1>}
    {posts.map(post => (
      <Link to={post.node.frontmatter.slug}>
        <BlogListRowContainer>
          <DateTimeContainer>
            <CalendarContainer>
              <FaCalendarAlt size={16} />
              <span>{post.node.frontmatter.date}</span>
            </CalendarContainer>
            <ClockContainer>
              <FaRegClock size={16} />
              <span>{post.node.timeToRead} min</span>
            </ClockContainer>
          </DateTimeContainer>
          <TitleContainer>
            <Title>{post.node.frontmatter.title}</Title>
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
