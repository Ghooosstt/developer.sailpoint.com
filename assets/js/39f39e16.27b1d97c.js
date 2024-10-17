"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[76572],{893979:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>m});var i=n(785893),s=n(511151),r=n(841282),o=n(476828);const a={id:"dimensions",title:"Dimensions",description:"Dimensions",custom_edit_url:null},c=void 0,l={id:"api/v2024/dimensions",title:"Dimensions",description:"Dimensions",source:"@site/docs/api/v2024/dimensions.tag.mdx",sourceDirName:"api/v2024",slug:"/api/v2024/dimensions",permalink:"/docs/api/v2024/dimensions",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"dimensions",title:"Dimensions",description:"Dimensions",custom_edit_url:null},sidebar:"isc_2024_sidebar",previous:{title:"Delete Custom Password Instructions by page ID",permalink:"/docs/api/v2024/delete-custom-password-instructions"},next:{title:"List Dimensions",permalink:"/docs/api/v2024/list-dimensions"}},d={},m=[];function u(e){const t={p:"p",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"Use this API to implement and customize dynamic role functionality. With this functionality in place, administrators can create dimensions and configure them for use throughout Identity Security Cloud. Identity Security Cloud can use established criteria to automatically assign the dimensions to qualified users. This enables users to get all the access they need quickly and securely and administrators to spend their time on other tasks. Entitlements represent the most granular level of access in Identity Security Cloud.\nAccess profiles represent the next level and often group entitlements. Dimension represent access selectively based on the evaluation of contextual information that is available or provided. Each Dimension include context attributes and access selection expressions which map criteria to access right assignments. Each dimension can contain up to 5 context attributes. Dynamic Access Roles represent the broadest level of access and often group access profiles ,entitlements and dimensions.Each Dynamic Access Role may contain one or more Dimensions."}),"\n","\n",(0,i.jsx)(r.Z,{items:(0,o.jA)().items})]})}function p(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},841282:(e,t,n)=>{n.d(t,{Z:()=>I});var i=n(667294),s=n(490512),r=n(476828),o=n(370393),a=n(585597),c=n(935096),l=n(633084),d=n(555199);const m={cardContainer:"cardContainer_S8oU",cardTitle:"cardTitle_HoSo",cardDescription:"cardDescription_c27F",docCardIcon:"docCardIcon_elTJ"};var u=n(799603),p=n(921702);function f({href:e,children:t}){return i.createElement(o.Z,{href:e,className:(0,s.Z)("card padding--lg",m.cardContainer)},t)}function h({href:e,icon:t,title:n,description:r}){return i.createElement(f,{href:e},i.createElement(d.default,{as:"h2",className:(0,s.Z)("text--truncate",m.cardTitle),title:n},t," ",n),r&&i.createElement("p",{className:(0,s.Z)("text--truncate",m.cardDescription),title:r},r))}function y({item:e}){var t;const n=(0,r.LM)(e),s=function(){const{selectMessage:e}=(0,a.c)();return t=>e(t,(0,l.I)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return n?i.createElement(h,{href:n,icon:i.createElement(u.G,{icon:p.cC_,className:m.docCardIcon}),title:e.label,description:null!=(t=e.description)?t:s(e.items.length)}):null}function v({item:e}){var t,n;const s=(0,c.Z)(e.href)?i.createElement(u.G,{icon:p.FL8,className:m.docCardIcon}):i.createElement(u.G,{icon:p.wlW,className:m.docCardIcon}),o=(0,r.xz)(null!=(t=e.docId)?t:void 0);return i.createElement(h,{href:e.href,icon:s,title:e.label,description:(null!=(n=e.description)?n:"<Heading"!=(null==o?void 0:o.description)&&"<span"!=(null==o?void 0:o.description))?null==o?void 0:o.description:e.label})}function g({item:e}){switch(e.type){case"link":return i.createElement(v,{item:e});case"category":return i.createElement(y,{item:e});default:throw new Error(`unknown item type ${JSON.stringify(e)}`)}}var b=Object.defineProperty,E=Object.getOwnPropertySymbols,D=Object.prototype.hasOwnProperty,w=Object.prototype.propertyIsEnumerable,x=(e,t,n)=>t in e?b(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,C=(e,t)=>{for(var n in t||(t={}))D.call(t,n)&&x(e,n,t[n]);if(E)for(var n of E(t))w.call(t,n)&&x(e,n,t[n]);return e};function _({className:e}){const t=(0,r.jA)();return i.createElement(I,{items:t.items,className:e})}function I(e){const{items:t,className:n}=e;if(!t)return i.createElement(_,C({},e));const o=(0,r.MN)(t);return i.createElement("section",{className:(0,s.Z)("row",n)},o.map(((e,t)=>i.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},i.createElement(g,{item:e})))))}}}]);