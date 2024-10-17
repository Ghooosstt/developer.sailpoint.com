(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[84374],{455372:(e,t,i)=>{"use strict";i.r(t),i.d(t,{assets:()=>h,contentTitle:()=>p,default:()=>x,frontMatter:()=>d,metadata:()=>u,toc:()=>m});var s=i(785893),n=i(511151),o=(i(752583),i(555199)),r=i(82479),a=i.n(r),l=i(424455),c=i(580164);const d={id:"identity-security-cloud-v-3-api",sidebar_label:"Introduction",sidebar_position:0,hide_title:!0,custom_edit_url:"https://github.com/sailpoint-oss/developer.sailpoint.com/issues/new?assignees=&labels=&template=bug-report.md&title=%5BBug%5D+Your+Bug+Report+Here Requesting changes to 'Identity Security Cloud V3 API' (identity-security-cloud-v-3-api)"},p=void 0,u={id:"api/v3/identity-security-cloud-v-3-api",title:"identity-security-cloud-v-3-api",description:"<span",source:"@site/docs/api/v3/identity-security-cloud-v-3-api.info.mdx",sourceDirName:"api/v3",slug:"/api/v3/identity-security-cloud-v-3-api",permalink:"/docs/api/v3/identity-security-cloud-v-3-api",draft:!1,unlisted:!1,editUrl:"https://github.com/sailpoint-oss/developer.sailpoint.com/issues/new?assignees=&labels=&template=bug-report.md&title=%5BBug%5D+Your+Bug+Report+Here Requesting changes to 'Identity Security Cloud V3 API' (identity-security-cloud-v-3-api)",tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"identity-security-cloud-v-3-api",sidebar_label:"Introduction",sidebar_position:0,hide_title:!0,custom_edit_url:"https://github.com/sailpoint-oss/developer.sailpoint.com/issues/new?assignees=&labels=&template=bug-report.md&title=%5BBug%5D+Your+Bug+Report+Here Requesting changes to 'Identity Security Cloud V3 API' (identity-security-cloud-v-3-api)"},sidebar:"isc_v3_sidebar",previous:{title:"V3 APIs",permalink:"/docs/api/v3"},next:{title:"Access Profiles",permalink:"/docs/api/v3/access-profiles"}},h={},m=[];function f(e){const t={a:"a",p:"p",...(0,n.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("span",{className:"theme-doc-version-badge badge badge--secondary",children:"Version: 3.0.0"}),"\n",(0,s.jsx)(c.Z,{url:"https://raw.githubusercontent.com/sailpoint-oss/api-specs/main/dereferenced/deref-sailpoint-api.v3.yaml",proxy:void 0}),"\n",(0,s.jsx)(o.default,{as:"h1",className:"openapi__heading",children:"Identity Security Cloud V3 API"}),"\n",(0,s.jsxs)(t.p,{children:["Use these APIs to interact with the Identity Security Cloud platform to achieve repeatable, automated processes with greater scalability. We encourage you to join the SailPoint Developer Community forum at ",(0,s.jsx)(t.a,{href:"https://developer.sailpoint.com/discuss",children:"https://developer.sailpoint.com/discuss"})," to connect with other developers using our APIs."]}),"\n",(0,s.jsxs)("div",{style:{marginBottom:"2rem"},children:[(0,s.jsx)(o.default,{id:"authentication",as:"h2",className:"openapi-tabs__heading",children:"Authentication"}),(0,s.jsxs)(a(),{className:"openapi-tabs__security-schemes",children:[(0,s.jsxs)(l.default,{label:"OAuth 2.0: userAuth",value:"userAuth",children:[(0,s.jsxs)(t.p,{children:["OAuth2 Bearer token (JWT) generated using either a ",(0,s.jsx)(t.a,{href:"https://developer.sailpoint.com/docs/api/authentication/#generate-a-personal-access-token",children:"personal access token (PAT)"})," or through the ",(0,s.jsx)(t.a,{href:"https://developer.sailpoint.com/docs/api/authentication/#request-access-token-with-authorization-code-grant-flow",children:"authorization code flow"}),"."]}),(0,s.jsxs)(t.p,{children:["Personal access tokens are associated with a user in Identity Security Cloud and relies on the user's ",(0,s.jsx)(t.a,{href:"https://documentation.sailpoint.com/saas/help/common/users/index.html",children:"user level"})," (ex. Admin, Helpdesk, etc.) to determine a base level of access."]}),(0,s.jsxs)(t.p,{children:["See ",(0,s.jsx)(t.a,{href:"https://developer.sailpoint.com/docs/api/authentication/",children:"Identity Security Cloud REST API Authentication"})," for more information."]}),(0,s.jsx)("div",{children:(0,s.jsx)("table",{children:(0,s.jsxs)("tbody",{children:[(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:(0,s.jsx)(t.p,{children:"Security Scheme Type:"})}),(0,s.jsx)("td",{children:(0,s.jsx)(t.p,{children:"oauth2"})})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:(0,s.jsx)(t.p,{children:"OAuth Flow (clientCredentials):"})}),(0,s.jsxs)("td",{children:[(0,s.jsx)("p",{children:(0,s.jsxs)(t.p,{children:["Token URL: ",(0,s.jsx)(t.a,{href:"https://tenant.api.identitynow.com/oauth/token",children:"https://tenant.api.identitynow.com/oauth/token"})]})}),(0,s.jsx)("span",{children:(0,s.jsx)(t.p,{children:"Scopes:"})}),(0,s.jsxs)("ul",{children:[(0,s.jsx)("li",{children:(0,s.jsx)(t.p,{children:"sp:scopes:default: default scope"})}),(0,s.jsx)("li",{children:(0,s.jsx)(t.p,{children:"sp:scopes:all: access to all scopes"})})]})]})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:(0,s.jsx)(t.p,{children:"OAuth Flow (authorizationCode):"})}),(0,s.jsxs)("td",{children:[(0,s.jsx)("p",{children:(0,s.jsxs)(t.p,{children:["Token URL: ",(0,s.jsx)(t.a,{href:"https://tenant.api.identitynow.com/oauth/token",children:"https://tenant.api.identitynow.com/oauth/token"})]})}),(0,s.jsx)("p",{children:(0,s.jsxs)(t.p,{children:["Authorization URL: ",(0,s.jsx)(t.a,{href:"https://tenant.login.sailpoint.com/oauth/authorize",children:"https://tenant.login.sailpoint.com/oauth/authorize"})]})}),(0,s.jsx)("span",{children:(0,s.jsx)(t.p,{children:"Scopes:"})}),(0,s.jsxs)("ul",{children:[(0,s.jsx)("li",{children:(0,s.jsx)(t.p,{children:"sp:scopes:default: default scope"})}),(0,s.jsx)("li",{children:(0,s.jsx)(t.p,{children:"sp:scopes:all: access to all scopes"})})]})]})]})]})})})]}),(0,s.jsxs)(l.default,{label:"OAuth 2.0: applicationAuth",value:"applicationAuth",children:[(0,s.jsxs)(t.p,{children:["OAuth2 Bearer token (JWT) generated using ",(0,s.jsx)(t.a,{href:"https://developer.sailpoint.com/docs/api/authentication/#request-access-token-with-client-credentials-grant-flow",children:"client credentials flow"}),"."]}),(0,s.jsx)(t.p,{children:"Client credentials refers to tokens that are not associated with a user in Identity Security Cloud."}),(0,s.jsxs)(t.p,{children:["See ",(0,s.jsx)(t.a,{href:"https://developer.sailpoint.com/docs/api/authentication/",children:"Identity Security Cloud REST API Authentication"})," for more information."]}),(0,s.jsx)("div",{children:(0,s.jsx)("table",{children:(0,s.jsxs)("tbody",{children:[(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:(0,s.jsx)(t.p,{children:"Security Scheme Type:"})}),(0,s.jsx)("td",{children:(0,s.jsx)(t.p,{children:"oauth2"})})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:(0,s.jsx)(t.p,{children:"OAuth Flow (clientCredentials):"})}),(0,s.jsxs)("td",{children:[(0,s.jsx)("p",{children:(0,s.jsxs)(t.p,{children:["Token URL: ",(0,s.jsx)(t.a,{href:"https://tenant.api.identitynow.com/oauth/token",children:"https://tenant.api.identitynow.com/oauth/token"})]})}),(0,s.jsx)("span",{children:(0,s.jsx)(t.p,{children:"Scopes:"})}),(0,s.jsxs)("ul",{children:[(0,s.jsx)("li",{children:(0,s.jsx)(t.p,{children:"sp:scopes:default: default scope"})}),(0,s.jsx)("li",{children:(0,s.jsx)(t.p,{children:"sp:scopes:all: access to all scopes"})})]})]})]})]})})})]})]})]}),"\n",(0,s.jsxs)("div",{style:{display:"flex",flexDirection:"column",marginBottom:"var(--ifm-paragraph-margin-bottom)"},children:[(0,s.jsx)("h3",{style:{marginBottom:"0.25rem"},children:(0,s.jsx)(t.p,{children:"Contact"})}),(0,s.jsx)("span",{children:(0,s.jsx)(t.p,{children:"Developer Relations:"})}),(0,s.jsx)("span",{children:(0,s.jsxs)(t.p,{children:["URL: ",(0,s.jsx)(t.a,{href:"mailto:https://developer.sailpoint.com/discuss/api-help",children:"https://developer.sailpoint.com/discuss/api-help"})]})})]}),"\n",(0,s.jsxs)("div",{style:{marginBottom:"var(--ifm-paragraph-margin-bottom)"},children:[(0,s.jsx)("h3",{style:{marginBottom:"0.25rem"},children:(0,s.jsx)(t.p,{children:"Terms of Service"})}),(0,s.jsx)("a",{href:"https://developer.sailpoint.com/discuss/tos",children:(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"https://developer.sailpoint.com/discuss/tos",children:"https://developer.sailpoint.com/discuss/tos"})})})]}),"\n",(0,s.jsxs)("div",{style:{marginBottom:"var(--ifm-paragraph-margin-bottom)"},children:[(0,s.jsx)("h3",{style:{marginBottom:"0.25rem"},children:(0,s.jsx)(t.p,{children:"License"})}),(0,s.jsx)("a",{href:"https://opensource.org/licenses/MIT",children:(0,s.jsx)(t.p,{children:"MIT"})})]})]})}function x(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(f,{...e})}):f(e)}},752583:function(e,t,i){"use strict";var s=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const n=s(i(667294)),o=i(842475),r=s(i(725026)),a=s(i(433939));t.default=function(e){const{colorMode:t}=(0,o.useColorMode)(),{logo:i,darkLogo:s}=e,l=()=>{var e;return"dark"===t&&null!=(e=null==s?void 0:s.altText)?e:null==i?void 0:i.altText},c=(0,r.default)(null==i?void 0:i.url),d=(0,r.default)(null==s?void 0:s.url);return i&&s?n.default.createElement(a.default,{alt:l(),sources:{light:c,dark:d},className:"openapi__logo"}):i||s?n.default.createElement(a.default,{alt:l(),sources:{light:null!=c?c:d,dark:null!=c?c:d},className:"openapi__logo"}):void 0}},580164:(e,t,i)=>{"use strict";i.d(t,{Z:()=>r});var s=i(667294),n=i(293162),o=i.n(n);const r=function({url:e,proxy:t}){return s.createElement("div",{style:{float:"right"},className:"dropdown dropdown--hoverable dropdown--right"},s.createElement("button",{className:"export-button button button--sm button--secondary"},"Export"),s.createElement("ul",{className:"export-dropdown dropdown__menu"},s.createElement("li",null,s.createElement("a",{onClick:t=>{t.preventDefault(),(e=>{let t;(e.endsWith("json")||e.endsWith("yaml")||e.endsWith("yml"))&&(t=e.substring(e.lastIndexOf("/")+1)),o().saveAs(e,t||"openapi.txt")})(`${e}`)},className:"dropdown__link",href:`${e}`},"OpenAPI Spec"))))}},293162:function(e,t,i){var s,n,o,r=i(425108);n=[],void 0===(o="function"==typeof(s=function(){"use strict";function t(e,t){return void 0===t?t={autoBom:!1}:"object"!=typeof t&&(r.warn("Deprecated: Expected third argument to be a object"),t={autoBom:!t}),t.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob(["\ufeff",e],{type:e.type}):e}function s(e,t,i){var s=new XMLHttpRequest;s.open("GET",e),s.responseType="blob",s.onload=function(){c(s.response,t,i)},s.onerror=function(){r.error("could not download file")},s.send()}function n(e){var t=new XMLHttpRequest;t.open("HEAD",e,!1);try{t.send()}catch(e){}return 200<=t.status&&299>=t.status}function o(e){try{e.dispatchEvent(new MouseEvent("click"))}catch(s){var t=document.createEvent("MouseEvents");t.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),e.dispatchEvent(t)}}var a="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof i.g&&i.g.global===i.g?i.g:void 0,l=a.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),c=a.saveAs||("object"!=typeof window||window!==a?function(){}:"download"in HTMLAnchorElement.prototype&&!l?function(e,t,i){var r=a.URL||a.webkitURL,l=document.createElement("a");t=t||e.name||"download",l.download=t,l.rel="noopener","string"==typeof e?(l.href=e,l.origin===location.origin?o(l):n(l.href)?s(e,t,i):o(l,l.target="_blank")):(l.href=r.createObjectURL(e),setTimeout((function(){r.revokeObjectURL(l.href)}),4e4),setTimeout((function(){o(l)}),0))}:"msSaveOrOpenBlob"in navigator?function(e,i,r){if(i=i||e.name||"download","string"!=typeof e)navigator.msSaveOrOpenBlob(t(e,r),i);else if(n(e))s(e,i,r);else{var a=document.createElement("a");a.href=e,a.target="_blank",setTimeout((function(){o(a)}))}}:function(e,t,i,n){if((n=n||open("","_blank"))&&(n.document.title=n.document.body.innerText="downloading..."),"string"==typeof e)return s(e,t,i);var o="application/octet-stream"===e.type,r=/constructor/i.test(a.HTMLElement)||a.safari,c=/CriOS\/[\d]+/.test(navigator.userAgent);if((c||o&&r||l)&&"undefined"!=typeof FileReader){var d=new FileReader;d.onloadend=function(){var e=d.result;e=c?e:e.replace(/^data:[^;]*;/,"data:attachment/file;"),n?n.location.href=e:location=e,n=null},d.readAsDataURL(e)}else{var p=a.URL||a.webkitURL,u=p.createObjectURL(e);n?n.location=u:location.href=u,n=null,setTimeout((function(){p.revokeObjectURL(u)}),4e4)}});a.saveAs=c.saveAs=c,e.exports=c})?s.apply(t,n):s)||(e.exports=o)}}]);