"use strict";(self.webpackChunkorkohunter_net=self.webpackChunkorkohunter_net||[]).push([[960],{6315:function(e,t,n){var o=n(7294),a=n(3494),r=n(3201),i=a.default.div.withConfig({displayName:"DateTimeContainer__Container",componentId:"sc-y4qk21-0"})(["display:flex;align-items:center;gap:8px;min-width:240px;font-size:16px;color:rgba(0,0,0,0.6);@media only screen and (max-width:1024px){margin-bottom:0px;}"]),l=a.default.div.withConfig({displayName:"DateTimeContainer__CalendarContainer",componentId:"sc-y4qk21-1"})(["display:flex;align-items:center;min-width:128px;gap:8px;"]),s=a.default.div.withConfig({displayName:"DateTimeContainer__ClockContainer",componentId:"sc-y4qk21-2"})(["display:flex;align-items:center;gap:8px;"]);t.Z=function(e){var t=e.date,n=e.timeToRead;return o.createElement(i,null,o.createElement(l,null,o.createElement(r.IiJ,{size:16}),o.createElement("span",null,t)),o.createElement(s,null,o.createElement(r.fSQ,{size:16}),o.createElement("span",null,n," min")))}},64:function(e,t,n){var o=n(7294),a=n(3494),r=n(1082),i=n(6315),l=n(7081),s=a.default.div.withConfig({displayName:"PostsContainer__AllPostsContainer",componentId:"sc-3u1v2c-0"})(["font-family:Montserrat,serif;margin-top:96px;display:flex;flex-direction:column;max-width:120ch;margin-left:auto;margin-right:auto;gap:32px;"]),m=a.default.div.withConfig({displayName:"PostsContainer__TitleContainer",componentId:"sc-3u1v2c-1"})(["display:flex;flex-direction:column;"]),c=a.default.div.withConfig({displayName:"PostsContainer__BlogListRowContainer",componentId:"sc-3u1v2c-2"})(["color:black;text-decoration:none;display:flex;align-items:start;flex-direction:column;&:hover{color:rgba(0,0,0,0.6) !important;}"]),d=(0,a.default)(r.Link).withConfig({displayName:"PostsContainer__StyledLink",componentId:"sc-3u1v2c-3"})(["margin-left:auto;margin-right:auto;"]),u=a.default.button.withConfig({displayName:"PostsContainer__Button",componentId:"sc-3u1v2c-4"})(["margin-left:auto;margin-right:auto;width:160px;height:64px;border-radius:32px;border:none;background-color:rgba(0,0,0,1);font-family:Montserrat,serif;font-size:20px;font-weight:700;color:white;&:hover{cursor:pointer;background-color:rgba(0,0,0,0.6);transition:0.5s;}"]);t.Z=function(e){var t=e.posts,n=e.featured,a=e.letters,f=e.notes;return o.createElement(s,null,n&&o.createElement("h1",null,"Featured Posts"),a&&o.createElement("p",null,"These are some of my letters and their responses which I have made public. Read more on the"," ",o.createElement(r.Link,{to:"/blog/letters"},"announcement blog post"),"."),f&&o.createElement("p",null,"Some of my notes, made public."," ",o.createElement(r.Link,{to:"/blog/we-should-write-notes"},"We should write notes (for life lessons).")),t.map((function(e){return o.createElement(r.Link,{to:e.node.frontmatter.slug},o.createElement(c,null,o.createElement(i.Z,{date:e.node.frontmatter.date,timeToRead:e.node.timeToRead}),o.createElement(m,null,o.createElement("h2",null,e.node.frontmatter.title),o.createElement(l.D,null,e.node.frontmatter.subtitle))))})),n&&o.createElement(d,{to:"/blog"},o.createElement(u,null,o.createElement("span",null,"All Posts"))))}},7081:function(e,t,n){n.d(t,{D:function(){return o}});var o=n(3494).default.p.withConfig({displayName:"Typography__SubTitle",componentId:"sc-18tmwqn-0"})(["font-weight:500;color:rgba(0,0,0,1);font-family:Montserrat,serif;font-size:2rem;margin-top:0px;"])},3219:function(e,t,n){n.r(t),n.d(t,{default:function(){return l}});var o=n(7294),a=n(4857),r=n(4584),i=n(64);function l(e){var t=e.data.allMarkdownRemark.edges;return o.createElement(a.Z,null,o.createElement(r.Z,{title:"Letters | Himanshu Mishra | @OrkoHunter"}),o.createElement(i.Z,{posts:t,letters:!0}))}}}]);
//# sourceMappingURL=component---src-pages-letters-js-adefb2aa942216aa2b1a.js.map