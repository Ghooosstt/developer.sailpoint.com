"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[96385],{198368:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var n=i(785893),s=i(511151);const o={id:"prerequisites",title:"Prerequisites",pagination_label:"Prerequisites",sidebar_label:"Prerequisites",sidebar_position:1,sidebar_class_name:"prerequisites",keywords:["connectivity","connectors","prerequisites"],description:"These are some prerequisites you must have before you start building SaaS Connectors.",slug:"/connectivity/saas-connectivity/prerequisites",tags:["Connectivity"]},r=void 0,c={id:"connectivity/saas-connectivity/prerequisites",title:"Prerequisites",description:"These are some prerequisites you must have before you start building SaaS Connectors.",source:"@site/docs/connectivity/saas-connectivity/prerequisites.md",sourceDirName:"connectivity/saas-connectivity",slug:"/connectivity/saas-connectivity/prerequisites",permalink:"/docs/connectivity/saas-connectivity/prerequisites",draft:!1,unlisted:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/connectivity/saas-connectivity/prerequisites.md",tags:[{inline:!0,label:"Connectivity",permalink:"/docs/tags/connectivity"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1729201117e3,sidebarPosition:1,frontMatter:{id:"prerequisites",title:"Prerequisites",pagination_label:"Prerequisites",sidebar_label:"Prerequisites",sidebar_position:1,sidebar_class_name:"prerequisites",keywords:["connectivity","connectors","prerequisites"],description:"These are some prerequisites you must have before you start building SaaS Connectors.",slug:"/connectivity/saas-connectivity/prerequisites",tags:["Connectivity"]},sidebar:"openApiSidebar",previous:{title:"SaaS Connectivity",permalink:"/docs/connectivity/saas-connectivity"},next:{title:"Videos",permalink:"/docs/connectivity/saas-connectivity/videos"}},a={},l=[{value:"Required Software",id:"required-software",level:2},{value:"Node",id:"node",level:3},{value:"SailPoint CLI",id:"sailpoint-cli",level:3},{value:"Recommended Software",id:"recommended-software",level:2},{value:"IDE",id:"ide",level:3},{value:"Postman",id:"postman",level:3},{value:"Creating your first project",id:"creating-your-first-project",level:2},{value:"Source Files",id:"source-files",level:3}];function d(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"required-software",children:"Required Software"}),"\n",(0,n.jsx)(t.h3,{id:"node",children:"Node"}),"\n",(0,n.jsxs)(t.p,{children:["To develop a connector, Node >= 18.0.0 is required. Download node from the ",(0,n.jsx)(t.a,{href:"https://nodejs.org/en/download",children:"nodejs.org downloads page"}),"."]}),"\n",(0,n.jsx)(t.h3,{id:"sailpoint-cli",children:"SailPoint CLI"}),"\n",(0,n.jsxs)(t.p,{children:["SailPoint provides a CLI tool to manage the connectors' lifecycles. To install and set up the CLI, ",(0,n.jsx)(t.a,{href:"../../tools/cli",children:"follow the instructions here"})," or you can directly download and install from the ",(0,n.jsx)(t.a,{href:"https://github.com/sailpoint-oss/sailpoint-cli/releases",children:"GitHub releases page"})]}),"\n",(0,n.jsx)(t.h2,{id:"recommended-software",children:"Recommended Software"}),"\n",(0,n.jsx)(t.h3,{id:"ide",children:"IDE"}),"\n",(0,n.jsxs)(t.p,{children:["Although you can develop connectors in a text editor, use an Integrated Development Environment (IDE) for a better experience. There are many IDEs that support Javascript/Typescript, including ",(0,n.jsx)(t.a,{href:"https://code.visualstudio.com/Download",children:"Visual Sudio Code"}),", a free IDE with native support for Javascript/Typescript. VS Code provides syntax highlight, debugging, hints, code completion, and other helpful options."]}),"\n",(0,n.jsx)(t.h3,{id:"postman",children:"Postman"}),"\n",(0,n.jsxs)(t.p,{children:["A convenient way to test your connector before deploying to ISC is to use Postman. You can get it from the ",(0,n.jsx)(t.a,{href:"https://www.postman.com/downloads/",children:"postman.com downloads page"})]}),"\n",(0,n.jsx)(t.h2,{id:"creating-your-first-project",children:"Creating your first project"}),"\n",(0,n.jsx)(t.p,{children:"To create an empty connector project, run the following command:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"sail conn init my-first-project\n"})}),"\n",(0,n.jsx)(t.p,{children:"The CLI init command creates a new folder with your project name in the location where you run the command."}),"\n",(0,n.jsx)(t.p,{children:"Change the directory to the project folder and run ``npm install to install` the dependencies."}),"\n",(0,n.jsx)(t.h3,{id:"source-files",children:"Source Files"}),"\n",(0,n.jsx)(t.p,{children:"The earlier command creates the initial project source directory below:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"my-first-project\n\u251c\u2500\u2500 .gitignore\n\u251c\u2500\u2500 connector-spec.json\n\u251c\u2500\u2500 package.json\n\u251c\u2500\u2500 src/\n|   \u251c\u2500\u2500 index.ts\n|   \u251c\u2500\u2500 my-client.txt\n|   \u2514\u2500\u2500 connector-spec.ts\n\u251c\u2500\u2500 tsconfig.json\n"})}),"\n",(0,n.jsx)(t.p,{children:"This directory contains three main files:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"index.ts:"})," Use this file to register all the available commands the connector supports, provide the necessary configuration options to the client code implementing the API for the source, and pass data the client code obtains to Identity Security Cloud. This file can either use a vendor supplied client Software Development Kit (SDK) to interact with the web service or reference custom client code within the project."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"my-client.ts:"})," Use this template to create custom client code to interact with a web service\u2019s APIs. If the web service does not provide an SDK, you can modify this file to implement the necessary API calls to interact with the source web service."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"connector-spec.ts"})," This file describes how the connector works to ISC. More information about the connector spec is available in the next section. At a high level, it has the information for the following:"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"What commands the connector supports"}),"\n",(0,n.jsx)(t.li,{children:"What config values the user must provide when creating the connector"}),"\n",(0,n.jsx)(t.li,{children:"Defining the account schema"}),"\n",(0,n.jsx)(t.li,{children:"Defining the entitlment schema"}),"\n",(0,n.jsx)(t.li,{children:"Defining the account create template that maps fields from ISC to the connector"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"These files are templates that provide guidance to begin implementing the connector on the target web service. Although you can implement a connector's entire functionality within these three files (or even just one if the web service provides an SDK), you can implement your own code architecture, like breaking out common utility functions into a separate file or creating separate files for each operation."})]})}function h(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}}}]);