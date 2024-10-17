"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[98454],{282680:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var i=s(785893),n=s(511151);const r={id:"static",title:"Static",pagination_label:"Static",sidebar_label:"Static",sidebar_class_name:"static",keywords:["transforms","operations","static"],description:"Return a fixed string value.",slug:"/extensibility/transforms/operations/static",tags:["Transforms","Transform Operations"]},a=void 0,o={id:"extensibility/transforms/operations/static",title:"Static",description:"Return a fixed string value.",source:"@site/docs/extensibility/transforms/operations/static.md",sourceDirName:"extensibility/transforms/operations",slug:"/extensibility/transforms/operations/static",permalink:"/docs/extensibility/transforms/operations/static",draft:!1,unlisted:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/extensibility/transforms/operations/static.md",tags:[{inline:!0,label:"Transforms",permalink:"/docs/tags/transforms"},{inline:!0,label:"Transform Operations",permalink:"/docs/tags/transform-operations"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1729201117e3,frontMatter:{id:"static",title:"Static",pagination_label:"Static",sidebar_label:"Static",sidebar_class_name:"static",keywords:["transforms","operations","static"],description:"Return a fixed string value.",slug:"/extensibility/transforms/operations/static",tags:["Transforms","Transform Operations"]},sidebar:"openApiSidebar",previous:{title:"Split",permalink:"/docs/extensibility/transforms/operations/split"},next:{title:"Substring",permalink:"/docs/extensibility/transforms/operations/substring"}},l={},c=[{value:"Overview",id:"overview",level:2},{value:"Transform Structure",id:"transform-structure",level:2},{value:"Attributes",id:"attributes",level:2},{value:"Examples",id:"examples",level:2},{value:"References",id:"references",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,n.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,i.jsxs)(t.p,{children:["Use the static transform to return a fixed string value, or more commonly, to evaluate ",(0,i.jsx)(t.a,{href:"https://velocity.apache.org/engine/1.7/user-guide.html",children:"Velocity Template Language"}),". The latter implementation is often useful when you are using if/then/else logic or iterating through a for loop. The static transform can also take other dynamically provided variables as inputs into the ",(0,i.jsx)(t.code,{children:"value"})," attribute."]}),"\n",(0,i.jsx)(t.admonition,{title:"Other Considerations",type:"note",children:(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"When you are using static transforms within the create profile for a source, you can enter the value directly in the input field if the user selects Static as the attribute type."}),"\n",(0,i.jsxs)(t.li,{children:["Because Identity Security Cloud supports the ability to order attributes in a create profile, you can use the Velocity template of an attribute higher in the list to generate a static value for an attribute that is lower in the list. For example, if you wanted to generate an email address based on a display name, you would need to do the follwing:","\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:'Move the "displayName" attribute higher in the list so that it is created before the email address.'}),"\n",(0,i.jsxs)(t.li,{children:['In the "mail" attribute, select Static for the attribute type. In the Static Value field, enter ',(0,i.jsx)(t.code,{children:"$displayName@yourdomain.com"}),"."]}),"\n"]}),"\n"]}),"\n"]})}),"\n",(0,i.jsx)(t.h2,{id:"transform-structure",children:"Transform Structure"}),"\n",(0,i.jsxs)(t.p,{children:["In addition to the standard ",(0,i.jsx)(t.code,{children:"type"})," and ",(0,i.jsx)(t.code,{children:"name"})," attributes, the static transform requires a value attribute to be specified:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-json",children:'{\n  "attributes": {\n    "value": "Employee"\n  },\n  "type": "static",\n  "name": "Static Transform"\n}\n'})}),"\n",(0,i.jsx)(t.h2,{id:"attributes",children:"Attributes"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Required Attributes"})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"type"})," - This must always be set to ",(0,i.jsx)(t.code,{children:"static."})]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"name"})," - This is a required attribute for all transforms. It represents the name of the transform as it will appear in the UI's dropdown menus."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"value"})," - This must evaluate to a JSON string either through a fixed value or through conditional logic using Velocity Template Language."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Optional Attributes"})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["The static transform can implement variables within the ",(0,i.jsx)(t.code,{children:"value"})," expression. These variables can be defined as optional attributes within the transform and can themselves be the results of other transforms."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"requiresPeriodicRefresh"})," - This ",(0,i.jsx)(t.code,{children:"true"})," or ",(0,i.jsx)(t.code,{children:"false"})," value indicates whether the transform logic should be reevaluated every evening as part of the identity refresh process."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsxs)(t.p,{children:["This transform uses a dynamic variable called ",(0,i.jsx)(t.code,{children:"workerType"}),", which is set to the value of the user's HR record's empType value. The static transform then returns that value through the use of Velocity variable notation (i.e., ",(0,i.jsx)(t.code,{children:"$<variableName>"}),")."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Transform Request Body"}),":"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-json",children:'{\n  "attributes": {\n    "workerType": {\n      "attributes": {\n        "sourceName": "HR Source",\n        "attributeName": "empType"\n      },\n      "type": "accountAttribute"\n    },\n    "value": "$workerType"\n  },\n  "type": "static",\n  "name": "Static Transform"\n}\n'})}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)("p",{children:"\xa0"}),"\n",(0,i.jsx)(t.p,{children:"This transform extends the previous one to show how you can use if/else logic to return data based on contingent logic."}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Transform Request Body"}),":"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-json",children:'{\n  "attributes": {\n    "workerType": {\n      "attributes": {\n        "sourceName": "HR Source",\n        "attributeName": "empType"\n      },\n      "type": "accountAttribute"\n    },\n    "value": "#if($workerType==\'Employee\')Full-Time#{else}Contingent#end"\n  },\n  "type": "static",\n  "name": "Static Transform"\n}\n'})}),"\n",(0,i.jsx)(t.h2,{id:"references",children:"References"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://velocity.apache.org/engine/1.7/user-guide.html",children:"https://velocity.apache.org/engine/1.7/user-guide.html"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://velocity.apache.org/engine/2.0/vtl-reference.html",children:"https://velocity.apache.org/engine/2.0/vtl-reference.html"})}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}}}]);