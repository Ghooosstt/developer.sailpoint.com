"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[14449],{105858:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>f,frontMatter:()=>c,metadata:()=>s,toc:()=>u});var r=n(785893),a=n(511151),i=n(841282),o=n(476828);const c={id:"mfa-configuration",title:"MFA Configuration",description:"MFA Configuration",custom_edit_url:null},l=void 0,s={id:"api/beta/mfa-configuration",title:"MFA Configuration",description:"MFA Configuration",source:"@site/docs/api/beta/mfa-configuration.tag.mdx",sourceDirName:"api/beta",slug:"/api/beta/mfa-configuration",permalink:"/docs/api/beta/mfa-configuration",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"mfa-configuration",title:"MFA Configuration",description:"MFA Configuration",custom_edit_url:null},sidebar:"isc_beta_sidebar",previous:{title:"Retrieve all Managed Clusters.",permalink:"/docs/api/beta/get-managed-clusters"},next:{title:"Configuration of Okta MFA method",permalink:"/docs/api/beta/get-mfa-okta-config"}},d={},u=[];function m(e){const t={p:"p",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"Configure and test multifactor authentication (MFA) methods"}),"\n","\n",(0,r.jsx)(i.Z,{items:(0,o.jA)().items})]})}function f(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},841282:(e,t,n)=>{n.d(t,{Z:()=>k});var r=n(667294),a=n(490512),i=n(476828),o=n(370393),c=n(585597),l=n(935096),s=n(633084),d=n(555199);const u={cardContainer:"cardContainer_S8oU",cardTitle:"cardTitle_HoSo",cardDescription:"cardDescription_c27F",docCardIcon:"docCardIcon_elTJ"};var m=n(799603),f=n(921702);function p({href:e,children:t}){return r.createElement(o.Z,{href:e,className:(0,a.Z)("card padding--lg",u.cardContainer)},t)}function g({href:e,icon:t,title:n,description:i}){return r.createElement(p,{href:e},r.createElement(d.default,{as:"h2",className:(0,a.Z)("text--truncate",u.cardTitle),title:n},t," ",n),i&&r.createElement("p",{className:(0,a.Z)("text--truncate",u.cardDescription),title:i},i))}function h({item:e}){var t;const n=(0,i.LM)(e),a=function(){const{selectMessage:e}=(0,c.c)();return t=>e(t,(0,s.I)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return n?r.createElement(g,{href:n,icon:r.createElement(m.G,{icon:f.cC_,className:u.docCardIcon}),title:e.label,description:null!=(t=e.description)?t:a(e.items.length)}):null}function b({item:e}){var t,n;const a=(0,l.Z)(e.href)?r.createElement(m.G,{icon:f.FL8,className:u.docCardIcon}):r.createElement(m.G,{icon:f.wlW,className:u.docCardIcon}),o=(0,i.xz)(null!=(t=e.docId)?t:void 0);return r.createElement(g,{href:e.href,icon:a,title:e.label,description:(null!=(n=e.description)?n:"<Heading"!=(null==o?void 0:o.description)&&"<span"!=(null==o?void 0:o.description))?null==o?void 0:o.description:e.label})}function C({item:e}){switch(e.type){case"link":return r.createElement(b,{item:e});case"category":return r.createElement(h,{item:e});default:throw new Error(`unknown item type ${JSON.stringify(e)}`)}}var v=Object.defineProperty,E=Object.getOwnPropertySymbols,y=Object.prototype.hasOwnProperty,_=Object.prototype.propertyIsEnumerable,M=(e,t,n)=>t in e?v(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,N=(e,t)=>{for(var n in t||(t={}))y.call(t,n)&&M(e,n,t[n]);if(E)for(var n of E(t))_.call(t,n)&&M(e,n,t[n]);return e};function w({className:e}){const t=(0,i.jA)();return r.createElement(k,{items:t.items,className:e})}function k(e){const{items:t,className:n}=e;if(!t)return r.createElement(w,N({},e));const o=(0,i.MN)(t);return r.createElement("section",{className:(0,a.Z)("row",n)},o.map(((e,t)=>r.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},r.createElement(C,{item:e})))))}}}]);