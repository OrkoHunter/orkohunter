---
date: "2020-05-22"
title: "Joining Spotify in Sweden"
subtitle: "Thoughts on Japan, my principles of work and what lies ahead."
summary: "I have written about living in Japan, my work principles and what lies ahead."
draft: false
categories: ["Tech"]
slug: "/blog/spotify"
---

![](./spotify.png)
[_Image source_](https://newsroom.spotify.com/media-kit/logo-and-brand-assets/)

## Life in Japan

All the things that I knew about Japan turned out to be true, as soon as I arrived here 8 months ago.

- Japan is a **beautiful** place to live! The [cherry blossoms](https://en.wikipedia.org/wiki/Cherry_blossom) season just started. There is a lot of nature surrounding downtown Tokyo. I haven't experienced the peak of summer here yet, but the cold climate has been cherry on top of it all.

  I spent five years in my college campus where you could spot trees from anywhere (my hostel room, classrooms and the roads). Having all this nature around me once again was a relief.

- Most **people are mindful, quiet and private**. This is great for those who want to live a private life. I believe my friends and I used to be the only ones talking in the entire freaking train.
- **Delicacies**! I don't remember having a bad meal ever. The proportion size and the amount of calories are thoughtfully decided. The meals are prioritized to be healthy _and_ tasty. This is not true for many countries.
- Japan is very **safe**. I know many of my friends never locked their apartments before going out (bad idea). Walking outside late at nights does not feel threatening. I am raised to be careful about incoming traffic and being stoic about what could go wrong. Certainly, I have never had any bad experience. I didn't encounter any homeless people either.
- The city is mostly clean. People do not enter anyone's house with their shoes on. There is almost zero vandalism.
- The **customer service** can not be imagined and replicated easily in other societies of the world. I know and have heard that people in India are very helpful. I felt people in Japan sometimes do _beyond normal_ things for their customers. People take their jobs very seriously. The entire bank staff greets you when you come in. You will not be left unattended even for a minute. And everyone will say Thank you and keep bowing until you get out of the door and disappear. My God, I used to feel bad.

The not-so-good things that I had heard are also true!

- Language barrier

  You can get by in Tokyo if you don't know Japanese and have friends whom you can talk to. But my life was of a _tourist_ and was limited in social terms. Essential shopping (groceries, etc.) becomes limited. I have to show an image and hope that the person can recognize what I am asking for. Using a public service e.g. Hospitals, courier service is hard. I can not enquire what I want to. Google Translate is barely helpful, and is useless most of the times.

  Many people learn Japanese after coming here. They see a life here and want to settle. As of now, I know I only want to _settle_ in India and maybe in an English speaking country. My work required no Japanese, hence I did not learn. Instead I invested my time in learning new paradigms of programming in a large company. I feel I made the right decision and learnt a lot.

- Rush hour traffic

  You need courage to commute in the morning. Even if I wanted to start my day early, it is not going to happen. Trains are packed at more than 200% of their capacity between 7-9 AM. I won't need to hold any bars in the moving trains because maybe five people would be pushing me from all directions. Lo and behold the laws of physics, I won't fall or even move when the train accelerated. xD

## Principles of work

_Things I learnt in my first job_

### Living asynchronously

Three years ago, I read this blog post by Quincy Larson, the founder of freecodecamp.org, titled [Live asynchronously.](https://www.freecodecamp.org/news/live-asynchronously-c8e7172fe7ea/). I got inspired by it. I took the concepts of Promises and callbacks in Javascript on a philosophical level.

Working Synchronously is the easy option. Async is hard to code and to practice in real life.

Living async means writing negligible number of messages/emails which require you to constantly wait until there is response. They block you from continuing to work on something else. Living async means lesser number of unimportant meetings and sync ups. In fact, when I used to be stuck in the beginning, I used to write my doubts as long expressive messages and would not expect a response immediately. I think I learnt this from the Open Source communities. ;)

_Edit: Some folks asked me on twitter to elaborate on this, so I wrote a follow up blog post about [living asynchronously](https://orkohunter.net/blog/live-asynchronously/)._

### Working concurrently

I always took two or more concurrent (independent) tasks at the same time. If I get blocked or maybe bored with the first task, I would switch to the second one and would wait until I get unblocked. It is not feasible when the first task is huge. But even then, it can be broken down into chunks of concurrent pieces. And then, I would "parallelly process" them on my end.

### Writing daily notes

I used to take notes aggressively when I started working. I would write more than 100 words each day. I would publish them on an internal Confluence space.

The main reasons for doing this were -

1. **We forget**. The meetings with our managers, mentors and coworkers in our first month are crucial. They convey some of the most important things about the company, team, project, etc. It was important for me to write _all_ of it down.
2. **Self review**. At the end of the day, I would go through my notes and publish a summary of things I did, things I learnt, etc. It would take 10 minutes each day. My quarterly self reviews used to be very very long and exhaustive, since I had the logs of what I did. After six months, I changed the frequency of publishing the logs to weekly, but I would still take daily private notes.
3. **Being public**. My page was easily accessible by visiting `go/himanshu` from inside the company. I loved that I was being transparent about how I am spending my time in the company. And it also helped my indirect co-workers to know what I do here.

### Docs, docs. code. docs. docs. Technical specs.

Working on code without documentation is not fun. You are surprised each time you add a new feature. You have low confidence when making changes. For the love of humanity, document your decisions and the architecture.

### Integration tests

Unit tests are great. But I love end to end integration tests a lot. They give me more confidence that the functionality will not break with my PRs being merged. I couldn't resist writing an integration test for the project I was working on. [You might have seen some gifs about X unit tests and 0 integration tests.](https://natooktesting.wordpress.com/2017/08/24/x-unit-tests-0-integration-tests/)

### No unconstructive criticism

When we join a new place, we notice hundreds of things that can be done better (according to us). If I go on complaining about all, and do not offer to fix any, I am being unhelpful. So, I did not offer any unnecessary feedback or criticism unless they were constructive.
This is the Chapter 1 of [How to Win Friends and Influence People by Dale Carnegie](https://en.wikipedia.org/wiki/How_to_Win_Friends_and_Influence_People).

### Scoping a project, breaking down into smaller tasks

A good engineer is supposed to see the bigger picture of a project. They collaborate hand in hand with Product managers and help in writing the Spec. They break the project into smaller tasks which help them correctly estimate the timeline. They offer creative solutions which the PM might not be aware of.
This skill comes with experience and time spent in the company and is valued by everyone around.

## Next steps with Spotify

In a few months, I will relocate to Stockholm, Sweden. Hopefully, the travel is permitted by then. My work will be related to Spotify's newly open sourced project called [Backstage](https://github.com/spotify/backstage). Spotify has been developing this for four years and has now decided to open source it, to simplify the infrastructure complexity in companies. Check it out, you'll find it interesting. [backstage.io](https://backstage.io/)

I am personally very excited that I will get to work closely with [Remy Decausemaker](https://www.linkedin.com/in/decause/) again. Remy was my direct manager at Twitter. He now leads the Open Source program at Spotify. I have learnt so much about Open Source in the time that I have worked with him and I feel blessed that there lies more. :)

As far as I know from Spotify engineering blogs and the people, it has a strong engineering culture. Teams (Squads) have autonomy of the work they do. People share knowledge and support collaboration and individual growth. I intend to stay in the company for long and hopefully I come out as a much better engineer.

Plus, Spotify is a product that I have been using for many years. It has helped me find artists who have touched my soul. I am very excited about what lies ahead.

Cheers!
