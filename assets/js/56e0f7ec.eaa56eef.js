"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[43839],{66638:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>a,metadata:()=>m,toc:()=>d});var c=n(785893),i=n(511151),o=n(841282),s=n(476828);const a={id:"customizer-commands",title:"Customizer Commands",pagination_label:"Customizer Commands",sidebar_label:"Customizer Commands",sidebar_position:7,sidebar_class_name:"connectorCommands",keywords:["connectivity","connector","commands"],description:"Available connectivity customizer commands.",slug:"/connectivity/saas-connectivity/customizers/commands",tags:["Connectivity"]},r=void 0,m={id:"connectivity/saas-connectivity/connector-customizers/customizer-commands/customizer-commands",title:"Customizer Commands",description:"Available connectivity customizer commands.",source:"@site/docs/connectivity/saas-connectivity/connector-customizers/customizer-commands/index.md",sourceDirName:"connectivity/saas-connectivity/connector-customizers/customizer-commands",slug:"/connectivity/saas-connectivity/customizers/commands",permalink:"/docs/connectivity/saas-connectivity/customizers/commands",draft:!1,unlisted:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/connectivity/saas-connectivity/connector-customizers/customizer-commands/index.md",tags:[{inline:!0,label:"Connectivity",permalink:"/docs/tags/connectivity"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1729201117e3,sidebarPosition:7,frontMatter:{id:"customizer-commands",title:"Customizer Commands",pagination_label:"Customizer Commands",sidebar_label:"Customizer Commands",sidebar_position:7,sidebar_class_name:"connectorCommands",keywords:["connectivity","connector","commands"],description:"Available connectivity customizer commands.",slug:"/connectivity/saas-connectivity/customizers/commands",tags:["Connectivity"]},sidebar:"openApiSidebar",previous:{title:"Config Object",permalink:"/docs/connectivity/saas-connectivity/customizers/config"},next:{title:"Account Create",permalink:"/docs/connectivity/saas-connectivity/customizers/commands/account-create"}},l={},d=[];function u(e){const t={p:"p",...(0,i.a)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.p,{children:"You will find all the commands available to implement in a SaaS Connector Customizer here:"}),"\n","\n",(0,c.jsx)(o.Z,{items:(0,s.jA)().items})]})}function p(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(u,{...e})}):u(e)}},841282:(e,t,n)=>{n.d(t,{Z:()=>k});var c=n(667294),i=n(490512),o=n(476828),s=n(370393),a=n(585597),r=n(935096),m=n(633084),l=n(555199);const d={cardContainer:"cardContainer_S8oU",cardTitle:"cardTitle_HoSo",cardDescription:"cardDescription_c27F",docCardIcon:"docCardIcon_elTJ"};var u=n(799603),p=n(921702);function v({href:e,children:t}){return c.createElement(s.Z,{href:e,className:(0,i.Z)("card padding--lg",d.cardContainer)},t)}function y({href:e,icon:t,title:n,description:o}){return c.createElement(v,{href:e},c.createElement(l.default,{as:"h2",className:(0,i.Z)("text--truncate",d.cardTitle),title:n},t," ",n),o&&c.createElement("p",{className:(0,i.Z)("text--truncate",d.cardDescription),title:o},o))}function f({item:e}){var t;const n=(0,o.LM)(e),i=function(){const{selectMessage:e}=(0,a.c)();return t=>e(t,(0,m.I)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return n?c.createElement(y,{href:n,icon:c.createElement(u.G,{icon:p.cC_,className:d.docCardIcon}),title:e.label,description:null!=(t=e.description)?t:i(e.items.length)}):null}function b({item:e}){var t,n;const i=(0,r.Z)(e.href)?c.createElement(u.G,{icon:p.FL8,className:d.docCardIcon}):c.createElement(u.G,{icon:p.wlW,className:d.docCardIcon}),s=(0,o.xz)(null!=(t=e.docId)?t:void 0);return c.createElement(y,{href:e.href,icon:i,title:e.label,description:(null!=(n=e.description)?n:"<Heading"!=(null==s?void 0:s.description)&&"<span"!=(null==s?void 0:s.description))?null==s?void 0:s.description:e.label})}function C({item:e}){switch(e.type){case"link":return c.createElement(b,{item:e});case"category":return c.createElement(f,{item:e});default:throw new Error(`unknown item type ${JSON.stringify(e)}`)}}var g=Object.defineProperty,h=Object.getOwnPropertySymbols,z=Object.prototype.hasOwnProperty,_=Object.prototype.propertyIsEnumerable,E=(e,t,n)=>t in e?g(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,w=(e,t)=>{for(var n in t||(t={}))z.call(t,n)&&E(e,n,t[n]);if(h)for(var n of h(t))_.call(t,n)&&E(e,n,t[n]);return e};function N({className:e}){const t=(0,o.jA)();return c.createElement(k,{items:t.items,className:e})}function k(e){const{items:t,className:n}=e;if(!t)return c.createElement(N,w({},e));const s=(0,o.MN)(t);return c.createElement("section",{className:(0,i.Z)("row",n)},s.map(((e,t)=>c.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},c.createElement(C,{item:e})))))}}}]);