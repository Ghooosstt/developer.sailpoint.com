"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[39330],{12941:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>u,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var n=t(785893),s=t(511151),r=t(841282),l=t(476828);const o={id:"cloud-executed-rules",title:"Cloud Executed Rules",pagination_label:"Cloud Executed Rules",sidebar_label:"Cloud Executed Rules",sidebar_position:2,sidebar_class_name:"cloudExecutedRules",keywords:["cloud","rules"],description:"Overview of cloud-executed rules",slug:"/extensibility/rules/cloud-rules",tags:["Rules"]},c=void 0,a={id:"extensibility/rules/cloud-rules/cloud-executed-rules",title:"Cloud Executed Rules",description:"Overview of cloud-executed rules",source:"@site/docs/extensibility/rules/cloud-rules/index.md",sourceDirName:"extensibility/rules/cloud-rules",slug:"/extensibility/rules/cloud-rules",permalink:"/docs/extensibility/rules/cloud-rules",draft:!1,unlisted:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/extensibility/rules/cloud-rules/index.md",tags:[{inline:!0,label:"Rules",permalink:"/docs/tags/rules"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1729201117e3,sidebarPosition:2,frontMatter:{id:"cloud-executed-rules",title:"Cloud Executed Rules",pagination_label:"Cloud Executed Rules",sidebar_label:"Cloud Executed Rules",sidebar_position:2,sidebar_class_name:"cloudExecutedRules",keywords:["cloud","rules"],description:"Overview of cloud-executed rules",slug:"/extensibility/rules/cloud-rules",tags:["Rules"]},sidebar:"openApiSidebar",previous:{title:"Your First Rule",permalink:"/docs/extensibility/rules/guides/your-first-rule"},next:{title:"Account Profile Attribute Generator",permalink:"/docs/extensibility/rules/cloud-rules/account-profile-attribute-generator"}},u={},d=[{value:"Overview",id:"overview",level:2},{value:"Supported Cloud Rules",id:"supported-cloud-rules",level:2},{value:"Configuration Process",id:"configuration-process",level:2},{value:"Submit for Rule Review",id:"submit-for-rule-review",level:2},{value:"Review Guidelines",id:"review-guidelines",level:2},{value:"Review Expectations",id:"review-expectations",level:2}];function h(e){const i={a:"a",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.h2,{id:"overview",children:"Overview"}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.strong,{children:"Cloud-Executed Rules"})," or ",(0,n.jsx)(i.strong,{children:"Cloud Rules"})," typically only perform specific functions, such as calculating attribute values. Cloud Rules all execute within the SailPoint cloud and offer access to objects and data, but they do not offer any sort of external connectivity."]}),"\n",(0,n.jsx)(i.p,{children:"Because these rules execute in a multi-tenant cloud environment, they have a very restricted context, and the review process is carefully scrutinized to ensure that they execute in an efficient and secure manner."}),"\n",(0,n.jsx)(i.h2,{id:"supported-cloud-rules",children:"Supported Cloud Rules"}),"\n","\n",(0,n.jsx)(r.Z,{items:(0,l.jA)().items}),"\n",(0,n.jsx)(i.h2,{id:"configuration-process",children:"Configuration Process"}),"\n",(0,n.jsx)(i.p,{children:"To ensure maximum compatibility, platform integrity, and security, SailPoint has instantiated a review process to ensure that any submitted Cloud Rules meet SailPoint requirements and do not contain code that can harm the system. The review process also checks the rules to verify their intended purposes and use cases."}),"\n",(0,n.jsxs)(i.p,{children:["In this process, SailPoint does ",(0,n.jsx)(i.em,{children:"not check"})," whether the rule executes correctly or verify that it works as expected to deliver specific outcomes. The review is merely an integrity check on the rule itself."]}),"\n",(0,n.jsx)(i.h2,{id:"submit-for-rule-review",children:"Submit for Rule Review"}),"\n",(0,n.jsxs)(i.p,{children:["To submit your Cloud Rule for review, approval, and inclusion in the SailPoint platform, submit a ",(0,n.jsx)(i.a,{href:"https://support.sailpoint.com/csm",children:"SailPoint support portal request"})," or send an email to ",(0,n.jsx)(i.code,{children:"support@sailpoint.com"}),". Attach the rule, validator output, tenant name (e.g., acme-sb.identitynow.com for sandbox or acme.identitynow.com for production) and approval for expert services to proceed. If you need assistance writing and testing rules, Expert Services can assist in that process as well. Make sure your contact information is up to date so the review team can contact you if they need to."]}),"\n",(0,n.jsx)(i.h2,{id:"review-guidelines",children:"Review Guidelines"}),"\n",(0,n.jsx)(i.p,{children:"All submitted rules must follow proper rule submission guidelines."}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Best Practices"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"Ensure that all rule configurations are complete and accurate."}),"\n",(0,n.jsx)(i.li,{children:"Check whether your rule follows SailPoint best practice guidance, and ensure that you have considered other product features first."}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Rule Quality"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:["Rules must follow the ",(0,n.jsx)(i.a,{href:"/docs/extensibility/rules#rule-guidelines",children:"Rule Guidelines"})," and ",(0,n.jsx)(i.a,{href:"/docs/extensibility/rules#rule-code-restrictions",children:"Code Restrictions"})]}),"\n",(0,n.jsx)(i.li,{children:"Rules must be adequately tested prior to submission."}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Documentation"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:["Include detailed comments for non-obvious features in the configurations, including supporting documentation where appropriate. This includes justification for why something was created or done in a certain way. - ",(0,n.jsx)(i.em,{children:"e.g. I did this because..."})]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Standards"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"Rules must omit commented out blocks or unfinished, incomplete, or untested code."}),"\n",(0,n.jsx)(i.li,{children:"Rules must be submitted with appropriate UTF-8 encoding."}),"\n",(0,n.jsxs)(i.li,{children:["Rules must convert url-encoded characters:","\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"&amp;"})," should be ",(0,n.jsx)(i.code,{children:"&"})]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"&lt;"})," should be ",(0,n.jsx)(i.code,{children:"<"})]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"&gt;"})," should be ",(0,n.jsx)(i.code,{children:">"})]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.strong,{children:"Rule File Naming"})}),"\n"]}),"\n",(0,n.jsxs)(i.p,{children:["This is the file naming convention for rules: ",(0,n.jsx)(i.code,{children:"Rule - {type} - {name}.xml"})]}),"\n",(0,n.jsx)(i.p,{children:"For example, this is the rule:"}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.code,{children:'<Rule language="beanshell" name="Calculate Lifecycle" type="IdentityAttribute">'})}),"\n",(0,n.jsx)(i.p,{children:"This should be the rule's file name:"}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.code,{children:"Rule - IdentityAttribute - Calculate Lifecycle.xml"})}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.strong,{children:"Updating Existing Rules and Versioning"})}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"The best practice is to maintain a single rule for a given use case in the tenant. Creating additional rules while updating to maintain versioning is not supported because doing so may cause issues during reviews and support."}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Example:"}),' For an AD Before Provisioning rule called "AD BeforeProvisioningRule", you have the file "Rule - BeforeProvisioning - AD BeforeProvisioningRule.xml". When you are updating the logic for AD, it is best to update the file/rule with the same name so changes can be properly tracked to the single object.']}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.strong,{children:"Deployment Window Requirements"})}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"Rules are generally reviewed and deployed, if they are accepted without feedback, within 24 hours."}),"\n",(0,n.jsxs)(i.li,{children:["If specific windows are required and you want full control of when a rule is updated, use these steps to follow the versioning best practices:","\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:["Submit your request for a new rule with the name: ",(0,n.jsx)(i.code,{children:"<original name>-TEMP"})]}),"\n",(0,n.jsx)(i.li,{children:"Apply the new rule during the change window."}),"\n",(0,n.jsx)(i.li,{children:"Validate the updated rule logic."}),"\n",(0,n.jsx)(i.li,{children:"Once the rule is validated, submit your request to update original rule with the updated logic."}),"\n",(0,n.jsx)(i.li,{children:"Once the original rule is updated, apply the original rule as the production configuration."}),"\n",(0,n.jsx)(i.li,{children:"Submit your request to delete the TEMP rule."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(i.h2,{id:"review-expectations",children:"Review Expectations"}),"\n",(0,n.jsx)(i.p,{children:"Once you have submitted your rule and you are in the review process, remember these points:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Timing:"})," SailPoint will examine your rule as soon as possible. Most rules are reviewed within 24 hours of submission. However, if your rule is complex, poorly documented, hard to read, or if it presents new issues, it may require greater scrutiny and consideration. If your rule is repeatedly rejected for the same guideline violation, your rule's review may take longer to complete."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Status Updates:"})," Your rule's current status will be reflected in your ",(0,n.jsx)(i.a,{href:"https://www.sailpoint.com/services/professional/#contact-form",children:"SailPoint Expert Services request"}),", so you can monitor its progress there."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Expedite Requests:"})," If you have a critical timing issue, you can request an expedited review. Respect your fellow implementers by seeking expedited review only when you truly need it. If you are found to be abusing this system, SailPoint may reject further requests going forward."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Rejections:"})," SailPoint's goal is to apply these guidelines fairly and consistently, but mistaken rejections can happen. If your rule has been rejected and you have questions or you would like to provide additional information, communicate directly with the rule review team. This may help get your rule into Identity Security Cloud, and it can help SailPoint improve the process or identify a need for clarity in its policies. If you still disagree with the outcome, let SailPoint know and someone can look into it."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Changes:"})," Rule changes or modifications to meet guidelines are not the reviewer's responsibility. They are the responsibility of the person(s) submitting the rule. Reviewers may give advice, examples, etc. to help, but doing so does not guarantee a solution. You should test the rules with the changes before resubmission."]}),"\n"]}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{})})]})}function p(e={}){const{wrapper:i}={...(0,s.a)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},841282:(e,i,t)=>{t.d(i,{Z:()=>S});var n=t(667294),s=t(490512),r=t(476828),l=t(370393),o=t(585597),c=t(935096),a=t(633084),u=t(555199);const d={cardContainer:"cardContainer_S8oU",cardTitle:"cardTitle_HoSo",cardDescription:"cardDescription_c27F",docCardIcon:"docCardIcon_elTJ"};var h=t(799603),p=t(921702);function m({href:e,children:i}){return n.createElement(l.Z,{href:e,className:(0,s.Z)("card padding--lg",d.cardContainer)},i)}function x({href:e,icon:i,title:t,description:r}){return n.createElement(m,{href:e},n.createElement(u.default,{as:"h2",className:(0,s.Z)("text--truncate",d.cardTitle),title:t},i," ",t),r&&n.createElement("p",{className:(0,s.Z)("text--truncate",d.cardDescription),title:r},r))}function f({item:e}){var i;const t=(0,r.LM)(e),s=function(){const{selectMessage:e}=(0,o.c)();return i=>e(i,(0,a.I)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:i}))}();return t?n.createElement(x,{href:t,icon:n.createElement(h.G,{icon:p.cC_,className:d.docCardIcon}),title:e.label,description:null!=(i=e.description)?i:s(e.items.length)}):null}function y({item:e}){var i,t;const s=(0,c.Z)(e.href)?n.createElement(h.G,{icon:p.FL8,className:d.docCardIcon}):n.createElement(h.G,{icon:p.wlW,className:d.docCardIcon}),l=(0,r.xz)(null!=(i=e.docId)?i:void 0);return n.createElement(x,{href:e.href,icon:s,title:e.label,description:(null!=(t=e.description)?t:"<Heading"!=(null==l?void 0:l.description)&&"<span"!=(null==l?void 0:l.description))?null==l?void 0:l.description:e.label})}function g({item:e}){switch(e.type){case"link":return n.createElement(y,{item:e});case"category":return n.createElement(f,{item:e});default:throw new Error(`unknown item type ${JSON.stringify(e)}`)}}var j=Object.defineProperty,v=Object.getOwnPropertySymbols,b=Object.prototype.hasOwnProperty,w=Object.prototype.propertyIsEnumerable,R=(e,i,t)=>i in e?j(e,i,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[i]=t,E=(e,i)=>{for(var t in i||(i={}))b.call(i,t)&&R(e,t,i[t]);if(v)for(var t of v(i))w.call(i,t)&&R(e,t,i[t]);return e};function C({className:e}){const i=(0,r.jA)();return n.createElement(S,{items:i.items,className:e})}function S(e){const{items:i,className:t}=e;if(!i)return n.createElement(C,E({},e));const l=(0,r.MN)(i);return n.createElement("section",{className:(0,s.Z)("row",t)},l.map(((e,i)=>n.createElement("article",{key:i,className:"col col--6 margin-bottom--lg"},n.createElement(g,{item:e})))))}}}]);