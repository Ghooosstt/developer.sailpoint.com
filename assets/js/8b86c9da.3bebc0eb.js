"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[30446],{327684:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>m});var s=r(785893),t=r(511151);const i={id:"name-normalizer",title:"Name Normalizer",pagination_label:"Name Normalizer",sidebar_label:"Name Normalizer",sidebar_class_name:"nameNormalizer",keywords:["transforms","operations","name normalizer"],description:"Clean or standardize the spelling of strings coming in from source systems.",slug:"/extensibility/transforms/operations/name-normalizer",tags:["Transforms","Transform Operations"]},a=void 0,o={id:"extensibility/transforms/operations/name-normalizer",title:"Name Normalizer",description:"Clean or standardize the spelling of strings coming in from source systems.",source:"@site/docs/extensibility/transforms/operations/name-normalizer.md",sourceDirName:"extensibility/transforms/operations",slug:"/extensibility/transforms/operations/name-normalizer",permalink:"/docs/extensibility/transforms/operations/name-normalizer",draft:!1,unlisted:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/extensibility/transforms/operations/name-normalizer.md",tags:[{inline:!0,label:"Transforms",permalink:"/docs/tags/transforms"},{inline:!0,label:"Transform Operations",permalink:"/docs/tags/transform-operations"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1729201117e3,frontMatter:{id:"name-normalizer",title:"Name Normalizer",pagination_label:"Name Normalizer",sidebar_label:"Name Normalizer",sidebar_class_name:"nameNormalizer",keywords:["transforms","operations","name normalizer"],description:"Clean or standardize the spelling of strings coming in from source systems.",slug:"/extensibility/transforms/operations/name-normalizer",tags:["Transforms","Transform Operations"]},sidebar:"openApiSidebar",previous:{title:"Lower",permalink:"/docs/extensibility/transforms/operations/lower"},next:{title:"Random Alphanumeric",permalink:"/docs/extensibility/transforms/operations/random-alphanumeric"}},l={},m=[{value:"Overview",id:"overview",level:2},{value:"Transform Structure",id:"transform-structure",level:2},{value:"Attributes",id:"attributes",level:2},{value:"Examples",id:"examples",level:2}];function c(e){const n={code:"code",h2:"h2",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,s.jsx)(n.p,{children:"Use the name normalizer transform to clean or standardize the spelling of strings coming in from source systems. The most common use for this transform is for names and other proper nouns, but the transform is not necessarily limited to those data elements."}),"\n",(0,s.jsx)(n.p,{children:"The normalization logic within the transform handles a wide range of use cases:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Proper casing/capitalization of names","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Any string containing either a space, a hyphen or an apostrophe - the transform splits these by that character and capitalizes the first character of each resulting substring."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:['Special replacements of patterns that include "MC" and "MAC" (or case-based variations of those two strings)',"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:'The transform automatically converts "MC" to "Mc" and "MAC" to "Mac" when they are part of a patronymic last name.'}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Consistent capitalization of strings that are part of a toponymic surname or a generational suffix:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:'Convert "VON" to "von"'}),"\n",(0,s.jsx)(n.li,{children:'Convert "DEL" to "del"'}),"\n",(0,s.jsx)(n.li,{children:'Convert "OF" to "of"'}),"\n",(0,s.jsx)(n.li,{children:'Convert "DE" to "de"'}),"\n",(0,s.jsx)(n.li,{children:'Convert "LA" to "la"'}),"\n",(0,s.jsx)(n.li,{children:'Convert "Y" to "y"'}),"\n",(0,s.jsx)(n.li,{children:'Convert Roman numeral suffixes to all capitalized letters (e.g., "iii" becomes "III")'}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"transform-structure",children:"Transform Structure"}),"\n",(0,s.jsxs)(n.p,{children:["The name normalizer transform only requires the transform's ",(0,s.jsx)(n.code,{children:"type"})," and ",(0,s.jsx)(n.code,{children:"name"})," attributes:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "type": "normalizeNames",\n  "name": "Name Normalizer Transform"\n}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"attributes",children:"Attributes"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Required Attributes"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"type"})," - This must always be set to ",(0,s.jsx)(n.code,{children:"normalizeNames"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"name"})," - This is a required attribute for all transforms. It represents the name of the transform as it will appear in the UI's dropdown menus."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Optional Attributes"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"requiresPeriodicRefresh"})," - This ",(0,s.jsx)(n.code,{children:"true"})," or ",(0,s.jsx)(n.code,{children:"false"})," value indicates whether the transform logic should be reevaluated every evening as part of the identity refresh process."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"input"})," - This is an optional attribute that can explicitly define the input data passed into the transform logic. If no input is provided, the transform takes its input from the source and attribute combination configured with the UI."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(n.p,{children:"This transform takes a static value and normalizes it to a consistent format."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'Input: "jOHN VON SmITh"\nOutput: "John von Smith"\n'})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "attributes": {\n    "input": {\n      "attributes": {\n        "value": "jOHN VON SmITh"\n      },\n      "type": "static"\n    }\n  },\n  "type": "normalizeNames",\n  "name": "Name Normalizer Transform"\n}\n'})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)("p",{children:"\xa0"}),"\n",(0,s.jsx)(n.p,{children:'This transform takes the user\'s "LastName" attribute from the "HR Source" and normalizes the name to a consistent format.'}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'Input: "Dr. JOHN D. O\'BRIEN"\nOutput: "Dr. John D. O\'Brien"\n'})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "attributes": {\n    "input": {\n      "attributes": {\n        "sourceName": "HR Source",\n        "attributeName": "LastName"\n      },\n      "type": "accountAttribute"\n    }\n  },\n  "type": "normalizeNames",\n  "name": "Name Normalizer Transform"\n}\n'})})]})}function d(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}}}]);