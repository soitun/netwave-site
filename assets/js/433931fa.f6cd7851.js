"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[28253],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(n),f=a,h=p["".concat(l,".").concat(f)]||p[f]||u[f]||i;return n?r.createElement(h,o(o({ref:t},d),{},{components:n})):r.createElement(h,o({ref:t},d))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},86171:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=["components"],s={description:"An overview of the available guides for the Chrysalis network that also outlines the changes from IOTA 1.0 to IOTA 1.5, aka Chrysalis.",image:"/img/logo/Chrysalis_logo_dark.png",keywords:["IOTA 1.0","IOTA 1.5","changes","guides","migration","developer","reference"]},l="Chrysalis Changelog",c={unversionedId:"reference/changelog",id:"reference/changelog",title:"Chrysalis Changelog",description:"An overview of the available guides for the Chrysalis network that also outlines the changes from IOTA 1.0 to IOTA 1.5, aka Chrysalis.",source:"@site/content/build/introduction-docs/production/docs/reference/changelog.md",sourceDirName:"reference",slug:"/reference/changelog",permalink:"/introduction/reference/changelog",draft:!1,editUrl:"https://github.com/iotaledger/introduction-docs/edit/main/docs/content/build/introduction-docs/production/docs/reference/changelog.md",tags:[],version:"current",frontMatter:{description:"An overview of the available guides for the Chrysalis network that also outlines the changes from IOTA 1.0 to IOTA 1.5, aka Chrysalis.",image:"/img/logo/Chrysalis_logo_dark.png",keywords:["IOTA 1.0","IOTA 1.5","changes","guides","migration","developer","reference"]},sidebar:"mySidebar",previous:{title:"IOTA Hub Migration Guide",permalink:"/introduction/how_tos/migration/hub_migration"},next:{title:"Chrysalis Details",permalink:"/introduction/reference/details"}},d={},u=[],p={toc:u};function f(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"chrysalis-changelog"},"Chrysalis Changelog"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The format of the address was changed, and it is now based on both the ",(0,i.kt)("inlineCode",{parentName:"li"},"derivation path")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"bech32")," standards. For reference, you can read the ",(0,i.kt)("a",{parentName:"li",href:"/introduction/reference/details#iota-15-address-anatomy"},"IOTA address anatomy")," guide."),(0,i.kt)("li",{parentName:"ul"},"The concepts of ",(0,i.kt)("inlineCode",{parentName:"li"},"bundles")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"transactions")," were replaced with ",(0,i.kt)("inlineCode",{parentName:"li"},"messages")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"payloads"),". The ",(0,i.kt)("inlineCode",{parentName:"li"},"message")," is a data structure that is actually being broadcast in the network and represents a node (vertex) in the Tangle graph. For reference, you can read both the ",(0,i.kt)("a",{parentName:"li",href:"/introduction/reference/details#messages-payloads-and-transactions"},"messages, payload, and transactions")," and ",(0,i.kt)("a",{parentName:"li",href:"/introduction/reference/details#selected-message-payloads"},"selected message payloads")," guides."),(0,i.kt)("li",{parentName:"ul"},"The IOTA network is based on a DAG (Directed Acyclic Graph) to store individual ",(0,i.kt)("inlineCode",{parentName:"li"},"messages")," and related ",(0,i.kt)("inlineCode",{parentName:"li"},"transactions"),". However, each ",(0,i.kt)("inlineCode",{parentName:"li"},"message")," can newly reference up to 8 parent messages. For reference, you can read the ",(0,i.kt)("a",{parentName:"li",href:"/introduction/reference/details#messages-payloads-and-transactions"},"messages, payload, and transactions")," guide."),(0,i.kt)("li",{parentName:"ul"},"The signature scheme based on ",(0,i.kt)("inlineCode",{parentName:"li"},"WOTS")," was replaced with the ",(0,i.kt)("inlineCode",{parentName:"li"},"Ed25519")," signature scheme. For reference, you can read the ",(0,i.kt)("a",{parentName:"li",href:"/introduction/reference/details#seed-and-addresses"},"seed and addresses")," guide."),(0,i.kt)("li",{parentName:"ul"},"Due to the changed signature scheme, IOTA addresses are reusable without any negative security impact. Compared to IOTA 1.0, which was based on ternary, IOTA 1.5 is based on binary and is thus very efficient on all kinds of current hardware devices. In contrast to IOTA 1.0, IOTA 1.5 addresses are perfectly reusable; even if one spends funds from the given address, it can be used again. For reference, you can read the ",(0,i.kt)("a",{parentName:"li",href:"/introduction/reference/details#addresskey-space"},"address/key space")," guide."),(0,i.kt)("li",{parentName:"ul"},"Originally, IOTA 1.0 used an ",(0,i.kt)("inlineCode",{parentName:"li"},"account-based model")," for tracking individual iota tokens. Chrysalis embraced the ",(0,i.kt)("inlineCode",{parentName:"li"},"Unspent Transaction Output")," (also known as ",(0,i.kt)("inlineCode",{parentName:"li"},"UTXO"),") model to track tokens and token holders. For reference, you can read the ",(0,i.kt)("a",{parentName:"li",href:"/introduction/reference/details#unspent-transaction-output-utxo"},"Unspent Transaction Output")," guide."),(0,i.kt)("li",{parentName:"ul"},"The approach to client libraries was completely reengineered from the ground up. There are new official client libraries that serve as ",(0,i.kt)("inlineCode",{parentName:"li"},"one-source-code-of-truth")," to IOTA users and can be combined in a modular fashion based on particular use cases. All libraries provide a binding to other programming languages. For reference, you can read an overview of ",(0,i.kt)("a",{parentName:"li",href:"/introduction/explanations/libraries"},"client libraries"),"."),(0,i.kt)("li",{parentName:"ul"},"Our official IOTA tools, such as wallet software, use the same libraries under the hood so any developer may work in the same environment as we do."),(0,i.kt)("li",{parentName:"ul"},"The official client libraries embraced an ",(0,i.kt)("inlineCode",{parentName:"li"},"Hierarchical Deterministic Wallets")," approach which is fully ",(0,i.kt)("inlineCode",{parentName:"li"},"BIP44")," compatible. For reference, you can read the ",(0,i.kt)("a",{parentName:"li",href:"/introduction/reference/details#addresskey-space"},"address/key space")," guide."),(0,i.kt)("li",{parentName:"ul"},"There is a new official wallet software called Firefly. See ",(0,i.kt)("a",{parentName:"li",href:"https://firefly.iota.org/"},"Firefly")," and the Repo at: ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/iotaledger/firefly"},"Firefly Github"))))}f.isMDXComponent=!0}}]);