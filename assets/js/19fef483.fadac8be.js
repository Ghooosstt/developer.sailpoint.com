(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[69709],{733431:(e,t,i)=>{"use strict";i.r(t),i.d(t,{assets:()=>u,contentTitle:()=>d,default:()=>x,frontMatter:()=>c,metadata:()=>p,toc:()=>h});var n=i(785893),s=i(511151),o=(i(752583),i(555199)),a=i(82479),r=i.n(a),l=i(424455);i(580164);const c={id:"identity-security-cloud-v-2024-api",sidebar_label:"Introduction",sidebar_position:0,hide_title:!0,custom_edit_url:"https://github.com/sailpoint-oss/developer.sailpoint.com/issues/new?assignees=&labels=&template=bug-report.md&title=%5BBug%5D+Your+Bug+Report+Here Requesting changes to 'Identity Security Cloud V2024 API' (identity-security-cloud-v-2024-api)"},d=void 0,p={id:"api/v2024/identity-security-cloud-v-2024-api",title:"identity-security-cloud-v-2024-api",description:"<span",source:"@site/docs/api/v2024/identity-security-cloud-v-2024-api.info.mdx",sourceDirName:"api/v2024",slug:"/api/v2024/identity-security-cloud-v-2024-api",permalink:"/docs/api/v2024/identity-security-cloud-v-2024-api",draft:!1,unlisted:!1,editUrl:"https://github.com/sailpoint-oss/developer.sailpoint.com/issues/new?assignees=&labels=&template=bug-report.md&title=%5BBug%5D+Your+Bug+Report+Here Requesting changes to 'Identity Security Cloud V2024 API' (identity-security-cloud-v-2024-api)",tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"identity-security-cloud-v-2024-api",sidebar_label:"Introduction",sidebar_position:0,hide_title:!0,custom_edit_url:"https://github.com/sailpoint-oss/developer.sailpoint.com/issues/new?assignees=&labels=&template=bug-report.md&title=%5BBug%5D+Your+Bug+Report+Here Requesting changes to 'Identity Security Cloud V2024 API' (identity-security-cloud-v-2024-api)"},sidebar:"isc_2024_sidebar",previous:{title:"V2024 APIs",permalink:"/docs/api/v2024"},next:{title:"Access Model Metadata",permalink:"/docs/api/v2024/access-model-metadata"}},u={},h=[];function m(e){const t={a:"a",p:"p",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("span",{className:"theme-doc-version-badge badge badge--secondary",children:"Version: v2024"}),"\n",(0,n.jsx)(o.default,{as:"h1",className:"openapi__heading",children:"Identity Security Cloud V2024 API"}),"\n",(0,n.jsxs)(t.p,{children:["Use these APIs to interact with the Identity Security Cloud platform to achieve repeatable, automated processes with greater scalability. We encourage you to join the SailPoint Developer Community forum at ",(0,n.jsx)(t.a,{href:"https://developer.sailpoint.com/discuss",children:"https://developer.sailpoint.com/discuss"})," to connect with other developers using our APIs."]}),"\n",(0,n.jsxs)("div",{style:{marginBottom:"2rem"},children:[(0,n.jsx)(o.default,{id:"authentication",as:"h2",className:"openapi-tabs__heading",children:"Authentication"}),(0,n.jsxs)(r(),{className:"openapi-tabs__security-schemes",children:[(0,n.jsxs)(l.default,{label:"OAuth 2.0: userAuth",value:"userAuth",children:[(0,n.jsxs)(t.p,{children:["OAuth2 Bearer token (JWT) generated using either a ",(0,n.jsx)(t.a,{href:"https://developer.sailpoint.com/docs/api/authentication/#generate-a-personal-access-token",children:"personal access token (PAT)"})," or through the ",(0,n.jsx)(t.a,{href:"https://developer.sailpoint.com/docs/api/authentication/#request-access-token-with-authorization-code-grant-flow",children:"authorization code flow"}),"."]}),(0,n.jsxs)(t.p,{children:["Personal access tokens are associated with a user in Identity Security Cloud and relies on the user's ",(0,n.jsx)(t.a,{href:"https://documentation.sailpoint.com/saas/help/common/users/index.html",children:"user level"})," (ex. Admin, Helpdesk, etc.) to determine a base level of access."]}),(0,n.jsxs)(t.p,{children:["See ",(0,n.jsx)(t.a,{href:"https://developer.sailpoint.com/docs/api/authentication/",children:"Identity Security Cloud REST API Authentication"})," for more information."]}),(0,n.jsx)("div",{children:(0,n.jsx)("table",{children:(0,n.jsxs)("tbody",{children:[(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:(0,n.jsx)(t.p,{children:"Security Scheme Type:"})}),(0,n.jsx)("td",{children:(0,n.jsx)(t.p,{children:"oauth2"})})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:(0,n.jsx)(t.p,{children:"OAuth Flow (clientCredentials):"})}),(0,n.jsxs)("td",{children:[(0,n.jsx)("p",{children:(0,n.jsxs)(t.p,{children:["Token URL: ",(0,n.jsx)(t.a,{href:"https://tenant.api.identitynow.com/oauth/token",children:"https://tenant.api.identitynow.com/oauth/token"})]})}),(0,n.jsx)("span",{children:(0,n.jsx)(t.p,{children:"Scopes:"})}),(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:(0,n.jsx)(t.p,{children:"sp:scopes:default: default scope"})}),(0,n.jsx)("li",{children:(0,n.jsx)(t.p,{children:"sp:scopes:all: access to all scopes"})})]})]})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:(0,n.jsx)(t.p,{children:"OAuth Flow (authorizationCode):"})}),(0,n.jsxs)("td",{children:[(0,n.jsx)("p",{children:(0,n.jsxs)(t.p,{children:["Token URL: ",(0,n.jsx)(t.a,{href:"https://tenant.api.identitynow.com/oauth/token",children:"https://tenant.api.identitynow.com/oauth/token"})]})}),(0,n.jsx)("p",{children:(0,n.jsxs)(t.p,{children:["Authorization URL: ",(0,n.jsx)(t.a,{href:"https://tenant.login.sailpoint.com/oauth/authorize",children:"https://tenant.login.sailpoint.com/oauth/authorize"})]})}),(0,n.jsx)("span",{children:(0,n.jsx)(t.p,{children:"Scopes:"})}),(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:(0,n.jsx)(t.p,{children:"sp:scopes:default: default scope"})}),(0,n.jsx)("li",{children:(0,n.jsx)(t.p,{children:"sp:scopes:all: access to all scopes"})})]})]})]})]})})})]}),(0,n.jsxs)(l.default,{label:"OAuth 2.0: applicationAuth",value:"applicationAuth",children:[(0,n.jsxs)(t.p,{children:["OAuth2 Bearer token (JWT) generated using ",(0,n.jsx)(t.a,{href:"https://developer.sailpoint.com/docs/api/authentication/#request-access-token-with-client-credentials-grant-flow",children:"client credentials flow"}),"."]}),(0,n.jsx)(t.p,{children:"Client credentials refers to tokens that are not associated with a user in Identity Security Cloud."}),(0,n.jsxs)(t.p,{children:["See ",(0,n.jsx)(t.a,{href:"https://developer.sailpoint.com/docs/api/authentication/",children:"Identity Security Cloud REST API Authentication"})," for more information."]}),(0,n.jsx)("div",{children:(0,n.jsx)("table",{children:(0,n.jsxs)("tbody",{children:[(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:(0,n.jsx)(t.p,{children:"Security Scheme Type:"})}),(0,n.jsx)("td",{children:(0,n.jsx)(t.p,{children:"oauth2"})})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:(0,n.jsx)(t.p,{children:"OAuth Flow (clientCredentials):"})}),(0,n.jsxs)("td",{children:[(0,n.jsx)("p",{children:(0,n.jsxs)(t.p,{children:["Token URL: ",(0,n.jsx)(t.a,{href:"https://tenant.api.identitynow.com/oauth/token",children:"https://tenant.api.identitynow.com/oauth/token"})]})}),(0,n.jsx)("span",{children:(0,n.jsx)(t.p,{children:"Scopes:"})}),(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:(0,n.jsx)(t.p,{children:"sp:scopes:default: default scope"})}),(0,n.jsx)("li",{children:(0,n.jsx)(t.p,{children:"sp:scopes:all: access to all scopes"})})]})]})]})]})})})]})]})]}),"\n",(0,n.jsxs)("div",{style:{display:"flex",flexDirection:"column",marginBottom:"var(--ifm-paragraph-margin-bottom)"},children:[(0,n.jsx)("h3",{style:{marginBottom:"0.25rem"},children:(0,n.jsx)(t.p,{children:"Contact"})}),(0,n.jsx)("span",{children:(0,n.jsx)(t.p,{children:"Developer Relations:"})}),(0,n.jsx)("span",{children:(0,n.jsxs)(t.p,{children:["URL: ",(0,n.jsx)(t.a,{href:"mailto:https://developer.sailpoint.com/discuss/api-help",children:"https://developer.sailpoint.com/discuss/api-help"})]})})]}),"\n",(0,n.jsxs)("div",{style:{marginBottom:"var(--ifm-paragraph-margin-bottom)"},children:[(0,n.jsx)("h3",{style:{marginBottom:"0.25rem"},children:(0,n.jsx)(t.p,{children:"Terms of Service"})}),(0,n.jsx)("a",{href:"https://developer.sailpoint.com/discuss/tos",children:(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"https://developer.sailpoint.com/discuss/tos",children:"https://developer.sailpoint.com/discuss/tos"})})})]}),"\n",(0,n.jsxs)("div",{style:{marginBottom:"var(--ifm-paragraph-margin-bottom)"},children:[(0,n.jsx)("h3",{style:{marginBottom:"0.25rem"},children:(0,n.jsx)(t.p,{children:"License"})}),(0,n.jsx)("a",{href:"https://opensource.org/licenses/MIT",children:(0,n.jsx)(t.p,{children:"MIT"})})]})]})}function x(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(m,{...e})}):m(e)}},752583:function(e,t,i){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const s=n(i(667294)),o=i(842475),a=n(i(725026)),r=n(i(433939));t.default=function(e){const{colorMode:t}=(0,o.useColorMode)(),{logo:i,darkLogo:n}=e,l=()=>{var e;return"dark"===t&&null!=(e=null==n?void 0:n.altText)?e:null==i?void 0:i.altText},c=(0,a.default)(null==i?void 0:i.url),d=(0,a.default)(null==n?void 0:n.url);return i&&n?s.default.createElement(r.default,{alt:l(),sources:{light:c,dark:d},className:"openapi__logo"}):i||n?s.default.createElement(r.default,{alt:l(),sources:{light:null!=c?c:d,dark:null!=c?c:d},className:"openapi__logo"}):void 0}},580164:(e,t,i)=>{"use strict";i.d(t,{Z:()=>a});var n=i(667294),s=i(293162),o=i.n(s);const a=function({url:e,proxy:t}){return n.createElement("div",{style:{float:"right"},className:"dropdown dropdown--hoverable dropdown--right"},n.createElement("button",{className:"export-button button button--sm button--secondary"},"Export"),n.createElement("ul",{className:"export-dropdown dropdown__menu"},n.createElement("li",null,n.createElement("a",{onClick:t=>{t.preventDefault(),(e=>{let t;(e.endsWith("json")||e.endsWith("yaml")||e.endsWith("yml"))&&(t=e.substring(e.lastIndexOf("/")+1)),o().saveAs(e,t||"openapi.txt")})(`${e}`)},className:"dropdown__link",href:`${e}`},"OpenAPI Spec"))))}},293162:function(e,t,i){var n,s,o,a=i(425108);s=[],void 0===(o="function"==typeof(n=function(){"use strict";function t(e,t){return void 0===t?t={autoBom:!1}:"object"!=typeof t&&(a.warn("Deprecated: Expected third argument to be a object"),t={autoBom:!t}),t.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob(["\ufeff",e],{type:e.type}):e}function n(e,t,i){var n=new XMLHttpRequest;n.open("GET",e),n.responseType="blob",n.onload=function(){c(n.response,t,i)},n.onerror=function(){a.error("could not download file")},n.send()}function s(e){var t=new XMLHttpRequest;t.open("HEAD",e,!1);try{t.send()}catch(e){}return 200<=t.status&&299>=t.status}function o(e){try{e.dispatchEvent(new MouseEvent("click"))}catch(n){var t=document.createEvent("MouseEvents");t.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),e.dispatchEvent(t)}}var r="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof i.g&&i.g.global===i.g?i.g:void 0,l=r.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),c=r.saveAs||("object"!=typeof window||window!==r?function(){}:"download"in HTMLAnchorElement.prototype&&!l?function(e,t,i){var a=r.URL||r.webkitURL,l=document.createElement("a");t=t||e.name||"download",l.download=t,l.rel="noopener","string"==typeof e?(l.href=e,l.origin===location.origin?o(l):s(l.href)?n(e,t,i):o(l,l.target="_blank")):(l.href=a.createObjectURL(e),setTimeout((function(){a.revokeObjectURL(l.href)}),4e4),setTimeout((function(){o(l)}),0))}:"msSaveOrOpenBlob"in navigator?function(e,i,a){if(i=i||e.name||"download","string"!=typeof e)navigator.msSaveOrOpenBlob(t(e,a),i);else if(s(e))n(e,i,a);else{var r=document.createElement("a");r.href=e,r.target="_blank",setTimeout((function(){o(r)}))}}:function(e,t,i,s){if((s=s||open("","_blank"))&&(s.document.title=s.document.body.innerText="downloading..."),"string"==typeof e)return n(e,t,i);var o="application/octet-stream"===e.type,a=/constructor/i.test(r.HTMLElement)||r.safari,c=/CriOS\/[\d]+/.test(navigator.userAgent);if((c||o&&a||l)&&"undefined"!=typeof FileReader){var d=new FileReader;d.onloadend=function(){var e=d.result;e=c?e:e.replace(/^data:[^;]*;/,"data:attachment/file;"),s?s.location.href=e:location=e,s=null},d.readAsDataURL(e)}else{var p=r.URL||r.webkitURL,u=p.createObjectURL(e);s?s.location=u:location.href=u,s=null,setTimeout((function(){p.revokeObjectURL(u)}),4e4)}});r.saveAs=c.saveAs=c,e.exports=c})?n.apply(t,s):n)||(e.exports=o)}}]);