import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import styled from "styled-components";

import Layout from "../components/Layout";
import Seo from "../components/Seo";

const Container = styled.main`
  margin-top: 56px;
  max-width: 80ch;
  margin-left: auto;
  margin-right: auto;
  font-family: Montserrat, serif;
`;

const PodcastPage = () => (
  <Layout>
    <Seo
      title="The OrkoHunter Podcast | Himanshu Mishra | @OrkoHunter"
      description="This is a series of public conversations with my friends
      and colleagues about tech and life."
    />
    <Container>
      <p>
        This is a series of public conversations with my friends and colleagues
        about tech and life.
      </p>
      <StaticImage src="../images/podcast-logo.jpg" />
      <h2>Why a Podcast?</h2>
      <p>...and not just blog posts.</p>
      <ol>
        <li>
          <p>
            I love to read and write blog posts but I realized they are not
            enough. Podcast is a dialogue. Blog posts are monologoues. Podcast
            requires me to work on my speaking/conversational skills. Blog posts
            need me to work on my writing skills.
          </p>
        </li>
        <li>
          <p>
            A lot of my blog posts have come from conversations with my friends.
            I felt it is a good idea to publish some of those raw conversations.
          </p>
        </li>
        <li>
          <p>An excuse to find time and have meaningful conversations ;) </p>
        </li>
        <li>
          <p>
            It is another form of knowledge sharing and can help some people.
          </p>
        </li>
        <li>
          <p>The whole experience is exciting and fun for everyone involved!</p>
        </li>
      </ol>
      <h2>What will you talk about?</h2>
      <p>
        My interest revolves around Software Engineering, Open Source, Life in
        College, Music, Literature and Spirituality. But these do not include
        the interests of my friends, so there should be more!
      </p>
      <h2>How to get notified?</h2>
      <ul>
        <li>
          <p>
            Subscribe via the{" "}
            <a href="https://www.youtube.com/channel/UCGw2D1bMcZPzVUlIulkPWPg">
              Youtube Channel
            </a>
          </p>
        </li>
        <li>
          <p>
            Follow Podcast on{" "}
            <a href="https://open.spotify.com/show/63uiWzrJ2093CxYcJLxXC8?si=7qZOjQ7oTCqjUUNHgX8hbA">
              Spotify
            </a>
          </p>
        </li>
        <li>
          <p>
            Follow on{" "}
            <a href="https://podcasts.google.com/feed/aHR0cHM6Ly9hbmNob3IuZm0vcy8yNTUwZWYyYy9wb2RjYXN0L3Jzcw">
              Google Podcasts
            </a>
          </p>
        </li>
      </ul>
      <p>
        If you want to hear me talk about something specific or with someone,
        let me know. I will need your ideas in the near future as soon as I run
        out of mine.
      </p>
    </Container>
  </Layout>
);

export default PodcastPage;
