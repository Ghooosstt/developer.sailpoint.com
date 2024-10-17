"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[3474],{524697:(i,e,n)=>{n.r(e),n.d(e,{assets:()=>r,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>d,toc:()=>o});var t=n(785893),l=n(511151);const s={id:"plugin-installation",title:"Installation",pagination_label:"Installation",sidebar_label:"Installation",sidebar_position:9,sidebar_class_name:"plugin_developer_guide_installation",keywords:["plugin"],description:"IdentityIQ Plugin Installation",slug:"/iiq/plugin-developer-guide/installation",tags:["plugin","guide","identityiq"]},a="Plugin Installation",d={id:"iiq/plugin-developer-guide/chapter-9/plugin-installation",title:"Installation",description:"IdentityIQ Plugin Installation",source:"@site/docs/iiq/plugin-developer-guide/chapter-9/index.md",sourceDirName:"iiq/plugin-developer-guide/chapter-9",slug:"/iiq/plugin-developer-guide/installation",permalink:"/docs/iiq/plugin-developer-guide/installation",draft:!1,unlisted:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/iiq/plugin-developer-guide/chapter-9/index.md",tags:[{inline:!0,label:"plugin",permalink:"/docs/tags/plugin"},{inline:!0,label:"guide",permalink:"/docs/tags/guide"},{inline:!0,label:"identityiq",permalink:"/docs/tags/identityiq"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1729201117e3,sidebarPosition:9,frontMatter:{id:"plugin-installation",title:"Installation",pagination_label:"Installation",sidebar_label:"Installation",sidebar_position:9,sidebar_class_name:"plugin_developer_guide_installation",keywords:["plugin"],description:"IdentityIQ Plugin Installation",slug:"/iiq/plugin-developer-guide/installation",tags:["plugin","guide","identityiq"]},sidebar:"iiqSideBar",previous:{title:"Java Classes - Executors",permalink:"/docs/iiq/plugin-developer-guide/java-classes-executors"},next:{title:"Appendix A 7.0 to 7.1 Migration",permalink:"/docs/iiq/plugin-developer-guide/appendix-migration"}},r={},o=[];function p(i){const e={em:"em",h1:"h1",img:"img",p:"p",...(0,l.a)(),...i.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h1,{id:"plugin-installation",children:"Plugin Installation"}),"\n",(0,t.jsx)(e.p,{children:"Plugin installation is simple in IdentityIQ 7.1. Navigate to Settings -> Plugins, and then click the 'New' button."}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.img,{alt:"New Plugin Button",src:n(801356).Z+"",width:"420",height:"107"})}),"\n",(0,t.jsx)(e.p,{children:"Doing so will create a view with a large element that allows for drag and drop installation. Drag your plugin's .zip archive to this element, and the plugin will install. If any errors occur during this process, check the 'SyslogEvent' table for more information."}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.img,{alt:"Drag and Drop",src:n(674095).Z+"",width:"1920",height:"549"})}),"\n",(0,t.jsxs)(e.p,{children:["But wait, where do I get the .zip archive? If you have downloaded a published plugin from SailPoint, the .zip file should be included with the download. If you have developed the plugin yourself, the .zip file will be the result of executing the build process against your project. Using the build file outlined in this guide as an example, the .zip archive will be created in your project directory under 'build/",(0,t.jsx)("your",{plugin:!0,name:!0}),"/dist' after executing the 'ant build' command."]}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.img,{alt:"Plugin Dist File",src:n(630421).Z+"",width:"341",height:"244"})}),"\n",(0,t.jsx)(e.p,{children:"When a plugin is installed, the database scripts from the 'db/install' folder run, creating any necessary tables for the plugin, importing the XML configuration files into the IdentityIQ database from the 'import/install' folder, loading any compiled classes into the unique plugin classloader, and importing the manifest file - this process creates the plugin object."}),"\n",(0,t.jsxs)(e.p,{children:["Uninstallation follows a similar path. You can launch uninstallation by clicking the small 'X' icon on the appropriate plugin card in the 'Settings->Plugin' interface. Database scripts responsible for cleaning up data run from the 'db/uninstall' folder, and the manifest file (the plugin object) is removed. Remember that the other XML objects created during installation are currently ",(0,t.jsx)(e.em,{children:"not"})," uninstalled when a plugin is removed."]}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.img,{alt:"Uninstall a Plugin",src:n(235052).Z+"",width:"467",height:"260"})})]})}function u(i={}){const{wrapper:e}={...(0,l.a)(),...i.components};return e?(0,t.jsx)(e,{...i,children:(0,t.jsx)(p,{...i})}):p(i)}},235052:(i,e,n)=>{n.d(e,{Z:()=>t});const t=n.p+"assets/images/delete_plugin-d510002f170d06ea69862844123e3f8e.png"},674095:(i,e,n)=>{n.d(e,{Z:()=>t});const t=n.p+"assets/images/drag_and_drop-73d2c0384950a624956457c52c5e1354.png"},801356:(i,e,n)=>{n.d(e,{Z:()=>t});const t="data:image/png;base64,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"},630421:(i,e,n)=>{n.d(e,{Z:()=>t});const t=n.p+"assets/images/plugin_dist-c68ad1940139c6aa708fcc3b46c8ca9b.png"}}]);