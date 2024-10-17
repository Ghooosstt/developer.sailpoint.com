"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[17776],{891861:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>d,toc:()=>l});var i=n(785893),a=n(511151);const s={id:"lifecycle-state-transform",title:"Lifecycle State Transform",pagination_label:"Lifecycle State Transform",sidebar_label:"Lifecycle State Transform",sidebar_class_name:"lifecycleStateTransform",keywords:["transforms","guides","nested","lifecycle"],description:"Learn how to build a lifecycle state transform.",sidebar_position:4,slug:"/extensibility/transforms/guides/lifecycle-state-transform",tags:["Transforms","Guides","Lifecycle"]},r=void 0,d={id:"extensibility/transforms/guides/lifecycle-state-transform",title:"Lifecycle State Transform",description:"Learn how to build a lifecycle state transform.",source:"@site/docs/extensibility/transforms/guides/lifecycle-state-transforms.md",sourceDirName:"extensibility/transforms/guides",slug:"/extensibility/transforms/guides/lifecycle-state-transform",permalink:"/docs/extensibility/transforms/guides/lifecycle-state-transform",draft:!1,unlisted:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/extensibility/transforms/guides/lifecycle-state-transforms.md",tags:[{inline:!0,label:"Transforms",permalink:"/docs/tags/transforms"},{inline:!0,label:"Guides",permalink:"/docs/tags/guides"},{inline:!0,label:"Lifecycle",permalink:"/docs/tags/lifecycle"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1729201117e3,sidebarPosition:4,frontMatter:{id:"lifecycle-state-transform",title:"Lifecycle State Transform",pagination_label:"Lifecycle State Transform",sidebar_label:"Lifecycle State Transform",sidebar_class_name:"lifecycleStateTransform",keywords:["transforms","guides","nested","lifecycle"],description:"Learn how to build a lifecycle state transform.",sidebar_position:4,slug:"/extensibility/transforms/guides/lifecycle-state-transform",tags:["Transforms","Guides","Lifecycle"]},sidebar:"openApiSidebar",previous:{title:"Transforms in Provisioning Policies",permalink:"/docs/extensibility/transforms/guides/transforms-in-provisioning-policies"},next:{title:"Identity Attribute Context",permalink:"/docs/extensibility/transforms/guides/identity-context-examples"}},o={},l=[{value:"Overview",id:"overview",level:2},{value:"Determine lifecycle state from end date attribute",id:"determine-lifecycle-state-from-end-date-attribute",level:2},{value:"Check whether the end date was in the past",id:"check-whether-the-end-date-was-in-the-past",level:3},{value:"Check whether end date is within 7 days",id:"check-whether-end-date-is-within-7-days",level:3},{value:"Check whether end date is within 25 days",id:"check-whether-end-date-is-within-25-days",level:3},{value:"Putting It All Together",id:"putting-it-all-together",level:2}];function c(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,i.jsx)(t.p,{children:"In this guide, you will walk through a lifecycle state transform that requires you to nest multiple transforms together to achieve your desired result."}),"\n",(0,i.jsxs)(t.p,{children:["A lifecycle state is a status an identity can be in, such as ",(0,i.jsx)(t.code,{children:"active"}),", ",(0,i.jsx)(t.code,{children:"inactive"})," and ",(0,i.jsx)(t.code,{children:"terminated"}),", for example. You can then use this lifecycle state in Identity Security Cloud to determine an identity's access."]}),"\n",(0,i.jsx)(t.h2,{id:"determine-lifecycle-state-from-end-date-attribute",children:"Determine lifecycle state from end date attribute"}),"\n",(0,i.jsxs)(t.p,{children:["The example scenario is as follows: If the end date is greater than 25 days from today, the transform will return ",(0,i.jsx)(t.code,{children:"active"}),". If the end date is between 7 and 25 days from today, the transform will return ",(0,i.jsx)(t.code,{children:"activePendingTermination"}),". If the end date is between 0 and 7 days from today, the transform will return ",(0,i.jsx)(t.code,{children:"inactivePendingTermination"}),". Finally, if the end date is in the past, the transform will return ",(0,i.jsx)(t.code,{children:"terminated"}),"."]}),"\n",(0,i.jsx)(t.p,{children:"The table shows conditions and expected outcomes."}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Condition"}),(0,i.jsx)(t.th,{children:"Return Value"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"end date within 0-7 Days"}),(0,i.jsx)(t.td,{children:"inactivePendingTermination"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"end date within 7-25 Days out"}),(0,i.jsx)(t.td,{children:"activePendingTermination"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"end date 25 Days or more"}),(0,i.jsx)(t.td,{children:"active"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"end date in past"}),(0,i.jsx)(t.td,{children:"terminated"})]})]})]}),"\n",(0,i.jsx)(t.p,{children:"This example will use a delimited file to show how this can be accomplished. The file contents will be in the following format:"}),"\n",(0,i.jsx)(t.admonition,{type:"caution",children:(0,i.jsxs)(t.p,{children:["This example and dates assume that the ",(0,i.jsx)(t.code,{children:"now"})," keyword in the dateMath expression returns 2023-11-07."]})}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"id"}),(0,i.jsx)(t.th,{children:"email"}),(0,i.jsx)(t.th,{children:"first_name"}),(0,i.jsx)(t.th,{children:"last_name"}),(0,i.jsx)(t.th,{children:"end_date"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"100010"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"mailto:lewis.hamilton@sailpoint.com",children:"lewis.hamilton@sailpoint.com"})}),(0,i.jsx)(t.td,{children:"Lewis"}),(0,i.jsx)(t.td,{children:"Hamilton"}),(0,i.jsx)(t.td,{children:"2023-11-01"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"100011"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"mailto:frank.williams@sailpoint.com",children:"frank.williams@sailpoint.com"})}),(0,i.jsx)(t.td,{children:"Frank"}),(0,i.jsx)(t.td,{children:"Williams"}),(0,i.jsx)(t.td,{children:"2023-11-09"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"100012"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"mailto:paddy.lowe@sailpoint.com",children:"paddy.lowe@sailpoint.com"})}),(0,i.jsx)(t.td,{children:"Paddy"}),(0,i.jsx)(t.td,{children:"Lowe"}),(0,i.jsx)(t.td,{children:"2023-11-25"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"100013"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"mailto:keifer.sutherland@sailpoint.com",children:"keifer.sutherland@sailpoint.com"})}),(0,i.jsx)(t.td,{children:"Keifer"}),(0,i.jsx)(t.td,{children:"Sutherland"}),(0,i.jsx)(t.td,{children:"2023-12-25"})]})]})]}),"\n",(0,i.jsx)(t.h3,{id:"check-whether-the-end-date-was-in-the-past",children:"Check whether the end date was in the past"}),"\n",(0,i.jsxs)(t.p,{children:["The first part of the transform will check whether the ",(0,i.jsx)(t.code,{children:"end_date"})," attribute was in the past. You will use these transforms to do so: ",(0,i.jsx)(t.code,{children:"dateCompare"}),", ",(0,i.jsx)(t.code,{children:"dateFormat"}),", and ",(0,i.jsx)(t.code,{children:"dateMath"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["First, use the ",(0,i.jsx)(t.a,{href:"/docs/extensibility/transforms/operations/date-compare",children:"dateCompare operation"})," to check that today is less than the specified ",(0,i.jsx)(t.code,{children:"end_date"}),". To use the ",(0,i.jsx)(t.code,{children:"dateCompare"})," operation, the dates must be in the ",(0,i.jsx)(t.code,{children:"ISO8601"})," format, so the transform will require the use of the ",(0,i.jsx)(t.a,{href:"/docs/extensibility/transforms/operations/date-format",children:"dateFormat operation"})," as well."]}),"\n",(0,i.jsxs)(t.p,{children:["On lines 10-17, the ",(0,i.jsx)(t.a,{href:"/docs/extensibility/transforms/operations/date-math",children:"dathMath operation"})," to pull the date ",(0,i.jsx)(t.code,{children:"now"}),", which represents the current moment in time. The ",(0,i.jsx)(t.code,{children:"dateFormat"})," operation then converts it into the ",(0,i.jsx)(t.code,{children:"ISO8601"})," format for comparison."]}),"\n",(0,i.jsxs)(t.p,{children:["On lines 21-31, the ",(0,i.jsx)(t.code,{children:"dateFormat"})," operation converts the end date provided from the source format (",(0,i.jsx)(t.code,{children:"YYYY-MM-dd"}),") into the ",(0,i.jsx)(t.code,{children:"ISO8601"})," format."]}),"\n",(0,i.jsxs)(t.p,{children:["Finally, lines 34-36 use the comparison operator greater than or equal to ",(0,i.jsx)(t.code,{children:"gte"}),". If the current date is greater than or equal to the end date, the comparison will return ",(0,i.jsx)(t.code,{children:"true"}),", meaning that the end date is in the past. This would result in identity's ",(0,i.jsx)(t.code,{children:"terminated"})," lifecycle state. If the current date is still less than the end date, the comparison will return ",(0,i.jsx)(t.code,{children:"false"}),"."]}),"\n",(0,i.jsxs)(n,{children:[(0,i.jsx)("summary",{children:"Show Transform"}),(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-json",metastring:"showLineNumbers",children:'{\n  "type": "static",\n  "attributes": {\n    "inPast": {\n      "type": "dateCompare",\n      "attributes": {\n        "firstDate": {\n          "type": "dateFormat",\n          "attributes": {\n            "input": {\n              "type": "dateMath",\n              "attributes": {\n                "expression": "now"\n              }\n            },\n            "inputFormat": "yyyy-MM-dd\'T\'HH:mm",\n            "outputFormat": "ISO8601"\n          }\n        },\n        "secondDate": {\n          "type": "dateFormat",\n          "attributes": {\n            "input": {\n              "type": "accountAttribute",\n              "attributes": {\n                "sourceName": "Example CSV",\n                "attributeName": "end_date"\n              }\n            },\n            "inputFormat": "YYYY-MM-dd",\n            "outputFormat": "ISO8601"\n          }\n        },\n        "operator": "gte",\n        "positiveCondition": "true",\n        "negativeCondition": "false"\n      }\n    },\n    "value": "$inPast"\n  }\n}\n'})})]}),"\n",(0,i.jsx)(t.h3,{id:"check-whether-end-date-is-within-7-days",children:"Check whether end date is within 7 days"}),"\n",(0,i.jsxs)(t.p,{children:["Once you have ensured that the ",(0,i.jsx)(t.code,{children:"end_date"})," is in fact in the past, the next step is to check whether the ",(0,i.jsx)(t.code,{children:"end_date"})," is fewer than 7 days away, 7-25 days days away, or more than 25 days away, to determine their exact lifecycle states. Start by checking whether the ",(0,i.jsx)(t.code,{children:"end_date"})," is fewer than 7 days away. You will again use ",(0,i.jsx)(t.code,{children:"dateCompare"}),", ",(0,i.jsx)(t.code,{children:"dateFormat"}),", and ",(0,i.jsx)(t.code,{children:"dateMath"})," for this comparison."]}),"\n",(0,i.jsxs)(t.p,{children:["On line 27, use the ",(0,i.jsx)(t.code,{children:"dateMath"})," operation to add 7 days to the current date: ",(0,i.jsx)(t.code,{children:"now+7d"}),". It pulls in the ",(0,i.jsx)(t.code,{children:"end_date"})," the same way it did before, and it converts both dates to the ",(0,i.jsx)(t.code,{children:"ISO8601"})," format for comparison."]}),"\n",(0,i.jsxs)(t.p,{children:["Lines 34-36 use the comparison operator less than or equal to: ",(0,i.jsx)(t.code,{children:"lte"}),". This uses the result from the previous check to ensure that if the ",(0,i.jsx)(t.code,{children:"end_date"})," is not in the past and that it is also fewer than 7 days away, the ",(0,i.jsx)(t.code,{children:"end_date"})," will indeed occur in the 0-7 days range. This would result in the identity's ",(0,i.jsx)(t.code,{children:"inactivePendingTermination"})," lifecycle state."]}),"\n",(0,i.jsxs)(n,{children:[(0,i.jsx)("summary",{children:"Show Transform"}),(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-json",metastring:"showLineNumbers",children:'{\n  "type": "static",\n  "attributes": {\n    "Within7Days": {\n      "type": "dateCompare",\n      "attributes": {\n        "firstDate": {\n          "type": "dateFormat",\n          "attributes": {\n            "input": {\n              "type": "accountAttribute",\n              "attributes": {\n                "sourceName": "Example CSV",\n                "attributeName": "end_date"\n              }\n            },\n            "inputFormat": "yyyy-MM-dd",\n            "outputFormat": "ISO8601"\n          }\n        },\n        "secondDate": {\n          "type": "dateFormat",\n          "attributes": {\n            "input": {\n              "type": "dateMath",\n              "attributes": {\n                "expression": "now+7d"\n              }\n            },\n            "inputFormat": "yyyy-MM-dd\'T\'HH:mm",\n            "outputFormat": "ISO8601"\n          }\n        },\n        "operator": "lte",\n        "positiveCondition": "true",\n        "negativeCondition": "false"\n      }\n    },\n    "value": "$Within7Days"\n  }\n}\n'})})]}),"\n",(0,i.jsx)(t.h3,{id:"check-whether-end-date-is-within-25-days",children:"Check whether end date is within 25 days"}),"\n",(0,i.jsxs)(t.p,{children:["Once you have ensured that the end date is in the past and that it is not fewer than 7 days away, the last required comparison checks whether the ",(0,i.jsx)(t.code,{children:"end_date"})," attribute is either between 7 and 25 days from now or more than 25 days away. You can do so by checking whether the ",(0,i.jsx)(t.code,{children:"end_date"})," is fewer than 25 days away (and more than 7 days away, using the result from the previous transform). You will again use ",(0,i.jsx)(t.code,{children:"dateCompare"}),", ",(0,i.jsx)(t.code,{children:"dateFormat"}),", and ",(0,i.jsx)(t.code,{children:"dateMath"})," for this comparison."]}),"\n",(0,i.jsxs)(t.p,{children:["On line 27, the ",(0,i.jsx)(t.code,{children:"dateMath"})," operation adds 25 days to the current date ",(0,i.jsx)(t.code,{children:"now+25d"}),". It pulls in the end date the same way it did before, and it converts both dates to the ",(0,i.jsx)(t.code,{children:"ISO8601"})," format for comparison."]}),"\n",(0,i.jsxs)(t.p,{children:["Lines 34-36 use the comparison operator less than or equal to: ",(0,i.jsx)(t.code,{children:"lte"}),". This uses the combination of the previous checks to ensure that if the ",(0,i.jsx)(t.code,{children:"end_date"})," is not in the past, it is greater than 7 days away, and it returns ",(0,i.jsx)(t.code,{children:"true"})," that it is fewer than 25 days away, then the ",(0,i.jsx)(t.code,{children:"end_date"})," must fall between 7 and 25 days away. This would result in the identity's ",(0,i.jsx)(t.code,{children:"activePendingTermination"})," lifecycle state. If it returns ",(0,i.jsx)(t.code,{children:"false"}),", then the ",(0,i.jsx)(t.code,{children:"end_date"})," must be more than 25 days away. This would result in the identity's ",(0,i.jsx)(t.code,{children:"active"})," lifecycle state."]}),"\n",(0,i.jsxs)(n,{children:[(0,i.jsx)("summary",{children:"Show Transform"}),(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-json",metastring:"showLineNumbers",children:'{\n  "type": "static",\n  "attributes": {\n    "Within25Days": {\n      "type": "dateCompare",\n      "attributes": {\n        "firstDate": {\n          "type": "dateFormat",\n          "attributes": {\n            "input": {\n              "type": "accountAttribute",\n              "attributes": {\n                "sourceName": "Example CSV",\n                "attributeName": "end_date"\n              }\n            },\n            "inputFormat": "yyyy-MM-dd",\n            "outputFormat": "ISO8601"\n          }\n        },\n        "secondDate": {\n          "type": "dateFormat",\n          "attributes": {\n            "input": {\n              "type": "dateMath",\n              "attributes": {\n                "expression": "now+25d"\n              }\n            },\n            "inputFormat": "yyyy-MM-dd\'T\'HH:mm",\n            "outputFormat": "ISO8601"\n          }\n        },\n        "operator": "lte",\n        "positiveCondition": "true",\n        "negativeCondition": "false"\n      }\n    },\n    "value": "$Within25Days"\n  }\n}\n'})})]}),"\n",(0,i.jsx)(t.h2,{id:"putting-it-all-together",children:"Putting It All Together"}),"\n",(0,i.jsxs)(t.p,{children:["Now that you have taken the time to understand each of the nested transforms, you can put it all together! You can now calculate lifecycle states for the identities with the ",(0,i.jsx)(t.a,{href:"https://people.apache.org/~henning/velocity/html/ch05s03.html",children:"velocity if/else logic"})," within the static transform."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-javascript",children:"#if($inPast=='false' && $Within7Days == 'true')\n    inactivePendingTermination\n#elseif($inPast == 'false' && $Within25Days == 'true')\n    activePendingTermination\n#elseif($inPast == 'false')\n    active\n#{else}\n    terminated\n#end\n"})}),"\n",(0,i.jsx)(t.p,{children:"This is the logic within the static transform:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-json",children:'{\n    "name": "Lifecycle State Transfrom",\n    "type": "static",\n    "attributes": {\n        ...\n        "value": "#if($inPast==\'false\' && $Within7Days == \'true\')inactivePendingTermination#elseif($inPast == \'false\' && $Within25Days == \'true\')activePendingTermination#elseif($inPast == \'false\')active#{else}terminated#end"\n    }\n}\n'})}),"\n",(0,i.jsxs)(n,{children:[(0,i.jsx)("summary",{children:"Show Complete Transform"}),(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-json",children:'{\n  "name": "Lifecycle State Transfrom",\n  "type": "static",\n  "attributes": {\n    "inPast": {\n      "type": "dateCompare",\n      "attributes": {\n        "firstDate": {\n          "type": "dateFormat",\n          "attributes": {\n            "input": {\n              "type": "dateMath",\n              "attributes": {\n                "expression": "now"\n              }\n            },\n            "inputFormat": "yyyy-MM-dd\'T\'HH:mm",\n            "outputFormat": "ISO8601"\n          }\n        },\n        "secondDate": {\n          "type": "dateFormat",\n          "attributes": {\n            "input": {\n              "type": "accountAttribute",\n              "attributes": {\n                "sourceName": "Example CSV",\n                "attributeName": "end_date"\n              }\n            },\n            "inputFormat": "YYYY-MM-dd",\n            "outputFormat": "ISO8601"\n          }\n        },\n        "operator": "gte",\n        "positiveCondition": "true",\n        "negativeCondition": "false"\n      }\n    },\n    "Within7Days": {\n      "type": "dateCompare",\n      "attributes": {\n        "firstDate": {\n          "type": "dateFormat",\n          "attributes": {\n            "input": {\n              "type": "accountAttribute",\n              "attributes": {\n                "sourceName": "Example CSV",\n                "attributeName": "end_date"\n              }\n            },\n            "inputFormat": "yyyy-MM-dd",\n            "outputFormat": "ISO8601"\n          }\n        },\n        "secondDate": {\n          "type": "dateFormat",\n          "attributes": {\n            "input": {\n              "type": "dateMath",\n              "attributes": {\n                "expression": "now+7d"\n              }\n            },\n            "inputFormat": "yyyy-MM-dd\'T\'HH:mm",\n            "outputFormat": "ISO8601"\n          }\n        },\n        "operator": "lte",\n        "positiveCondition": "true",\n        "negativeCondition": "false"\n      }\n    },\n    "Within25Days": {\n      "type": "dateCompare",\n      "attributes": {\n        "firstDate": {\n          "type": "dateFormat",\n          "attributes": {\n            "input": {\n              "type": "accountAttribute",\n              "attributes": {\n                "sourceName": "Example CSV",\n                "attributeName": "end_date"\n              }\n            },\n            "inputFormat": "yyyy-MM-dd",\n            "outputFormat": "ISO8601"\n          }\n        },\n        "secondDate": {\n          "type": "dateFormat",\n          "attributes": {\n            "input": {\n              "type": "dateMath",\n              "attributes": {\n                "expression": "now+25d"\n              }\n            },\n            "inputFormat": "yyyy-MM-dd\'T\'HH:mm",\n            "outputFormat": "ISO8601"\n          }\n        },\n        "operator": "lte",\n        "positiveCondition": "true",\n        "negativeCondition": "false"\n      }\n    },\n    "value": "#if($inPast==\'false\' && $Within7Days == \'true\')inactivePendingTermination#elseif($inPast == \'false\' && $Within25Days == \'true\')activePendingTermination#elseif($inPast == \'false\')active#{else}terminated#end"\n  }\n}\n'})})]}),"\n",(0,i.jsxs)(t.p,{children:["These are the results of the transform on each identity, given that ",(0,i.jsx)(t.code,{children:"now"})," returns 2023-11-07:"]}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"id"}),(0,i.jsx)(t.th,{children:"email"}),(0,i.jsx)(t.th,{children:"first_name"}),(0,i.jsx)(t.th,{children:"last_name"}),(0,i.jsx)(t.th,{children:"end_date"}),(0,i.jsx)(t.th,{children:"result"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"100010"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"mailto:lewis.hamilton@sailpoint.com",children:"lewis.hamilton@sailpoint.com"})}),(0,i.jsx)(t.td,{children:"Lewis"}),(0,i.jsx)(t.td,{children:"Hamilton"}),(0,i.jsx)(t.td,{children:"2023-11-01"}),(0,i.jsx)(t.td,{children:"terminated"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"100011"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"mailto:frank.williams@sailpoint.com",children:"frank.williams@sailpoint.com"})}),(0,i.jsx)(t.td,{children:"Frank"}),(0,i.jsx)(t.td,{children:"Williams"}),(0,i.jsx)(t.td,{children:"2023-11-09"}),(0,i.jsx)(t.td,{children:"inactivePendingTermination"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"100012"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"mailto:paddy.lowe@sailpoint.com",children:"paddy.lowe@sailpoint.com"})}),(0,i.jsx)(t.td,{children:"Paddy"}),(0,i.jsx)(t.td,{children:"Lowe"}),(0,i.jsx)(t.td,{children:"2023-11-25"}),(0,i.jsx)(t.td,{children:"activePendingTermination"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"100013"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"mailto:keifer.sutherland@sailpoint.com",children:"keifer.sutherland@sailpoint.com"})}),(0,i.jsx)(t.td,{children:"Keifer"}),(0,i.jsx)(t.td,{children:"Sutherland"}),(0,i.jsx)(t.td,{children:"2023-12-25"}),(0,i.jsx)(t.td,{children:"active"})]})]})]})]})}function h(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}}}]);