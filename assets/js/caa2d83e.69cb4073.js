"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[69668],{94345:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>u});var s=n(785893),a=n(511151),i=n(365332),o=n(424455);const r={id:"udk-explore",title:"Getting Started",pagination_label:"UDK",sidebar_label:"Getting Started",sidebar_position:1,sidebar_class_name:"rudk",keywords:["UI","development","kit"],description:"Develop custom user interfaces.",slug:"/tools/ui-development-kit/getting-started",tags:["UI"]},l=void 0,c={id:"tools/ui-development-kit/udk-explore",title:"Getting Started",description:"Develop custom user interfaces.",source:"@site/docs/tools/ui-development-kit/getting-started.mdx",sourceDirName:"tools/ui-development-kit",slug:"/tools/ui-development-kit/getting-started",permalink:"/docs/tools/ui-development-kit/getting-started",draft:!1,unlisted:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/tools/ui-development-kit/getting-started.mdx",tags:[{inline:!0,label:"UI",permalink:"/docs/tags/ui"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1729201117e3,sidebarPosition:1,frontMatter:{id:"udk-explore",title:"Getting Started",pagination_label:"UDK",sidebar_label:"Getting Started",sidebar_position:1,sidebar_class_name:"rudk",keywords:["UI","development","kit"],description:"Develop custom user interfaces.",slug:"/tools/ui-development-kit/getting-started",tags:["UI"]},sidebar:"openApiSidebar",previous:{title:"UDK",permalink:"/docs/tools/ui-development-kit"},next:{title:"UDK",permalink:"/docs/tools/ui-development-kit/accounts-list"}},d={},u=[{value:"Change your custom UI name",id:"change-your-custom-ui-name",level:2},{value:"Update the sidebar",id:"update-the-sidebar",level:2},{value:"Add route and new page",id:"add-route-and-new-page",level:2},{value:"Discuss",id:"discuss",level:2}];function p(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"Read this guide to learn about the UI Development Kit and how to use it. Once you have read this guide, you will be able to do the following:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"#change-your-custom-ui-name",children:"Change your custom user interface (UI) name"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"#update-the-sidebar",children:"Update your sidebar to include new items"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"#add-route-and-new-page",children:"Add route and new page"})}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"change-your-custom-ui-name",children:"Change your custom UI name"}),"\n",(0,s.jsx)(t.p,{children:"By default, the name of this project is 'UI Development Kit'. To update the name of your custom UI, you must update the code in two different places."}),"\n",(0,s.jsxs)(t.p,{children:["Update the Electron application window name. To do so, update the text in ",(0,s.jsx)(t.code,{children:"src/app.html"})," on line 7:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-html",children:"<title>UI Development Kit</title>\n"})}),"\n",(0,s.jsxs)(t.p,{children:["Update the home page. To do so, change the text in ",(0,s.jsx)(t.code,{children:"src/routes/+layout.svelte"})," on line 124:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-html",children:'<p class="text-xl lg:!block hidden">UI Development Kit</p>\n'})}),"\n",(0,s.jsx)(t.h2,{id:"update-the-sidebar",children:"Update the sidebar"}),"\n",(0,s.jsxs)(t.p,{children:["The sidebar is located at ",(0,s.jsx)(t.code,{children:"src/lib/sidebar/navigation.ts"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["To add a new sidebar item, add this code snippet to the file under the ",(0,s.jsx)(t.code,{children:"content"})," array:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-typescript",children:"import HomeSvg from '$lib/Components/SVGs/HomeSVG.svelte';\nimport ReportsSvg from '$lib/Components/SVGs/ReportsSVG.svelte';\n\nexport const navigation = [\n  {\n    name: 'Main',\n    content: [\n      ...\n      {\n        url: '/home/account-list',\n        name: 'Account List',\n        description:\n          'an example showcasing how to list accounts',\n        icon: ReportsSvg,\n      },\n    ],\n  },\n];\n"})}),"\n",(0,s.jsx)(t.admonition,{type:"info",children:(0,s.jsxs)(t.p,{children:["You can add a custom SVG icon for each sidebar item. Save and import your icon svg under ",(0,s.jsx)(t.code,{children:"lib/Components/SVGs/*"}),"."]})}),"\n",(0,s.jsx)(t.p,{children:"You now have a new sidebar link, but it points to a route that doesn't exist yet. If you click the link, you will encounter a 404 error."}),"\n",(0,s.jsxs)(t.p,{children:["To learn how to add a route and page for the new sidebar item, refer to ",(0,s.jsx)(t.a,{href:"#add-route-and-new-page",children:"Add route and new page"}),"."]}),"\n",(0,s.jsx)(t.h2,{id:"add-route-and-new-page",children:"Add route and new page"}),"\n",(0,s.jsxs)(t.p,{children:["To create new routes, you can create new folders and pages for those routes under ",(0,s.jsx)(t.code,{children:"src/routes"}),"."]}),"\n",(0,s.jsx)(t.p,{children:"Here is an example of how to create a new route:"}),"\n",(0,s.jsxs)(t.p,{children:["The route ",(0,s.jsx)(t.code,{children:"/home/example-pages"})," takes you to ",(0,s.jsx)(t.code,{children:"src/routes/home/example-pages/+page.svelte"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["The route ",(0,s.jsx)(t.code,{children:"/home/example-pages/list-of-identities"})," takes you to ",(0,s.jsx)(t.code,{children:"src/routes/home/example-pages/list-of-identities/+page.svelte"}),"."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:".\n\u251c\u2500\u2500 src\n\u2502   \u2514\u2500\u2500 routes\n\u2502\xa0\xa0     \u251c\u2500\u2500 home\n\u2502\xa0\xa0     \u2502\xa0\xa0 \u251c\u2500\u2500 example-pages\n\u2502\xa0\xa0     \u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 +page.svelte\n\u2502\xa0\xa0     \u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 inactive-identities-with-access\n\u2502\xa0\xa0     \u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 list-of-identities\n\u2502\xa0\xa0     \u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 missing-cloud-life-cycle-state\n\u2502\xa0\xa0     \u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 reports.ts\n\u2502\xa0\xa0     \u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 source-aggregations\n\u2502\xa0\xa0     \u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 source-owner-configured\n"})}),"\n",(0,s.jsx)(t.p,{children:"With this information, you can create a new route for an accounts landing page and a page that lists accounts."}),"\n",(0,s.jsx)(t.p,{children:"The new project structure would look like this:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"\u251c\u2500\u2500 src\n\u2502   \u2514\u2500\u2500 routes\n\u2502\xa0\xa0     \u251c\u2500\u2500 home\n\u2502\xa0\xa0     \u2502\xa0\xa0 \u251c\u2500\u2500 example-pages\n\u2502\xa0\xa0     \u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 +page.svelte\n\u2502\xa0\xa0     \u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 inactive-identities-with-access\n\u2502\xa0\xa0     \u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 list-of-identities\n\u2502\xa0\xa0     \u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 missing-cloud-life-cycle-state\n\u2502\xa0\xa0     \u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 reports.ts\n\u2502\xa0\xa0     \u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 source-aggregations\n\u2502\xa0\xa0     \u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 source-owner-configured\n\u2502\xa0\xa0     \u251c\u2500\u2500 accounts\n\u2502\xa0\xa0     \u2502\xa0\xa0 \u251c\u2500\u2500 +page.svelte # Root accounts page at route `accounts`\n\u2502\xa0\xa0     \u2502\xa0\xa0 \u2514\u2500\u2500 account-list\n\u2502\xa0\xa0     \u2502\xa0\xa0     \u251c\u2500\u2500 +page.server.ts # Server side code for the account list page\n\u2502\xa0\xa0     \u2502\xa0\xa0     \u2514\u2500\u2500 +page.svelte # Account list page at route `accounts/account-list`\n"})}),"\n",(0,s.jsx)(t.p,{children:"You can now update those files with this content so that they display correctly:"}),"\n","\n",(0,s.jsxs)(i.Z,{children:[(0,s.jsx)(o.default,{value:"accounts_page",label:"+page.svelte",default:!0,children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-html",children:'<div class="flex justify-center flex-col align-middle gap-2">\n\t<div class="card p-4">\n\t\t<p class="text-2xl text-center">Accounts Homepage</p>\n\t</div>\n</div>\n\n'})})}),(0,s.jsx)(o.default,{value:"accounts_list_server",label:"accounts-list/+page.server.ts",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-html",children:'<div class="flex justify-center flex-col align-middle gap-2">\n\t<div class="card p-4">\n\t\t<p class="text-2xl text-center">List of all Accounts</p>\n\t</div>\n</div>\n'})})})]}),"\n",(0,s.jsx)(t.p,{children:"To see the new sidebar item, as well as its new route and page, restart the project."}),"\n",(0,s.jsx)(t.p,{children:"To restart the project, run this command:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"npm run dev\n"})}),"\n",(0,s.jsx)(t.p,{children:"Once you have run the command, the new sidebar item, as well as its new route and page, will display."}),"\n",(0,s.jsxs)(t.p,{children:["Now that you have the new sidebar item, its new route, and its new page, you can implement the page. To continue following this example and learn how to implement an accounts list page, refer to ",(0,s.jsx)(t.a,{href:"/docs/tools/ui-development-kit/accounts-list",children:"Accounts List"}),"."]}),"\n",(0,s.jsx)(t.h2,{id:"discuss",children:"Discuss"}),"\n",(0,s.jsx)(t.p,{children:"The most valuable resource for ISC developers is the SailPoint Developer Community itself, where ISC users and experts all over the world come together to ask questions and provide solutions."}),"\n",(0,s.jsxs)(t.p,{children:["To learn more about the ISC UI Development Kit and discuss it with SailPoint Developer Community members, go to the ",(0,s.jsx)(t.a,{href:"https://developer.sailpoint.com/discuss/c/identity-security-cloud/6",children:"SailPoint Developer Community Forum"}),"."]})]})}function h(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},365332:(e,t,n)=>{n.d(t,{Z:()=>w});var s=n(667294),a=n(490512),i=n(8757),o=n(873276),r=n(254939);const l={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var c=Object.defineProperty,d=Object.defineProperties,u=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,h=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,g=(e,t,n)=>t in e?c(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,x=(e,t)=>{for(var n in t||(t={}))h.call(t,n)&&g(e,n,t[n]);if(p)for(var n of p(t))m.call(t,n)&&g(e,n,t[n]);return e},v=(e,t)=>d(e,u(t));function b({className:e,block:t,selectedValue:n,selectValue:o,tabValues:r}){const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.o5)(),u=e=>{const t=e.currentTarget,s=c.indexOf(t),a=r[s].value;a!==n&&(d(t),o(a))},p=e=>{var t,n;let s=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;s=null!=(t=c[n])?t:c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;s=null!=(n=c[t])?n:c[c.length-1];break}}null==s||s.focus()};return s.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":t},e)},r.map((({value:e,label:t,attributes:i})=>s.createElement("li",v(x({role:"tab",tabIndex:n===e?0:-1,"aria-selected":n===e,key:e,ref:e=>c.push(e),onKeyDown:p,onClick:u},i),{className:(0,a.Z)("tabs__item",l.tabItem,null==i?void 0:i.className,{"tabs__item--active":n===e})}),null!=t?t:e))))}function f({lazy:e,children:t,selectedValue:n}){const a=(Array.isArray(t)?t:[t]).filter(Boolean);if(e){const e=a.find((e=>e.props.value===n));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return s.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function j(e){const t=(0,o.Y)(e);return s.createElement("div",{className:(0,a.Z)("tabs-container",l.tabList)},s.createElement(b,x(x({},t),e)),s.createElement(f,x(x({},t),e)))}function w(e){const t=(0,r.default)();return s.createElement(j,x({key:String(t)},e),(0,o.h)(e.children))}}}]);