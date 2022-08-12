"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[57518],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return g}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=u(r),g=o,f=d["".concat(s,".").concat(g)]||d[g]||p[g]||i;return r?n.createElement(f,a(a({ref:t},l),{},{components:r})):n.createElement(f,a({ref:t},l))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var u=2;u<i;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},34254:function(e,t,r){r.r(t),r.d(t,{assets:function(){return g},contentTitle:function(){return p},default:function(){return h},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return f}});var n=r(87462),o=r(63366),i=(r(67294),r(3905)),a=["components"],c={toc:[{value:"Stronghold Store",id:"stronghold-store",level:2}]};function s(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"stronghold-store"},"Stronghold Store"),(0,i.kt)("p",null,"This crate contains a key/value cache for the Stronghold Engine. Data is stored in key-value pairs and an expiration timestamp can be set. The data is stored in a structured format and can be quickly retrieved at will. Along with the Vault, this crate is used to store general unencrypted data.  The data is written into the snapshot like with the vault in an encrypted format."))}s.isMDXComponent=!0;var u=["components"],l={description:"Store contains a key-value cache for the Stronghold Engine.",image:"/img/logo/Stronghold_icon.png",keywords:["reference","rust","store","key:value","data"]},p="Structure: Engine::Store",d={unversionedId:"reference/structure/engine/store",id:"reference/structure/engine/store",title:"Structure: Engine::Store",description:"Store contains a key-value cache for the Stronghold Engine.",source:"@site/content/build/stronghold.rs/develop/documentation/docs/reference/structure/engine/store.md",sourceDirName:"reference/structure/engine",slug:"/reference/structure/engine/store",permalink:"/stronghold.rs/reference/structure/engine/store",draft:!1,editUrl:"https://github.com/iotaledger/stronghold/edit/dev/documentation/content/build/stronghold.rs/develop/documentation/docs/reference/structure/engine/store.md",tags:[],version:"current",frontMatter:{description:"Store contains a key-value cache for the Stronghold Engine.",image:"/img/logo/Stronghold_icon.png",keywords:["reference","rust","store","key:value","data"]},sidebar:"mySidebar",previous:{title:"Structure: Engine::Vault",permalink:"/stronghold.rs/reference/structure/engine/vault"},next:{title:"Structure: Runtime",permalink:"/stronghold.rs/reference/structure/engine/runtime"}},g={},f=[],m={toc:f};function h(e){var t=e.components,r=(0,o.Z)(e,u);return(0,i.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"structure-enginestore"},"Structure: Engine::Store"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/stronghold.rs/tree/dev/engine/src/store"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/github-source-blue.svg",alt:"github"})),"  ",(0,i.kt)("a",{parentName:"p",href:"https://docs.rs/stronghold_engine/engine/latest/store/index.html"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/rust-docs-green.svg",alt:"github"}))," ",(0,i.kt)("a",{parentName:"p",href:"https://crates.io/crates/stronghold-engine"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/crates/v/stronghold-engine.svg",alt:null}))),(0,i.kt)(s,{mdxType:"Store"}))}h.isMDXComponent=!0}}]);