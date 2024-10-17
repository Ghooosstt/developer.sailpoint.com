"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[25666],{867832:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>s,metadata:()=>r,toc:()=>c});var i=t(785893),a=t(511151);const s={id:"native-change-account-deleted",title:"Native Change Account Deleted",pagination_label:"Native Change Account Deleted",sidebar_label:"Native Change Account Deleted",sidebar_class_name:"nativeChangeAccountDeleted",keywords:["account","deleted","available"],description:"Fires after Account Aggregations detects that an account is deleted external to Identity Security Platform on sources",slug:"/extensibility/event-triggers/triggers/native-change-account-deleted",tags:["Event Triggers","Available Event Triggers","Fire and Forget"]},l=void 0,r={id:"extensibility/event-triggers/available/native-change-account-deleted",title:"Native Change Account Deleted",description:"Fires after Account Aggregations detects that an account is deleted external to Identity Security Platform on sources",source:"@site/docs/extensibility/event-triggers/available/native-change-account-deleted.md",sourceDirName:"extensibility/event-triggers/available",slug:"/extensibility/event-triggers/triggers/native-change-account-deleted",permalink:"/docs/extensibility/event-triggers/triggers/native-change-account-deleted",draft:!1,unlisted:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/extensibility/event-triggers/available/native-change-account-deleted.md",tags:[{inline:!0,label:"Event Triggers",permalink:"/docs/tags/event-triggers"},{inline:!0,label:"Available Event Triggers",permalink:"/docs/tags/available-event-triggers"},{inline:!0,label:"Fire and Forget",permalink:"/docs/tags/fire-and-forget"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1729201117e3,frontMatter:{id:"native-change-account-deleted",title:"Native Change Account Deleted",pagination_label:"Native Change Account Deleted",sidebar_label:"Native Change Account Deleted",sidebar_class_name:"nativeChangeAccountDeleted",keywords:["account","deleted","available"],description:"Fires after Account Aggregations detects that an account is deleted external to Identity Security Platform on sources",slug:"/extensibility/event-triggers/triggers/native-change-account-deleted",tags:["Event Triggers","Available Event Triggers","Fire and Forget"]},sidebar:"openApiSidebar",previous:{title:"Native Change Account Created",permalink:"/docs/extensibility/event-triggers/triggers/native-change-account-created"},next:{title:"Native Change Account Updated",permalink:"/docs/extensibility/event-triggers/triggers/native-change-account-updated"}},o={},c=[{value:"Event Context",id:"event-context",level:2},{value:"Additional Information and Links",id:"additional-information-and-links",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",mermaid:"mermaid",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"event-context",children:"Event Context"}),"\n",(0,i.jsxs)(n.admonition,{title:"Important Setup Steps",type:"info",children:[(0,i.jsx)(n.p,{children:"You must have at least one source configured for Native Change Detection (NCD) before you will receive events from this trigger. There are two ways you can configure a source for NCD:"}),(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Invoke the ",(0,i.jsx)(n.a,{href:"https://developer.sailpoint.com/docs/api/beta/put-native-change-detection-config",children:"update native change detection configuration"})," for each source you want to receive events for NCD."]}),"\n",(0,i.jsx)(n.li,{children:"Configure the NCD options on the source in the source configuration UI."}),"\n"]})]}),"\n",(0,i.jsx)(n.p,{children:"The Native Change Account Deleted trigger fires after Account Aggregations detects that an account is deleted external to Identity Security Platform on sources where:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Native Change Detection is enabled"}),"\n",(0,i.jsx)(n.li,{children:"Account Delete operations are monitored"}),"\n",(0,i.jsx)(n.li,{children:"at least one attribute that is selected for monitoring changed."}),"\n"]}),"\n",(0,i.jsx)("div",{align:"center",children:(0,i.jsx)(n.mermaid,{value:"flowchart TD\n    A[Account deleted on source] --\x3e B\n    B[Account aggregation detects deleted account] --\x3e C\n    C[Trigger Native Change Account Deleted]"})}),"\n",(0,i.jsx)(n.p,{children:"This event trigger can be used to immediately notify interested parties and remediate accounts that are deleted directly on the source. Some examples of how this trigger can be used are as follows:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Notify the identity's manager and the source owner of the deleted account"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"This is an example input from this trigger:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "identity": {\n    "manager": {\n      "name": "Martena Heath",\n      "id": "2c91808378eb9fa30178fb8caf90097f",\n      "type": "IDENTITY",\n      "email": "martena.heath@sample_email.com"\n    },\n    "name": "Letty Wilson",\n    "alias": "Letty.Wilson",\n    "id": "2c91808978eb9fab0178fb8ca6d308fb",\n    "type": "IDENTITY",\n    "email": "letty.wilson@sample_email.com"\n  },\n  "singleValueAttributeChanges": [\n    {\n      "newValue": null,\n      "name": "cn",\n      "oldValue": "Letty Wilson"\n    },\n    {\n      "newValue": null,\n      "name": "displayName",\n      "oldValue": "Letty Wilson"\n    },\n    {\n      "newValue": null,\n      "name": "distinguishedName",\n      "oldValue": "CN=Letty Wilson,OU=Austin,OU=Americas,OU=Demo,DC=seri,DC=sailpointdemo,DC=com"\n    }\n  ],\n  "entitlementChanges": [\n    {\n      "removed": [\n        {\n          "owner": {\n            "id": "2c91808978eb9fab0178fb8ca9280919",\n            "name": "Gregory Brooks",\n            "type": "IDENTITY"\n          },\n          "name": "ProductionManagement",\n          "id": "2c91808778eb9fa30178fb9482f00c60",\n          "value": "CN=ProductionManagement,OU=Groups,OU=Demo,DC=seri,DC=sailpointdemo,DC=com"\n        },\n        {\n          "owner": null,\n          "name": "Employees",\n          "id": "2c91808378eb9fa30178fb94818e0af8",\n          "value": "CN=Employees,OU=BirthRight,OU=Groups,OU=Demo,DC=seri,DC=sailpointdemo,DC=com"\n        },\n        {\n          "owner": null,\n          "name": "WindowsAdministration",\n          "id": "2c91808378eb9fa30178fb9481c30b02",\n          "value": "CN=WindowsAdministration,OU=Groups,OU=Demo,DC=seri,DC=sailpointdemo,DC=com"\n        }\n      ],\n      "added": [],\n      "attributeName": "memberOf"\n    }\n  ],\n  "eventType": "ACCOUNT_DELETED",\n  "source": {\n    "owner": {\n      "name": "Aaron Andrew",\n      "id": "2c9180867a7c46d0017a7ca099d50531",\n      "type": "IDENTITY",\n      "email": "aaron.andrew@sample_email.com"\n    },\n    "name": "Active Directory",\n    "alias": "Active Directory [source]",\n    "id": "2c91808a78efc63e0178fb8624b248c5",\n    "type": "SOURCE",\n    "governanceGroup": {\n      "id": "fd0d1393-35fb-47d8-9809-0e385b73f25e",\n      "name": "Active Directory Owners",\n      "type": "GOVERNANCE_GROUP"\n    }\n  },\n  "accountChangeTypes": ["ATTRIBUTES_CHANGED", "ENTITLEMENTS_REMOVED"],\n  "multiValueAttributeChanges": [\n    {\n      "removedValues": ["top", "person", "organizationalPerson", "user"],\n      "addedValues": [],\n      "name": "objectClass"\n    },\n    {\n      "removedValues": [\n        "Normal User Account",\n        "Password Cannot Expire",\n        "User Account is Disabled"\n      ],\n      "addedValues": [],\n      "name": "accountFlags"\n    }\n  ],\n  "account": {\n    "name": "letty.wilson",\n    "id": "6805a47c09cc4dfca9083f1ce84552ee",\n    "type": "ACCOUNT",\n    "uuid": "{3c096158-9188-46f4-bb13-20ef9daafa7f}",\n    "correlated": true,\n    "nativeIdentity": "CN=Letty Wilson,OU=Austin,OU=Americas,OU=Demo,DC=seri,DC=sailpointdemo,DC=com"\n  }\n}\n'})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"identity"})," The identity correlated to this account. If ",(0,i.jsx)(n.code,{children:"account.correlated"})," is ",(0,i.jsx)(n.code,{children:"false"}),", then this will be a system generated identity, not a real identity. For uncorrelated accounts, this system generated identity can be used to revoke entitlements on the account, or in any other API request that requires an identity ID."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"singleValueAttributeChanges"})," Contains a list of account attributes that have changed. During an account deleted event, all aggregated account attributes will be listed, and their ",(0,i.jsx)(n.code,{children:"newValue"})," will be null.","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["it will include ALL account attributes if the config is ",(0,i.jsx)(n.code,{children:'"allNonEntitlementAttributes": true'})]}),"\n",(0,i.jsxs)(n.li,{children:["it will include the enumerated list of attributes contained in ",(0,i.jsx)(n.code,{children:'"selectedNonEntitlementAttributes": []'})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"entitlementChanges"})," Contains a list of entitlements that have been aggregated with the account. the ",(0,i.jsx)(n.code,{children:"added"})," list will always be empty for an account deleted event."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"eventType"})," Will always be ",(0,i.jsx)(n.code,{children:"ACCOUNT_DELETED"})," for account deleted events."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"source"})," The source where this account originated from."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"accountChangeTypes"})," A list of change types you can expect to see in the event input.","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Possible values are ",(0,i.jsx)(n.code,{children:"ATTRIBUTES_CHANGED"})," and ",(0,i.jsx)(n.code,{children:"ENTITLEMENTS_REMOVED"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["The above example lists both change types since both attributes and entitlements were removed. If an event payload only contains attributes removed, then this list will only contain the ",(0,i.jsx)(n.code,{children:"ATTRIBUTES_CHANGED"})," value. This can be useful when filtering events based on change types, or quickly checking what types of objects changed in the account before continuing to process the input."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"multiValueAttributeChanges"})," List of multivalued attributes that were aggregated with the account. Only ",(0,i.jsx)(n.code,{children:"removedValues"})," will appear for account deleted events.","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["it will include ALL account attributes if the config is ",(0,i.jsx)(n.code,{children:'"allNonEntitlementAttributes": true'})]}),"\n",(0,i.jsxs)(n.li,{children:["it will include the enumerated list of attributes contained in ",(0,i.jsx)(n.code,{children:'"selectedNonEntitlementAttributes": []'})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"account"})," The details of the account as it appears in Identity Security Cloud. This information can be used to query the account API for more information."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"additional-information-and-links",children:"Additional Information and Links"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Trigger Type"}),": ",(0,i.jsx)(n.a,{href:"/docs/extensibility/event-triggers/trigger-types#fire-and-forget",children:"FIRE_AND_FORGET"})]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}}}]);