"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[11640],{841724:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var r=n(785893),a=n(511151),i=n(841282),c=n(476828);const s={id:"apps",title:"Apps",description:"Apps",custom_edit_url:null},o=void 0,l={id:"api/beta/apps",title:"Apps",description:"Apps",source:"@site/docs/api/beta/apps.tag.mdx",sourceDirName:"api/beta",slug:"/api/beta/apps",permalink:"/docs/api/beta/apps",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"apps",title:"Apps",description:"Apps",custom_edit_url:null},sidebar:"isc_beta_sidebar",previous:{title:"Disable IDN Accounts for Identities",permalink:"/docs/api/beta/disable-accounts-for-identities"},next:{title:"Get source app by ID",permalink:"/docs/api/beta/get-source-app"}},p={},d=[];function u(e){const t={p:"p",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"Use this API to implement source application functionality. With this functionality in place, you can create, customize, and manage applications within sources."}),"\n","\n",(0,r.jsx)(i.Z,{items:(0,c.jA)().items})]})}function m(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},841282:(e,t,n)=>{n.d(t,{Z:()=>j});var r=n(667294),a=n(490512),i=n(476828),c=n(370393),s=n(585597),o=n(935096),l=n(633084),p=n(555199);const d={cardContainer:"cardContainer_S8oU",cardTitle:"cardTitle_HoSo",cardDescription:"cardDescription_c27F",docCardIcon:"docCardIcon_elTJ"};var u=n(799603),m=n(921702);function f({href:e,children:t}){return r.createElement(c.Z,{href:e,className:(0,a.Z)("card padding--lg",d.cardContainer)},t)}function b({href:e,icon:t,title:n,description:i}){return r.createElement(f,{href:e},r.createElement(p.default,{as:"h2",className:(0,a.Z)("text--truncate",d.cardTitle),title:n},t," ",n),i&&r.createElement("p",{className:(0,a.Z)("text--truncate",d.cardDescription),title:i},i))}function h({item:e}){var t;const n=(0,i.LM)(e),a=function(){const{selectMessage:e}=(0,s.c)();return t=>e(t,(0,l.I)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return n?r.createElement(b,{href:n,icon:r.createElement(u.G,{icon:m.cC_,className:d.docCardIcon}),title:e.label,description:null!=(t=e.description)?t:a(e.items.length)}):null}function g({item:e}){var t,n;const a=(0,o.Z)(e.href)?r.createElement(u.G,{icon:m.FL8,className:d.docCardIcon}):r.createElement(u.G,{icon:m.wlW,className:d.docCardIcon}),c=(0,i.xz)(null!=(t=e.docId)?t:void 0);return r.createElement(b,{href:e.href,icon:a,title:e.label,description:(null!=(n=e.description)?n:"<Heading"!=(null==c?void 0:c.description)&&"<span"!=(null==c?void 0:c.description))?null==c?void 0:c.description:e.label})}function y({item:e}){switch(e.type){case"link":return r.createElement(g,{item:e});case"category":return r.createElement(h,{item:e});default:throw new Error(`unknown item type ${JSON.stringify(e)}`)}}var v=Object.defineProperty,E=Object.getOwnPropertySymbols,N=Object.prototype.hasOwnProperty,_=Object.prototype.propertyIsEnumerable,w=(e,t,n)=>t in e?v(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,C=(e,t)=>{for(var n in t||(t={}))N.call(t,n)&&w(e,n,t[n]);if(E)for(var n of E(t))_.call(t,n)&&w(e,n,t[n]);return e};function I({className:e}){const t=(0,i.jA)();return r.createElement(j,{items:t.items,className:e})}function j(e){const{items:t,className:n}=e;if(!t)return r.createElement(I,C({},e));const c=(0,i.MN)(t);return r.createElement("section",{className:(0,a.Z)("row",n)},c.map(((e,t)=>r.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},r.createElement(y,{item:e})))))}}}]);