"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[51004],{3905:(e,r,t)=>{t.d(r,{Zo:()=>s,kt:()=>d});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),p=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},s=function(e){var r=p(e.components);return n.createElement(l.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),f=p(t),d=o,m=f["".concat(l,".").concat(d)]||f[d]||u[d]||i;return t?n.createElement(m,a(a({ref:r},s),{},{components:t})):n.createElement(m,a({ref:r},s))}));function d(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=f;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var p=2;p<i;p++)a[p]=t[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},30165:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var n=t(87462),o=(t(67294),t(3905));const i={description:"Official IOTA Client Library Rust API reference.",image:"/img/logo/iota_mark_light.png",keywords:["api","rust","cargo","crate"]},a="API Reference",c={unversionedId:"libraries/rust/api_reference",id:"libraries/rust/api_reference",title:"API Reference",description:"Official IOTA Client Library Rust API reference.",source:"@site/content/build/iota.rs/develop/documentation/docs/libraries/rust/api_reference.md",sourceDirName:"libraries/rust",slug:"/libraries/rust/api_reference",permalink:"/iota.rs/develop/libraries/rust/api_reference",draft:!1,editUrl:"https://github.com/iotaledger/iota.rs/edit/develop/documentation/content/build/iota.rs/develop/documentation/docs/libraries/rust/api_reference.md",tags:[],version:"current",frontMatter:{description:"Official IOTA Client Library Rust API reference.",image:"/img/logo/iota_mark_light.png",keywords:["api","rust","cargo","crate"]},sidebar:"docs",previous:{title:"How To Get An Output",permalink:"/iota.rs/develop/libraries/rust/how_to/get_output"},next:{title:"Getting Started with Node.js",permalink:"/iota.rs/develop/libraries/nodejs/getting_started"}},l={},p=[],s={toc:p};function u(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},s,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"api-reference"},"API Reference"),(0,o.kt)("p",null,"API reference"),(0,o.kt)("p",null,"You can read the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.rs/iota-client"},"API reference")," here, or generate it yourself."),(0,o.kt)("p",null,"If you'd like to explore the implementation in more depth, the following command generates docs for the whole crate, including private modules:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cargo doc --document-private-items --no-deps --open\n")))}u.isMDXComponent=!0}}]);