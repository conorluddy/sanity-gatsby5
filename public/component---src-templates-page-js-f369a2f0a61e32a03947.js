"use strict";(self.webpackChunkgatsby_starter_slices=self.webpackChunkgatsby_starter_slices||[]).push([[565],{8678:function(e,t,n){var r=n(7294),l=n(2047);t.Z=e=>{let{location:t,title:n,children:i}=e;const o="/"===t.pathname;return r.createElement("div",{className:"global-wrapper","data-is-root-path":o},r.createElement(l.Slice,{alias:"header",size:o?"large":"medium"},n),r.createElement("main",null,i),r.createElement(l.Slice,{alias:"footer"}))}},9357:function(e,t,n){var r=n(7294),l=n(2047);t.Z=e=>{var t,n,i;let{description:o,title:c,children:a}=e;const{site:s}=(0,l.useStaticQuery)("2817829322"),u=o||s.siteMetadata.description,m=null===(t=s.siteMetadata)||void 0===t?void 0:t.title;return r.createElement(r.Fragment,null,r.createElement("title",null,m?c+" | "+m:c),r.createElement("meta",{name:"description",content:u}),r.createElement("meta",{property:"og:title",content:c}),r.createElement("meta",{property:"og:description",content:u}),r.createElement("meta",{property:"og:type",content:"website"}),r.createElement("meta",{name:"twitter:card",content:"summary"}),r.createElement("meta",{name:"twitter:creator",content:(null===(n=s.siteMetadata)||void 0===n||null===(i=n.author)||void 0===i?void 0:i.twitter)||""}),r.createElement("meta",{name:"twitter:title",content:c}),r.createElement("meta",{name:"twitter:description",content:u}),a)}},2490:function(e,t,n){n.r(t),n.d(t,{Head:function(){return R},default:function(){return V}});var r=n(7294),l=Object.defineProperty,i=Object.defineProperties,o=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,m=(e,t)=>{for(var n in t||(t={}))a.call(t,n)&&u(e,n,t[n]);if(c)for(var n of c(t))s.call(t,n)&&u(e,n,t[n]);return e};function d(e){return"span"===e._type&&"text"in e&&"string"==typeof e.text&&(void 0===e.marks||Array.isArray(e.marks)&&e.marks.every((e=>"string"==typeof e)))}function p(e){return"string"==typeof e._type&&"@"!==e._type[0]&&(!("markDefs"in e)||Array.isArray(e.markDefs)&&e.markDefs.every((e=>"string"==typeof e._key)))&&"children"in e&&Array.isArray(e.children)&&e.children.every((e=>"object"==typeof e&&"_type"in e))}function y(e){return p(e)&&"listItem"in e&&"string"==typeof e.listItem&&(void 0===e.level||"number"==typeof e.level)}function f(e){return"@list"===e._type}function h(e){return"@span"===e._type}function k(e){return"@text"===e._type}const v=["strong","em","code","underline","strike-through"];function E(e,t,n){if(!d(e)||!e.marks)return[];if(!e.marks.length)return[];const r=e.marks.slice(),l={};return r.forEach((e=>{l[e]=1;for(let r=t+1;r<n.length;r++){const t=n[r];if(!(t&&d(t)&&Array.isArray(t.marks)&&-1!==t.marks.indexOf(e)))break;l[e]++}})),r.sort(((e,t)=>function(e,t,n){const r=e[t],l=e[n];if(r!==l)return l-r;const i=v.indexOf(t),o=v.indexOf(n);if(i!==o)return i-o;return t.localeCompare(n)}(l,e,t)))}function b(e,t){return(e.level||1)===t.level&&e.listItem===t.listItem}function g(e,t,n){return{_type:"@list",_key:`${e._key||`${t}`}-parent`,mode:n,level:e.level||1,listItem:e.listItem,children:[e]}}function I(e,t){const n=t.level||1,r=t.listItem||"normal",l="string"==typeof t.listItem;if(f(e)&&(e.level||1)===n&&l&&(e.listItem||"normal")===r)return e;if(!("children"in e))return;const i=e.children[e.children.length-1];return i&&!d(i)?I(i,t):void 0}function _(e){let t="";return e.children.forEach((e=>{k(e)?t+=e.text:h(e)&&(t+=_(e))})),t}var w=Object.defineProperty,x=Object.defineProperties,O=Object.getOwnPropertyDescriptors,N=Object.getOwnPropertySymbols,P=Object.prototype.hasOwnProperty,$=Object.prototype.propertyIsEnumerable,j=(e,t,n)=>t in e?w(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,T=(e,t)=>{for(var n in t||(t={}))P.call(t,n)&&j(e,n,t[n]);if(N)for(var n of N(t))$.call(t,n)&&j(e,n,t[n]);return e},S=(e,t)=>x(e,O(t)),A=(e,t)=>{var n={};for(var r in e)P.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&N)for(var r of N(e))t.indexOf(r)<0&&$.call(e,r)&&(n[r]=e[r]);return n};function M(e,t){const n=t,{block:r,list:l,listItem:i,marks:o,types:c}=n,a=A(n,["block","list","listItem","marks","types"]);return T(S(T({},e),{block:D(e,t,"block"),list:D(e,t,"list"),listItem:D(e,t,"listItem"),marks:D(e,t,"marks"),types:D(e,t,"types")}),a)}function D(e,t,n){const r=t[n],l=e[n];return"function"==typeof r||r&&"function"==typeof l?r:r?T(T({},l),r):l}const C={textDecoration:"underline"},L=(e,t)=>`Unknown ${e}, specify a component for it in the \`components.${t}\` prop`,B=e=>L(`block type "${e}"`,"types");function K(e){console.warn(e)}const Z={display:"none"},q={types:{},block:{normal:({children:e})=>r.createElement("p",null,e),blockquote:({children:e})=>r.createElement("blockquote",null,e),h1:({children:e})=>r.createElement("h1",null,e),h2:({children:e})=>r.createElement("h2",null,e),h3:({children:e})=>r.createElement("h3",null,e),h4:({children:e})=>r.createElement("h4",null,e),h5:({children:e})=>r.createElement("h5",null,e),h6:({children:e})=>r.createElement("h6",null,e)},marks:{em:({children:e})=>r.createElement("em",null,e),strong:({children:e})=>r.createElement("strong",null,e),code:({children:e})=>r.createElement("code",null,e),underline:({children:e})=>r.createElement("span",{style:C},e),"strike-through":({children:e})=>r.createElement("del",null,e),link:({children:e,value:t})=>r.createElement("a",{href:null==t?void 0:t.href},e)},list:{number:({children:e})=>r.createElement("ol",null,e),bullet:({children:e})=>r.createElement("ul",null,e)},listItem:({children:e})=>r.createElement("li",null,e),hardBreak:()=>r.createElement("br",null),unknownType:({value:e,isInline:t})=>{const n=B(e._type);return t?r.createElement("span",{style:Z},n):r.createElement("div",{style:Z},n)},unknownMark:({markType:e,children:t})=>r.createElement("span",{className:`unknown__pt__mark__${e}`},t),unknownList:({children:e})=>r.createElement("ul",null,e),unknownListItem:({children:e})=>r.createElement("li",null,e),unknownBlockStyle:({children:e})=>r.createElement("p",null,e)},F=(0,r.createContext)(q);function U({value:e,components:t,listNestingMode:n,onMissingComponent:l=K}){const c=l||Q,a=function(e,t){const n=[];let r;for(let a=0;a<e.length;a++){const s=e[a];if(s)if(y(s))if(r)if(b(s,r))r.children.push(s);else if((s.level||1)>r.level){const e=g(s,a,t);if("html"===t){const t=r.children[r.children.length-1],n=(l=m({},t),c={children:[...t.children,e]},i(l,o(c)));r.children[r.children.length-1]=n}else r.children.push(e);r=e}else if((s.level||1)<r.level){const e=n[n.length-1],l=e&&I(e,s);if(l){r=l,r.children.push(s);continue}r=g(s,a,t),n.push(r)}else if(s.listItem===r.listItem)console.warn("Unknown state encountered for block",s),n.push(s);else{const e=n[n.length-1],l=e&&I(e,{level:s.level||1});if(l&&l.listItem===s.listItem){r=l,r.children.push(s);continue}r=g(s,a,t),n.push(r)}else r=g(s,a,t),n.push(r);else n.push(s),r=void 0}var l,c;return n}(Array.isArray(e)?e:[e],n||"html"),s=(0,r.useContext)(F),u=(0,r.useMemo)((()=>t?M(s,t):s),[s,t]),d=(0,r.useMemo)((()=>z(u,c)),[u,c]),p=a.map(((e,t)=>d({node:e,index:t,isInline:!1,renderNode:d})));return t?r.createElement(F.Provider,{value:u},p):r.createElement(r.Fragment,null,p)}const z=(e,t)=>{function n(l){const{node:i,index:o,isInline:c}=l,a=i._key||`node-${o}`;return f(i)?function(l,i,o){const c=l.children.map(((e,t)=>n({node:e._key?e:S(T({},e),{_key:`li-${i}-${t}`}),index:i,isInline:!1,renderNode:n}))),a=e.list,s=("function"==typeof a?a:a[l.listItem])||e.unknownList;if(s===e.unknownList){const e=l.listItem||"bullet";t(L(`list style "${e}"`,"list"),{nodeType:"listStyle",type:e})}return r.createElement(s,{key:o,value:l,index:i,isInline:!1,renderNode:n},c)}(i,o,a):y(i)?function(l,i,o){const c=H({node:l,index:i,isInline:!1,renderNode:n}),a=e.listItem,s=("function"==typeof a?a:a[l.listItem])||e.unknownListItem;if(s===e.unknownListItem){const e=l.listItem||"bullet";t(L(`list item style "${e}"`,"listItem"),{type:e,nodeType:"listItemStyle"})}let u=c.children;if(l.style&&"normal"!==l.style){const e=l,{listItem:t}=e;u=n({node:A(e,["listItem"]),index:i,isInline:!1,renderNode:n})}return r.createElement(s,{key:o,value:l,index:i,isInline:!1,renderNode:n},u)}(i,o,a):h(i)?function(l,i,o){const{markDef:c,markType:a,markKey:s}=l,u=e.marks[a]||e.unknownMark,m=l.children.map(((e,t)=>n({node:e,index:t,isInline:!0,renderNode:n})));u===e.unknownMark&&t((e=>L(`mark type "${e}"`,"marks"))(a),{nodeType:"mark",type:a});return r.createElement(u,{key:o,text:_(l),value:c,markType:a,markKey:s,renderNode:n},m)}(i,0,a):p(i)?function(l,i,o,c){const a=H({node:l,index:i,isInline:c,renderNode:n}),{_key:s}=a,u=A(a,["_key"]),m=u.node.style||"normal",d=("function"==typeof e.block?e.block:e.block[m])||e.unknownBlockStyle;d===e.unknownBlockStyle&&t(L(`block style "${m}"`,"block"),{nodeType:"blockStyle",type:m});return r.createElement(d,S(T({key:o},u),{value:u.node,renderNode:n}))}(i,o,a,c):k(i)?function(t,n){if("\n"===t.text){const t=e.hardBreak;return t?r.createElement(t,{key:n}):"\n"}return t.text}(i,a):function(l,i,o,c){const a=e.types[l._type],s={value:l,isInline:c,index:i,renderNode:n};if(a)return r.createElement(a,T({key:o},s));t(B(l._type),{nodeType:"block",type:l._type});const u=e.unknownType;return r.createElement(u,T({key:o},s))}(i,o,a,c)}return n};function H(e){const{node:t,index:n,isInline:r,renderNode:l}=e,i=function(e){var t;const{children:n,markDefs:r=[]}=e;if(!n||!n.length)return[];const l=n.map(E),i={_type:"@span",children:[],markType:"<unknown>"};let o=[i];for(let c=0;c<n.length;c++){const e=n[c];if(!e)continue;const i=l[c]||[];let a=1;if(o.length>1)for(;a<o.length;a++){const e=(null==(t=o[a])?void 0:t.markKey)||"",n=i.indexOf(e);if(-1===n)break;i.splice(n,1)}o=o.slice(0,a);let s=o[o.length-1];if(s){for(const t of i){const n=r.find((e=>e._key===t)),l=n?n._type:t,i={_type:"@span",_key:e._key,children:[],markDef:n,markType:l,markKey:t};s.children.push(i),o.push(i),s=i}if(d(e)){const t=e.text.split("\n");for(let e=t.length;e-- >1;)t.splice(e,0,"\n");s.children=s.children.concat(t.map((e=>({_type:"@text",text:e}))))}else s.children=s.children.concat(e)}}return i.children}(t),o=i.map(((e,t)=>l({node:e,isInline:!0,index:t,renderNode:l})));return{_key:t._key||`block-${n}`,children:o,index:n,isInline:r,node:t}}function Q(){}n(2047);var G=n(8678),J=n(9357);const R=e=>{let{data:t}=e;return r.createElement(J.Z,{title:"",description:""})};var V=e=>{let{data:t,location:n}=e;return console.log("data",t),r.createElement(G.Z,{location:n,title:""},r.createElement("article",{className:"page",itemScope:!0,itemType:"http://schema.org/Article"},r.createElement("header",null,r.createElement("h1",{itemProp:"headline"},t.sanityPage.title)),t.sanityPage.body&&r.createElement(U,{value:t.sanityPage.body,components:null}),r.createElement("hr",null),r.createElement("footer",null)))}}}]);
//# sourceMappingURL=component---src-templates-page-js-f369a2f0a61e32a03947.js.map