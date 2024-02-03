"use strict";(self.webpackChunktouchlab=self.webpackChunktouchlab||[]).push([[962],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var g=o.createContext({}),c=function(e){var t=o.useContext(g),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(g.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,g=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),f=a,d=u["".concat(g,".").concat(f)]||u[f]||s[f]||i;return n?o.createElement(d,r(r({ref:t},p),{},{components:n})):o.createElement(d,r({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=u;var l={};for(var g in t)hasOwnProperty.call(t,g)&&(l[g]=t[g]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var c=2;c<i;c++)r[c]=n[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2856:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>r,default:()=>s,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var o=n(7462),a=(n(7294),n(3905));const i={},r="Logger Setup",l={unversionedId:"configuration/LOGGER_SETUP",id:"configuration/LOGGER_SETUP",title:"Logger Setup",description:"A Logger is just a class with a LoggerConfig instance and a default tag.",source:"@site/docs/configuration/LOGGER_SETUP.md",sourceDirName:"configuration",slug:"/configuration/LOGGER_SETUP",permalink:"/docs/configuration/LOGGER_SETUP",draft:!1,editUrl:"https://github.com/touchlab/Kermit/tree/main/website/docs/configuration/LOGGER_SETUP.md",tags:[],version:"current",lastUpdatedBy:"Jigar Brahmbhatt",lastUpdatedAt:1706976218,formattedLastUpdatedAt:"Feb 3, 2024",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Configuration",permalink:"/docs/configuration/"},next:{title:"Message Formatting",permalink:"/docs/configuration/MESSAGE_FORMATTING"}},g={},c=[{value:"LoggerConfig",id:"loggerconfig",level:2},{value:"Where to do config?",id:"where-to-do-config",level:3},{value:"StaticConfig vs MutableLoggerConfig",id:"staticconfig-vs-mutableloggerconfig",level:2}],p={toc:c};function s(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"logger-setup"},"Logger Setup"),(0,a.kt)("p",null,"A ",(0,a.kt)("inlineCode",{parentName:"p"},"Logger")," is just a class with a ",(0,a.kt)("inlineCode",{parentName:"p"},"LoggerConfig")," instance and a default tag."),(0,a.kt)("p",null,"You can create your own instance of ",(0,a.kt)("inlineCode",{parentName:"p"},"Logger"),", or configure and call the global ",(0,a.kt)("inlineCode",{parentName:"p"},"Logger")," instance."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},'// Local\nval log = Logger(\n    loggerConfigInit(platformLogWriter(NoTagLogFormatter)), \n    "MyTag"\n)\nlog.i { "Hello Kotlin" }\n\n// Global\nLogger.setLogWriters(platformLogWriter(NoTagLogFormatter))\nLogger.setTag("MyTag")\nLogger.i { "Hello Kotlin" }\n')),(0,a.kt)("p",null,"Which method you choose is up to you, but obviously a local log instance will need to be made available for you code to call, while global is available everywhere. ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/touchlab/KaMPKit/blob/main/shared/src/iosMain/kotlin/co/touchlab/kampkit/KoinIOS.kt#L34"},"For example"),", our pattern has been to inject loggers into components, with the tag applied at that point, rather than specify the tag in each call."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},'single { \n        BreedCallbackViewModel(\n            get(), \n            getWith("BreedCallbackViewModel") // Convenience function to get a Logger with a tag set\n        ) \n    }\n')),(0,a.kt)("h2",{id:"loggerconfig"},"LoggerConfig"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"LoggerConfig")," defines the ",(0,a.kt)("inlineCode",{parentName:"p"},"minSeverity"),", below which log statements will be ignored, and ",(0,a.kt)("inlineCode",{parentName:"p"},"logWriterList"),", the collection of ",(0,a.kt)("inlineCode",{parentName:"p"},"LogWriter")," instances that will be written to."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},"interface LoggerConfig {\n    val minSeverity: Severity\n    val logWriterList: List<LogWriter>\n}\n")),(0,a.kt)("p",null,"When creating our own ",(0,a.kt)("inlineCode",{parentName:"p"},"Logger")," instances above, we call ",(0,a.kt)("inlineCode",{parentName:"p"},"loggerConfigInit"),". That is a convenience function to create a ",(0,a.kt)("inlineCode",{parentName:"p"},"StaticConfig")," instance."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},"fun loggerConfigInit(vararg logWriters: LogWriter, minSeverity: Severity = DEFAULT_MIN_SEVERITY): LoggerConfig =\n    StaticConfig(logWriterList = logWriters.toList(), minSeverity = minSeverity)\n")),(0,a.kt)("h3",{id:"where-to-do-config"},"Where to do config?"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"platformLogWriter()")," is an ",(0,a.kt)("inlineCode",{parentName:"p"},"expect"),"/",(0,a.kt)("inlineCode",{parentName:"p"},"actual")," factory function. You can call it in common code, and it will create a ",(0,a.kt)("inlineCode",{parentName:"p"},"LogWriter")," designed for the platform the code is running on."),(0,a.kt)("p",null,"For more complex configuration, you'll either need platform-specific entry points, or possibly your own ",(0,a.kt)("inlineCode",{parentName:"p"},"expect"),"/",(0,a.kt)("inlineCode",{parentName:"p"},"actual")," factory function(s)."),(0,a.kt)("h2",{id:"staticconfig-vs-mutableloggerconfig"},"StaticConfig vs MutableLoggerConfig"),(0,a.kt)("p",null,"For most use cases, once your logger is set up, you won't need to change the config. ",(0,a.kt)("inlineCode",{parentName:"p"},"StaticConfig")," has values that can't be changed once initializd. That is what you want when creating a local ",(0,a.kt)("inlineCode",{parentName:"p"},"Logger")," instance."),(0,a.kt)("p",null,"The global ",(0,a.kt)("inlineCode",{parentName:"p"},"Logger")," uses ",(0,a.kt)("inlineCode",{parentName:"p"},"MutableLoggerConfig"),", because values need to be changed after that instance has been initialized. It is also possible that you have a use case where the config of your local ",(0,a.kt)("inlineCode",{parentName:"p"},"Logger")," instance needs to be changed after the instance is created. In that case, you can use ",(0,a.kt)("inlineCode",{parentName:"p"},"MutableLoggerConfig")," instead of ",(0,a.kt)("inlineCode",{parentName:"p"},"StaticConfig"),"."),(0,a.kt)("admonition",{title:"Why have StaticConfig at all?",type:"info"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("inlineCode",{parentName:"p"},"Logger")," instances are thread-safe, so ",(0,a.kt)("inlineCode",{parentName:"p"},"MutableLoggerConfig")," needs to be thread-safe. That means config fields are volatile on the JVM and Atomic on native platforms. While the performance impact is likely negligable, if you want to maximize performance, static is better.")),(0,a.kt)("p",null,"If you really like global access, but want static config, you can just create your own global logger."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},'object MyLogger : Logger(\n    config = loggerConfigInit(\n        platformLogWriter(NoTagLogFormatter),\n        minSeverity = Severity.Info\n    ),\n    tag = "MyAppTag"\n)\n\nfun hello(){\n    MyLogger.i { "Hello" }\n}\n')))}s.isMDXComponent=!0}}]);