"use strict";(self.webpackChunkgatsby_starter_slices=self.webpackChunkgatsby_starter_slices||[]).push([[678],{8678:function(e,t,n){var l=n(7294),a=n(2047);t.Z=e=>{let{location:t,title:n,children:r}=e;const i="/"===t.pathname;return l.createElement("div",{className:"global-wrapper","data-is-root-path":i},l.createElement(a.Slice,{alias:"header",size:i?"large":"medium"},n),l.createElement("main",null,r),l.createElement(a.Slice,{alias:"footer"}))}},9357:function(e,t,n){var l=n(7294),a=n(2047);t.Z=e=>{var t,n,r;let{description:i,title:o,children:c}=e;const{site:s}=(0,a.useStaticQuery)("2817829322"),m=i||s.siteMetadata.description,d=null===(t=s.siteMetadata)||void 0===t?void 0:t.title;return l.createElement(l.Fragment,null,l.createElement("title",null,d?o+" | "+d:o),l.createElement("meta",{name:"description",content:m}),l.createElement("meta",{property:"og:title",content:o}),l.createElement("meta",{property:"og:description",content:m}),l.createElement("meta",{property:"og:type",content:"website"}),l.createElement("meta",{name:"twitter:card",content:"summary"}),l.createElement("meta",{name:"twitter:creator",content:(null===(n=s.siteMetadata)||void 0===n||null===(r=n.author)||void 0===r?void 0:r.twitter)||""}),l.createElement("meta",{name:"twitter:title",content:o}),l.createElement("meta",{name:"twitter:description",content:m}),c)}},6558:function(e,t,n){n.r(t),n.d(t,{Head:function(){return o}});var l=n(7294),a=n(2047),r=n(8678),i=n(9357);t.default=e=>{var t;let{data:n,location:i}=e;const o=(null===(t=n.site.siteMetadata)||void 0===t?void 0:t.title)||"Title",c=n.allMarkdownRemark.nodes;return 0===c.length?l.createElement(r.Z,{location:i,title:o},l.createElement("p",null,'No blog posts found. Add markdown posts to "content/blog" (or the directory you specified for the "gatsby-source-filesystem" plugin in gatsby-config.js).')):l.createElement(r.Z,{location:i,title:o},l.createElement("ol",{style:{listStyle:"none"}},c.map((e=>{const t=e.frontmatter.title||e.fields.slug;return l.createElement("li",{key:e.fields.slug},l.createElement("article",{className:"post-list-item",itemScope:!0,itemType:"http://schema.org/Article"},l.createElement("header",null,l.createElement("h2",null,l.createElement(a.Link,{to:e.fields.slug,itemProp:"url"},l.createElement("span",{itemProp:"headline"},t))),l.createElement("small",null,e.frontmatter.date)),l.createElement("section",null,l.createElement("p",{dangerouslySetInnerHTML:{__html:e.frontmatter.description||e.excerpt},itemProp:"description"}))))}))))};const o=()=>l.createElement(i.Z,{title:"All posts"})}}]);
//# sourceMappingURL=component---src-pages-index-js-52d5593dee8cf37f1975.js.map