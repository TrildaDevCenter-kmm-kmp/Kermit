"use strict";(self.webpackChunktouchlab=self.webpackChunktouchlab||[]).push([[363],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(n),f=o,m=d["".concat(c,".").concat(f)]||d[f]||u[f]||i;return n?r.createElement(m,a(a({ref:t},p),{},{components:n})):r.createElement(m,a({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5073:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=n(7462),o=(n(7294),n(3905));const i={sidebar_position:30},a="Extensions",s={unversionedId:"extensions/index",id:"extensions/index",title:"Extensions",description:"Crashlytics",source:"@site/docs/extensions/index.md",sourceDirName:"extensions",slug:"/extensions/",permalink:"/docs/extensions/",draft:!1,editUrl:"https://github.com/touchlab/Kermit/tree/main/website/docs/extensions/index.md",tags:[],version:"current",lastUpdatedBy:"Sam Hill",lastUpdatedAt:1718047645,formattedLastUpdatedAt:"Jun 10, 2024",sidebarPosition:30,frontMatter:{sidebar_position:30},sidebar:"tutorialSidebar",previous:{title:"Bugsnag",permalink:"/docs/crashreporting/BUGSNAG"},next:{title:"Koin Integration",permalink:"/docs/extensions/KOIN"}},c={},l=[{value:"Crashlytics",id:"crashlytics",level:2},{value:"Bugsnag",id:"bugsnag",level:2},{value:"Koin",id:"koin",level:2}],p={toc:l};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"extensions"},"Extensions"),(0,o.kt)("h2",{id:"crashlytics"},(0,o.kt)("a",{parentName:"h2",href:"../crashreporting/CRASHLYTICS"},"Crashlytics")),(0,o.kt)("p",null,"Crashlytics log statement writing."),(0,o.kt)("h2",{id:"bugsnag"},(0,o.kt)("a",{parentName:"h2",href:"../crashreporting/BUGSNAG"},"Bugsnag")),(0,o.kt)("p",null,"Bugsnag breadcrumb writing."),(0,o.kt)("h2",{id:"koin"},(0,o.kt)("a",{parentName:"h2",href:"KOIN"},"Koin")),(0,o.kt)("p",null,"Integration with Koin, for easy logger injection."))}u.isMDXComponent=!0}}]);