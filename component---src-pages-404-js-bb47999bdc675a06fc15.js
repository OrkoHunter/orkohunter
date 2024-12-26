"use strict";(self.webpackChunkorkohunter_net=self.webpackChunkorkohunter_net||[]).push([[125],{827:function(e,t,n){n.d(t,{A:function(){return w}});var r=n(6540),a=n(2568),l=n(8007),o=n(1612);const i=a.default.nav.withConfig({displayName:"SocialNav__Container",componentId:"sc-2efzvt-0"})(["display:flex;flex-direction:row;align-items:center;gap:16px;"]),c=a.default.a.withConfig({displayName:"SocialNav__Link",componentId:"sc-2efzvt-1"})(["color:black;width:32px;height:32px;"]);var s=()=>r.createElement(i,null,r.createElement(c,{target:"_blank",href:"https://linkedin.com/in/OrkoHunter"},r.createElement(o.QEs,{size:32})),r.createElement(c,{target:"_blank",href:"https://github.com/OrkoHunter"},r.createElement(o.hL4,{size:32})),r.createElement(c,{target:"_blank",href:"https://twitter.com/OrkoHunter"},r.createElement(o.feZ,{size:32})),r.createElement(c,{target:"_blank",href:"https://discord.gg/34nvjv6egq"},r.createElement(o.O4U,{size:32})),r.createElement(c,{target:"_blank",href:"https://www.youtube.com/channel/UCNNoxHSxAYZYPw7AwuuoIrQ"},r.createElement(o.Vk6,{size:32})),r.createElement(c,{target:"_blank",href:"mailto:himanshu@orkohunter.net"},r.createElement(o.maD,{size:32})),r.createElement(c,{target:"_blank",href:"/rss.xml"},r.createElement(o.z0Z,{size:32})));const m=a.default.header.withConfig({displayName:"Header__HeaderContainer",componentId:"sc-4pdf9a-0"})(["margin-top:32px;display:flex;flex-direction:row;justify-content:space-between;align-items:center;padding-left:calc(100% / 12);padding-right:calc(100% / 12);@media only screen and (max-width:1024px){flex-direction:column;gap:24px;}"]),u=(0,a.default)(l.Link).withConfig({displayName:"Header__OrkoHunter",componentId:"sc-4pdf9a-1"})(["font-weight:600;font-size:32px;color:black;text-decoration:none;"]),d=a.default.nav.withConfig({displayName:"Header__NavContainer",componentId:"sc-4pdf9a-2"})(["display:flex;flex-direction:row;gap:2em;a{text-decoration:none;color:black;font-size:24px;font-weight:400;}"]);var p=e=>{let{siteTitle:t}=e;return r.createElement(m,null,r.createElement(u,{to:"/"},"@OrkoHunter"),r.createElement(d,null,r.createElement(l.Link,{to:"/blog"},"Blog"),r.createElement(l.Link,{to:"/blog/introducing-discord"},"Discord"),r.createElement(l.Link,{to:"/letters"},"Letters")),r.createElement(s,null))};const f=a.default.footer.withConfig({displayName:"Footer__FooterHtml",componentId:"sc-14mpjux-0"})(["margin-top:128px;margin-bottom:24px;display:flex;flex-direction:column;align-items:center;"]);var g=()=>r.createElement(f,null,r.createElement(s,null));const h=a.default.div.withConfig({displayName:"Layout__MainContainer",componentId:"sc-ra4fqx-0"})(["max-width:calc((10 * 100vw) / 18);@media screen and (max-width:1023px){max-width:calc((10 * 100vw) / 12);}margin-left:auto;margin-right:auto;"]);var w=e=>{let{children:t}=e;return r.createElement(r.Fragment,null,r.createElement(p,null),r.createElement(h,null,r.createElement("main",null,t)),r.createElement(g,null))}},5032:function(e,t,n){var r=n(6540),a=n(8154),l=n(8007);function o(e){var t,n;let{description:o,lang:i,meta:c,title:s,image:m}=e;const{site:u}=(0,l.useStaticQuery)("764694655"),d=o||u.siteMetadata.description,p=null===(t=u.siteMetadata)||void 0===t?void 0:t.title;return r.createElement(a.m,{htmlAttributes:{lang:i},title:null!=s?s:p,meta:[{name:"description",content:d},{property:"og:title",content:`${null!=s?s:p}`},{property:"og:description",content:d},{property:"og:type",content:"website"},{property:"og:image",content:`${u.siteMetadata.siteUrl}${null!=m?m:"/images/icon-192.png"}`},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:(null===(n=u.siteMetadata)||void 0===n?void 0:n.author)||""},{name:"twitter:title",content:`${null!=s?s:p}`},{name:"twitter:description",content:d}].concat(c)})}o.defaultProps={lang:"en",meta:[],description:""},t.A=o},3331:function(e,t,n){n.r(t);var r=n(6540),a=n(827),l=n(5032);t.default=()=>r.createElement(a.A,null,r.createElement(l.A,{title:"404: Not found"}),r.createElement("h1",null,"404: Not Found"),r.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))},4084:function(e,t,n){n.d(t,{k5:function(){return s}});var r=n(6540),a={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},l=r.createContext&&r.createContext(a),o=function(){return o=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},o.apply(this,arguments)},i=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n};function c(e){return e&&e.map((function(e,t){return r.createElement(e.tag,o({key:t},e.attr),c(e.child))}))}function s(e){return function(t){return r.createElement(m,o({attr:o({},e.attr)},t),c(e.child))}}function m(e){var t=function(t){var n,a=e.attr,l=e.size,c=e.title,s=i(e,["attr","size","title"]),m=l||t.size||"1em";return t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className),r.createElement("svg",o({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,a,s,{className:n,style:o(o({color:e.color||t.color},t.style),e.style),height:m,width:m,xmlns:"http://www.w3.org/2000/svg"}),c&&r.createElement("title",null,c),e.children)};return void 0!==l?r.createElement(l.Consumer,null,(function(e){return t(e)})):t(a)}}}]);
//# sourceMappingURL=component---src-pages-404-js-bb47999bdc675a06fc15.js.map