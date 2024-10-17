"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[77665],{890327:(t,e,i)=>{i.r(e),i.d(e,{assets:()=>r,contentTitle:()=>s,default:()=>l,frontMatter:()=>c,metadata:()=>a,toc:()=>u});var n=i(785893),o=i(511151);const c={id:"connectivity-customizers",title:"Connectivity Customizers",pagination_label:"Connectivity Customizers",sidebar_label:"Customizers",sidebar_position:7.1,sidebar_class_name:"saasConnectivity",keywords:["connectivity","connectors","customizers"],description:"Connectivity customizers can customize out of the box SaaS connectors.",slug:"/connectivity/saas-connectivity/customizers",tags:["Connectivity"]},s="Overview",a={id:"connectivity/saas-connectivity/connector-customizers/connectivity-customizers",title:"Connectivity Customizers",description:"Connectivity customizers can customize out of the box SaaS connectors.",source:"@site/docs/connectivity/saas-connectivity/connector-customizers/index.md",sourceDirName:"connectivity/saas-connectivity/connector-customizers",slug:"/connectivity/saas-connectivity/customizers",permalink:"/docs/connectivity/saas-connectivity/customizers",draft:!1,unlisted:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/connectivity/saas-connectivity/connector-customizers/index.md",tags:[{inline:!0,label:"Connectivity",permalink:"/docs/tags/connectivity"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1729201117e3,sidebarPosition:7.1,frontMatter:{id:"connectivity-customizers",title:"Connectivity Customizers",pagination_label:"Connectivity Customizers",sidebar_label:"Customizers",sidebar_position:7.1,sidebar_class_name:"saasConnectivity",keywords:["connectivity","connectors","customizers"],description:"Connectivity customizers can customize out of the box SaaS connectors.",slug:"/connectivity/saas-connectivity/customizers",tags:["Connectivity"]},sidebar:"openApiSidebar",previous:{title:"Test Connection",permalink:"/docs/connectivity/saas-connectivity/commands/test-connection"},next:{title:"Getting Started",permalink:"/docs/connectivity/saas-connectivity/customizers/getting-started"}},r={},u=[{value:"How do they work?",id:"how-do-they-work",level:2}];function d(t){const e={code:"code",h1:"h1",h2:"h2",mermaid:"mermaid",p:"p",...(0,o.a)(),...t.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(e.h1,{id:"overview",children:"Overview"}),"\n",(0,n.jsx)(e.p,{children:"SaaS Connectivity Customizers are cloud-based connector customizers that make customizing out of the box SaaS connectors possible. The customizers allow you to customize the out of the box connectors in a similar way to how you can use rules to customize VA (virtual appliance) based connectors. By using a customizer, you can change a connector's input before the connector ingests the data, or you can change the connector's output before to the output is sent to Identity Security Cloud."}),"\n",(0,n.jsx)("div",{class:"text--center",children:(0,n.jsx)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/bYQakKlKilY?si=o9vtqKLvcyGkHVjS",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0})}),"\n",(0,n.jsx)(e.h2,{id:"how-do-they-work",children:"How do they work?"}),"\n",(0,n.jsx)(e.p,{children:"SaaS Connectivity Customizers work by sitting in between Identity Security Cloud and the connector. They intercept calls from Identity Security Cloud to the connector and calls from the connector to Identity Security Cloud. When the customizer intercepts a call, it can call custom code to mutate the data in any way necessary to change the connector behavior."}),"\n",(0,n.jsxs)(e.p,{children:["This chart shows an example of this interception process - the ",(0,n.jsx)(e.code,{children:"stdAccountRead"})," command is implemented with the customizer in place:"]}),"\n",(0,n.jsx)("div",{align:"center",children:(0,n.jsx)(e.mermaid,{value:"sequenceDiagram\n    autonumber\n    participant ISC as Identity Security Cloud\n    participant CUS as Customizer\n    participant CON as SaaS Connector\n\n    ISC->>CUS: StdAccountRead Request\n    CUS->>CON: Mutated StdAccountRead Request\n    CON->>CUS: StdAccountRead Response\n    CUS->>ISC: Mutated StdAccountRead Response\n"})})]})}function l(t={}){const{wrapper:e}={...(0,o.a)(),...t.components};return e?(0,n.jsx)(e,{...t,children:(0,n.jsx)(d,{...t})}):d(t)}}}]);