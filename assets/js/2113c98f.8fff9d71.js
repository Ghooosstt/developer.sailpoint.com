"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[50869],{358992:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>o,contentTitle:()=>n,default:()=>l,frontMatter:()=>r,metadata:()=>c,toc:()=>p});var i=s(785893),a=s(511151);const r={id:"typescript-sdk-search",title:"Search with The TypeScript SDK",pagination_label:"Search",sidebar_label:"Search",sidebar_position:6,sidebar_class_name:"typescriptsdk",keywords:["tsc","typescript","sdk","search"],description:"Learn how to use the TypeScript SDK to search.",slug:"/tools/sdk/typescript/search",tags:["SDK"]},n=void 0,c={id:"tools/sdk/typescript/typescript-sdk-search",title:"Search with The TypeScript SDK",description:"Learn how to use the TypeScript SDK to search.",source:"@site/docs/tools/sdk/typescript/search.md",sourceDirName:"tools/sdk/typescript",slug:"/tools/sdk/typescript/search",permalink:"/docs/tools/sdk/typescript/search",draft:!1,unlisted:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/tools/sdk/typescript/search.md",tags:[{inline:!0,label:"SDK",permalink:"/docs/tags/sdk"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1729201117e3,sidebarPosition:6,frontMatter:{id:"typescript-sdk-search",title:"Search with The TypeScript SDK",pagination_label:"Search",sidebar_label:"Search",sidebar_position:6,sidebar_class_name:"typescriptsdk",keywords:["tsc","typescript","sdk","search"],description:"Learn how to use the TypeScript SDK to search.",slug:"/tools/sdk/typescript/search",tags:["SDK"]},sidebar:"openApiSidebar",previous:{title:"Paginate Results",permalink:"/docs/tools/sdk/typescript/paginate"},next:{title:"Retries",permalink:"/docs/tools/sdk/typescript/retries"}},o={},p=[];function d(e){const t={a:"a",code:"code",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:["To try using the ISC ",(0,i.jsx)(t.a,{href:"/docs/api/v3/search-post",children:"search functionality"}),' along with pagination, copy this code into your "index.ts" file:']}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-typescript",children:"const search = async () => {\n  let apiConfig = new Configuration();\n  let api = new SearchApi(apiConfig);\n  let search: Search = {\n    indices: ['identities'],\n    query: {\n      query: '*',\n    },\n    sort: ['-name'],\n  };\n  const val = await Paginator.paginateSearchApi(api, search, 100, 1000);\n\n  for (const result of val.data) {\n    const castedResult: IdentityDocument = result;\n    console.log(castedResult.name);\n  }\n};\n"})}),"\n",(0,i.jsx)(t.p,{children:"Run this command to compile and run the code:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"tsc src/index.ts && node src/index.js\n"})}),"\n",(0,i.jsx)(t.p,{children:'This example returns 1000 identities, 100 at a time, and sorts them in descending order by name. You can also change the search pagination by changing "100" and "1000", respectively.'}),"\n",(0,i.jsxs)(t.p,{children:["The two main ways you can manipulate this example are to change the ",(0,i.jsx)(t.code,{children:"indices"})," or the ",(0,i.jsx)(t.code,{children:"query"}),". For example, if you add ",(0,i.jsx)(t.code,{children:'"access profiles"'}),' to the indices, the SDK will search access profiles too. If you change the query to "a*", the search will return all records starting with the letter "a".']}),"\n",(0,i.jsxs)(t.p,{children:["You can also change the sorting logic in the brackets next to ",(0,i.jsx)(t.code,{children:"sort"}),"."]})]})}function l(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}}}]);