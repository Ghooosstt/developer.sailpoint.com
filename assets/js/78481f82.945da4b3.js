"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[38172],{758594:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var n=i(785893),r=i(511151),s=i(268719);const o={id:"connectivity-customizers-getting-started",title:"Getting Started",pagination_label:"Getting Started",sidebar_label:"Getting Started",sidebar_position:4,sidebar_class_name:"saasConnectivity",keywords:["connectivity","connectors","customizers"],description:"Get started with connectivity customizers.",slug:"/connectivity/saas-connectivity/customizers/getting-started",tags:["Connectivity"]},c="Get Started",a={id:"connectivity/saas-connectivity/connector-customizers/connectivity-customizers-getting-started",title:"Getting Started",description:"Get started with connectivity customizers.",source:"@site/docs/connectivity/saas-connectivity/connector-customizers/getting-started.md",sourceDirName:"connectivity/saas-connectivity/connector-customizers",slug:"/connectivity/saas-connectivity/customizers/getting-started",permalink:"/docs/connectivity/saas-connectivity/customizers/getting-started",draft:!1,unlisted:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/connectivity/saas-connectivity/connector-customizers/getting-started.md",tags:[{inline:!0,label:"Connectivity",permalink:"/docs/tags/connectivity"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1729201117e3,sidebarPosition:4,frontMatter:{id:"connectivity-customizers-getting-started",title:"Getting Started",pagination_label:"Getting Started",sidebar_label:"Getting Started",sidebar_position:4,sidebar_class_name:"saasConnectivity",keywords:["connectivity","connectors","customizers"],description:"Get started with connectivity customizers.",slug:"/connectivity/saas-connectivity/customizers/getting-started",tags:["Connectivity"]},sidebar:"openApiSidebar",previous:{title:"Connectivity Customizers",permalink:"/docs/connectivity/saas-connectivity/customizers"},next:{title:"Build and Upload",permalink:"/docs/connectivity/saas-connectivity/customizers/upload"}},d={},l=[{value:"Video Tutorial",id:"video-tutorial",level:2},{value:"Required software",id:"required-software",level:2},{value:"Create your first project",id:"create-your-first-project",level:2},{value:"Source files",id:"source-files",level:3}];function u(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"get-started",children:"Get Started"}),"\n","\n",(0,n.jsx)(t.h2,{id:"video-tutorial",children:"Video Tutorial"}),"\n",(0,n.jsx)(s.Z,{source:"//play.vidyard.com/YtrUm1a5B29VbADR2ryhWa.html?",container:"vidyard"}),"\n",(0,n.jsx)(t.h2,{id:"required-software",children:"Required software"}),"\n",(0,n.jsxs)(t.p,{children:["You need to have the same software installed to create a customizer that you need to create a SaaS Connector. You can find the lists of Prerequisites ",(0,n.jsx)(t.a,{href:"../prerequisites",children:"here"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"create-your-first-project",children:"Create your first project"}),"\n",(0,n.jsx)(t.p,{children:"To create an empty connector customizer project, run this command:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"sail conn customizers init my-customizer-project\n"})}),"\n",(0,n.jsx)(t.p,{children:"The CLI init command creates a new folder with your project name in the location where you run the command."}),"\n",(0,n.jsx)(t.p,{children:"Change the directory to the project folder and run ``npm install` to install the dependencies."}),"\n",(0,n.jsx)(t.h3,{id:"source-files",children:"Source files"}),"\n",(0,n.jsx)(t.p,{children:"The earlier command creates this initial project source directory:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"my-customizer-project\n\u251c\u2500\u2500 .gitignore\n\u251c\u2500\u2500 package.json\n\u251c\u2500\u2500 src/\n|   \u251c\u2500\u2500 index.ts\n|   \u2514\u2500\u2500 index-spec.ts\n\u251c\u2500\u2500 tsconfig.json\n"})}),"\n",(0,n.jsx)(t.p,{children:'This directory contains one source code file. Though you can expand the customizer to include more than one file, the "index.ts" file contains all the logic for the customizer.'}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"index.ts:"})," Use this file to register all the available customizer commands the connector supports."]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},268719:(e,t,i)=>{i.d(t,{Z:()=>r});var n=i(667294);function r({children:e,source:t,container:i="youtube"}){let r=n.createElement("iframe",{style:{width:"100%",aspectRatio:"16/9"},src:t,title:"YouTube video player",frameborder:"0",allow:"accelerometer; \n  autoplay; \n  clipboard-write; \n  encrypted-media; \n  gyroscope; \n  picture-in-picture; \n  web-share",allowfullscreen:!0});return"vidyard"===i&&(r=n.createElement("iframe",{class:"vidyard_iframe",style:{width:"100%",aspectRatio:"16/9"},title:"Authoring - Create New Sheets",src:t,scrolling:"no",frameborder:"0",allowtransparency:"true",allowfullscreen:!0})),r}}}]);