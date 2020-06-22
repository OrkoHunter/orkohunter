+++
date = "2020-06-21"
title = "Live Asynchronously"
subtitle = "Bringing the philosophy of asynchronous programming into life."
summary = "Bringing the philosophy of asynchronous programming into life."
draft = false
categories = ["Tech", "Non-Tech"]
slug = "live-asynchronously"
+++

I first heard the phrase "Live Asynchronously" in [this article](https://www.freecodecamp.org/news/live-asynchronously-c8e7172fe7ea/) written by the amazing Quincy Larson, the creator of freecodecamp.org.

In my last blog post about [Joining Spotify in Sweden](/blog/spotify/), I wrote a bit about this. Here, I have written more about what living asynchronously means to me. I have put some concrete examples from life where I have used this philosophy.

## Define Asynchronous

I have understood Asynchronous in programming but [Asynchrony](<[https://en.wikipedia.org/wiki/Asynchrony](https://en.wikipedia.org/wiki/Asynchrony)>) has more (similiar) meanings.

In my earliest days with Javascript, I remember being stuck one time. In my program I was doing an API request. Irrespective of whether the request was successful, my variable to store the API response was always `undefined`. I was in my first year of college and I expressed my frustration to my brother with _"Javascript sucks"_. All he said was _"Remember, Javascript is asynchronous."_ And that fixed the issue! I still see such problems and they get fixed by the _Remember..._

Most of the beginners face this problem with Javascript in their early days because Javascript is async in nature. This is unlike Python, which is a imperative (procedural) language.

### Difference

Let us take this short example of a program to understand the difference.

```

1. Say "Hello World".
2. *API request to fetch an image from the internet.
3. Based on the response of the request, store the image.
4. Calculate 1 + 1.

```

In a procedural language like Python or C/C++, all the 4 lines will be executed one after the other. The lines 3 and 4 will be executed only when line 2 has completely finished (network request has completed). But, it could take a second or more to complete that request.

Our program will spend most of its time at line 2 waiting for the network request to finish.

.

But, in an asynchronous language like Javascript, we will write the program differently.

```

1. Say "Hello World".
2. *API request to fetch an image from the internet.
3.              (Callback) Based on the response of the network request, store the image.
4. Calculate 1 + 1.

```

Here, line 1 will be executed as usual. In line 2, we will do the API request. But, this time we are not going to wait around for the response. We will immediately move on to Line 4 and execute it. When the network call in line 2 finishes, we will execute the "callback" assigned to it in line 3.

### Conclusion

**Asynchronous programming comes into the picture for the blocks of code which take significant time to execute i.e. something which blocks the procedural execution of the main program.**

Sending an internet request, reading/writing to a file or a database takes way more time than calculating 1 + 1. So, we write a "callback function" for our asynchronous block of code. The callback decides what to do when the network request or the I/O operation completes.

[Promise in Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) has the same philosophy and is more powerful than callbacks.

## The Philosophy

Humans and computers function in an extraordinarily similar fashion. The I/O (Input/Output) operation for a computer is to talk to other computers. The I/O operation for us is to talk to other people.

This blocks the main program. It means there is a chunk of time that it takes away from the main program for as long as the blocking execution is being done.

These I/O operations are necessary for us to survive and communicate. They happen frequently and are also time-consuming. It then becomes important for us to manage them well.

**Living Asynchronously is us making sure our I/O operations are asynchronous most of the time.**

## Applying the philosophy

### Year 2004 Age 7

I remember in my school, our Maths textbooks used to have many questions in the form of exercises. An exercise was a collection of questions on one topic. There used to be dozens of chapters and hundreds of exercises in a book. The year-long school curriculum and timeline were to make sure all the chapters and their exercises get completed by the students.

Generally, the entire batch of students is synchronised on what exercise they are doing. Let's say the teacher decides that this week, we are going to complete the Exercise 21 based on the basic Trigonometric formulae. By Monday next week, It is expected of the students to have their notebooks up-to-date. That's how synchronous programming works.

This model is not great. Not everyone in the class needs to follow the pace set by the teacher for what they deem is suitable for the class.

When I was in the 3rd standard (age 7), my father started teaching Maths to my elder brother and me. (Fun fact: All three of us now do programming for a living!). It was 2004. In the summer before the school would begin, dad had set the target for me to solve all the problems in the book I was going to study that year. I loved the experience! Although it took a lot of time from my summer vacation, it was rewarding. And I didn't want to stop there. Dad noticed this and bought me the maths textbooks for the following years. And this went on until in the 7th standard, I was doing the problems of the Maths book used in the 10th class.

If I had followed the synchronous philosophy of the school, I would have to sit around throughout the year, learning not much new. A decade after that time, I would consciously start living asynchronously.

### Working in college societies

Back in college, for five years I was part of a [literary society](https://wiki.metakgp.org/w/Technology_Literary_Society) and [a club](https://twitter.com/kossiitkgp) to promote open source. These were two separate groups and I was an active member of both! In my 3rd/4th year, I was part of the so called "executive batch". We were 4-5 people responsible to execute the events organized by 30-50 of us members, for the hundreds of students on campus to attend.

Before we organized any event (a poetry night, an open mic, a Python or a GSoC workshop, etc.), I as the organizer needed to sync with all the members helping out. There are many operations that need to be taken care of, like logistics, publicity, poster distribution, members' performances/talks, communication with external members, finances, etc. If I remember correctly, I had burnt out early in the year. I had to sync with so many people during the days of the actual event. I valued the event's success not much by its attendance, but a lot by how we did it and the things we learned in the process.

Lets take the task of poster distribution. The job was to print a bunch of posters for the event that had its details, description, contact, venue, time, etc. and paste it across the college campus so that other students would notice. From the team, I would assign one person to take care of this. This meant that they were responsible for going to the printing press, getting the copies done, and then with the help of other members, putting them up across the campus. Given I had other equally important tasks to take care of, it was a nightmare to contact all the people involved in this particular task. But, I couldn't just "assign and forget" the task to someone because, if he or she decided to slack off, it would disrupt the event. This has happened quite many times as I remember. So, I started identifying people I could trust, who shared the passion of the work and cared. And then, living asynchronously was easy and the only sane way to go about it.

_Then on, all my instructions and tasks had their *callbacks*. And if someone else asked me to do something, I would ask them to write their *callback* i.e. tell me what to do when I'm done with this. I reduced many unnecessary "blocking" I/O operations from my life, resulting in a much relaxed life._

### WhatsApp message "seen" tick

Many years ago Facebook started showing things like "message seen at 10:10 AM" in their chatbox. This was the first time I saw something like this. Earlier, messaging someone was much like sending a very short email - you didn't expect a response within a minute. Instant communication started catching up and now there is a product called "mail tracker" which tells you when and how many times your email was read.

I have disabled the blue seen tick in WhatsApp and I have a [dummy facebook account](/blog/delete-facebook/). This means, I don't get to know when my message was read and the other person doesn't know when I read their message. This is me, trying to reduce "synchronous" communication from life, as it introduces more problems than it solves.

If someone _sees_ my message, I never ought to expect an instant response. I have no idea what they are doing in their "main program". They could be in a thought process, talking with someone else, working on something, or be in one of a thousand different possibilities. So "seen at 10:10 AM" gives me no information. It instead triggers me to think - _why have they not replied yet_.

If I want to have a synchronous conversation, I would set up a call at the convenience of both of us. That is much efficient in every aspect. By not having to worry about replying instantly and not expecting someone to do so, I have freed a lot of time that I used to waste in waiting for the response.

### Relationships and Behaviour

If I have the freedom of my thoughts, asynchrony is associated with freedom.

If our actions and words demand synchronous response from the other person, it directly impacts their time. It affects how they want to spend it. Doing it way often is not nice. And it is a kind gesture to respect their time and do less synchronous communication. Allowing someone to be free is a great expression of love and it makes us better humans.

I would be crazy to say that all synchronous communications are bad. That would be insane. What I do is reduce the frequency, and increase the time to generate more value. And of course, do lots of async stuff. :)

### Blog post vs Notifications

A blog post is a shining example of communicating asynchronously in this world.

This blog post does not demand anything from you. You can close it as soon as you opened it, read it now, a week later or next year. I have no expectation of knowing whether you read it or not, unless you want to let me know. I enjoy writing and reading them. They do not feel "instant". They do not say "just now" or "posted a minute ago". As Quincy Larson says - all notifications are synchronous. Social media wants to notify me if someone has said something publicly. Facebook/Instagram/Twitter wants to keep me in "sync" with what all my friends are doing. However, this blog post will sit here on this website. And if someone wants to see if I have written something new, it will be discovered.

Ironically, I _am_ going to tweet a link to this blog post. That will be synchronous. Oh, the hippocracy! ;)

### Remote work promotes living asynchronously

Before my first job started, I was convinced that by introducing more asynchrony in life, I am saving my time and energy and I am being happier. When I started working, I had the challenge of adopting the same philosophy at work. I knew it would be challenging because people have their own style of working. But I tried my best to keep this philosophy alive with me.

If I would have technical queries to ask, most of them would be Email or Slack and few in-person. As I understood the team and the technologies better over time, I would change all my questions to being asynchronous. That kept everyone involved a bit happier. The person who'd write the answer, would do so in their free time. Hence the responses had more details and helped me more than what a disrupting synchronous question would have done.

When a project is newborn, synchronous communication between the stakeholders and engineers is necessary and valuable. They help avoid confusion and misunderstandings. But as the tasks start being granular, sync-meetings begin losing their value.

If a project has grown large and has no documentation, there is no way asynchronous communication is possible even after months or years. The few people who created it, are going to waste more time answering questions, which they should have written in the form of documentation ages ago.

Generally, product managers love to talk about projects in team meetings. Why won't they? They have a vision and want to share. But a wise engineering manager would come and ask, "Can this information be shared via an email?". This is a smart question to ask each time because it not only promotes written documentation but saves time for the involved engineers. They got time to focus and pay more attention to the work, which would have been disrupted by a synchronous meeting.

Similar to blog posts, Documentation of projects and code is a light beam of hope in the asynchronous life. If I can find the documentation to read, it drastically reduces the amount of synchronous communication involved to solve my problem. And since a tap on the shoulder in not possible when working remotely, more written communication is the way to go!

### TLDR (Too long, didn't read)

Living Asynchronously is inspired by the concept of asynchronous programming and Javascript's callbacks and promises. Synchronous life events are blocking in nature, are inefficient and time-consuming. It is not always possible, but living asynchronous life has its benefits and is a great way to live.

I believe this philosophy is easy to understand and can be applied on many aspects of life. I encourage you to think on your own and identify the synchronous events in life. And then imagine how living asynchronously would feel.
