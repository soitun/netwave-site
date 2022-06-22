"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[6931],{19047:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return d},default:function(){return u},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var n=r(87462),i=r(63366),a=(r(67294),r(3905)),o=["components"],l={description:"The most important concepts that developers will need to know to utilize IOTA Identity to its full potential.",image:"/img/Identity_icon.png",keywords:["Identity","guide","TOC","overview","reference"]},d="IOTA Identity Framework Guide",c={unversionedId:"introduction",id:"introduction",title:"IOTA Identity Framework Guide",description:"The most important concepts that developers will need to know to utilize IOTA Identity to its full potential.",source:"@site/content/build/identity.rs/develop/documentation/docs/introduction.md",sourceDirName:".",slug:"/introduction",permalink:"/identity.rs/develop/introduction",draft:!1,editUrl:"https://github.com/iotaledger/identity.rs/edit/dev/documentation/content/build/identity.rs/develop/documentation/docs/introduction.md",tags:[],version:"current",frontMatter:{description:"The most important concepts that developers will need to know to utilize IOTA Identity to its full potential.",image:"/img/Identity_icon.png",keywords:["Identity","guide","TOC","overview","reference"]},sidebar:"docs",next:{title:"Introduction to Decentralized Identity",permalink:"/identity.rs/develop/decentralized_identity"}},s={},p=[{value:"Overview",id:"overview",level:2},{value:"Chapter 1: Decentralized Identity",id:"chapter-1-decentralized-identity",level:3},{value:"Chapter 2: Getting Started",id:"chapter-2-getting-started",level:3},{value:"Chapter 3: Concepts",id:"chapter-3-concepts",level:3},{value:"Chapter 3.1: Decentralized Identifiers (DID)",id:"chapter-31-decentralized-identifiers-did",level:3},{value:"Chapter 3.2: Verifiable Credentials (VC)",id:"chapter-32-verifiable-credentials-vc",level:3},{value:"Chapter 3.3: Advanced Concepts",id:"chapter-33-advanced-concepts",level:3},{value:"Chapter 4: Programming Languages",id:"chapter-4-programming-languages",level:3},{value:"Chapter 5: Tutorials",id:"chapter-5-tutorials",level:3},{value:"Chapter 6: Specification",id:"chapter-6-specification",level:3},{value:"Chapter 7: Glossary",id:"chapter-7-glossary",level:3},{value:"Chapter 8: Contribute",id:"chapter-8-contribute",level:3},{value:"Chapter 9: Workflow",id:"chapter-9-workflow",level:3},{value:"Chapter 10: Contact",id:"chapter-10-contact",level:3},{value:"Chapter 11: FAQ",id:"chapter-11-faq",level:3}],h={toc:p};function u(e){var t=e.components,r=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"iota-identity-framework-guide"},"IOTA Identity Framework Guide"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://github.com/iotaledger/identity.rs/raw/dev/.meta/identity_banner.png",alt:"IOTA Identity"})),(0,a.kt)("p",null,"The IOTA Identity framework implements the most common standards and patterns for Decentralized Identity in both a DLT agnostic and ",(0,a.kt)("inlineCode",{parentName:"p"},"iota")," method specification manner. It is designed to work for Identity for People, Organizations, Things, and Objects acting as a unifying-layer of trust between everyone and everything."),(0,a.kt)("p",null,"In this guide, we will go through the most important concepts that developers will need to know to utilize IOTA Identity to its full potential."),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("h3",{id:"chapter-1-decentralized-identity"},(0,a.kt)("a",{parentName:"h3",href:"./decentralized_identity"},"Chapter 1: Decentralized Identity")),(0,a.kt)("p",null,"Describes the concept of Decentralized or Self-Sovereign Identities (SSI), how it applies to People, Organizations and Things, and why IOTA is used."),(0,a.kt)("h3",{id:"chapter-2-getting-started"},(0,a.kt)("a",{parentName:"h3",href:"./getting_started/overview"},"Chapter 2: Getting Started")),(0,a.kt)("p",null,"Gives a quick overview of how to install the library and creating your first DID."),(0,a.kt)("h3",{id:"chapter-3-concepts"},"Chapter 3: Concepts"),(0,a.kt)("p",null,"Describes relevant concepts of SSI and how to utilize them in the library."),(0,a.kt)("h3",{id:"chapter-31-decentralized-identifiers-did"},(0,a.kt)("a",{parentName:"h3",href:"./concepts/decentralized_identifiers/overview"},"Chapter 3.1: Decentralized Identifiers (DID)")),(0,a.kt)("p",null,"Explains the DID standard from W3C and how to manipulate DID Documents."),(0,a.kt)("h3",{id:"chapter-32-verifiable-credentials-vc"},(0,a.kt)("a",{parentName:"h3",href:"./concepts/verifiable_credentials/overview"},"Chapter 3.2: Verifiable Credentials (VC)")),(0,a.kt)("p",null,"Explains the VC standard from W3C, how to create and revoke VCs, and how to use Verifiable Presentations."),(0,a.kt)("h3",{id:"chapter-33-advanced-concepts"},(0,a.kt)("a",{parentName:"h3",href:"./concepts/advanced/overview"},"Chapter 3.3: Advanced Concepts")),(0,a.kt)("p",null,"This chapter is meant for those that want to push the IOTA Identity framework to its limits, utilizing the more complex, yet more flexible lower-level libraries, allowing developers to optimize their implementation, take control over storage/security, and add features to the framework. "),(0,a.kt)("h3",{id:"chapter-4-programming-languages"},(0,a.kt)("a",{parentName:"h3",href:"./libraries/overview"},"Chapter 4: Programming Languages")),(0,a.kt)("p",null,'While the framework itself is developed in the Rust programming language, we also provide bindings, or "Foreign Function Interfaces" (FFI), to other languages. These will have separate getting started sections, making the rest of the guide language agnostic, focusing on the conceptual level. '),(0,a.kt)("h3",{id:"chapter-5-tutorials"},(0,a.kt)("a",{parentName:"h3",href:"./tutorials/overview"},"Chapter 5: Tutorials")),(0,a.kt)("p",null,"Contains end-to-end examples using the library to achieve common use-cases."),(0,a.kt)("h3",{id:"chapter-6-specification"},(0,a.kt)("a",{parentName:"h3",href:"./specs/overview"},"Chapter 6: Specification")),(0,a.kt)("p",null,"While IOTA Identity implements many existing standards, it also adds some additional features we would like to standardize ourselves. This chapter covers these features and how they work in great detail. These are not light reads and can be skipped. "),(0,a.kt)("h3",{id:"chapter-7-glossary"},(0,a.kt)("a",{parentName:"h3",href:"./glossary"},"Chapter 7: Glossary")),(0,a.kt)("p",null,"A list of all terminology used in this guide, the framework, and all materials surrounding it. "),(0,a.kt)("h3",{id:"chapter-8-contribute"},(0,a.kt)("a",{parentName:"h3",href:"./contribute"},"Chapter 8: Contribute")),(0,a.kt)("p",null,"A simple guide on how to contribute to the framework."),(0,a.kt)("h3",{id:"chapter-9-workflow"},(0,a.kt)("a",{parentName:"h3",href:"./workflow"},"Chapter 9: Workflow")),(0,a.kt)("p",null,"An overview of the workflow to design, develop and release the framework."),(0,a.kt)("h3",{id:"chapter-10-contact"},(0,a.kt)("a",{parentName:"h3",href:"./contact"},"Chapter 10: Contact")),(0,a.kt)("p",null,"How to contact the maintainers."),(0,a.kt)("h3",{id:"chapter-11-faq"},(0,a.kt)("a",{parentName:"h3",href:"./faq"},"Chapter 11: FAQ")),(0,a.kt)("p",null,"Overview of the most Frequently Asked Questions and their answers."))}u.isMDXComponent=!0},3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return u}});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var d=n.createContext({}),c=function(e){var t=n.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,d=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),h=c(r),u=i,f=h["".concat(d,".").concat(u)]||h[u]||p[u]||a;return r?n.createElement(f,o(o({ref:t},s),{},{components:r})):n.createElement(f,o({ref:t},s))}));function u(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=h;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"}}]);