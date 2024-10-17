"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[88262],{305890:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var i=n(785893),r=n(511151);const s={id:"account-attribute",title:"Account Attribute",pagination_label:"Account Attribute",sidebar_label:"Account Attribute",sidebar_class_name:"accountAttribute",keywords:["transforms","operations","account","attribute"],description:"Look up an account for a particular source on an identity.",slug:"/extensibility/transforms/operations/account-attribute",tags:["Transforms","Transform Operations"]},a=void 0,o={id:"extensibility/transforms/operations/account-attribute",title:"Account Attribute",description:"Look up an account for a particular source on an identity.",source:"@site/docs/extensibility/transforms/operations/account-attribute.md",sourceDirName:"extensibility/transforms/operations",slug:"/extensibility/transforms/operations/account-attribute",permalink:"/docs/extensibility/transforms/operations/account-attribute",draft:!1,unlisted:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/extensibility/transforms/operations/account-attribute.md",tags:[{inline:!0,label:"Transforms",permalink:"/docs/tags/transforms"},{inline:!0,label:"Transform Operations",permalink:"/docs/tags/transform-operations"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1729201117e3,frontMatter:{id:"account-attribute",title:"Account Attribute",pagination_label:"Account Attribute",sidebar_label:"Account Attribute",sidebar_class_name:"accountAttribute",keywords:["transforms","operations","account","attribute"],description:"Look up an account for a particular source on an identity.",slug:"/extensibility/transforms/operations/account-attribute",tags:["Transforms","Transform Operations"]},sidebar:"openApiSidebar",previous:{title:"Operations",permalink:"/docs/extensibility/transforms/operations"},next:{title:"Base64 Decode",permalink:"/docs/extensibility/transforms/operations/base64-decode"}},c={},l=[{value:"Overview",id:"overview",level:2},{value:"Transform Structure",id:"transform-structure",level:2},{value:"Attributes",id:"attributes",level:2},{value:"Examples",id:"examples",level:2}];function u(e){const t={admonition:"admonition",code:"code",h2:"h2",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,i.jsx)(t.p,{children:"Use the account attribute transform to look up an account for a particular source on an identity and return a specific attribute value from that account."}),"\n",(0,i.jsx)(t.admonition,{title:"Other Considerations",type:"note",children:(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["If there are multiple accounts, then Identity Security Cloud by default takes the value from the oldest account (based on the account created date). You can configure this behavior by specifying ",(0,i.jsx)(t.code,{children:"accountSortAttribute"})," and ",(0,i.jsx)(t.code,{children:"accountSortDescending"})," attributes."]}),"\n",(0,i.jsxs)(t.li,{children:["If there are multiple accounts and the oldest account has a null attribute value, by default Identity Security Cloud moves to the next account that can have a value (if there are any). You can override this behavior with the ",(0,i.jsx)(t.code,{children:"accountReturnFirstLink"})," property."]}),"\n",(0,i.jsx)(t.li,{children:'You can filter the multiple accounts returned based on the data they contain so that you can target specific accounts. This is often used to target accounts that are "active" instead of those that are not.'}),"\n"]})}),"\n",(0,i.jsx)(t.h2,{id:"transform-structure",children:"Transform Structure"}),"\n",(0,i.jsx)(t.p,{children:"The account attribute transform's configuration can take several attributes as inputs. The following example shows a fully configured transform with all required and optional attributes."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-json",children:'{\n  "attributes": {\n    "sourceName": "Workday",\n    "attributeName": "DEPARTMENT",\n    "accountSortAttribute": "created",\n    "accountSortDescending": true,\n    "accountReturnFirstLink": true,\n    "accountPropertyFilter": "(DEPARTMENT == \\"Engineering\\")",\n    "accountFilter": "!(nativeIdentity.startsWith(\\"*DELETED*\\"))"\n  },\n  "type": "accountAttribute",\n  "name": "Account Attribute Transform"\n}\n'})}),"\n",(0,i.jsx)(t.h2,{id:"attributes",children:"Attributes"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Required Attributes"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"type"})," - This must always be set to ",(0,i.jsx)(t.code,{children:"accountAttribute"}),"."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"name"})," - This is a required attribute for all transforms. It represents the name of the transform as it will appear in the UI's dropdown menus."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"sourceName"})," - This is a reference to the source to search for accounts.","\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"This is a reference by a source's display name attribute (e.g., Active Directory). If the display name is updated, this reference must also be updated."}),"\n",(0,i.jsxs)(t.li,{children:["As an alternative, you can provide an ",(0,i.jsx)(t.code,{children:"applicationId"})," or ",(0,i.jsx)(t.code,{children:"applicationName"})," instead.","\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"applicationId"}),' - This is a reference by a source\'s external GUID/ID attribute (e.g., "ff8081815a8b3925015a8b6adac901ff").']}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"applicationName"}),' - This is a reference by a source\'s immutable name attribute (e.g., "Active Directory [source]").']}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"attributeName"})," - The name of the attribute on the account to return. This matches the name of the account attribute name visible in the user interface or on the source schema."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Optional Attributes"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"requiresPeriodicRefresh"})," - This is a ",(0,i.jsx)(t.code,{children:"true"})," or ",(0,i.jsx)(t.code,{children:"false"})," value indicating whether the transform logic must be reevaluated every evening as part of the identity refresh process."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"accountSortAttribute"})," - This configuration's value is a string name of the attribute to use when determining the ordering of returned accounts when there are multiple entries.","\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Accounts can be sorted by any schema attribute."}),"\n",(0,i.jsx)(t.li,{children:'If no sort attribute is defined, the transform will default to "created" (ascending sort on created date - oldest object wins).'}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"accountSortDescending"})," - This configuration's value is a boolean (true/false). It controls the sort order when there are multiple accounts.","\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"If not defined, the transform will default to false (ascending order)"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"accountReturnFirstLink"})," - This configuration's value is a boolean (true/false). It controls which account to source a value from for an attribute. If this flag is set to true, the transform returns the value from the first account in the list, even if it is null. If this flag is set to false, the transform returns the first non-null value.","\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"If the configuration's value is not defined, the transform will default to the false setting."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"accountFilter"})," - This expression queries the database to narrow search results. This configuration's value is a ",(0,i.jsx)(t.code,{children:"sailpoint.object.Filter"})," expression for searching against the database. The default filter always includes the source and identity, and any subsequent expressions are combined in an AND operation with the existing search criteria.","\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Only certain searchable attributes are available:","\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"nativeIdentity"})," - This is the account ID."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"displayName"})," - This is the account name."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"entitlements"})," - This boolean value determine whether the account has entitlements."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"accountPropertyFilter"})," - Use this expression to search and filter accounts in memory. This configuration's value is a ",(0,i.jsx)(t.code,{children:"sailpoint.object.Filter"})," expression for searching against the returned resultset.","\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"All account attributes are available for filtering because this operation is performed in memory."}),"\n",(0,i.jsxs)(t.li,{children:["Examples:","\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.code,{children:'(status != "terminated")'})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.code,{children:'(department == "Engineering")'})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.code,{children:'(groups.containsAll({"Admin"}) || location == "Austin")'})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"input"})," - This is an optional attribute that can explicitly define the input data passed into the transform logic. If no input is provided, the transform takes its input from the source and attribute combination configured with the UI."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(t.p,{children:"HR systems can have multiple HR records for a person, especially in rehire and conversion scenarios. In order to get the correct identity data, you must get data from only the latest active accounts."}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"sourceName"}),' is "Corporate HR" because that is the name of the authoritative source.']}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"attributeName"}),' is "HIREDATE" because that is the attribute you want from the authoritative source.']}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"accountSortAttribute"}),' is "created" because you want to sort on created dates in case there are multiple accounts.']}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"accountSortDescending"})," is true because you want to sort based on the newest or latest account from the HR system."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"accountReturnFirstLink"})," is true because you want to return the value of HIREDATE, event if it is null."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"accountPropertyFilter"})," is filtering the accounts to look at only active accounts. Terminated accounts will not appear (assuming there are no data issues)."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.admonition,{type:"info",children:(0,i.jsxs)(t.p,{children:["You cannot use ",(0,i.jsx)(t.code,{children:"accountFilter"})," here because WORKER_STATUS__c is not a searchable attribute, but ",(0,i.jsx)(t.code,{children:"accountPropertyFilter"})," works instead."]})}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Transform Request Body"}),":"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-json",children:'{\n  "attributes": {\n    "attributeName": "HIREDATE",\n    "sourceName": "Corporate HR",\n    "accountSortAttribute": "created",\n    "accountSortDescending": true,\n    "accountReturnFirstLink": true,\n    "accountPropertyFilter": "(WORKER_STATUS__c == \\"active\\")"\n  },\n  "type": "accountAttribute",\n  "name": "Account Attribute Transform"\n}\n'})}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)("p",{children:"\xa0"}),"\n",(0,i.jsx)(t.p,{children:"When you are mapping values like a username, focus on primary accounts from a particular source or accounts that are not service accounts."}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"sourceName"}),' is "Active Directory" because that is the source this data is coming from.']}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"attributeName"}),' is "sAMAccountName" because you are mapping the username of the user.']}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"accountFilter"})," is an expression filtering the accounts to make sure they are not service accounts."]}),"\n"]}),"\n",(0,i.jsx)(t.admonition,{type:"info",children:(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"accountPropertyFilter"})," also would have worked here."]})}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Transform Request Body"}),":"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-json",children:'{\n  "attributes": {\n    "attributeName": "sAMAccountName",\n    "sourceName": "Active Directory",\n    "accountFilter": "!(displayName.startsWith(\\"SVC-\\"))"\n  },\n  "type": "accountAttribute",\n  "name": "Account Attribute Transform"\n}\n'})}),"\n",(0,i.jsx)(t.p,{children:"To determine whether an identity is a member of an entitlement."}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"input"})," contains the condition to be evaluated (is member of an entitlement or not). If the user doesn't meet the below conditions, the ",(0,i.jsx)(t.code,{children:"firstValid"}),' retuns "FALSE".',"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"sourceName"}),' is "Active Directory" because that is the source this data is coming from.']}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"attributeName"}),' is "sAMAccountName" because you are mapping the username of the user.']}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"accountPropertyFilter"}),' is filtering accounts that are members of an entitlement that contains "All AD Users-rshwart".']}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"table"})," contains the boolean results: FALSE or TRUE (default)."]}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-json",children:'{\n  "attributes": {\n    "input": {\n      "attributes": {\n        "values": [\n          {\n            "attributes": {\n              "accountPropertyFilter": "(memberOf.contains(\\"All AD Users-rshwart\\"))",\n              "attributeName": "sAMAccountName",\n              "sourceName": "Active Directory"\n            },\n            "type": "accountAttribute"\n          },\n          "FALSE"\n        ]\n      },\n      "type": "firstValid"\n    },\n    "table": {\n      "FALSE": "FALSE",\n      "default": "TRUE"\n    }\n  },\n  "id": "Contains IT Access",\n  "type": "lookup"\n}\n'})})]})}function d(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}}}]);