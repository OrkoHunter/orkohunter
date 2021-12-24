import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import styled from "styled-components";
import DateTimeContainer from "../components/DateTimeContainer";
import { SubTitle } from "../components/Typography";

const Container = styled.div`
  margin-top: 56px;
  max-width: 80ch;
  margin-left: auto;
  margin-right: auto;
`;

const Content = styled.div`
  font-family: Roboto, serif;
`;

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data; // data.markdownRemark holds your post data
  console.log(data);
  const { frontmatter, html, timeToRead } = markdownRemark;
  return (
    <Layout>
      <Container>
        <div className="blog-post">
          <h1>{frontmatter.title}</h1>
          <SubTitle>{frontmatter.subtitle}</SubTitle>

          <DateTimeContainer date={frontmatter.date} timeToRead={timeToRead} />

          <Content dangerouslySetInnerHTML={{ __html: html }} />
        </div>
      </Container>
    </Layout>
  );
}

export const pageQuery = graphql`
  query ($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      timeToRead
      frontmatter {
        categories
        date(formatString: "MMM DD, YYYY")
        draft
        slug
        subtitle
        summary
        title
      }
    }
  }
`;
