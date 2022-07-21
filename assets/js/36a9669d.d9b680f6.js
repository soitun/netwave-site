"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[60128],{69157:function(e,a,t){t.r(a),t.d(a,{assets:function(){return d},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return p}});var n=t(87462),r=t(63366),i=(t(67294),t(3905)),o=["components"],l={image:"/img/integration-services/logo/integration_services.png",description:"The example-7 script creates 2 identities, and later uses them to demonstrate how you can detect if data has been tampered with by validating using the Tangle.",keywords:["how to","channels","authorize channel","subscribe channel","read channel","validate channel data"]},c="Search Channel and Validate Data",s={unversionedId:"examples/java/search-channel-and-validate-data",id:"examples/java/search-channel-and-validate-data",title:"Search Channel and Validate Data",description:"The example-7 script creates 2 identities, and later uses them to demonstrate how you can detect if data has been tampered with by validating using the Tangle.",source:"@site/content/build/integration-services/production/documentation/docs/examples/java/search-channel-and-validate-data.md",sourceDirName:"examples/java",slug:"/examples/java/search-channel-and-validate-data",permalink:"/integration-services/examples/java/search-channel-and-validate-data",draft:!1,editUrl:"https://github.com/iotaledger/integration-services/edit/develop/documentation/content/build/integration-services/production/documentation/docs/examples/java/search-channel-and-validate-data.md",tags:[],version:"current",frontMatter:{image:"/img/integration-services/logo/integration_services.png",description:"The example-7 script creates 2 identities, and later uses them to demonstrate how you can detect if data has been tampered with by validating using the Tangle.",keywords:["how to","channels","authorize channel","subscribe channel","read channel","validate channel data"]},sidebar:"docs",previous:{title:"Authorize Channel",permalink:"/integration-services/examples/java/authorize-to-channel"},next:{title:"Audit Trail GW API Documentation",permalink:"/integration-services/audit_trail_gw_api_reference"}},d={},p=[{value:"Validate Channel&#39;s Data",id:"validate-channels-data",level:2}],u={toc:p};function h(e){var a=e.components,t=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},u,t,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"search-channel-and-validate-data"},"Search Channel and Validate Data"),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/albydeca/iota-is-sdk/blob/main/examples/src/main/java/net/gradbase/examples/SearchChannelAndValidateData.java"},"example-7"),"\nscript is similar to previous example (",(0,i.kt)("a",{parentName:"p",href:"authorize-to-channel"},"Authorize Channel"),") that creates a channel as ",(0,i.kt)("inlineCode",{parentName:"p"},"Owner")," and authorizes a ",(0,i.kt)("inlineCode",{parentName:"p"},"User")," to write on it but:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"Owner")," sends some data on the channel."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"User")," receives data and ",(0,i.kt)("em",{parentName:"li"},"modifies it"),"."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"User")," validates the tampered data. However, the API will recognize that data are not valid by using the Tangle and data signatures (i.e. signatures not match). ")),(0,i.kt)("p",null,"You can run the example with the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"cd /path/to/examples/folder/\nmvn exec:java -Dexec.mainClass=net.gradbase.examples.SearchChannelAndValidateData\n")),(0,i.kt)("h2",{id:"validate-channels-data"},"Validate Channel's Data"),(0,i.kt)("p",null,"Since the signature does not match, ",(0,i.kt)("inlineCode",{parentName:"p"},"results")," is a set of tampered data, so the validation will notify it when running the following script:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"// Now try to validate the manipulated data\nJSONArray validated = userClient.validate(channelAddress, resuts);\n")))}h.isMDXComponent=!0},3905:function(e,a,t){t.d(a,{Zo:function(){return d},kt:function(){return h}});var n=t(67294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=n.createContext({}),s=function(e){var a=n.useContext(c),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},d=function(e){var a=s(e.components);return n.createElement(c.Provider,{value:a},e.children)},p={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=s(t),h=r,m=u["".concat(c,".").concat(h)]||u[h]||p[h]||i;return t?n.createElement(m,o(o({ref:a},d),{},{components:t})):n.createElement(m,o({ref:a},d))}));function h(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=u;var l={};for(var c in a)hasOwnProperty.call(a,c)&&(l[c]=a[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=t[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);