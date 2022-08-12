"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[96587],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return f}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=c(r),f=a,b=p["".concat(l,".").concat(f)]||p[f]||u[f]||o;return r?n.createElement(b,s(s({ref:t},d),{},{components:r})):n.createElement(b,s({ref:t},d))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var c=2;c<o;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},11200:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return u}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),s=["components"],i={},l=void 0,c={unversionedId:"libraries/java/api/BalanceAddressResponse",id:"libraries/java/api/BalanceAddressResponse",title:"BalanceAddressResponse",description:"Response of an address balance request",source:"@site/content/build/iota.rs/production/documentation/docs/libraries/java/api/BalanceAddressResponse.mdx",sourceDirName:"libraries/java/api",slug:"/libraries/java/api/BalanceAddressResponse",permalink:"/iota.rs/libraries/java/api/BalanceAddressResponse",draft:!1,editUrl:"https://github.com/iotaledger/iota.rs/edit/production/documentation/content/build/iota.rs/production/documentation/docs/libraries/java/api/BalanceAddressResponse.mdx",tags:[],version:"current",frontMatter:{}},d={},u=[{value:"addressType(): short",id:"addresstype-short",level:3},{value:"address(): String",id:"address-string",level:3},{value:"balance(): long",id:"balance-long",level:3},{value:"dustAllowed(): boolean",id:"dustallowed-boolean",level:3}],p={toc:u};function f(e){var t=e.components,r=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Response of an address balance request"),(0,o.kt)("h3",{id:"addresstype-short"},"addressType(): short"),(0,o.kt)("p",null,"The type of address"),(0,o.kt)("h3",{id:"address-string"},"address(): String"),(0,o.kt)("p",null,"The address"),(0,o.kt)("h3",{id:"balance-long"},"balance(): long"),(0,o.kt)("p",null,"The balance of this address"),(0,o.kt)("h3",{id:"dustallowed-boolean"},"dustAllowed(): boolean"),(0,o.kt)("p",null,"Wether or not this address allows dust"))}f.isMDXComponent=!0}}]);