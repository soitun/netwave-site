"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[84263],{54391:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return u}});var a=n(87462),o=n(63366),r=(n(67294),n(3905)),i=["components"],c={description:"Each chain is run by a network of validator nodes which run a consensus on the chain state update.",image:"/img/logo/WASP_logo_dark.png",keywords:["validators","validator nodes","access nodes","consensus","state update","explanation"]},s="Validators",l={unversionedId:"guide/core_concepts/validators",id:"guide/core_concepts/validators",title:"Validators",description:"Each chain is run by a network of validator nodes which run a consensus on the chain state update.",source:"@site/content/build/wasp/develop/documentation/docs/guide/core_concepts/validators.md",sourceDirName:"guide/core_concepts",slug:"/guide/core_concepts/validators",permalink:"/smart-contracts/guide/core_concepts/validators",draft:!1,editUrl:"https://github.com/iotaledger/wasp/edit/develop/documentation/content/build/wasp/develop/documentation/docs/guide/core_concepts/validators.md",tags:[],version:"current",frontMatter:{description:"Each chain is run by a network of validator nodes which run a consensus on the chain state update.",image:"/img/logo/WASP_logo_dark.png",keywords:["validators","validator nodes","access nodes","consensus","state update","explanation"]},sidebar:"tutorialSidebar",previous:{title:"ISC Architecture",permalink:"/smart-contracts/guide/core_concepts/isc-architecture"},next:{title:"Consensus",permalink:"/smart-contracts/guide/core_concepts/consensus"}},d={},u=[{value:"Access nodes",id:"access-nodes",level:2}],p={toc:u};function h(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"validators"},"Validators"),(0,r.kt)("p",null,"Each chain is run by that chain's ",(0,r.kt)("em",{parentName:"p"},"committee of validators"),". This committee owns a key that is split between all of its validators. Each key share is useless on its own, but a collective signature gives validators full control over the chain."),(0,r.kt)("p",null,"The committee of validators is responsible for executing the smart contracts in the chain, and thus calculating a ",(0,r.kt)("em",{parentName:"p"},"state update"),".\nAll validators execute exactly the same code and reach consensus on the state update.\nOnce the next state is computed and validated, it is committed on each validator's database, a new ",(0,r.kt)("em",{parentName:"p"},"block")," is added to the chain (containing the state mutations), and the ",(0,r.kt)("em",{parentName:"p"},"state hash")," is saved in the L1 ledger."),(0,r.kt)("p",null,"The committee of validators can be rotated depending on the governance model.\nBy rotating the committee of validators, validators can be deleted, added, or replaced."),(0,r.kt)("p",null,"ISC does not define how to select validators to form a committee: it could be a solitary choice of the chain's owner, or it could be a ",(0,r.kt)("a",{parentName:"p",href:"https://wiki.assembly.sc/learn/introduction/"},"public competition")," between candidates.\nISC does not define how validators are rewarded, either."),(0,r.kt)("h2",{id:"access-nodes"},"Access nodes"),(0,r.kt)("p",null,"It is possible to have some nodes that act as ",(0,r.kt)("em",{parentName:"p"},"access nodes")," to the chain, without being be part of the committee of validators.\nAll nodes in the subnet (validators and non-validators) are connected to each other through statically assigned trust relationships, and each node is also connected to the IOTA L1 node in order to receive updates on the chain\u2019s L1 account."),(0,r.kt)("p",null,"Any node can optionally provide access to smart contracts for external callers, allowing them to:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Query the state of the chain (i.e. ",(0,r.kt)("em",{parentName:"li"},"view calls"),")"),(0,r.kt)("li",{parentName:"ul"},"Send off-ledger requests directly to the node (instead of sending an on-ledger request as a L1 transaction)")),(0,r.kt)("p",null,"It is common for validator nodes to be part of a private subnet, and have only a group of access nodes exposed to the outside world, protecting the committee from external attacks."),(0,r.kt)("p",null,"The management of validator and access nodes is done through the ",(0,r.kt)("a",{parentName:"p",href:"./core_contracts/governance"},(0,r.kt)("inlineCode",{parentName:"a"},"governance")," core contract"),"."))}h.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return h}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=l(n),h=o,m=p["".concat(s,".").concat(h)]||p[h]||u[h]||r;return n?a.createElement(m,i(i({ref:t},d),{},{components:n})):a.createElement(m,i({ref:t},d))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<r;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);