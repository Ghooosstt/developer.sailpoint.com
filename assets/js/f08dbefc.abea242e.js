"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[19761],{450347:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var n=r(785893),s=r(511151);const o={id:"udk-error-handling",title:"Error Handling",pagination_label:"UDK",sidebar_label:"Error Handling",sidebar_position:3,sidebar_class_name:"rudk",keywords:["UI","development","kit","error","handling"],description:"Error handling in your custom user interfaces",slug:"/tools/ui-development-kit/error-handling",tags:["UI","Error"]},i=void 0,a={id:"tools/ui-development-kit/udk-error-handling",title:"Error Handling",description:"Error handling in your custom user interfaces",source:"@site/docs/tools/ui-development-kit/error-handling.md",sourceDirName:"tools/ui-development-kit",slug:"/tools/ui-development-kit/error-handling",permalink:"/docs/tools/ui-development-kit/error-handling",draft:!1,unlisted:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/tools/ui-development-kit/error-handling.md",tags:[{inline:!0,label:"UI",permalink:"/docs/tags/ui"},{inline:!0,label:"Error",permalink:"/docs/tags/error"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1729201117e3,sidebarPosition:3,frontMatter:{id:"udk-error-handling",title:"Error Handling",pagination_label:"UDK",sidebar_label:"Error Handling",sidebar_position:3,sidebar_class_name:"rudk",keywords:["UI","development","kit","error","handling"],description:"Error handling in your custom user interfaces",slug:"/tools/ui-development-kit/error-handling",tags:["UI","Error"]},sidebar:"openApiSidebar",previous:{title:"UDK",permalink:"/docs/tools/ui-development-kit/accounts-list"},next:{title:"ADMIN",permalink:"/docs/tools/community-toolbox"}},l={},c=[{value:"400 Bad Request",id:"400-bad-request",level:2},{value:"500 Server Issues",id:"500-server-issues",level:2},{value:"Discuss",id:"discuss",level:2}];function d(e){const t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["Ideally, everything in your custom UIs will work smoothly, but you will likely encounter errors at some point when you're implementing a page. If you provide an invalid filter or sorter, the list accounts endpoint will return a 400 error, for example. You can handle this error by adding a ",(0,n.jsx)(t.code,{children:"try catch"})," block to the server side of the accounts list page."]}),"\n",(0,n.jsx)(t.p,{children:"If any of your backend calls result in a server error or bad request, you also want to handle those errors."}),"\n",(0,n.jsx)(t.p,{children:"Read this guide to learn how to use the UI Development Kit to handle errors."}),"\n",(0,n.jsx)(t.h2,{id:"400-bad-request",children:"400 Bad Request"}),"\n",(0,n.jsxs)(t.p,{children:["If you provide an invalid filter or sorter, the ",(0,n.jsx)(t.a,{href:"https://developer.sailpoint.com/docs/api/v3/list-accounts",children:"List Accounts Endpoint"})," returns a 400 error. This example awaits the response and doesn't exit the program when a 4xx level status is received. If a 4xx level status is received, the user is redirected to an error page."]}),"\n",(0,n.jsx)(t.p,{children:"Refer to this code block to learn how to implement error handling for invalid filters or sorters:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typescript",children:"import {createConfiguration} from '$lib/sailpoint/sdk.js';\nimport {getFilters, getLimit, getPage, getSorters} from '$lib/Utils.js';\nimport {error} from '@sveltejs/kit';\nimport {AccountsApi} from 'sailpoint-api-client';\n\nexport const load = async ({url, locals}) => {\n  const config = createConfiguration(\n    locals.session!.baseUrl,\n    locals.idnSession!.access_token,\n  );\n  const api = new AccountsApi(config);\n\n  const page = getPage(url);\n  const limit = getLimit(url);\n  const sorters = getSorters(url);\n  const filters = getFilters(url);\n\n  const reportResp = await api.listAccounts(\n    {\n      count: true,\n      sorters: sorters,\n      filters: filters,\n      limit: Number(limit),\n      offset: Number(page) * Number(limit),\n    },\n    {\n      validateStatus: function (status) {\n        return status < 500;\n      },\n    },\n  );\n\n  if (reportResp.status !== 200) {\n    error(400, {\n      message:\n        'an error occurred while fetching accounts. Please examine your filters and and sorters and try again.',\n      context: {params: {page, limit, filters, sorters}},\n      urls: [\n        'https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results',\n      ],\n      errData: reportResp.data,\n    });\n  }\n\n  const totalCount = reportResp.headers['x-total-count'];\n  const accountData = reportResp.data;\n\n  return {accountData, totalCount, params: {page, limit, sorters, filters}};\n};\n"})}),"\n",(0,n.jsx)(t.h2,{id:"500-server-issues",children:"500 Server Issues"}),"\n",(0,n.jsx)(t.p,{children:"You can update the code block to handle more than just the 400 level statuses. You can see the highlighted code changes to handle any error response from the API call. You can send back an error to the user with the status, a detailed message, the details about the parameters used that caused the error, and the error response from the API."}),"\n",(0,n.jsx)(t.p,{children:"Refer to this code block to learn how to implement error handling for other non-400 errors:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typescript",children:"import {createConfiguration} from '$lib/sailpoint/sdk.js';\nimport {getFilters, getLimit, getPage, getSorters} from '$lib/Utils.js';\nimport {error} from '@sveltejs/kit';\nimport {AccountsApi} from 'sailpoint-api-client';\n\nexport const load = async ({url, locals}) => {\n  const config = createConfiguration(\n    locals.session!.baseUrl,\n    locals.idnSession!.access_token,\n  );\n  const api = new AccountsApi(config);\n\n  const page = getPage(url);\n  const limit = getLimit(url);\n  const sorters = getSorters(url);\n  const filters = getFilters(url);\n\n  const reportResp = await api.listAccounts(\n    {\n      count: true,\n      sorters: sorters,\n      filters: filters,\n      limit: Number(limit),\n      offset: Number(page) * Number(limit),\n    },\n    {\n      validateStatus: function (status) {\n        // highlight-next-line\n        return status < 550;\n      },\n    },\n  );\n\n  if (reportResp.status !== 200) {\n    // highlight-next-line\n    error(reportResp.status, {\n      message:\n        'an error occurred while fetching accounts. Please examine your filters and and sorters and try again.',\n      context: {params: {page, limit, filters, sorters}},\n      urls: [\n        'https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results',\n      ],\n      errData: reportResp.data,\n    });\n  }\n\n  const totalCount = reportResp.headers['x-total-count'];\n  const accountData = reportResp.data;\n\n  return {accountData, totalCount, params: {page, limit, sorters, filters}};\n};\n"})}),"\n",(0,n.jsx)(t.h2,{id:"discuss",children:"Discuss"}),"\n",(0,n.jsx)(t.p,{children:"The most valuable resource for ISC developers is the SailPoint Developer Community itself, where ISC users and experts all over the world come together to ask questions and provide solutions."}),"\n",(0,n.jsxs)(t.p,{children:["To learn more about the ISC UI Development Kit and discuss it with SailPoint Developer Community members, go to the ",(0,n.jsx)(t.a,{href:"https://developer.sailpoint.com/discuss/c/identity-security-cloud/6",children:"SailPoint Developer Community Forum"}),"."]})]})}function u(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}}}]);