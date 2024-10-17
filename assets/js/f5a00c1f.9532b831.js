"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[6331],{698931:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>l,contentTitle:()=>s,default:()=>g,frontMatter:()=>a,metadata:()=>o,toc:()=>d});var t=n(785893),r=n(511151);const a={id:"certification-signed-off",title:"Certification Signed Off",pagination_label:"Certification Signed Off",sidebar_label:"Certification Signed Off",sidebar_class_name:"certificationSignedOff",keywords:["event","trigger","certification","available"],description:"Triggered when a certification is signed off by its reviewer.",slug:"/extensibility/event-triggers/triggers/certification-signed-off",tags:["Event Triggers","Available Event Triggers","Fire and Forget"]},s=void 0,o={id:"extensibility/event-triggers/available/certification-signed-off",title:"Certification Signed Off",description:"Triggered when a certification is signed off by its reviewer.",source:"@site/docs/extensibility/event-triggers/available/certification-signed-off.md",sourceDirName:"extensibility/event-triggers/available",slug:"/extensibility/event-triggers/triggers/certification-signed-off",permalink:"/docs/extensibility/event-triggers/triggers/certification-signed-off",draft:!1,unlisted:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/extensibility/event-triggers/available/certification-signed-off.md",tags:[{inline:!0,label:"Event Triggers",permalink:"/docs/tags/event-triggers"},{inline:!0,label:"Available Event Triggers",permalink:"/docs/tags/available-event-triggers"},{inline:!0,label:"Fire and Forget",permalink:"/docs/tags/fire-and-forget"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1729201117e3,frontMatter:{id:"certification-signed-off",title:"Certification Signed Off",pagination_label:"Certification Signed Off",sidebar_label:"Certification Signed Off",sidebar_class_name:"certificationSignedOff",keywords:["event","trigger","certification","available"],description:"Triggered when a certification is signed off by its reviewer.",slug:"/extensibility/event-triggers/triggers/certification-signed-off",tags:["Event Triggers","Available Event Triggers","Fire and Forget"]},sidebar:"openApiSidebar",previous:{title:"Campaign Generated",permalink:"/docs/extensibility/event-triggers/triggers/campaign-generated"},next:{title:"Form Submitted",permalink:"/docs/extensibility/event-triggers/triggers/form-submitted"}},l={},d=[{value:"Event Context",id:"event-context",level:2},{value:"Additional Information and Links",id:"additional-information-and-links",level:2}];function c(e){const i={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.h2,{id:"event-context",children:"Event Context"}),"\n",(0,t.jsx)(i.p,{children:"This event is triggered when a certification is signed-off and moves to End status. This is not to be confused with Campaign End/Expiration."}),"\n",(0,t.jsx)(i.p,{children:"This is an example input from this trigger:"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-json",children:'{\n  "certification": {\n    "id": "2c91808576f886190176f88caf0d0067",\n    "name": "Manager Access Review for Alice Baker",\n    "created": "2020-02-16T03:04:45.815Z",\n    "modified": null,\n    "campaignRef": {\n      "campaignType": "MANAGER",\n      "description": "Audit access for all employees.",\n      "type": "CAMPAIGN",\n      "id": "2c91808576f886190176f88cac5a0010",\n      "name": "Manager Access Campaign"\n    },\n    "completed": true,\n    "hasErrors": false,\n    "errorMessage": null,\n    "decisionsMade": 50,\n    "decisionsTotal": 50,\n    "due": "2020-03-16T03:04:45.815Z",\n    "signed": "2020-03-04T03:04:45.815Z",\n    "reviewer": {\n      "name": "Reviewers group",\n      "id": "6a80311c-8d11-40bc-a3c8-29e2360b85e8",\n      "type": "GOVERNANCE_GROUP",\n      "email": null\n    },\n    "campaignOwner": {\n      "id": "37f080867702c1910177031320c40n27",\n      "displayName": "William Wilson",\n      "email": "william.wilson@example.com"\n    },\n    "reassignment": {\n      "comment": "Changing reviewer.",\n      "from": {\n        "id": "8a89c6de77ef762f0177ef7f52f10004",\n        "name": "Manger Access Review for Charlie Davis",\n        "type": "CERTIFICATION",\n        "reviewer": {\n          "id": "2c9180867702c1910177031320c4010c",\n          "name": "Charlie Davis",\n          "type": "IDENTITY",\n          "email": "charlie.davis@example.com"\n        }\n      }\n    },\n    "phase": "SIGNED",\n    "entitiesCompleted": 12,\n    "entitiesTotal": 12\n  }\n}\n'})}),"\n",(0,t.jsx)(i.h2,{id:"additional-information-and-links",children:"Additional Information and Links"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Trigger Type"}),": ",(0,t.jsx)(i.a,{href:"/docs/extensibility/event-triggers/trigger-types#fire-and-forget",children:"FIRE_AND_FORGET"})]}),"\n"]})]})}function g(e={}){const{wrapper:i}={...(0,r.a)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}}}]);