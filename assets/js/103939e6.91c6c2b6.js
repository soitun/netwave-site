"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[1500],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return f}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),p=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(n),f=r,m=u["".concat(c,".").concat(f)]||u[f]||d[f]||o;return n?a.createElement(m,i(i({ref:t},l),{},{components:n})):a.createElement(m,i({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},370:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return d}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),i=["components"],s={keywords:["Stardust","Shimmer","Upgrades","Data transactions","Data processing","Protocol Improvements","explanation"],description:"Data transactions are supported in Stardust, but application specific data processing is off-loaded to external applications.",image:"/img/logo/preview.png"},c="Offloading Data Processing",p={unversionedId:"explanations/what_is_stardust/data_processing",id:"explanations/what_is_stardust/data_processing",title:"Offloading Data Processing",description:"Data transactions are supported in Stardust, but application specific data processing is off-loaded to external applications.",source:"@site/content/build/introduction-docs/develop/docs/explanations/what_is_stardust/data_processing.md",sourceDirName:"explanations/what_is_stardust",slug:"/explanations/what_is_stardust/data_processing",permalink:"/introduction/develop/explanations/what_is_stardust/data_processing",draft:!1,editUrl:"https://github.com/iotaledger/chrysalis-docs/edit/develop/docs/content/build/introduction-docs/develop/docs/explanations/what_is_stardust/data_processing.md",tags:[],version:"current",frontMatter:{keywords:["Stardust","Shimmer","Upgrades","Data transactions","Data processing","Protocol Improvements","explanation"],description:"Data transactions are supported in Stardust, but application specific data processing is off-loaded to external applications.",image:"/img/logo/preview.png"},sidebar:"mySidebar",previous:{title:"Protecting Users",permalink:"/introduction/develop/explanations/what_is_stardust/protecting_users"},next:{title:"Dynamic Proof of Work",permalink:"/introduction/develop/explanations/what_is_stardust/dynamic_pow"}},l={},d=[],u={toc:d};function f(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"offloading-data-processing"},"Offloading Data Processing"),(0,o.kt)("p",null,"IOTA is unique in that it provides data-only transactions in the Tangle. However, use-cases that build on this feature\nface two major problems:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The Tangle is permissionless, therefore anyone can send data blocks with any content and the blocks are not\nauthenticated with signatures like value transactions. The source of the data published through the Tangle is not\nidentifiable by the core protocol."),(0,o.kt)("li",{parentName:"ul"},"Data use-case applications often rely on structured, filtered and processed application-specific data. Such\nfunctionality puts unnecessary load on network nodes running the core protocol.")),(0,o.kt)("p",null,"Stardust removes any data processing from the core protocol, as supporting use-case specific processing requirements\nin the core protocol is unfeasible \u2013 and anyway, it would jeopardize node performance and hence transaction throughput\nin the network."),(0,o.kt)("p",null,"Data in Stardust is published via ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/tips/blob/main/tips/TIP-0023/tip-0023.md"},"Tagged Data Payloads"),", which are treated\nas binary data by the protocol. It is recommended that processing and exposure of application-specific data published\nthrough these payloads is implemented by second layer protocols. One major benefit of this approach is its flexibility:\neach application can define and implement their own requirements, for example to authenticate data payloads based on\ndigital signatures, indexing by custom fields or validating payloads against expected data structures."),(0,o.kt)("p",null,"The re-engineered node software provides a Remote Procedure Call (gRPC) interface, called IOTA Node Extension (",(0,o.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/inx/blob/develop/proto/inx.proto"},"INX"),") to external applications to interact with nodes for example to\nlisten to all network activity. Data use-cases are encouraged to build their custom data processing applications and\nconnect them to the Tangle via INX."),(0,o.kt)("p",null,"To stay consistent with this new architecture, Stardust also removes the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/tips/discussions/53"},"ledger indexing"),"\nfrom the core protocol and implements a ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/gohornet/inx-indexer"},"ledger indexer application")," via an INX module."))}f.isMDXComponent=!0}}]);