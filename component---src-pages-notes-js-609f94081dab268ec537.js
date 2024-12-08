"use strict";(self.webpackChunkorkohunter_net=self.webpackChunkorkohunter_net||[]).push([[424],{4193:function(e,t,n){var a=n(6540),r=n(2568),o=n(1612);const l=r.default.div.withConfig({displayName:"DateTimeContainer__Container",componentId:"sc-y4qk21-0"})(["display:flex;align-items:center;gap:8px;min-width:240px;font-size:16px;color:rgba(0,0,0,0.6);@media only screen and (max-width:1024px){margin-bottom:0px;}"]),i=r.default.div.withConfig({displayName:"DateTimeContainer__CalendarContainer",componentId:"sc-y4qk21-1"})(["display:flex;align-items:center;min-width:128px;gap:8px;"]),c=r.default.div.withConfig({displayName:"DateTimeContainer__ClockContainer",componentId:"sc-y4qk21-2"})(["display:flex;align-items:center;gap:8px;"]);t.A=e=>{let{date:t,timeToRead:n}=e;return a.createElement(l,null,a.createElement(i,null,a.createElement(o.bfZ,{size:16}),a.createElement("span",null,t)),a.createElement(c,null,a.createElement(o.obD,{size:16}),a.createElement("span",null,n," min")))}},827:function(e,t,n){n.d(t,{A:function(){return y}});var a=n(6540),r=n(2568),o=n(8007),l=n(1612);const i=r.default.nav.withConfig({displayName:"SocialNav__Container",componentId:"sc-2efzvt-0"})(["display:flex;flex-direction:row;align-items:center;gap:16px;"]),c=r.default.a.withConfig({displayName:"SocialNav__Link",componentId:"sc-2efzvt-1"})(["color:black;width:32px;height:32px;"]);var s=()=>a.createElement(i,null,a.createElement(c,{target:"_blank",href:"https://linkedin.com/in/OrkoHunter"},a.createElement(l.QEs,{size:32})),a.createElement(c,{target:"_blank",href:"https://github.com/OrkoHunter"},a.createElement(l.hL4,{size:32})),a.createElement(c,{target:"_blank",href:"https://twitter.com/OrkoHunter"},a.createElement(l.feZ,{size:32})),a.createElement(c,{target:"_blank",href:"https://discord.gg/34nvjv6egq"},a.createElement(l.O4U,{size:32})),a.createElement(c,{target:"_blank",href:"https://www.youtube.com/channel/UCNNoxHSxAYZYPw7AwuuoIrQ"},a.createElement(l.Vk6,{size:32})),a.createElement(c,{target:"_blank",href:"mailto:himanshu@orkohunter.net"},a.createElement(l.maD,{size:32})),a.createElement(c,{target:"_blank",href:"/rss.xml"},a.createElement(l.z0Z,{size:32})));const m=r.default.header.withConfig({displayName:"Header__HeaderContainer",componentId:"sc-4pdf9a-0"})(["margin-top:32px;display:flex;flex-direction:row;justify-content:space-between;align-items:center;padding-left:calc(100% / 12);padding-right:calc(100% / 12);@media only screen and (max-width:1024px){flex-direction:column;gap:24px;}"]),d=(0,r.default)(o.Link).withConfig({displayName:"Header__OrkoHunter",componentId:"sc-4pdf9a-1"})(["font-weight:600;font-size:32px;color:black;text-decoration:none;"]),u=r.default.nav.withConfig({displayName:"Header__NavContainer",componentId:"sc-4pdf9a-2"})(["display:flex;flex-direction:row;gap:2em;a{text-decoration:none;color:black;font-size:24px;font-weight:400;}"]);var p=e=>{let{siteTitle:t}=e;return a.createElement(m,null,a.createElement(d,{to:"/"},"@OrkoHunter"),a.createElement(u,null,a.createElement(o.Link,{to:"/blog"},"Blog"),a.createElement(o.Link,{to:"/blog/introducing-discord"},"Discord"),a.createElement(o.Link,{to:"/letters"},"Letters")),a.createElement(s,null))};const f=r.default.footer.withConfig({displayName:"Footer__FooterHtml",componentId:"sc-14mpjux-0"})(["margin-top:128px;margin-bottom:24px;display:flex;flex-direction:column;align-items:center;"]);var g=()=>a.createElement(f,null,a.createElement(s,null));const h=r.default.div.withConfig({displayName:"Layout__MainContainer",componentId:"sc-ra4fqx-0"})(["max-width:calc((10 * 100vw) / 12);margin-left:auto;margin-right:auto;"]);var y=e=>{let{children:t}=e;return a.createElement(a.Fragment,null,a.createElement(p,null),a.createElement(h,null,a.createElement("main",null,t)),a.createElement(g,null))}},6667:function(e,t,n){var a=n(6540),r=n(2568),o=n(8007),l=n(4193),i=n(3980);const c=r.default.div.withConfig({displayName:"PostsContainer__AllPostsContainer",componentId:"sc-3u1v2c-0"})(["margin-top:96px;display:flex;flex-direction:column;max-width:100ch;margin-left:auto;margin-right:auto;gap:32px;"]),s=r.default.div.withConfig({displayName:"PostsContainer__TitleContainer",componentId:"sc-3u1v2c-1"})(["display:flex;flex-direction:column;"]),m=r.default.div.withConfig({displayName:"PostsContainer__BlogListRowContainer",componentId:"sc-3u1v2c-2"})(["color:black;text-decoration:none;display:flex;align-items:start;flex-direction:column;&:hover{color:rgba(0,0,0,0.6) !important;}"]),d=(0,r.default)(o.Link).withConfig({displayName:"PostsContainer__StyledLink",componentId:"sc-3u1v2c-3"})(["margin-left:auto;margin-right:auto;"]),u=r.default.button.withConfig({displayName:"PostsContainer__Button",componentId:"sc-3u1v2c-4"})(["margin-left:auto;margin-right:auto;width:160px;height:64px;border-radius:32px;border:none;background-color:rgba(0,0,0,1);font-size:20px;font-weight:700;color:white;&:hover{cursor:pointer;background-color:rgba(0,0,0,0.6);transition:0.5s;}"]);t.A=e=>{let{posts:t,featured:n,letters:r,notes:p}=e;return a.createElement(c,null,n&&a.createElement("h1",null,"Featured Posts"),r&&a.createElement("p",null,"These are some of my letters and their responses which I have made public. Read more on the"," ",a.createElement(o.Link,{to:"/blog/letters"},"announcement blog post"),"."),p&&a.createElement("p",null,"Some of my notes, made public."," ",a.createElement(o.Link,{to:"/blog/we-should-write-notes"},"We should write notes (for life lessons).")),t.map((e=>a.createElement(o.Link,{to:e.node.frontmatter.slug},a.createElement(m,null,a.createElement(l.A,{date:e.node.frontmatter.date,timeToRead:e.node.timeToRead}),a.createElement(s,null,a.createElement("h2",null,e.node.frontmatter.title),a.createElement(i.t,null,e.node.frontmatter.subtitle)))))),n&&a.createElement(d,{to:"/blog"},a.createElement(u,null,a.createElement("span",null,"All Posts"))))}},5032:function(e,t,n){var a=n(6540),r=n(8154),o=n(8007);function l(e){var t,n;let{description:l,lang:i,meta:c,title:s,image:m}=e;const{site:d}=(0,o.useStaticQuery)("764694655"),u=l||d.siteMetadata.description,p=null===(t=d.siteMetadata)||void 0===t?void 0:t.title;return a.createElement(r.m,{htmlAttributes:{lang:i},title:null!=s?s:p,meta:[{name:"description",content:u},{property:"og:title",content:`${null!=s?s:p}`},{property:"og:description",content:u},{property:"og:type",content:"website"},{property:"og:image",content:`${d.siteMetadata.siteUrl}${null!=m?m:"/images/icon-192.png"}`},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:(null===(n=d.siteMetadata)||void 0===n?void 0:n.author)||""},{name:"twitter:title",content:`${null!=s?s:p}`},{name:"twitter:description",content:u}].concat(c)})}l.defaultProps={lang:"en",meta:[],description:""},t.A=l},3980:function(e,t,n){n.d(t,{t:function(){return a}});const a=n(2568).default.p.withConfig({displayName:"Typography__SubTitle",componentId:"sc-18tmwqn-0"})(["font-weight:500;color:rgba(0,0,0,0.6);font-family:Montserrat,serif;font-size:1em;margin-top:0px;"])},3378:function(e,t,n){n.r(t),n.d(t,{default:function(){return i}});var a=n(6540),r=n(827),o=n(5032),l=n(6667);function i(e){let{data:t}=e;const n=t.allMarkdownRemark.edges;return a.createElement(r.A,null,a.createElement(o.A,{title:"Notes | Himanshu Mishra | @OrkoHunter"}),a.createElement(l.A,{posts:n,notes:!0}))}},4084:function(e,t,n){n.d(t,{k5:function(){return s}});var a=n(6540),r={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},o=a.createContext&&a.createContext(r),l=function(){return l=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},l.apply(this,arguments)},i=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n};function c(e){return e&&e.map((function(e,t){return a.createElement(e.tag,l({key:t},e.attr),c(e.child))}))}function s(e){return function(t){return a.createElement(m,l({attr:l({},e.attr)},t),c(e.child))}}function m(e){var t=function(t){var n,r=e.attr,o=e.size,c=e.title,s=i(e,["attr","size","title"]),m=o||t.size||"1em";return t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className),a.createElement("svg",l({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,r,s,{className:n,style:l(l({color:e.color||t.color},t.style),e.style),height:m,width:m,xmlns:"http://www.w3.org/2000/svg"}),c&&a.createElement("title",null,c),e.children)};return void 0!==o?a.createElement(o.Consumer,null,(function(e){return t(e)})):t(r)}}}]);
//# sourceMappingURL=component---src-pages-notes-js-609f94081dab268ec537.js.map