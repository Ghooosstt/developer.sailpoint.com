"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[51786],{598475:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>p,frontMatter:()=>c,metadata:()=>l,toc:()=>d});var i=r(785893),n=r(511151),s=r(841282),a=r(476828);const c={id:"auth-users",title:"Auth Users",description:"Auth Users",custom_edit_url:null},o=void 0,l={id:"api/v3/auth-users",title:"Auth Users",description:"Auth Users",source:"@site/docs/api/v3/auth-users.tag.mdx",sourceDirName:"api/v3",slug:"/api/v3/auth-users",permalink:"/docs/api/v3/auth-users",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"auth-users",title:"Auth Users",description:"Auth Users",custom_edit_url:null},sidebar:"isc_v3_sidebar",previous:{title:"Get Discovered Applications for Tenant",permalink:"/docs/api/v3/get-discovered-applications"},next:{title:"Auth User Details",permalink:"/docs/api/v3/get-auth-user"}},u={},d=[];function m(e){const t={p:"p",...(0,n.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"Use this API to implement user authentication system functionality.\nWith this functionality in place, users can get a user's authentication system details, including their capabilities, and modify those capabilities.\nThe user's capabilities refer to their access to different systems, or authorization, within the tenant, like access to certifications (CERT_ADMIN) or reports (REPORT_ADMIN).\nThese capabilities also determine a user's access to the different APIs.\nThis API provides users with a way to determine a user's access and make quick and easy changes to that access."}),"\n","\n",(0,i.jsx)(s.Z,{items:(0,a.jA)().items})]})}function p(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(m,{...e})}):m(e)}},841282:(e,t,r)=>{r.d(t,{Z:()=>C});var i=r(667294),n=r(490512),s=r(476828),a=r(370393),c=r(585597),o=r(935096),l=r(633084),u=r(555199);const d={cardContainer:"cardContainer_S8oU",cardTitle:"cardTitle_HoSo",cardDescription:"cardDescription_c27F",docCardIcon:"docCardIcon_elTJ"};var m=r(799603),p=r(921702);function h({href:e,children:t}){return i.createElement(a.Z,{href:e,className:(0,n.Z)("card padding--lg",d.cardContainer)},t)}function f({href:e,icon:t,title:r,description:s}){return i.createElement(h,{href:e},i.createElement(u.default,{as:"h2",className:(0,n.Z)("text--truncate",d.cardTitle),title:r},t," ",r),s&&i.createElement("p",{className:(0,n.Z)("text--truncate",d.cardDescription),title:s},s))}function v({item:e}){var t;const r=(0,s.LM)(e),n=function(){const{selectMessage:e}=(0,c.c)();return t=>e(t,(0,l.I)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return r?i.createElement(f,{href:r,icon:i.createElement(m.G,{icon:p.cC_,className:d.docCardIcon}),title:e.label,description:null!=(t=e.description)?t:n(e.items.length)}):null}function g({item:e}){var t,r;const n=(0,o.Z)(e.href)?i.createElement(m.G,{icon:p.FL8,className:d.docCardIcon}):i.createElement(m.G,{icon:p.wlW,className:d.docCardIcon}),a=(0,s.xz)(null!=(t=e.docId)?t:void 0);return i.createElement(f,{href:e.href,icon:n,title:e.label,description:(null!=(r=e.description)?r:"<Heading"!=(null==a?void 0:a.description)&&"<span"!=(null==a?void 0:a.description))?null==a?void 0:a.description:e.label})}function y({item:e}){switch(e.type){case"link":return i.createElement(g,{item:e});case"category":return i.createElement(v,{item:e});default:throw new Error(`unknown item type ${JSON.stringify(e)}`)}}var b=Object.defineProperty,E=Object.getOwnPropertySymbols,_=Object.prototype.hasOwnProperty,w=Object.prototype.propertyIsEnumerable,N=(e,t,r)=>t in e?b(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,A=(e,t)=>{for(var r in t||(t={}))_.call(t,r)&&N(e,r,t[r]);if(E)for(var r of E(t))w.call(t,r)&&N(e,r,t[r]);return e};function k({className:e}){const t=(0,s.jA)();return i.createElement(C,{items:t.items,className:e})}function C(e){const{items:t,className:r}=e;if(!t)return i.createElement(k,A({},e));const a=(0,s.MN)(t);return i.createElement("section",{className:(0,n.Z)("row",r)},a.map(((e,t)=>i.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},i.createElement(y,{item:e})))))}}}]);