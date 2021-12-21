import * as React from "react";
import styled from "styled-components";

import Layout from "../components/Layout";
import Seo from "../components/Seo";

const PodcastPage = () => (
  <Layout>
    <Seo title="The OrkoHunter Podcast | Himanshu Mishra | @OrkoHunter" />
    <main>
      +++ title = "The OrkoHunter Podcast" type = "post" # View. # 1 = List # 2
      = Compact # 3 = Card view = 2 aliases = ["/theorkohunterpodcast/"] #
      Optional featured image (relative to `static/img/` folder). [header] image
      = "" caption = "This is a series of public conversations with my friends
      and colleagues about tech and life." +++ This is a series of public
      conversations with my friends and colleagues about tech and life.
      ![](/img/podcast-logo.jpg) ## Why a Podcast?{" "}
      <blockquote> and not just blog posts.</blockquote> 1. I love to read and
      write blog posts but I realized they are not enough. Podcast is a
      dialogue. Blog posts are monologoues. Podcast requires me to work on my
      speaking/conversational skills. Blog posts need me to work on my writing
      skills. 2. A lot of my blog posts have come from conversations with my
      friends. I felt it is a good idea to publish some of those raw
      conversations. 3. An excuse to find time and have meaningful conversations
      ;) 4. It is another form of knowledge sharing and can help some people. 5.
      The whole experience is exciting and fun for everyone involved! ## What
      will you talk about? My interest revolves around Software Engineering,
      Open Source, Life in College, Music, Literature and Spirituality. But
      these do not include the interests of my friends, so there should be more!
      ## How frequent will the episodes be? Optimistically, I hope to create at
      least one episode per month. ## How to get notified? - Subscribe via the
      [Youtube
      Channel](https://www.youtube.com/channel/UCGw2D1bMcZPzVUlIulkPWPg) -
      Follow Podcast on
      [Spotify](https://open.spotify.com/show/63uiWzrJ2093CxYcJLxXC8?si=7qZOjQ7oTCqjUUNHgX8hbA)
      - Follow on [Google
      Podcasts](https://podcasts.google.com/feed/aHR0cHM6Ly9hbmNob3IuZm0vcy8yNTUwZWYyYy9wb2RjYXN0L3Jzcw)
      If you want to hear me talk about something specific or with someone, let
      me know. I will need your ideas in the near future as soon as I run out of
      mine. ---
    </main>
  </Layout>
);

export default PodcastPage;
