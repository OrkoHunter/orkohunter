import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import { Disqus } from "gatsby-plugin-disqus";
import Layout from "../components/Layout";
import DateTimeContainer from "../components/DateTimeContainer";
import { SubTitle } from "../components/Typography";
import Seo from "../components/Seo";
import Scroll from "../components/ScrollToTop";

const Container = styled.div`
  margin-top: 56px;
  max-width: 80ch;
  margin-left: auto;
  margin-right: auto;
`;

const Content = styled.div`
  font-family: Montserrat, serif;
`;

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark, site } = data; // data.markdownRemark holds your post data

  const { frontmatter, html, timeToRead } = markdownRemark;

  const disqusConfig = {
    url: `${site.siteMetadata.siteUrl + frontmatter.slug}`,
    identifier: frontmatter.slug,
    title: frontmatter.title,
  };

  return (
    <Layout>
      <Seo
        title={`${frontmatter.title} | Himanshu Mishra (@OrkoHunter)`}
        description={
          frontmatter.subtitle ??
          "Personal blog of Himanshu Mishra (@OrkoHunter)"
        }
        image={frontmatter.image?.childImageSharp?.fixed?.src}
      />
      <Container>
        <div>
          <h1>{frontmatter.title}</h1>
          <SubTitle>{frontmatter.subtitle}</SubTitle>

          <DateTimeContainer date={frontmatter.date} timeToRead={timeToRead} />

          <Content dangerouslySetInnerHTML={{ __html: html }} />

          <Disqus config={disqusConfig} />
        </div>
      </Container>
      <Scroll showBelow={250} />
    </Layout>
  );
}

export const pageQuery = graphql`
  query ($id: String!) {
    site {
      siteMetadata {
        title
        description
        author
        siteUrl
      }
    }
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
        image {
          childImageSharp {
            fixed {
              src
            }
          }
        }
      }
    }
  }
`;
