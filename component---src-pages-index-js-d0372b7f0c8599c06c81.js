"use strict";(self.webpackChunkorkohunter_net=self.webpackChunkorkohunter_net||[]).push([[293],{4193:function(e,t,n){var a=n(6540),i=n(2568),o=n(1612);const l=i.default.div.withConfig({displayName:"DateTimeContainer__Container",componentId:"sc-y4qk21-0"})(["display:flex;align-items:center;gap:8px;min-width:240px;font-size:16px;color:rgba(0,0,0,0.6);@media only screen and (max-width:1024px){margin-bottom:0px;}"]),r=i.default.div.withConfig({displayName:"DateTimeContainer__CalendarContainer",componentId:"sc-y4qk21-1"})(["display:flex;align-items:center;min-width:128px;gap:8px;"]),c=i.default.div.withConfig({displayName:"DateTimeContainer__ClockContainer",componentId:"sc-y4qk21-2"})(["display:flex;align-items:center;gap:8px;"]);t.A=e=>{let{date:t,timeToRead:n}=e;return a.createElement(l,null,a.createElement(r,null,a.createElement(o.bfZ,{size:16}),a.createElement("span",null,t)),a.createElement(c,null,a.createElement(o.obD,{size:16}),a.createElement("span",null,n," min")))}},6667:function(e,t,n){var a=n(6540),i=n(2568),o=n(8007),l=n(4193),r=n(3980);const c=i.default.div.withConfig({displayName:"PostsContainer__AllPostsContainer",componentId:"sc-3u1v2c-0"})(["margin-top:96px;display:flex;flex-direction:column;max-width:100ch;margin-left:auto;margin-right:auto;gap:32px;"]),s=i.default.div.withConfig({displayName:"PostsContainer__TitleContainer",componentId:"sc-3u1v2c-1"})(["display:flex;flex-direction:column;"]),d=i.default.div.withConfig({displayName:"PostsContainer__BlogListRowContainer",componentId:"sc-3u1v2c-2"})(["color:black;text-decoration:none;display:flex;align-items:start;flex-direction:column;&:hover{}"]),m=(0,i.default)(o.Link).withConfig({displayName:"PostsContainer__StyledLink",componentId:"sc-3u1v2c-3"})(["margin-left:auto;margin-right:auto;"]),p=i.default.button.withConfig({displayName:"PostsContainer__Button",componentId:"sc-3u1v2c-4"})(["margin-left:auto;margin-right:auto;width:160px;height:64px;border-radius:32px;border:none;background-color:rgba(0,0,0,1);font-size:20px;font-weight:700;color:white;&:hover{cursor:pointer;transition:0.5s;}"]);t.A=e=>{let{posts:t,featured:n,letters:i,notes:u}=e;return a.createElement(c,null,n&&a.createElement("h1",null,"Featured Posts"),i&&a.createElement("p",null,"These are some of my letters and their responses which I have made public. Read more on the"," ",a.createElement(o.Link,{to:"/blog/letters"},"announcement blog post"),"."),u&&a.createElement("p",null,"Some of my notes, made public."," ",a.createElement(o.Link,{to:"/blog/we-should-write-notes"},"We should write notes (for life lessons).")),t.map((e=>a.createElement(o.Link,{to:e.node.frontmatter.slug},a.createElement(d,null,a.createElement(l.A,{date:e.node.frontmatter.date,timeToRead:e.node.timeToRead}),a.createElement(s,null,a.createElement("h2",null,e.node.frontmatter.title),a.createElement(r.t,null,e.node.frontmatter.subtitle)))))),n&&a.createElement(m,{to:"/blog"},a.createElement(p,null,a.createElement("span",null,"All Posts"))))}},3980:function(e,t,n){n.d(t,{t:function(){return a}});const a=n(2568).default.p.withConfig({displayName:"Typography__SubTitle",componentId:"sc-18tmwqn-0"})(["font-family:Inter,Montserrat,sans-serif;font-size:1.5em;margin-top:0px;"])},9255:function(e,t,n){n.r(t),n.d(t,{default:function(){return f}});var a=n(6540),i=n(2568),o=n(827),l=n(5032),r=n(978);const c=i.default.div.withConfig({displayName:"About__Container",componentId:"sc-1vt3ywh-0"})(["margin-top:96px;display:flex;flex-direction:column;align-items:center;"]),s=i.default.h1.withConfig({displayName:"About__Title",componentId:"sc-1vt3ywh-1"})(["font-size:32px;margin-bottom:32px;text-align:center;"]),d=i.default.h2.withConfig({displayName:"About__SubTitle",componentId:"sc-1vt3ywh-2"})(["font-size:24px;margin-top:32px;font-weight:400;text-align:center;"]);var m=()=>a.createElement(c,null,a.createElement(s,null,"Hello! My name is Himanshu Mishra"),a.createElement(r.S,{src:"../images/profile_pic.png",width:240,quality:100,alt:"Himanshu Mishra",style:{marginTop:"32px",borderRadius:"120px"},__imageData:n(4670)}),a.createElement(d,null,"Open Source | Platform Engineering | Developer Experience | Hacker Mindset")),p=n(6667);const u=i.default.hr.withConfig({displayName:"pages__Divider",componentId:"sc-1obqc4r-0"})(["margin-top:40px;"]);var f=e=>{let{data:t}=e;const n=t.allMarkdownRemark.edges;return a.createElement(o.A,null,a.createElement(l.A,null),a.createElement(m,null),a.createElement(u,null),a.createElement(p.A,{posts:n,featured:!0}))}},4670:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#384868","images":{"fallback":{"src":"/static/39fec90dba11970bc8e7b0c85c81580d/7793c/profile_pic.jpg","srcSet":"/static/39fec90dba11970bc8e7b0c85c81580d/bea51/profile_pic.jpg 60w,\\n/static/39fec90dba11970bc8e7b0c85c81580d/bbf83/profile_pic.jpg 120w,\\n/static/39fec90dba11970bc8e7b0c85c81580d/7793c/profile_pic.jpg 240w","sizes":"(min-width: 240px) 240px, 100vw"},"sources":[{"srcSet":"/static/39fec90dba11970bc8e7b0c85c81580d/caa3b/profile_pic.webp 60w,\\n/static/39fec90dba11970bc8e7b0c85c81580d/b15f9/profile_pic.webp 120w,\\n/static/39fec90dba11970bc8e7b0c85c81580d/b5014/profile_pic.webp 240w","type":"image/webp","sizes":"(min-width: 240px) 240px, 100vw"}]},"width":240,"height":240}')}}]);
//# sourceMappingURL=component---src-pages-index-js-d0372b7f0c8599c06c81.js.map