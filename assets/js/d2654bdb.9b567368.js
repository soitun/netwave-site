"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[81609],{3905:(t,e,a)=>{a.d(e,{Zo:()=>u,kt:()=>g});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),d=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},u=function(t){var e=d(t.components);return n.createElement(p.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},k=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),k=d(a),g=r,s=k["".concat(p,".").concat(g)]||k[g]||m[g]||l;return a?n.createElement(s,i(i({ref:e},u),{},{components:a})):n.createElement(s,i({ref:e},u))}));function g(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=k;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var d=2;d<l;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},64669:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var n=a(87462),r=(a(67294),a(3905));const l={description:"This section describes the configuration parameters and their types for INX-Coordinator.",keywords:["IOTA Node","Hornet Node","Coordinator","Configuration","JSON","Customize","Config","reference"]},i="Core Configuration",o={unversionedId:"configuration",id:"configuration",title:"Core Configuration",description:"This section describes the configuration parameters and their types for INX-Coordinator.",source:"@site/content/build/inx-coordinator/develop/documentation/docs/configuration.md",sourceDirName:".",slug:"/configuration",permalink:"/inx-coordinator/develop/configuration",draft:!1,editUrl:"https://github.com/iotaledger/inx-coordinator/edit/develop/documentation/content/build/inx-coordinator/develop/documentation/docs/configuration.md",tags:[],version:"current",frontMatter:{description:"This section describes the configuration parameters and their types for INX-Coordinator.",keywords:["IOTA Node","Hornet Node","Coordinator","Configuration","JSON","Customize","Config","reference"]},sidebar:"mySidebar",previous:{title:"Welcome to INX-Coordinator",permalink:"/inx-coordinator/develop/welcome"}},p={},d=[{value:'<a id="app"></a> 1. Application',id:"-1-application",level:2},{value:'<a id="app_shutdown"></a> Shutdown',id:"-shutdown",level:3},{value:'<a id="app_shutdown_log"></a> Log',id:"-log",level:3},{value:'<a id="logger"></a> 2. Logger',id:"-2-logger",level:2},{value:'<a id="inx"></a> 3. INX',id:"-3-inx",level:2},{value:'<a id="coordinator"></a> 4. Coordinator',id:"-4-coordinator",level:2},{value:'<a id="coordinator_signing"></a> Signing',id:"-signing",level:3},{value:'<a id="coordinator_quorum"></a> Quorum',id:"-quorum",level:3},{value:'<a id="coordinator_checkpoints"></a> Checkpoints',id:"-checkpoints",level:3},{value:'<a id="coordinator_tipsel"></a> Tipselection',id:"-tipselection",level:3},{value:'<a id="coordinator_blockbackups"></a> BlockBackups',id:"-blockbackups",level:3},{value:'<a id="migrator"></a> 5. Migrator',id:"-5-migrator",level:2},{value:'<a id="receipts"></a> 6. Receipts',id:"-6-receipts",level:2},{value:'<a id="receipts_validator"></a> Validator',id:"-validator",level:3},{value:'<a id="receipts_validator_api"></a> API',id:"-api",level:3},{value:'<a id="receipts_validator_coordinator"></a> Coordinator',id:"-coordinator",level:3},{value:'<a id="profiling"></a> 7. Profiling',id:"-7-profiling",level:2}],u={toc:d};function m(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"core-configuration"},"Core Configuration"),(0,r.kt)("p",null,"INX-Coordinator uses a JSON standard format as a config file. If you are unsure about JSON syntax, you can find more information in the ",(0,r.kt)("a",{parentName:"p",href:"https://www.json.org"},"official JSON specs"),"."),(0,r.kt)("p",null,"You can change the path of the config file by using the ",(0,r.kt)("inlineCode",{parentName:"p"},"-c")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"--config")," argument while executing ",(0,r.kt)("inlineCode",{parentName:"p"},"inx-coordinator")," executable."),(0,r.kt)("p",null,"For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"inx-coordinator -c config_defaults.json\n")),(0,r.kt)("p",null,"You can always get the most up-to-date description of the config parameters by running:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"inx-coordinator -h --full\n")),(0,r.kt)("h2",{id:"-1-application"},(0,r.kt)("a",{id:"app"})," 1. Application"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"checkForUpdates"),(0,r.kt)("td",{parentName:"tr",align:null},"Whether to check for updates of the application or not"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"true")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#app_shutdown"},"shutdown")),(0,r.kt)("td",{parentName:"tr",align:null},"Configuration for shutdown"),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h3",{id:"-shutdown"},(0,r.kt)("a",{id:"app_shutdown"})," Shutdown"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"stopGracePeriod"),(0,r.kt)("td",{parentName:"tr",align:null},"The maximum time to wait for background processes to finish during shutdown before terminating the app"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},'"5m"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#app_shutdown_log"},"log")),(0,r.kt)("td",{parentName:"tr",align:null},"Configuration for log"),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h3",{id:"-log"},(0,r.kt)("a",{id:"app_shutdown_log"})," Log"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"enabled"),(0,r.kt)("td",{parentName:"tr",align:null},"Whether to store self-shutdown events to a log file"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"true")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"filePath"),(0,r.kt)("td",{parentName:"tr",align:null},"The file path to the self-shutdown log"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},'"shutdown.log"')))),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'  {\n    "app": {\n      "checkForUpdates": true,\n      "shutdown": {\n        "stopGracePeriod": "5m",\n        "log": {\n          "enabled": true,\n          "filePath": "shutdown.log"\n        }\n      }\n    }\n  }\n')),(0,r.kt)("h2",{id:"-2-logger"},(0,r.kt)("a",{id:"logger"})," 2. Logger"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"level"),(0,r.kt)("td",{parentName:"tr",align:null},"The minimum enabled logging level"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},'"info"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"disableCaller"),(0,r.kt)("td",{parentName:"tr",align:null},"Stops annotating logs with the calling function's file name and line number"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"true")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"disableStacktrace"),(0,r.kt)("td",{parentName:"tr",align:null},"Disables automatic stacktrace capturing"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"false")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"stacktraceLevel"),(0,r.kt)("td",{parentName:"tr",align:null},"The level stacktraces are captured and above"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},'"panic"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"encoding"),(0,r.kt)("td",{parentName:"tr",align:null},'The logger\'s encoding (options: "json", "console")'),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},'"console"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"outputPaths"),(0,r.kt)("td",{parentName:"tr",align:null},"A list of URLs, file paths or stdout/stderr to write logging output to"),(0,r.kt)("td",{parentName:"tr",align:null},"array"),(0,r.kt)("td",{parentName:"tr",align:null},"stdout")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"disableEvents"),(0,r.kt)("td",{parentName:"tr",align:null},"Prevents log messages from being raced as events"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"true")))),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'  {\n    "logger": {\n      "level": "info",\n      "disableCaller": true,\n      "disableStacktrace": false,\n      "stacktraceLevel": "panic",\n      "encoding": "console",\n      "outputPaths": [\n        "stdout"\n      ],\n      "disableEvents": true\n    }\n  }\n')),(0,r.kt)("h2",{id:"-3-inx"},(0,r.kt)("a",{id:"inx"})," 3. INX"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"address"),(0,r.kt)("td",{parentName:"tr",align:null},"The INX address to which to connect to"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},'"localhost:9029"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"maxConnectionAttempts"),(0,r.kt)("td",{parentName:"tr",align:null},"The amount of times the connection to INX will be attempted before it fails (1 attempt per second)"),(0,r.kt)("td",{parentName:"tr",align:null},"uint"),(0,r.kt)("td",{parentName:"tr",align:null},"30")))),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'  {\n    "inx": {\n      "address": "localhost:9029",\n      "maxConnectionAttempts": 30\n    }\n  }\n')),(0,r.kt)("h2",{id:"-4-coordinator"},(0,r.kt)("a",{id:"coordinator"})," 4. Coordinator"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"stateFilePath"),(0,r.kt)("td",{parentName:"tr",align:null},"The path to the state file of the coordinator"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},'"coordinator.state"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"interval"),(0,r.kt)("td",{parentName:"tr",align:null},"The interval milestones are issued"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},'"5s"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"milestoneTimeout"),(0,r.kt)("td",{parentName:"tr",align:null},"The duration after which an event is triggered if no new milestones are received"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},'"30s"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#coordinator_signing"},"signing")),(0,r.kt)("td",{parentName:"tr",align:null},"Configuration for signing"),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#coordinator_quorum"},"quorum")),(0,r.kt)("td",{parentName:"tr",align:null},"Configuration for quorum"),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#coordinator_checkpoints"},"checkpoints")),(0,r.kt)("td",{parentName:"tr",align:null},"Configuration for checkpoints"),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#coordinator_tipsel"},"tipsel")),(0,r.kt)("td",{parentName:"tr",align:null},"Configuration for Tipselection"),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#coordinator_blockbackups"},"blockBackups")),(0,r.kt)("td",{parentName:"tr",align:null},"Configuration for blockBackups"),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h3",{id:"-signing"},(0,r.kt)("a",{id:"coordinator_signing"})," Signing"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"provider"),(0,r.kt)("td",{parentName:"tr",align:null},"The signing provider the coordinator uses to sign a milestone (local/remote)"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},'"local"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"remoteAddress"),(0,r.kt)("td",{parentName:"tr",align:null},"The address of the remote signing provider (insecure connection!)"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},'"localhost:12345"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"retryTimeout"),(0,r.kt)("td",{parentName:"tr",align:null},"Defines the timeout between signing retries"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},'"2s"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"retryAmount"),(0,r.kt)("td",{parentName:"tr",align:null},"Defines the number of signing retries to perform before shutting down the node"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"10")))),(0,r.kt)("h3",{id:"-quorum"},(0,r.kt)("a",{id:"coordinator_quorum"})," Quorum"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"enabled"),(0,r.kt)("td",{parentName:"tr",align:null},"Whether the coordinator quorum is enabled"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"false")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"timeout"),(0,r.kt)("td",{parentName:"tr",align:null},"The timeout until a node in the quorum must have answered"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},'"2s"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"groups"),(0,r.kt)("td",{parentName:"tr",align:null},"Defines the quorum groups used to ask other nodes for correct ledger state of the coordinator."),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null},"see example below")))),(0,r.kt)("h3",{id:"-checkpoints"},(0,r.kt)("a",{id:"coordinator_checkpoints"})," Checkpoints"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"maxTrackedBlocks"),(0,r.kt)("td",{parentName:"tr",align:null},"Maximum amount of known blocks for milestone tipselection. If this limit is exceeded, a new checkpoint is issued."),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"10000")))),(0,r.kt)("h3",{id:"-tipselection"},(0,r.kt)("a",{id:"coordinator_tipsel"})," Tipselection"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"minHeaviestBranchUnreferencedBlocksThreshold"),(0,r.kt)("td",{parentName:"tr",align:null},"Minimum threshold of unreferenced blocks in the heaviest branch"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"20")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"maxHeaviestBranchTipsPerCheckpoint"),(0,r.kt)("td",{parentName:"tr",align:null},"Maximum amount of checkpoint blocks with heaviest branch tips that are picked if the heaviest branch is not below 'MinHeaviestBranchUnreferencedBlocksThreshold' before"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"10")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"randomTipsPerCheckpoint"),(0,r.kt)("td",{parentName:"tr",align:null},"Amount of checkpoint blocks with random tips that are picked if a checkpoint is issued and at least one heaviest branch tip was found, otherwise no random tips will be picked"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"heaviestBranchSelectionTimeout"),(0,r.kt)("td",{parentName:"tr",align:null},"The maximum duration to select the heaviest branch tips"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},'"100ms"')))),(0,r.kt)("h3",{id:"-blockbackups"},(0,r.kt)("a",{id:"coordinator_blockbackups"})," BlockBackups"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"enabled"),(0,r.kt)("td",{parentName:"tr",align:null},"Whether all blocks that are issued by the coordinator should be stored to disk before being submitted to the network"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"true")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"folderPath"),(0,r.kt)("td",{parentName:"tr",align:null},"The path to the folder where block backups are stored"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},'"block_backups"')))),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'  {\n    "coordinator": {\n      "stateFilePath": "coordinator.state",\n      "interval": "5s",\n      "milestoneTimeout": "30s",\n      "signing": {\n        "provider": "local",\n        "remoteAddress": "localhost:12345",\n        "retryTimeout": "2s",\n        "retryAmount": 10\n      },\n      "quorum": {\n        "enabled": false,\n        "timeout": "2s",\n        "groups": {}\n      },\n      "checkpoints": {\n        "maxTrackedBlocks": 10000\n      },\n      "tipsel": {\n        "minHeaviestBranchUnreferencedBlocksThreshold": 20,\n        "maxHeaviestBranchTipsPerCheckpoint": 10,\n        "randomTipsPerCheckpoint": 3,\n        "heaviestBranchSelectionTimeout": "100ms"\n      },\n      "blockBackups": {\n        "enabled": true,\n        "folderPath": "block_backups"\n      }\n    }\n  }\n')),(0,r.kt)("h2",{id:"-5-migrator"},(0,r.kt)("a",{id:"migrator"})," 5. Migrator"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"enabled"),(0,r.kt)("td",{parentName:"tr",align:null},"Whether the migrator plugin is enabled"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"false")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"stateFilePath"),(0,r.kt)("td",{parentName:"tr",align:null},"Path to the state file of the migrator"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},'"migrator.state"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"receiptMaxEntries"),(0,r.kt)("td",{parentName:"tr",align:null},"The max amount of entries to embed within a receipt"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"110")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"queryCooldownPeriod"),(0,r.kt)("td",{parentName:"tr",align:null},"The cooldown period for the service to ask for new data from the legacy node in case the migrator encounters an error"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},'"5s"')))),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'  {\n    "migrator": {\n      "enabled": false,\n      "stateFilePath": "migrator.state",\n      "receiptMaxEntries": 110,\n      "queryCooldownPeriod": "5s"\n    }\n  }\n')),(0,r.kt)("h2",{id:"-6-receipts"},(0,r.kt)("a",{id:"receipts"})," 6. Receipts"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#receipts_validator"},"validator")),(0,r.kt)("td",{parentName:"tr",align:null},"Configuration for validator"),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h3",{id:"-validator"},(0,r.kt)("a",{id:"receipts_validator"})," Validator"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#receipts_validator_api"},"api")),(0,r.kt)("td",{parentName:"tr",align:null},"Configuration for API"),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#receipts_validator_coordinator"},"coordinator")),(0,r.kt)("td",{parentName:"tr",align:null},"Configuration for coordinator"),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h3",{id:"-api"},(0,r.kt)("a",{id:"receipts_validator_api"})," API"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"address"),(0,r.kt)("td",{parentName:"tr",align:null},"Address of the legacy node API to query for white-flag confirmation data"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},'"http://localhost:14266"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"timeout"),(0,r.kt)("td",{parentName:"tr",align:null},"Timeout of API calls"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},'"5s"')))),(0,r.kt)("h3",{id:"-coordinator"},(0,r.kt)("a",{id:"receipts_validator_coordinator"})," Coordinator"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"address"),(0,r.kt)("td",{parentName:"tr",align:null},"Address of the legacy coordinator"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},'"UDYXTZBE9GZGPM9SSQV9LTZNDLJIZMPUVVXYXFYVBLIEUHLSEWFTKZZLXYRHHWVQV9MNNX9KZC9D9UZWZ"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"merkleTreeDepth"),(0,r.kt)("td",{parentName:"tr",align:null},"Depth of the Merkle tree of the coordinator"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"24")))),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'  {\n    "receipts": {\n      "validator": {\n        "api": {\n          "address": "http://localhost:14266",\n          "timeout": "5s"\n        },\n        "coordinator": {\n          "address": "UDYXTZBE9GZGPM9SSQV9LTZNDLJIZMPUVVXYXFYVBLIEUHLSEWFTKZZLXYRHHWVQV9MNNX9KZC9D9UZWZ",\n          "merkleTreeDepth": 24\n        }\n      }\n    }\n  }\n')),(0,r.kt)("h2",{id:"-7-profiling"},(0,r.kt)("a",{id:"profiling"})," 7. Profiling"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"enabled"),(0,r.kt)("td",{parentName:"tr",align:null},"Whether the profiling plugin is enabled"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"false")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"bindAddress"),(0,r.kt)("td",{parentName:"tr",align:null},"The bind address on which the profiler listens on"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},'"localhost:6060"')))),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'  {\n    "profiling": {\n      "enabled": false,\n      "bindAddress": "localhost:6060"\n    }\n  }\n')))}m.isMDXComponent=!0}}]);