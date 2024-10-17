"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[52450],{88979:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var n=r(785893),t=r(511151);const i={id:"lower",title:"Lower",pagination_label:"Lower",sidebar_label:"Lower",sidebar_class_name:"lower",keywords:["transforms","operations","lower"],description:"Convert an input string into all lowercase letters.",slug:"/extensibility/transforms/operations/lower",tags:["Transforms","Transform Operations"]},o=void 0,a={id:"extensibility/transforms/operations/lower",title:"Lower",description:"Convert an input string into all lowercase letters.",source:"@site/docs/extensibility/transforms/operations/lower.md",sourceDirName:"extensibility/transforms/operations",slug:"/extensibility/transforms/operations/lower",permalink:"/docs/extensibility/transforms/operations/lower",draft:!1,unlisted:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/extensibility/transforms/operations/lower.md",tags:[{inline:!0,label:"Transforms",permalink:"/docs/tags/transforms"},{inline:!0,label:"Transform Operations",permalink:"/docs/tags/transform-operations"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1729201117e3,frontMatter:{id:"lower",title:"Lower",pagination_label:"Lower",sidebar_label:"Lower",sidebar_class_name:"lower",keywords:["transforms","operations","lower"],description:"Convert an input string into all lowercase letters.",slug:"/extensibility/transforms/operations/lower",tags:["Transforms","Transform Operations"]},sidebar:"openApiSidebar",previous:{title:"Lookup",permalink:"/docs/extensibility/transforms/operations/lookup"},next:{title:"Name Normalizer",permalink:"/docs/extensibility/transforms/operations/name-normalizer"}},l={},c=[{value:"Overview",id:"overview",level:2},{value:"Transform Structure",id:"transform-structure",level:2},{value:"Attributes",id:"attributes",level:2},{value:"Examples",id:"examples",level:2}];function d(e){const s={code:"code",h2:"h2",hr:"hr",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h2,{id:"overview",children:"Overview"}),"\n",(0,n.jsx)(s.p,{children:"Use the lower transform to convert an input string into all lowercase letters."}),"\n",(0,n.jsx)(s.h2,{id:"transform-structure",children:"Transform Structure"}),"\n",(0,n.jsxs)(s.p,{children:["The lower transform only requires the transform's ",(0,n.jsx)(s.code,{children:"type"})," and ",(0,n.jsx)(s.code,{children:"name"})," attributes:"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-json",children:'{\n  "type": "lower",\n  "name": "Lower Transform"\n}\n'})}),"\n",(0,n.jsx)(s.h2,{id:"attributes",children:"Attributes"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Required Attributes"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"type"})," - This must always be set to ",(0,n.jsx)(s.code,{children:"lower"}),"."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"name"})," - This is a required attribute for all transforms. It represents the name of the transform as it will appear in the UI's dropdown menus."]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Optional Attributes"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"requiresPeriodicRefresh"})," - This ",(0,n.jsx)(s.code,{children:"true"})," or ",(0,n.jsx)(s.code,{children:"false"})," value indicates whether the transform logic should be reevaluated every evening as part of the identity refresh process."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"input"})," - This is an optional attribute that can explicitly define the input data passed into the transform logic. If no input is provided, the transform takes its input from the source and attribute combination configured with the UI."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"Lowercase Transform Input Screenshot",src:r(455249).Z+"",width:"1832",height:"318"})}),"\n",(0,n.jsx)(s.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(s.p,{children:'This transform takes in the input "ACTIVE" and produces "active" as the output.'}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:'Input:"ACTIVE"\nOutput:"active"\n'})}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"Transform Request Body"}),":"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-json",children:'{\n  "attributes": {\n    "input": {\n      "attributes": {\n        "value": "ACTIVE"\n      },\n      "type": "static"\n    }\n  },\n  "type": "lower",\n  "name": "Lower Transform"\n}\n'})}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsx)("p",{children:"\xa0"}),"\n",(0,n.jsx)(s.p,{children:'This transform takes in the input "All-Access" and produces "all-access" as the output.'}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:'Input:"All-Access"\nOutput:"all-access"\n'})}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"Transform Request Body"}),":"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-json",children:'{\n  "attributes": {\n    "input": {\n      "attributes": {\n        "value": "All-Access"\n      },\n      "type": "static"\n    }\n  },\n  "type": "lower",\n  "name": "Lower Transform"\n}\n'})})]})}function p(e={}){const{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},455249:(e,s,r)=>{r.d(s,{Z:()=>n});const n=r.p+"assets/images/lower_transform_input-c1ff9f3ff048e2971e83655760cafef2.png"}}]);